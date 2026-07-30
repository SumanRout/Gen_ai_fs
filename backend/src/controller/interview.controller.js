const pdfParse = require("pdf-parse")
const { generateInterviewReport } = require("../services/ai.services")
const interviewReportModel = require("../models/interviewReport.model")
const { generateInterviewReportPdfBuffer } = require("./generatePdf.controller")


/**
 * @description Controller to generate interview report based on user self description, resume and job description.
 */


async function generateInterViewReportController(req, res) {
    try {
        // 1. Validate all inputs
        if (!req.file) {
            return res.status(400).json({ error: "Resume file is required" });
        }
        
        const { selfDescription, jobDescription } = req.body;
        if (!selfDescription || !jobDescription) {
            return res.status(400).json({ error: "Self description and job description are required" });
        }

        // 2. Standard usage of pdf-parse to extract text from the buffer
        const pdfData = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
        const resumeText = pdfData.text; 

        // 3. Call AI
        const interViewReportByAi = await generateInterviewReport({
            resume: resumeText,
            selfDescription,
            jobDescription
        });
        //console.log(interViewReportByAi)
        const { title,matchScore, technicalQuestion, behavioralQuestion, skillGaps, preparationPlan } = interViewReportByAi;
        // 4. Save to Database
        const interviewReport = await interviewReportModel.create({
            user: req.user.id,
            title,
            resume: resumeText,
            selfDescription,
            jobDescription,
            matchScore,
            technicalQuestion,
            behavioralQuestion,
            skillGaps,
            preparationPlan
            
        });

        // 5. Send Response
        return res.status(201).json({
            message: "Interview report generated successfully.",
            interviewReport
        });

    } catch (err) {
        console.error("Controller Error:", err); // Good to log this for debugging
        return res.status(500).json({ error: err.message });
    }
}
/**
 * @description Controller to get interview report by interviewId.
 */
async function getInterviewReportByIdController(req, res) {

    const { interviewId } = req.params

    const interviewReport = await interviewReportModel.findOne({ _id: interviewId, user: req.user.id })

    if (!interviewReport) {
        return res.status(404).json({
            message: "Interview report not found."
        })
    }

    res.status(200).json({
        message: "Interview report fetched successfully.",
        interviewReport
    })
}


/** 
 * @description Controller to get all interview reports of logged in user.
 */
async function getAllInterviewReportsController(req, res) {
    try{

    const interviewReports = await interviewReportModel.find({ user: req.user.id }).sort({ createdAt: -1 })
    return res.status(200).json({
        message: "Interview reports fetched successfully.",
        interviewReports
    })
    }
    catch(err){
        return res.status(404).json({
            message:"Report not Found "
        })

    }

     
}


/**
 * @description Controller to generate report PDF based on user self description, resume and job description.
 */
async function generateResumePdfController(req, res) {
    try {
        const { interviewReportId } = req.params

        const interviewReport = await interviewReportModel.findOne({ _id: interviewReportId, user: req.user.id })

        if (!interviewReport) {
            return res.status(404).json({
                message: "Interview report not found."
            })
        }

        const pdfBuffer = await generateInterviewReportPdfBuffer(interviewReport)

        res.set({
            "Content-Type": "application/pdf",
            "Content-Disposition": `inline; filename=report_${interviewReportId}.pdf`
        })

        return res.send(pdfBuffer)
    } catch (error) {
        console.error("PDF generation failed:", error)
        return res.status(500).json({ error: error.message })
    }
}

module.exports = { generateInterViewReportController, getInterviewReportByIdController, getAllInterviewReportsController, generateResumePdfController }