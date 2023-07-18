import React from 'react';

function Header() {
    return (
        <header id='header'>
            <div className="container">
                <div className="logo">
                    <h1 className="logo-text">shanto_36</h1>
                </div>
                <nav className='navbar'>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/protfolio">Protfolio</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;