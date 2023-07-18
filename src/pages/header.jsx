import React from 'react';
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <header id='header'>
            <div className="container">
                <div className="logo">
                    <Link to="/"><h1 className="logo-text">shanto_36</h1></Link>
                </div>
                <nav className='navbar'>
                    <ul>
                        <li><NavLink className="a" to="/">Home</NavLink></li>
                        <li><NavLink className="a" to="/about">About</NavLink></li>
                        <li><NavLink className="a" to="/contact">Contact</NavLink></li>
                        <li><NavLink className="a" to="/blog">Blog</NavLink></li>
                        <li><NavLink className="a" to="/protfolio">Protfolio</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;