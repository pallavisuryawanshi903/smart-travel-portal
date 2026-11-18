
import React from "react";
import "../styles/Home.css";

function Home() {
    const destinations = [
        {
            name: "Bali, Indonesia",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=700",
            description: "Explore beautiful beaches and tropical nature."
        },
        {
            name: "Paris, France",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=700",
            description: "Experience romance, culture and architecture."
        },
        {
            name: "Swiss Alps",
            image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=700",
            description: "Discover mountains and breathtaking landscapes."
        }
    ];

    return (
        <div className="home">

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <p className="hero-tag">✈ YOUR JOURNEY STARTS HERE</p>

                    <h1>
                        Explore The World,
                        <span> Create Memories</span>
                    </h1>

                    <p className="hero-description">
                        Discover amazing destinations and plan your
                        perfect holiday with us.
                    </p>

                    <a href="#destinations" className="explore-btn">
                        Explore Destinations →
                    </a>
                </div>
            </section>

            {/* Search Section */}
            <section className="search-section">
                <h2>Where do you want to go?</h2>
                <p>Find your next unforgettable destination.</p>

                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search your destination..."
                    />
                    <button onClick={() =>
                        document.getElementById("destinations").scrollIntoView({
                            behavior: "smooth"
                        })
                    }>
                        Explore
                    </button>
                </div>
            </section>

            {/* Destinations Section */}
            <section className="destinations" id="destinations">
                <div className="section-heading">
                    <p>DISCOVER NEW PLACES</p>
                    <h2>Popular Destinations</h2>
                    <span>Explore the most beautiful places around the world.</span>
                </div>

                <div className="destination-grid">
                    {destinations.map((place, index) => (
                        <div className="destination-card" key={index}>
                            <img src={place.image} alt={place.name} />

                            <div className="destination-info">
                                <h3>{place.name}</h3>
                                <p>{place.description}</p>
                                <a href="#destinations">Discover More →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call To Action */}
            <section className="travel-cta">
                <h2>Ready for Your Next Adventure?</h2>
                <p>Make your travel dreams come true with us.</p>
                <a href="/packages">Explore Tour Packages →</a>
            </section>

        </div>
    );
}

export default Home;
