import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../../auth/hooks/useAuth';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();

  return (
    <header className="landing-navbar">
      <div className="nav-container">
        <Link to="/" className="brand-logo">
          <div className="logo-icon">AI</div>
          <span>Prep<span className="highlight">.ai</span></span>
        </Link>

        <ul className="nav-links">
          <li><a href="/home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><Link to="/interview/demo">Resume report</Link></li>
        </ul>

        <div className="nav-actions">
          {/* Dark / Light Mode Toggle Button with Sun/Moon FontAwesome-style SVG icons */}
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <>
                {/* Sun icon for switching to light mode */}
                <img src="/src/assets/Light_mode.png" alt="light Mode" />
                <span>Light</span>
              </>
            ) : (
              <>
                {/* Moon icon for switching to dark mode */}
                <img src="/src/assets/Dark_mode_button.png" alt="dark Mode" />

                <span>Dark</span>
              </>
            )}
          </button>

          {/* Login Button with arrow-right-to-bracket icon */}
          {!user && (
            <Link to="/login" className="btn btn-text">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
              <span>Login</span>
            </Link>
          )}

          {/* Register Button */}
          {!user && (
            <Link to="/register" className="btn btn-primary">
              <span>Get Started</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
