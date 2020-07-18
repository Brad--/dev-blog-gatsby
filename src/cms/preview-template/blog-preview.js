import React from "react"

import { BlogTemplate } from '../../templates/BlogTemplate'

const BlogPreview = ({ entry, widgetFor }) => {
    const content = widgetFor('body')
    return (
        <BlogTemplate content={content}></BlogTemplate>
    )
}

export default BlogPreview;