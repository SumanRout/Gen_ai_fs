import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="badge-tag">
          <span>✨ Next-Gen AI Interview Prep</span>
        </div>

        <h1 className="hero-title">
          Master Your Tech Interviews with <span className="text-gradient">AI-Powered Prep & Live Mocking</span>
        </h1>

        <p className="hero-description">
          Generate custom 1-2 week job preparation roadmaps based on your resume and job description. Take live voice AI mock interviews and receive actionable skill gap reports.
        </p>

        <div className="hero-cta-group">
          <Link to="/register" className="btn btn-primary">
            <span>Start Free Preparation</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>

          <a href="#how-it-works" className="btn btn-secondary">
            <span>See How It Works</span>
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num">94%</span>
            <span className="stat-label">Interview Success Rate</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">1-2 Wks</span>
            <span className="stat-label">Tailored Study Plans</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">10 Mins</span>
            <span className="stat-label">Live AI Voice Interview</span>
          </div>
        </div>
      </div>

      <div className="hero-graphic">
        <div className="preview-card-image-wrapper">
          <img 
            src="https://i.pinimg.com/736x/92/c0/39/92c03948026bab48b43d6ada97f6aed4.jpg" 
            alt="AI Interview & Job Preparation Design Reference" 
            className="hero-reference-img"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
