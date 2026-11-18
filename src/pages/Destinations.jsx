
import React, { useState } from "react";
import destinations from "../data/destinations";
import "../styles/Destinations.css";

function Destinations() {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem("favorites")) || [];
    });

    const toggleFavorite = (place) => {
        let updatedFavorites;

        const alreadyFavorite = favorites.some(
            (item) => item.id === place.id
        );

        if (alreadyFavorite) {
            updatedFavorites = favorites.filter(
                (item) => item.id !== place.id
            );
        } else {
            updatedFavorites = [...favorites, place];
        }

        setFavorites(updatedFavorites);
        localStorage.setItem(
            "favorites",
            JSON.stringify(updatedFavorites)
        );
    };

    const filteredDestinations = destinations.filter((place) => {
        const matchesSearch =
            place.name.toLowerCase().includes(search.toLowerCase()) ||
            place.country.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
            category === "All" || place.category === category;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="destinations-page">

            <section className="destination-hero">
                <h1>Explore Beautiful Destinations</h1>
                <p>Discover amazing places and plan your next adventure.</p>
            </section>

            <section className="destination-content">

                <div className="destination-heading">
                    <p>FIND YOUR NEXT ADVENTURE</p>
                    <h2>Popular Destinations</h2>
                </div>

                <div className="destination-controls">

                    <input
                        type="text"
                        placeholder="🔍 Search destination or country..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="All">All Categories</option>
                        <option value="Beach">Beach</option>
                        <option value="City">City</option>
                        <option value="Mountain">Mountain</option>
                    </select>

                </div>

                <div className="destination-list">

                    {filteredDestinations.length > 0 ? (
                        filteredDestinations.map((place) => {

                            const isFavorite = favorites.some(
                                (item) => item.id === place.id
                            );

                            return (
                                <div className="place-card" key={place.id}>

                                    <div className="place-image">
                                        <img src={place.image} alt={place.name} />

                                        <span className="place-rating">
                                            ⭐ {place.rating}
                                        </span>

                                        <button
                                            className="favorite-btn"
                                            type="button"
                                            onClick={() => toggleFavorite(place)}
                                        >
                                            {isFavorite ? "❤️" : "🤍"}
                                        </button>
                                    </div>

                                    <div className="place-details">

                                        <span className="place-category">
                                            {place.category}
                                        </span>

                                        <h3>{place.name}, {place.country}</h3>

                                        <div className="place-meta">
                                            <span>📅 {place.duration}</span>
                                            <span>📍 {place.country}</span>
                                        </div>

                                        <div className="place-bottom">
                                            <div>
                                                <small>Starting from</small>
                                                <h3>₹{place.price.toLocaleString("en-IN")}</h3>
                                            </div>

                                            <button type="button">
                                                Explore More →
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="no-results">
                            <h3>No destinations found!</h3>
                            <p>Try searching with another destination.</p>
                        </div>
                    )}

                </div>

            </section>

        </div>
    );
}

export default Destinations;
