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

    <footer className="navbar padding bg-primary">
      <Link className="white-text margin-right" to="/">Home</Link>
      <Link className="white-text margin-right" to="/articles">Articles</Link>
      <Link className="white-text margin-right" to="/projects">Projects</Link>
      <Link className="white-text margin-right" to="/books">Books</Link>
      <Link className="white-text margin-right" to="/cheatsheets">Cheatsheets</Link>
      <Link className="white-text margin-right" to="/contact">Contact</Link>
    </footer>
  </>
)


export default Layout
