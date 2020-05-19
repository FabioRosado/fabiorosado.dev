import React, { useState } from 'react'
import { Link } from 'gatsby'

import Logo from '../images/logo.svg'

const Navigation = () => {
    const [show, setShow] = useState(false)

    return(
        <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">
                <img src={Logo} width="50" height="50" alt="FabioRosado" />
            </Link>
        </div>
        <button className="full-button visible-xs" aria-label="Toggle menu on mobile" onClick={() => setShow(!show)}>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
            <ul className={`${show ? "show" : "hidden"} navigation`}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/#about">About</Link>
                </li>
                <li>
                    <Link to="/writings">Writings</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
            </ul>
        </nav>
)}

export default Navigation