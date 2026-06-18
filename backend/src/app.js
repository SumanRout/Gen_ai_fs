const express=require("express")
const cookies=require("cookie-parser")
const authRouter=require("./routes/auth.routes")


const app=express()

app.use(express.json())
app.use(cookies())
// using all the routes here
app.use("/api/auth",authRouter)

module.exports=app