import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby"

export default function BlogFeed () {
    const data = useStaticQuery(query);
    // console.log(data);
    const edges = data.allMarkdownRemark.edges;
    const links = [];
    for ( const [index, value] of edges.entries()) {
        links.push(
        <li key={index} 
        style={{
            fontSize: 50,
            lineHeight: '1.25em'
        }}>
            <Link to={value.node.frontmatter.path} style={{
                // textDecoration: 'none',
                fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
            }}>
                {value.node.frontmatter.title}
            </Link>
        </li>);
    }
    return (
        <ul style={{
            paddingLeft: `1.5em`    
        }}>
            {links}
        </ul>
    );
}

export const query = graphql`
    query FeedQuery {
        allMarkdownRemark (sort: {fields: [frontmatter___date], order: DESC}) {
            edges {
                node {
                    frontmatter {
                        title,
                        path
                    }
                }
            }
        }
    }
`