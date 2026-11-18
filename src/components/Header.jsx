
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
    return (
        <header className="header">
            <div className="logo">
                🌍 Travel<span>Explore</span>
            </div>

            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/destinations">Destinations</Link>
                <Link to="/packages">Packages</Link>
                <Link to="/favorites">Favorites</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;
