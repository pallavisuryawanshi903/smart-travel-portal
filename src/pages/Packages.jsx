
import React from "react";
import "../styles/Destinations.css";

const packages = [
    {
        id: 1,
        name: "Bali Adventure",
        location: "Bali, Indonesia",
        duration: "5 Days / 4 Nights",
        price: 25000,
        features: ["Hotel Stay", "Breakfast", "Sightseeing"],
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=700"
    },
    {
        id: 2,
        name: "Paris Romance",
        location: "Paris, France",
        duration: "6 Days / 5 Nights",
        price: 45000,
        features: ["Hotel Stay", "City Tour", "Airport Transfer"],
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=700"
    },
    {
        id: 3,
        name: "Swiss Mountain Escape",
        location: "Switzerland",
        duration: "7 Days / 6 Nights",
        price: 55000,
        features: ["Hotel Stay", "Mountain Tour", "Breakfast"],
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=700"
    }
];

function Packages() {
    return (
        <div className="destinations-page">

            <section className="destination-hero">
                <h1>Explore Our Travel Packages</h1>
                <p>Choose your perfect holiday package and start your journey.</p>
            </section>

            <section className="destination-content">

                <div className="destination-heading">
                    <p>TRAVEL MORE, WORRY LESS</p>
                    <h2>Popular Travel Packages</h2>
                </div>

                <div className="destination-list">

                    {packages.map((item) => (
                        <div className="place-card" key={item.id}>

                            <div className="place-image">
                                <img src={item.image} alt={item.name} />
                            </div>

                            <div className="place-details">

                                <span className="place-category">
                                    Holiday Package
                                </span>

                                <h3>{item.name}</h3>

                                <div className="place-meta">
                                    <span>📍 {item.location}</span>
                                    <span>📅 {item.duration}</span>
                                </div>

                                <h4>Package Includes:</h4>

                                <ul>
                                    {item.features.map((feature, index) => (
                                        <li key={index}>✓ {feature}</li>
                                    ))}
                                </ul>

                                <div className="place-bottom">
                                    <div>
                                        <small>Starting from</small>
                                        <h3>₹{item.price.toLocaleString("en-IN")}</h3>
                                    </div>

                                    <button type="button">
                                        Book Now →
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

            </section>
        </div>
    );
}

export default Packages;
