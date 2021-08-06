import * as React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import Nav from "./nav"

const Layout = ({ children }) => {
  

  return (
    <>
    <Nav></Nav>
      
      <div
      >
        <main>{children}</main>
        <Footer></Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout