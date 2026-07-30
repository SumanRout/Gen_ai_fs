const assert = require('assert');
const { buildInterviewReportPdfHtml } = require('../src/controller/generatePdf.controller');

const report = {
  title: 'Frontend Developer',
  matchScore: 92,
  technicalQuestion: [{ question: 'Explain React state', intention: 'Assess component design', answer: 'Use hooks and memoization' }],
  behavioralQuestion: [{ question: 'Tell me about a conflict', intention: 'Assess collaboration', answer: 'Discuss empathy and ownership' }],
  skillGaps: [{ skill: 'System design', severity: 'medium' }],
  preparationPlan: [{ day: 1, focus: 'Review core concepts', tasks: ['Read hooks docs', 'Practice component composition'] }]
};

const html = buildInterviewReportPdfHtml(report);
assert.match(html, /Interview Analysis Report/i);
assert.match(html, /Frontend Developer/i);
assert.match(html, /Technical Focus/i);
assert.match(html, /Day 1/i);
console.log('generatePdf controller test passed');
