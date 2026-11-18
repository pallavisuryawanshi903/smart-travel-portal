
import React, { useState } from "react";
import "../styles/Destinations.css";

function Favorites() {

    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem("favorites")) || [];
    });

    const removeFavorite = (id) => {
        const updatedFavorites = favorites.filter(
            (place) => place.id !== id
        );

        setFavorites(updatedFavorites);
        localStorage.setItem(
            "favorites",
            JSON.stringify(updatedFavorites)
        );
    };

    return (
        <div className="destinations-page">

            <section className="destination-hero">
                <h1>My Favorite Destinations ❤️</h1>
                <p>Your saved travel destinations are waiting for you.</p>
            </section>

            <section className="destination-content">

                <div className="destination-heading">
                    <p>YOUR TRAVEL WISHLIST</p>
                    <h2>Saved Destinations</h2>
                </div>

                <div className="destination-list">

                    {favorites.length > 0 ? (
                        favorites.map((place) => (
                            <div className="place-card" key={place.id}>

                                <div className="place-image">
                                    <img src={place.image} alt={place.name} />

                                    <span className="place-rating">
                                        ⭐ {place.rating}
                                    </span>
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

                                        <button
                                            type="button"
                                            onClick={() => removeFavorite(place.id)}
                                        >
                                            Remove ❤️
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-results">
                            <h3>No Favorites Yet! 🤍</h3>
                            <p>Go to Destinations and add your favorite places.</p>
                        </div>
                    )}

                </div>

            </section>

        </div>
    );
}

export default Favorites;
