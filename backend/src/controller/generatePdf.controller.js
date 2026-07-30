const puppeteer = require('puppeteer');

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildInterviewReportPdfHtml(report = {}) {
  const mainTitle = 'Interview Analysis Report';
  const subtitle = report.title ? escapeHtml(report.title) : '';
  const matchScore = report.matchScore ?? 0;
  const technicalQuestions = Array.isArray(report.technicalQuestion) ? report.technicalQuestion : [];
  const behavioralQuestions = Array.isArray(report.behavioralQuestion) ? report.behavioralQuestion : [];
  const skillGaps = Array.isArray(report.skillGaps) ? report.skillGaps : [];
  const preparationPlan = Array.isArray(report.preparationPlan) ? report.preparationPlan : [];

  const renderQuestionList = (questions) => {
    if (!questions.length) {
      return '<p class="empty">No questions available for this report yet.</p>';
    }

    return questions.map((question, index) => `
      <div class="card">
        <h3>Q${index + 1}: ${escapeHtml(question.question || '')}</h3>
        <p><strong>Intent:</strong> ${escapeHtml(question.intention || '')}</p>
        <p><strong>Suggested response:</strong> ${escapeHtml(question.answer || '')}</p>
      </div>
    `).join('');
  };

  const renderSkillGaps = () => {
    if (!skillGaps.length) {
      return '<p class="empty">No skill gaps identified.</p>';
    }

    return skillGaps.map((gap) => `
      <div class="card">
        <p><strong>${escapeHtml(gap.skill || '')}</strong></p>
        <p>Severity: ${escapeHtml(gap.severity || '')}</p>
      </div>
    `).join('');
  };

  const renderPlan = () => {
    if (!preparationPlan.length) {
      return '<p class="empty">No preparation plan available.</p>';
    }

    return preparationPlan.map((dayPlan) => `
      <div class="card">
        <h3>Day ${escapeHtml(dayPlan.day || '')}: ${escapeHtml(dayPlan.focus || '')}</h3>
        <ul>
          ${(dayPlan.tasks || []).map((task) => `<li>${escapeHtml(task)}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  };

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <style>
        body { font-family: Arial, sans-serif; color: #1f2937; line-height: 1.5; }
        .page { padding: 24px; }
        .header { border-bottom: 2px solid #2563eb; padding-bottom: 16px; margin-bottom: 20px; }
        .header h1 { margin: 0 0 8px; color: #2563eb; }
        .pill { display: inline-block; padding: 6px 10px; background: #dbeafe; border-radius: 999px; color: #1d4ed8; font-weight: bold; }
        .card { border: 1px solid #e5e7eb; border-radius: 10px; padding: 12px; margin-bottom: 12px; background: #f9fafb; }
        h2 { color: #111827; margin-top: 24px; }
        .empty { color: #6b7280; font-style: italic; }
      </style>
    </head>
    <body>
      <div class="page">
        <div class="header">
          <h1>${mainTitle}</h1>
          ${subtitle ? `<p><strong>${subtitle}</strong></p>` : ''}
          <p class="pill">Match Score: ${matchScore}%</p>
        </div>

        <h2>Skill Gaps</h2>
        ${renderSkillGaps()}

        <h2>Technical Focus</h2>
        ${renderQuestionList(technicalQuestions)}

        <h2>Behavioral Insights</h2>
        ${renderQuestionList(behavioralQuestions)}

        <h2>Preparation Plan</h2>
        ${renderPlan()}
      </div>
    </body>
  </html>`;
}

async function generateInterviewReportPdfBuffer(report = {}) {
  const browser = await puppeteer.launch({ headless: 'new' });

  try {
    const page = await browser.newPage();
    await page.setContent(buildInterviewReportPdfHtml(report), { waitUntil: 'networkidle0' });

    return await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '12mm',
        bottom: '12mm',
        left: '12mm',
        right: '12mm'
      }
    });
  } finally {
    await browser.close();
  }
}

module.exports = {
  buildInterviewReportPdfHtml,
  generateInterviewReportPdfBuffer
};
