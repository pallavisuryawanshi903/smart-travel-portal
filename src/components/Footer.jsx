
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-about">
                    <h2>🌍 Travel<span>Explore</span></h2>
                    <p>
                        Discover beautiful destinations, explore new
                        cultures and create unforgettable travel memories.
                        Your next adventure starts with us!
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <Link to="/">Home</Link>
                    <Link to="/destinations">Destinations</Link>
                    <Link to="/packages">Packages</Link>
                    <Link to="/favorites">Favorites</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="footer-destinations">
                    <h3>Popular Places</h3>
                    <p>Bali, Indonesia</p>
                    <p>Paris, France</p>
                    <p>Swiss Alps</p>
                    <p>Dubai, UAE</p>
                    <p>Goa, India</p>
                </div>

                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>📍 Pune, Maharashtra, India</p>
                    <p>📧 travel@explore.com</p>
                    <p>📞 +91 98765 43210</p>

                    <h3 className="follow-title">Follow Us</h3>
                    <div className="social-links">
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">YouTube</a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © 2026 TravelExplore. All Rights Reserved.
                </p>
                <p>Made with ❤️ for Travel Lovers</p>
            </div>

        </footer>
    );
}

export default Footer;
