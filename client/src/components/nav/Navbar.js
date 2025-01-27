import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Navbar.css";
import { ReactComponent as HamburgerIcon } from "../../assets/images/hamburger-menu.svg";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, logout } = useContext(AuthContext);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    Bookkit
                </Link>

                {/* Hamburger Icon */}
                <div className="navbar-hamburger" onClick={toggleMenu}>
                    <HamburgerIcon
                        className="hamburger-icon"
                        width="100"
                        height="100"
                    />
                </div>

                {/* Navigation Links */}
                <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
                    <li>
                        <Link to="/books">Books</Link>
                    </li>
                    {user ? (
                        <>
                            {user.role === "seller" && (
                                <li>
                                    <Link to="/add-book">Add Book</Link>
                                </li>
                            )}
                            {user.role === "buyer" && (
                                <li>
                                    <Link to="/cart">Cart</Link>
                                </li>
                            )}
                            <li>
                                <button onClick={logout}>Logout</button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/signup">Sign Up</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
