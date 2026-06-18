require('dotenv').config()

const app=require("./src/app")
const connectTodb=require("./src/config/database")


connectTodb()

const port=3000
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})