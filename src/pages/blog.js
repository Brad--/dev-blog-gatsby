import React from "react";
import Layout from "../components/layout";
import BlogFeed from "../components/blog-feed";
import SEO from "../components/seo";

const BlogPage = () => (
    <Layout>
        <SEO title="Blog Feed"></SEO>
        <BlogFeed></BlogFeed>
    </Layout>
);
export default BlogPage;