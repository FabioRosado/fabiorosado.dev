/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from 'gatsby'

import "../styles/main.css"
import '../../static/css/all.min.css'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false,
      windowWidth: 1240
    }
  }

  toggleMenu = () => this.setState(state => ({showMenu: !state.showMenu}))


  render() {
  return (
    <>
      <nav className="navbar">
      <div className="navbar-brand">
          <Link to="/">
              <img src="logo.svg" width="50" height="50" alt="FabioRosado" />
          </Link>
      </div>
      <button className="full-button visible-xs" id="collapseBtn" type="button" aria-pressed="false" aria-expanded="false" aria-controls="navigation" onClick={this.toggleMenu}>
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
      </button>
      <ul className={`${this.state.showMenu ? "show" : "hidden"} navigation`}>
          <li>
              <Link to="/" aria-label="Link home">Home</Link>
          </li>
          <li>
              <Link to="/#about" aria-label="Link to about me">About</Link>
          </li>
          <li>
            <Link to="/blog" aria-label="Link to blog">Blog</Link>
        </li>
        <li>
          <Link to="/portfolio" aria-label="Link to blog">Portfolio</Link>
        </li>
      </ul>
    </nav>
    {this.props.children}
  </>
  )}
}


export default Layout
