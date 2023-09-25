const User=require("../models/user.models")


exports.store=async(req,res)=>{
   try{
    const payload=req.body;
    const user=await User.create(payload)
    res.json({message:"User Created Successfully", username:"Ayesha", city:"Shiekhupura", Subject:"Good Products", status:200,user})
   }
   catch(err){
 console.log(err)
   }
}
exports.index=async(req,res)=>{
    try{
const users=await User.find();
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
exports.destroy=async(req,res)=>{
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