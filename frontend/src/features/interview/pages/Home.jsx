import React, { useState, useRef } from 'react'
import '../style/home.scss'
import { useInterview } from '../hooks/useInterview'
import { useNavigate, Link } from 'react-router-dom'
import { useTheme } from '../../landingpage/context/ThemeContext.jsx'
import Menubar from './Menubar'
const Home = () => {
    const [fileName, setFileName] = useState("")
    const { loading, generateReport } = useInterview()
    const { theme, toggleTheme } = useTheme()
    const [jobDescription, setJobDescription] = useState("")
    const [selfDescription, setSelfDescription] = useState("")

    const resumeInputRef = useRef()
    const navigate = useNavigate()

    const handleGenerateReport = async () => {
        const resumeFile = resumeInputRef.current.files[0]

        if (!resumeFile) {
            alert("Please upload your resume before generating the report.")
            return
        }

        if (!jobDescription.trim() || !selfDescription.trim()) {
            alert("Please fill in both the job description and self description.")
            return
        }

        const data = await generateReport({ jobDescription, selfDescription, resumeFile })
        if (data?._id) {
            navigate(`/interview/${data._id}`)
        }
    }

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name)
        } else {
            setFileName("")
        }
    }


    return (
        <main className='home'>
            <Menubar></Menubar>
            
            <div className="home-container">
                <header className="home-header">
                    <h1>AI Interview Prep</h1>
                    <button
                        type="button"
                        className="theme-toggle-btn"
                        onClick={toggleTheme}
                        title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
                        aria-label="Toggle color mode"
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
                    <p>Upload your resume and the target job description to generate your interview report.</p>
                </header>

                <div className="interview-input-group">
                    <div className='left'>
                        <div className="input-field">
                            <label htmlFor="jobDescription">Job Description</label>
                            <textarea
                                onChange={(e) => {
                                    setJobDescription(e.target.value)
                                }}
                                name="jobDescription"
                                id="jobDescription"
                                placeholder="Paste the job description here..."
                            ></textarea>
                        </div>
                    </div>

                    <div className='right'>
                        <div className="input-field file-upload-field">
                            <span className="field-title">Resume</span>
                            <label htmlFor="resume" className="file-label">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="upload-icon">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="17 8 12 3 7 8" />
                                    <line x1="12" y1="3" x2="12" y2="15" />
                                </svg>
                                <span>{fileName ? fileName : "Upload Resume (PDF)"}</span>
                            </label>
                            <input
                                ref={resumeInputRef}
                                type="file"
                                name="resume"
                                id="resume"
                                accept='.pdf'
                                onChange={handleFileChange}
                            />
                        </div>

                        <div className="input-field">
                            <label htmlFor="selfDescription">Self Description</label>
                            <textarea
                                onChange={(e) => { setSelfDescription(e.target.value) }}
                                name="selfDescription"
                                id="selfDescription"
                                placeholder="Enter self description here..."
                            ></textarea>
                        </div>

                        <button
                            onClick={handleGenerateReport}
                            className='button generate-btn'
                            disabled={loading}>
                            {loading ? (
                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span className="loading-spinner" style={{ width: '16px', height: '16px', borderWidth: '2px' }} />
                                    Generating...
                                </span>
                            ) : (
                                'Generate Report'
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home
