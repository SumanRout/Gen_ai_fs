const mongoose=require("mongoose")

/**
 * - job description scheman: string
 * - resume text:String
 * 
 * - Self description :String
 * - mathScore: Number
 * -Technical Question:
 *          [{
 *              question:"",
 *              intention:"",
 *              answer:""
 *          }]
 * - Behavioral Question:
 *          [{
 *              question:"",
 *              intention:"",
 *              answer:""
 *          }]
 * - Skill gaps :[{
 *          skill:"",
 *          severity:{type:String,
 *                    enum:["low","medium","high"]
 * }
 * }]
 * -preparation plan:[{
 *          day:Number,
 *          focus:String,
 *          tasks:[String]
 * }]
 * 
 */

const technicalQuestionSchema=new mongoose.Schema({
    question:{
        type:String,
        required:[true,"Technical question is required"]
    },

    intention:{
        type:String,
        required:[true,"Intention  is required"]
    },

    answer:{
        type:String,
        required:[true,"Intention  is required"]
    }   
})

const behavioralQuestionSchema=new mongoose.Schema({
    question:{
        type:String,
        required:[true,"Technical question is required"]
    },

    intention:{
        type:String,
        required:[true,"Intention  is required"]
    },

    answer:{
        type:String,
        required:[true,"Intention  is required"]
    }   
})


const skillGapsSchema=new mongoose.Schema({
    skill:{
        type:String,
        required:[true,"Skill is required"]
    },
    severity:{
        type:String,
        enum:["low","medium","high"],
        required:[true,"Severity is required"]
    }

})


const preparationPlanSchema=new mongoose.Schema({
    day:{
        type:Number,
        required:[true,"Day is required"],

    },
    focus:{
        type:String,
        required:[true,"focus is required"]
    },
    tasks:[{
        type:String,
        required:[true,"Task is required"]
    }]
})


const interviewReportSchema=new mongoose.Schema({
    jobDescription:{
        type:String,
        required:[true,"Job description is required"]
    },
    resume:{
        type:String,
        
    },
    selfDescription:{
        type:String
    },
    matchScore:{
        type:Number,
        min:0,
        max:100,
    },
    technicalQuestion:[technicalQuestionSchema],

    behavioralQuestion:[behavioralQuestionSchema],

    skillGaps:[skillGapsSchema],

    preparationPlan:[preparationPlanSchema],

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
    
},{
    timestamps:true
})

const interviewreportModel=mongoose.model("InterviewReport",interviewReportSchema);
module.exports=interviewreportModel;

