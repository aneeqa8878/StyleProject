const User=require("../models/user.models")


exports.store=async(req,res)=>{
   try{
    const payload=req.body;
    const user=await User.create(payload)
    res.json({message:"User Created Successfully",status:200,user})
   }
   catch(err){
 console.log(err)
   }
}
exports.save=async(req,res)=>{
    try{
     const payload=req.body;
     const product=await Product.create(payload)
     res.json({message:"User Created Successfully",status:200,product})
    }
    catch(err){
  console.log(err)
    }
 }
 exports.savesignup=async(req,res)=>{
    try{
     const payload=req.body;
     const signup=await Signup.create(payload)
     res.json({message:"User Created Successfully",status:200,signup})
    }
    catch(err){
  console.log(err)
    }
 }
exports.index=async(req,res)=>{
    try{
const users=await User.find().sort({createdAt:-1});
res.json({status:200,message:"Data Fetched Successfully",users})
    }
    catch(err){
console.log(err)
    }
    
}
exports.get=async(req,res)=>{
    try{
const user=await User.findOne({_id:req.params.id});
res.json({status:200,message:"Data Fetched Successfully",user})
    }
    catch(err){
console.log(err)
    }
}
exports.get=async(req,res)=>{
    try{
const product=await Product.findOne({_id:req.params.id});
res.json({status:200,message:"Data Fetched Successfully",product})
    }
    catch(err){
console.log(err)
    }
}
exports.delete=async(req,res)=>{
    try{
        
const user=await User.findOneAndRemove({_id:req.params.id});

if(!user){
    res.json({message:"user not found"})
}
res.json({status:200,message:"Data delete Successfully"})
    }
    catch(err){
console.log(err)
    }
}
exports.update=async(req,res)=>{
    try{
        
const user=await User.findOneAndUpdate({_id:req.params.id},req.body,{new:true});

if(!user){
    res.json({message:"user not found"})
}
res.json({status:200,message:"Data updated Successfully",user})
    }
    catch(err){
console.log(err)
    }
}

  