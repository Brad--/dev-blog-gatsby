/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    // return graphql(`
    //     {
    //         allMarkdownRemark {
    //             edges {
    //                 node {
    //                     id
    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `).then((result) => {
    //     console.log('GATSBY NODE results inc' )
    //     // console.log(result)
    //     // console.log(result.data.allMarkdownRemark.edges)
    //     if (result.errors) {
    //         console.error(result.errors);
    //     }

    //     const posts = result.data.allMarkdownRemark.edges

    //     console.log(posts)
    
    //     posts.forEach(( edge ) => {
    //         console.log('edge inc')
    //         console.log(edge)
    //         const id = edge.node.id
    //         console.log('id: ' + id);
    //         createPage({
    //             path: edge.node.fields.slug,
    //             component: path.resolve(`src/templates/BlogTemplate.jsx`),
    //         })
    //     })
    // })

    const result = await graphql(`
    {
        allMarkdownRemark {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `)
    if (result.errors) {
        console.log('gatsby-node.js: error creating pages from markdown')
        console.error(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`src/templates/BlogTemplate.jsx`)
        })
    })
}

exports.onCreateNode = ({ node, actions, getNode}) => {
    const { createNodeField } = actions;
    
    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: 'slug',
            node,
            value
        })
    }
}