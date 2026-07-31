import React, { useState } from "react";
import Navbar from "../landingpage/components/Navbar";
import Footer from "../landingpage/components/Footer";
import "../landingpage/style/landingpage.scss";
import "./Help.scss";

function Help() {
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        description: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:sumanroutmme@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `From: ${formData.email}\n\nProblem Description:\n${formData.description}`
        )}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="landing-page vertical-layout help-page-container">
            <Navbar />
            <main className="main-content flex-center">
                <section className="help-section">
                    <div className="help-header">
                        <h1>How can we <span className="text-gradient">Help</span> you?</h1>
                        <p>Fill out the form below to get in touch with our support team.</p>
                    </div>

                    <div className="help-form-container">
                        <form onSubmit={handleSubmit} className="help-form">
                            <div className="input-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="subject">Problem Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="Briefly describe the issue"
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="description">Problem Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    placeholder="Provide more details about the problem..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary submit-btn">
                                <span>Send Message</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Help;