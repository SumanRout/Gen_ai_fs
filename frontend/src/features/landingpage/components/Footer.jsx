import React from 'react';

const Footer = () => {
  return (
    <footer className="landing-footer">
      <div className="footer-brand">
        <span>AI Prep<span style={{ color: 'var(--accent-color)' }}>.ai</span></span>
      </div>
      <div className="footer-copyright">
        © {new Date().getFullYear()} AI Prep. All rights reserved. Empowering job seekers everywhere.
      </div>
    </footer>
  );
};

export default Footer;
