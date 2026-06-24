import React, { useState } from 'react'
import '../style/home.scss'

const Home = () => {
    const [fileName, setFileName] = useState("")

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name)
        } else {
            setFileName("")
        }
    }

    return (
        <main className='home'>
            <div className="home-container">
                <header className="home-header">
                    <h1>AI Interview Prep</h1>
                    <p>Upload your resume and the target job description to generate your interview report.</p>
                </header>

                <div className="interview-input-group">
                    <div className='left'>
                        <div className="input-field">
                            <label htmlFor="jobDescription">Job Description</label>
                            <textarea
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
                                name="selfDescription"
                                id="selfDescription"
                                placeholder="Enter self description here..."
                            ></textarea>
                        </div>

                        <button className='button generate-btn'>Generate Report</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home
