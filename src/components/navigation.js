import React, { useState } from 'react'
import { Link } from 'gatsby'

import Logo from '../images/logo.svg'

// const Navigation = () => {
//     const [show, setShow] = useState(false)

//     return(
//         <nav className="navbar">
//         <div className="navbar-brand">
//             <Link to="/">
//                 <img src={Logo} width="50" height="50" alt="FabioRosado" />
//             </Link>
//         </div>
//         <button className="full-button menu-button visible-xs" aria-label="Toggle menu on mobile" onClick={() => setShow(!show)}>
//             <i className="gg-menu-right" />
//         </button>
//             <ul className={`${show ? "navbar-show" : "navbar-hide"} `}>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/#about">About</Link>
//                 </li>
//                 <li>
//                     <Link to="/writings">Writings</Link>
//                 </li>
//                 <li>
//                     <Link to="/portfolio">Portfolio</Link>
//                 </li>
//                 <li>
//                     <Link to="/#contact">Contact</Link>
//                 </li>
//             </ul>
//         </nav>
// )}

const Navigation = () => {
    const [show, setShow] = useState(false)

    return(
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
                <Link className="white-text" to="/#about">About</Link>
                <Link className="white-text" to="/writings">Writings</Link>
                <Link className="white-text" to="/portfolio">Portfolio</Link>
                <Link className="white-text" to="/#contact">Contact</Link>
            </div>
        </nav>
)}

export default Navigation