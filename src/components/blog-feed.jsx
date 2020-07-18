import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby"

export default function BlogFeed () {
    const data = useStaticQuery(query);
    // console.log(data);
    const edges = data.allMarkdownRemark.edges;
    const links = [];
    for ( const [index, value] of edges.entries()) {
        console.log(value.node.fields.slug);
        links.push(
        <li style={{
            fontSize: 50,
            lineHeight: '1.25em'
        }}
        key={index}>
            <Link to={value.node.fields.slug} style={{
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
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`