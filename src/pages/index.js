import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import GitHub from "../components/github"
import EmailHider from "../components/email-hider"

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
      lineHeight: '1.2em'
    }}>
      <div>
        <h1 style={{
          fontSize: '89px'
          }}>
          Hey, I'm Brad
        </h1>
      </div>
      <p>This is my blog. I like software and vegan food, so I hope that's what you're here to read about!</p>
      <p><Link to="/blog">To the blog!</Link></p>
      <p>I also happen to be looking for a job right now. Do you need a Javascript developer? <EmailHider linkText="Shoot me an email"/>, I'd love to talk!</p>
      <div className="icon-row">
        <div className="icon">
          <GitHub/>
        </div>
      </div>
    </div>
    {/*  */}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* Leaf goes here */}
      <p></p>
    </div>
  </div>
)

export default IndexPage
