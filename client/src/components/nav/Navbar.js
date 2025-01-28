import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Navbar.css";
import { ReactComponent as ProfileIcon } from "../../assets/images/profile.svg";
import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";
import { ReactComponent as CartIcon } from "../../assets/images/cart.svg";
import SignupSigninModal from "../modal/SignupSigninModal";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cartItems, setCartItems] = useState(2);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dropdownRef = useRef(null);
    const profileIconRef = useRef(null);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            profileIconRef.current &&
            !profileIconRef.current.contains(event.target)
        ) {
            setIsDropdownOpen(false);
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchTerm);
        // You can add the search functionality here (e.g., API call or filter the books)
    };
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const openSignupSigninModal = () => {
        setIsModalOpen(true);
    };
    const closeSignupSigninModal = () => {
        setIsModalOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-left-section">
                    <Link to="/" className="navbar-brand">
                        Bookkit
                    </Link>
                    <ul className="navbar-links">
                        <li>
                            <Link to="/books" className="hover-link">
                                Books
                            </Link>
                        </li>
                        {user?.role === "seller" && (
                            <li>
                                <Link to="/add-book" className="hover-link">
                                    Add Book
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>

                <div className="navbar-right-section">
                    <form className="searchbar" onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search books..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="search-input"
                        />
                        <button type="submit" className="search-button">
                            <div className="search-icon">
                                <SearchIcon />
                            </div>
                        </button>
                    </form>
                    <div
                        className="profile-container"
                        onClick={toggleDropdown}
                        ref={profileIconRef}
                    >
                        <div className="profile-icon">
                            <ProfileIcon />
                        </div>
                        {isDropdownOpen && (
                            <div className="dropdown" ref={dropdownRef}>
                                {isLoggedIn ? (
                                    <>
                                        <div className="dropdown-item">
                                            Profile
                                        </div>
                                        <div
                                            className="dropdown-item"
                                            onClick={logout}
                                        >
                                            Sign out
                                        </div>
                                    </>
                                ) : (
                                    <a
                                        className="dropdown-item"
                                        onClick={openSignupSigninModal}
                                    >
                                        Sign Up / Sign In
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="cart-container">
                        <div className="cart-icon">
                            <CartIcon />
                        </div>
                        <span className="cart-badge">{cartItems}</span>
                    </div>
                </div>
            </div>
            <SignupSigninModal
                isOpen={isModalOpen}
                closeModal={closeSignupSigninModal}
            />
        </nav>
    );
};

export default Navbar;
