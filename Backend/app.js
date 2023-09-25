const express=require("express")
const port =8000;
require('dotenv').config();
const app=express();
const connect=require("./config")
const userRoute=require("./routes/user.routes")
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

connect();

app.use('/users',userRoute)

 //app.get("/",(req,res)=>{
   // res.json({message:"hello from server", status:200,success:true})
 //})
app.listen(port,()=>{
    console.log(`server is ready on ${port}`)
})