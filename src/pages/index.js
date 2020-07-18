import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const IndexPage = () => (
  <div style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1em 1.0875rem 1.45rem`,
      display: 'flex',
      flexDirection: 'row'
    }}>
    <SEO title="Brad's Blog" />
    <div className="intro" style={{
      fontSize: '28px',
      lineHeight: '1em'
    }}>
      <div>
        <h1 style={{
          fontSize: '89px'
          }}>
          Hey, I'm Brad
        </h1>
      </div>
      <p>This is my blog. I like software and vegan food, so I hope that's what you're here to read about!</p>
      <p>
        <Link to="/blog">To the blog!</Link>
      </p>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* Leaf goes here */}
      <p></p>
    </div>
  </div>
)

export default IndexPage
