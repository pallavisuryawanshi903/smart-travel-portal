
import React from "react";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
