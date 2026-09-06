import { useTheme } from '../landingpage/context/ThemeContext.jsx'
import Menubar from '../interview/pages/Menubar'
import { useAuth } from '../auth/hooks/useAuth'
function Setting() {
    const { theme, toggleTheme } = useTheme()
    const { user: authUser } = useAuth()
    const reportCount = 0
    const avgScore = 0

    return (
        <main className="setting-page">
            <Menubar />
            <section className="setting-container">
                <header className="setting-header">
                    <div>
                        <h1>Setting1</h1>

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
                    <div className="user-info">
                        <p><strong>Name:</strong> {authUser?.username || ''}</p>
                        <p><strong>Email:</strong> {authUser?.email || ''}</p>
                        <p><strong>Reports Generated:</strong> {reportCount}</p>
                        <p><strong>Average Match Score:</strong> {avgScore.toFixed(2)}</p>
                    </div>
                </section>
        </main>
    )
}

export default Setting