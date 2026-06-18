const jwt=require('jsonwebtoken')
const tokenBlackListModel=require("../models/blacklist.model")


async function authUser(req,res,next){
    const token=req.cookies.token
    if(!token){
    return res.status(401).json({
        "message":"User logged out or token expired"
    })
}

const isTOkenBlacklistModel=await tokenBlackListModel.findOne({token})
if(isTOkenBlacklistModel){
    return res.status(401).json({
        message:"Token is invalid"
    })
}

try{
    const decoded=jwt.verify(token,process.env.jwt_secret)
    req.user=decoded
    next()
}
catch(err){
    return res.status(401).json({
        message:"Invaild Token"
    })
}



}
module.exports = { authUser }