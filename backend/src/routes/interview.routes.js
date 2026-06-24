const express= require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const interviewController = require("../controller/interview.controller")
const upload=require("../middlewares/file.middleware")

const interviewRouter=express.Router()

/**
 * @routes post /api/interview
 * @description generatev interview report on the basis of the resume,job description,self description
 * @access private
 */
interviewRouter.post("/",authMiddleware.authUser,upload.single("resume"),interviewController.generateInterViewReportController)

/**
 * @route Get /api/interview/report/:interviewID
 * description get interview report by interviewId,
 * @access private
 */
interviewRouter.get("/report/:interviewId",authMiddleware.authUser,interviewController.getInterviewReportByIdController)

/**
 * @route get/api/interview
 * @description get all interview reports of logged in user
 * @access private
 */
interviewRouter.get("/",authMiddleware.authUser,interviewController.getAllInterviewReportsController)

module.exports=interviewRouter