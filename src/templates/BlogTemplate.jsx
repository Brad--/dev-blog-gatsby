import React from "react";
import { graphql } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo"

export default function BlogTemplate({ data }) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    return (
        <Layout>
            <SEO title={frontmatter.title}></SEO>
            <div className="blog-post">
                <h1 style={{
                    fontSize: 67,
                    paddingBottom: '0',
                    marginBottom: 0
                }}>{frontmatter.title}</h1>
                <h2 style= {{
                    fontSize: 21,
                    paddingLeft: '.5em'
                }}>{frontmatter.date}</h2>
                <div className="blog-post--content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`