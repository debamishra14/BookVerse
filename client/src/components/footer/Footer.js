import React from "react";
import "./Footer.css"; // Import the CSS for the footer

const Footer = () => {
    const shopNowLinks = [
        { key: "books", name: "Books", href: "/" },
        { key: "mystery_box", name: "Mystery Box", href: "/" },
        { key: "gifting", name: "Gifting", href: "/" },
    ];
    const exploreLinks = [
        { key: "brandstory", name: "Brand Story", href: "/" },
        { key: "aboutus", name: "About Us", href: "/" },
        { key: "contactus", name: "Contact Us", href: "/" },
    ];
    const policyLinks = [
        { key: "priovacy", name: "Privacy Policy", href: "/" },
        { key: "shipping_return", name: "Shipping & Returns", href: "/" },
        { key: "Pay&refund", name: "Payments & Refunds", href: "/" },
        { key: "tc", name: "T&C", href: "/" },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer row">
            <div className="footer-content row">
                <div className="footer-info column">
                    <h1>Bookkit</h1>
                    <div className="footer-social"></div>
                </div>
                <div className="footer-links column">
                    <h3>Explore</h3>
                    <ul>
                        {exploreLinks.map((link) => (
                            <li key={link.key}>
                                <a href={link.href} className="hover-link">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-books column">
                    <h3>Shop Now</h3>
                    <ul>
                        {shopNowLinks.map((link) => (
                            <li key={link.key}>
                                <a href={link.href} className="hover-link">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-policies column">
                    <h3>Policies</h3>
                    <ul>
                        {policyLinks.map((link) => (
                            <li key={link.key}>
                                <a href={link.href} className="hover-link">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    @{currentYear} Copyright | All Rights Reserved, Bookit.com
                </p>
            </div>
        </footer>
    );
};

export default Footer;
