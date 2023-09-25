const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    username:{type:String,default:""},
    city:{type:String,default:""},
    subject:{type:String,default:""},
    isActive:{type:Boolean, default:false}
})

module.exports=mongoose.model("User",userSchema)