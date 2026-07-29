import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useInterview } from '../../interview/hooks/useInterview'
import { useTheme } from '../../landingpage/context/ThemeContext.jsx'
import Menubar from '../../interview/pages/Menubar'
import '../style/history.scss'

function History() {
  const { loading, reports } = useInterview()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()

  return (
    <main className="history-page">
      <Menubar />
      <section className="history-container">
        <header className="history-header">
          <div>
            <h1>History</h1>
            
          </div>
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </header>

        <div className="history-list-wrapper">
          {loading && <p className="history-empty">Loading history...</p>}
          {!loading && reports?.length === 0 && <p className="history-empty">No interview history found.</p>}
          {!loading && reports?.length > 0 && (
            <div className="history-list">
              {reports.map((report) => (
                <article key={report._id} className="history-row" onClick={() => navigate(`/interview/${report._id}`)}>
                  <div className="history-row-main">
                    <h2>{report.title}</h2>
                    <p>{report.matchScore != null ? `Score: ${report.matchScore}` : 'Score unavailable'}</p>
                  </div>
                  <div className="history-row-meta">
                    <span>{new Date(report.createdAt).toLocaleDateString()}</span>
                    <span>{new Date(report.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default History