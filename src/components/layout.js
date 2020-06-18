/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"

import "../styles/main.css"
import '../../static/css/all.min.css'


import Navigation from "../components/navigation"


const Layout = (props) => (
  <>
  <Navigation />
  {props.children}

  <footer className="navbar padding-bottom">
    <Link className="white-text margin-right" to="/">Home</Link>
    <Link className="white-text margin-right" to="/#about">About</Link>
    <Link className="white-text margin-right" to="/writings">Writings</Link>
    <Link className="white-text margin-right" to="/portfolio">Portfolio</Link>
    <Link className="white-text margin-right" to="/#contact">Contact</Link>
  </footer>
  </>
)


export default Layout
