import React from 'react';

const HowItWorks = () => {
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
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Four simple steps to transform your interview preparation experience.</p>
        </div>

        <div className="steps-grid">
          {steps.map((item, idx) => (
            <div key={idx} className="step-card">
              <div className="step-number">{item.step}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
