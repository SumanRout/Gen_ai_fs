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

module.exports=interviewRouter