import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RevealOnScroll from './components/RevealOnScroll';
import './style/landingpage.scss';
// import {login} from '../../'

function LandingPage() {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      ),
      title: "1-2 Week Job Preparation Plan",
      description: "Upload your resume, target job description, and self-description. AI automatically builds a daily day-by-day roadmap targeting your exact skill gaps."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
      ),
      title: "Live 10-Minute AI Voice Interview",
      description: "Experience realistic mock interviews led by an AI agent that listens to your voice answers, asks relevant follow-up questions, and checks your communication skills."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
      title: "In-Depth Skill Gap & Scorecard Reports",
      description: "Receive instant performance metrics analyzing technical accuracy, subject knowledge, behavioral responses, and high-priority areas for improvement."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      title: "Resume & JD Matching",
      description: "Intelligent AI parsing evaluates how your background aligns with specific job descriptions, highlighting key missing keywords and requirements."
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Input Job Details & Resume",
      description: "Paste your target job description and upload your resume along with your experience and education details."
    },
    {
      step: "02",
      title: "Get Customized Preparation Plan",
      description: "AI analyzes your qualifications against job requirements and generates a step-by-step 1 or 2 week preparation roadmap."
    },
    {
      step: "03",
      title: "Take 10-Min Live AI Mock Interview",
      description: "Join a interactive voice interview. The AI asks tailored technical and behavioral questions and listens to your spoken answers."
    },
    {
      step: "04",
      title: "Review Detailed Scorecard Report",
      description: "Receive instant ratings on communication, technical knowledge, subject mastery, and behavioral skills with suggested answer strategies."
    }
  ];

  return (
    <div className="landing-page vertical-layout">
      <Navbar />
      
      <main className="main-content">
        <RevealOnScroll>
          <section className="vertical-hero">
            <div className="badge-tag">
              <span>✨ Next-Gen AI Interview Prep</span>
            </div>
            <h1 className="hero-title">
              Master Your Tech Interviews with <span className="text-gradient">AI-Powered Prep &amp; Live Mocking</span>
            </h1>
            <p className="hero-description">
              Generate custom 1-2 week job preparation roadmaps based on your resume and job description. Take live voice AI mock interviews and receive actionable skill gap reports.
            </p>
            <div className="hero-cta-group">
              <Link to="/register" className="btn btn-primary">
                Get Started Free
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <a href="#how-it-works" className="btn btn-secondary">
                See How It Works
              </a>
            </div>
            <div className="hero-stats-row">
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
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="vertical-features">
            <div className="section-header">
              <span className="section-subtitle">Core Capabilities</span>
              <h2>Designed to Make You Interview Ready</h2>
              <p>Everything you need to boost confidence, master technical questions, and land your dream job offer.</p>
            </div>
            <div className="features-stack">
              {features.map((feature, idx) => (
                <div key={idx} className="feature-card full-width">
                  <div className="icon-box">{feature.icon}</div>
                  <div className="feature-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section id="how-it-works" className="how-it-works-section">
            <div className="section-header">
              <h2>How It Works</h2>
              <p>Four simple steps to transform your interview preparation experience.</p>
            </div>
            <div className="steps-stack">
              {steps.map((item, idx) => (
                <div key={idx} className="step-card full-width">
                  <div className="step-number">{item.step}</div>
                  <div className="step-text">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </RevealOnScroll>


        <RevealOnScroll>
          <section className="esc-section">
            <div className="features-showcase-banner">
              <div className="showcase-img-container">
                <img 
                  src="https://i.pinimg.com/736x/93/e4/2e/93e42e88d31e92e59c1e31200a79354a.jpg" 
                  alt="TIME TO Esc THE OLD WAY OF WORKING" 
                />
              </div>
            </div>
          </section>
        </RevealOnScroll>

      </main>
      
      <RevealOnScroll>
        <Footer />
      </RevealOnScroll>
    </div>
  );
}

export default LandingPage;