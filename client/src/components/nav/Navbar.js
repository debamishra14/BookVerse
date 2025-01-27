// src/components/Navbar.js
import React, { useState } from "react";
import "./Navbar.css"; // Importing the CSS file for styling

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <div className="logo">
                <a href="/">MyLogo</a>
            </div>
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/services">Services</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
            <div className="hamburger" onClick={handleMenuToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;
