import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import GitHub from "./github"
import HomeIcon from "./home-icon"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{
          fontSize: "12px"
          }}>
            <div style={{
              display: `flex`,
              flexDirection: `row`,
              justifyItems: `center`
            }}>
              <GitHub color="lilac"/>
              <HomeIcon/>
            </div>
            <span>Made With &lt;3 © {new Date().getFullYear()}</span>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
