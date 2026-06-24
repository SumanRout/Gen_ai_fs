import React, { useState } from 'react'
import '../style/interview.scss'

const MOCK_DATA = {
  "matchScore": 88,
  "technicalQuestion": [
    {
      "question": "Explain the architecture and key components of your CyberBully detection system. How did you choose between Naïve Bayes, Logistic Regression, Random Forest, and Linear SVM, and what made Linear SVM perform best?",
      "intention": "To assess understanding of NLP, machine learning concepts, model evaluation, and decision-making in project development.",
      "answer": "Describe the data preprocessing steps (TF-IDF vectorization, bigram features), the role of sublinear scaling. Discuss the characteristics of each classifier and why Linear SVM's ability to handle high-dimensional sparse data (like TF-IDF features) and its efficiency with large datasets often makes it effective for text classification. Mention metrics like accuracy, precision, recall, and F1-score, and why macro F1-score was important for outlier dampening.",
      "_id": "6a3b50684722ad24d7a28b05"
    },
    {
      "question": "Describe your experience integrating a third-party REST API in your Currency Converter Web Application. What challenges did you face, and how did you handle them?",
      "intention": "To evaluate experience with front-end development, API consumption, error handling, and problem-solving in a web context.",
      "answer": "Explain the process of making API calls (e.g., using `fetch` or `axios`), handling asynchronous operations (promises/async-await), and parsing the JSON response. Discuss challenges like API rate limits, error handling (network errors, invalid responses), data formatting inconsistencies, and ensuring UI updates correctly with fetched data. Mention how React hooks (e.g., `useState`, `useEffect`) were used for managing state and side effects.",
      "_id": "6a3b50684722ad24d7a28b06"
    },
    {
      "question": "Given your experience with DSA and LeetCode, explain how you would approach designing a data structure to efficiently store and retrieve historical currency exchange rates for various pairs, supporting queries like 'what was the rate between USD and EUR on 2023-01-15?'",
      "intention": "To assess DSA knowledge, ability to apply theoretical concepts to practical problems, and thinking about efficiency/scalability.",
      "answer": "Propose a data structure, e.g., a hash map where keys are currency pairs (e.g., 'USDEUR') and values are another data structure, perhaps a sorted list or a TreeMap (or dictionary with sorted keys) mapping dates to exchange rates. Discuss time complexity for insertion and retrieval. Mention considerations for storage space and how to handle missing data or date ranges.",
      "_id": "6a3b50684722ad24d7a28b07"
    },
    {
      "question": "You've listed MySQL as a programming language/skill. Describe a scenario where you've used MySQL in a project, specifically focusing on how you designed the database schema and optimized queries for performance.",
      "intention": "To gauge practical database experience beyond just listing the skill, including schema design and performance considerations.",
      "answer": "Although no specific project mentions MySQL, the candidate listed it. They should be prepared to elaborate on a hypothetical scenario or a simple database for one of their projects (e.g., storing user data/preferences for the currency converter, or metadata for the cyberbullying system). Focus on table design, primary/foreign keys, indexing strategies (e.g., for frequently queried columns), and basic query optimization techniques (e.g., EXPLAIN keyword, avoiding SELECT *, using JOINs efficiently).",
      "_id": "6a3b50684722ad24d7a28b08"
    }
  ],
  "behavioralQuestion": [
    {
      "question": "The job requires a minimum of 80% throughout X, XII, and Graduation. Your XII percentage is 79.5%. How do you address this slight shortfall, and what steps do you take when you encounter a requirement you don't fully meet?",
      "intention": "To assess honesty, self-awareness, problem-solving approach to personal challenges, and ability to address feedback/criticism.",
      "answer": "Acknowledge the requirement and the specific percentage. Explain any context around the XII results without making excuses. Highlight strengths in other areas (e.g., strong B.Tech CGPA, relevant projects, consistent problem-solving, LeetCode rank) to demonstrate overall capability and continuous improvement. Emphasize a proactive attitude towards learning and overcoming challenges, and express enthusiasm for the role despite this minor gap.",
      "_id": "6a3b50684722ad24d7a28b09"
    },
    {
      "question": "Tell me about a time you had to learn a new technology or framework quickly for a project. How did you approach the learning process, and what was the outcome?",
      "intention": "To evaluate adaptability, self-learning capability, resourcefulness, and ability to meet project deadlines with new tools.",
      "answer": "Candidate can refer to learning React.js for the Currency Converter or Scikit-learn for the Cyberbullying project. Describe the steps: understanding documentation, tutorials, hands-on practice, breaking down the problem, seeking help if needed. Discuss how they applied the new knowledge and the successful completion of the project as the outcome.",
      "_id": "6a3b50684722ad24d7a28b0a"
    },
    {
      "question": "The role requires strong communication skills, both verbal and written, and is a work-from-office position in Delhi NCR. How do you ensure effective communication in a team setting, and are you comfortable with relocating and working from the office?",
      "intention": "To assess communication style, teamwork fit, and logistical comfort with job requirements.",
      "answer": "For communication, describe active listening, clear articulation of ideas, asking clarifying questions, providing concise updates, and being open to feedback. Mention any experience in group projects or presentations. Confirm willingness to relocate to Delhi NCR and commitment to a work-from-office environment, stating an understanding of its benefits for team collaboration.",
      "_id": "6a3b50684722ad24d7a28b0b"
    },
    {
      "question": "You maintain a 160-day streak of solving problems and posting on X (formerly Twitter). What motivates this consistent effort, and how do you ensure the quality of your solutions while maintaining such a streak?",
      "intention": "To understand self-motivation, discipline, commitment to continuous learning, and attention to detail.",
      "answer": "Talk about the passion for problem-solving, the desire for continuous improvement, and the satisfaction of mastering new concepts. Explain that the streak is a motivator but quality is paramount. Mention strategies like understanding the problem thoroughly, considering multiple approaches, testing solutions, and reviewing code before posting. Emphasize learning from mistakes and peer feedback.",
      "_id": "6a3b50684722ad24d7a28b0c"
    }
  ],
  "skillGaps": [
    {
      "skill": "Academic performance (specifically 12th grade percentage)",
      "severity": "high",
      "_id": "6a3b50684722ad24d7a28d0d"
    },
    {
      "skill": "Strong communication skills (verbal & written)",
      "severity": "medium",
      "_id": "6a3b50684722ad24d7a28d0e"
    },
    {
      "skill": "Willingness to relocate to Delhi NCR / Available to join as per timeline",
      "severity": "low",
      "_id": "6a3b50684722ad24d7a28d0f"
    }
  ],
  "preparationPlan": [
    {
      "day": 1,
      "focus": "Understanding the Role & Resume Deep Dive",
      "tasks": [
        "Review the job description and your resume thoroughly.",
        "Prepare to articulate your project details, technical contributions, and choices clearly.",
        "Identify any potential weak points (like the 12th percentage) and prepare concise, honest responses."
      ],
      "_id": "6a3b50684722ad24d7a28b10"
    },
    {
      "day": 2,
      "focus": "Data Structures & Algorithms (DSA) Review",
      "tasks": [
        "Focus on common interview DSA topics: Arrays, Linked Lists, Trees, Graphs, Hash Maps, Sorting, and Searching algorithms.",
        "Practice problem-solving on platforms like LeetCode or GeeksForGeeks, especially on medium-difficulty questions."
      ],
      "_id": "6a3b50684722ad24d7a28b11"
    },
    {
      "day": 3,
      "focus": "Python & Machine Learning Concepts",
      "tasks": [
        "Review Python fundamentals, data handling libraries (NumPy, Pandas), and core ML concepts relevant to your CyberBully project (TF-IDF, classification algorithms: Naive Bayes, Logistic Regression, SVM, Random Forest, model evaluation metrics).",
        "Be ready to explain the project's technical depth."
      ],
      "_id": "6a3b50684722ad24d7a28b12"
    },
    {
      "day": 4,
      "focus": "JavaScript & React Fundamentals",
      "tasks": [
        "Brush up on modern JavaScript features (ES6+), React core concepts (components, props, state, hooks - useState, useEffect), and API integration using `fetch` or `axios`.",
        "Understand component lifecycle and basic state management."
      ],
      "_id": "6a3b50684722ad24d7a28b13"
    },
    {
      "day": 5,
      "focus": "Database Concepts & System Design Basics",
      "tasks": [
        "Review SQL queries, database schema design principles, indexing, and basic query optimization.",
        "For system design, understand fundamental concepts like client-server architecture, APIs, and scalability (at a high level for an intern)."
      ],
      "_id": "6a3b50684722ad24d7a28b14"
    },
    {
      "day": 6,
      "focus": "Behavioral & Communication Skills",
      "tasks": [
        "Practice answering common behavioral questions using the STAR method (Situation, Task, Action, Result).",
        "Prepare your responses for questions about teamwork, challenges, learning new things, and especially how you address the 12th-grade percentage.",
        "Practice articulating your thoughts clearly and concisely."
      ],
      "_id": "6a3b50684722ad24d7a28b15"
    },
    {
      "day": 7,
      "focus": "Mock Interview & Logistics",
      "tasks": [
        "Conduct a mock interview (self-recorded or with a peer) to refine answers and build confidence.",
        "Confirm your understanding of the relocation and work-from-office requirements.",
        "Prepare any questions you have for the interviewer about the role, team, or company."
      ],
      "_id": "6a3b50684722ad24d7a28b16"
    }
  ]
}

function Interview() {
  const [data] = useState(MOCK_DATA)
  const [activeTab, setActiveTab] = useState('technical') // 'technical' | 'behavioral' | 'plan'
  const [expandedQuestion, setExpandedQuestion] = useState(null)
  const [activeDay, setActiveDay] = useState(1)

  const toggleQuestion = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id)
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
              <span className="meta-tag date">Generated Just Now</span>
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
