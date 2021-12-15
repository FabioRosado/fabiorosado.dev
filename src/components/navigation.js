import React, { useState } from 'react'
import { Link } from 'gatsby'

import Logo from '../images/logo.svg'

const Navigation = () => {
    const [show, setShow] = useState(false)

    return (
        <nav className="margin-top">
            <div>
                <Link to="/">
                    <img src={Logo} width="50" height="50" alt="FabioRosado" />
                </Link>
            </div>
            <button className="full-button menu-button visible-xs" aria-label="Toggle menu on mobile" onClick={() => setShow(!show)}>
                <i className="gg-menu-right" />
            </button>
            <div className={`${show ? "navbar navbar-show" : " navbar navbar-hide"} `}>
                <button className="menu-button full-button" aria-label="Toggle menu on/off" onClick={() => setShow(!show)}>
                    <i className="fas fa-times" />
                </button>

                <Link className="white-text" to="/">Home</Link>
                <Link className="white-text" to="/about">About</Link>
                <Link className="white-text" to="/articles">Articles</Link>
                <Link className="white-text" to="/portfolio">Portfolio</Link>
                <Link className="white-text" to="/contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Navigation