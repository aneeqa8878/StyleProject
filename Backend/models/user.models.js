const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
  
    name:{type:String,default:""},
    email:{type:String,default:""},
    subject:{type:String,default:""},
    message:{type:String,default:""},
    isActive:{type:Boolean, default:false}
},

{timestamps:true})
const productSchema=mongoose.Schema({
    productName:{type:String,default:""},
    articleName:{type:String,default:""},
    discountedPercen:{type:String,default:""},
    originalPrice:{type:String,default:""},
    discountedPrice:{type:String,default:""},
},
{timestamps:true})

const signupSchema=mongoose.Schema({
    fname:{type:String,default:""},
    lname:{type:String,default:""},
    email:{type:String,default:""},
    phone:{type:String,default:""},
    password:{type:String,default:""},
    confirmpassword:{type:String,default:""},
},
{timestamps:true})

module.exports=mongoose.model("User",userSchema)
module.exports=mongoose.model("Product",productSchema)
module.exports=mongoose.model("Signup",signupSchema)