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
        console.error(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const id = node.id
        createPage({
            path: node.fields.slug,
            component: path.resolve(`src/templates/BlogTemplate.jsx`),
            context: {
                id
            }
        })
    });
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