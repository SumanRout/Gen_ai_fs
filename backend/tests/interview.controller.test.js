const assert = require('assert');
const interviewController = require('../src/controller/interview.controller');
const interviewReportModel = require('../src/models/interviewReport.model');

async function run() {
  const originalFindOne = interviewReportModel.findOne;
  const originalFindById = interviewReportModel.findById;

  try {
    let calledWith = null;
    interviewReportModel.findOne = async function (query) {
      calledWith = query;
      return null;
    };

    const req = { params: { interviewId: 'report-123' }, user: { id: 'user-1' } };
    const res = {
      statusCode: null,
      body: null,
      status(code) { this.statusCode = code; return this; },
      json(payload) { this.body = payload; return this; },
    };

    await interviewController.getInterviewReportByIdController(req, res);

    assert.strictEqual(res.statusCode, 404);
    assert.deepStrictEqual(calledWith, { _id: 'report-123', user: 'user-1' });
  } finally {
    interviewReportModel.findOne = originalFindOne;
    interviewReportModel.findById = originalFindById;
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
