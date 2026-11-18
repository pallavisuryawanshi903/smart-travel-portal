
import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Thank you! Your message has been submitted.");

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    };

    return (
        <div className="destinations-page">

            <section className="destination-content">

                <div className="destination-heading">
                    <p>GET IN TOUCH</p>
                    <h2>Send Us a Message</h2>
                </div>

                <div className="contact-section">

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Write your message..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                        />

                        <button type="submit">Send Message</button>

                    </form>

                </div>

            </section>

        </div>
    );
}

export default Contact;
