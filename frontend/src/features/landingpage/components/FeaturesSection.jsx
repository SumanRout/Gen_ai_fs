import React from 'react';

const FeaturesSection = () => {
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

  return (
    <section id="features" className="features-section">
      <div className="section-header">
        <span className="section-subtitle">Core Capabilities</span>
        <h2>Designed to Make You Interview Ready</h2>
        <p>Everything you need to boost confidence, master technical questions, and land your dream job offer.</p>
      </div>

      <div className="features-grid">
        {features.map((feature, idx) => (
          <div key={idx} className="feature-card">
            <div className="icon-box">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="features-showcase-banner" style={{ marginTop: '3.5rem', display: 'flex', justifyContent: 'center' }}>
        <div className="showcase-img-container" style={{ borderRadius: '1rem', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-card)', maxWidth: '900px', width: '100%' }}>
          <img 
            src="https://i.pinimg.com/736x/93/e4/2e/93e42e88d31e92e59c1e31200a79354a.jpg" 
            alt="AI Interview & Roadmap Design Reference" 
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
