import { useInterview } from "../hooks/useInterview"
import React from "react";
import { useState } from "react";
import "../style/interview.scss"

function Interview() {
  const { loading, report } = useInterview()
  const [activeTab, setActiveTab] = useState('technical') // 'technical' | 'behavioral' | 'plan'
  const [expandedQuestion, setExpandedQuestion] = useState(null)
  const [activeDay, setActiveDay] = useState(1)

  const data = report || {
    matchScore: 0,
    technicalQuestion: [],
    behavioralQuestion: [],
    skillGaps: [],
    preparationPlan: []
  }

  const toggleQuestion = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id)
  }

  if (loading && !report) {
    return (
      <main className="interview-page">
        <div className="interview-container" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div className="loading-spinner" style={{ margin: '0 auto 1rem' }} />
            <p>Loading your report...</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="interview-page">
      <div className="interview-container">

        {/* Scorecard Header */}
        <section className="report-header-card">
          <div className="score-ring-container">
            <div className="score-ring">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" className="ring-bg" />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="ring-progress"
                  strokeDasharray="264"
                  strokeDashoffset={264 - (264 * data.matchScore) / 100}
                />
              </svg>
              <div className="score-value">
                <span className="number">{data.matchScore}%</span>
                <span className="label">Match</span>
              </div>
            </div>
          </div>
          <div className="header-text">
            <h1>Interview Analysis Report</h1>
            <p className="subtitle">AI-assisted evaluation of credentials, project alignments, and key preparation insights.</p>
            <div className="meta-tags">
              <span className="meta-tag">Job Role Match</span>
              <span className="meta-tag date">{report?.createdAt ? new Date(report.createdAt).toLocaleString() : 'Generated Just Now'}</span>
            </div>
          </div>
        </section>

        <div className="report-body">
          {/* Skill Gaps Card */}
          <section className="report-section gaps-section">
            <h2>Identified Skill Gaps & Shortfalls</h2>
            <div className="gaps-list">
              {data.skillGaps.map((gap) => (
                <div key={gap._id} className={`gap-card severity-${gap.severity}`}>
                  <div className="gap-info">
                    <span className="severity-badge">{gap.severity} severity</span>
                    <p className="gap-title">{gap.skill}</p>
                  </div>
                  <div className="gap-indicator" />
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Content Hub (Tabs) */}
          <section className="report-section content-hub">
            <nav className="hub-nav">
              <button
                className={`nav-btn ${activeTab === 'technical' ? 'active' : ''}`}
                onClick={() => setActiveTab('technical')}
              >
                Technical Focus
              </button>
              <button
                className={`nav-btn ${activeTab === 'behavioral' ? 'active' : ''}`}
                onClick={() => setActiveTab('behavioral')}
              >
                Behavioral Insights
              </button>
              <button
                className={`nav-btn ${activeTab === 'plan' ? 'active' : ''}`}
                onClick={() => setActiveTab('plan')}
              >
                7-Day Prep Plan
              </button>
            </nav>

            <div className="hub-content">
              {/* Technical / Behavioral Questions list */}
              {(activeTab === 'technical' || activeTab === 'behavioral') && (
                <div className="questions-container">
                  <p className="section-intro">
                    Review customized questions targeting expected topics, background projects, and profile points. Click to reveal intention and suggested answers.
                  </p>
                  <div className="questions-list">
                    {(activeTab === 'technical' ? data.technicalQuestion : data.behavioralQuestion).map((q, idx) => {
                      const isExpanded = expandedQuestion === q._id
                      return (
                        <div key={q._id} className={`question-accordion-card ${isExpanded ? 'open' : ''}`}>
                          <button
                            className="accordion-header"
                            onClick={() => toggleQuestion(q._id)}
                            aria-expanded={isExpanded}
                          >
                            <span className="question-number">Q{idx + 1}</span>
                            <span className="question-text">{q.question}</span>
                            <span className="arrow-icon"></span>
                          </button>
                          {isExpanded && (
                            <div className="accordion-body">
                              <div className="insight-block intention-block">
                                <strong>Evaluation Intent:</strong>
                                <p>{q.intention}</p>
                              </div>
                              <div className="insight-block answer-block">
                                <strong>Suggested Response Strategy:</strong>
                                <p>{q.answer}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* 7-Day prep plan tab */}
              {activeTab === 'plan' && (
                <div className="plan-container">
                  <p className="section-intro">
                    A structured step-by-step roadmap to review skills and address gaps before your interview day.
                  </p>

                  {/* Timeline Days Picker */}
                  <div className="plan-days-timeline">
                    {data.preparationPlan.map((p) => (
                      <button
                        key={p._id}
                        className={`day-timeline-node ${activeDay === p.day ? 'active' : ''}`}
                        onClick={() => setActiveDay(p.day)}
                      >
                        <span className="day-number">D{p.day}</span>
                        <span className="day-label">Day {p.day}</span>
                      </button>
                    ))}
                  </div>

                  {/* Active Day Detail Card */}
                  {data.preparationPlan.filter(p => p.day === activeDay).map((p) => (
                    <div key={p._id} className="day-detail-card">
                      <div className="day-detail-header">
                        <span className="badge">Day {p.day} Focus</span>
                        <h3>{p.focus}</h3>
                      </div>
                      <div className="day-tasks">
                        <ul>
                          {p.tasks.map((task, index) => (
                            <li key={index}>
                              <span className="task-checkbox">✓</span>
                              <span className="task-text">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>

      </div>
    </main>
  )
}

export default Interview
