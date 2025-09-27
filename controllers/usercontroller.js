const bcrypt=require('bcrypt')
const user=require('../model/User')
const { findByIdAndDelete } = require('../model/Task')



const viewuser=async(req,res)=>{
    try{
        const alluser= await user.find()
        res.status(200).json({status:"sucess",code:200,message:"users fetched succesfuly",users:alluser})
    
    }catch(error)
    {
        res.status(404).json({status:"erorr",code:404,message:"can't fetched users"})

    }
 
 }

 const viewoneuser=async(req,res)=>{
    try{
        const userid= req.params.id
        const oneuser= await user.findById(userid)
        res.status(200).json({status:"sucess",code:200,message:"user fetched succesfuly",user:oneuser})
    
    }catch(error){
        res.status(404).json({status:"erorr",code:404,message:"can't fetched user"})


    }
 
 }

 const updatallinfouser=async(req,res)=>{
    try{
        const iduser=req.params.id
        const {fristName,email,password,phonename}=req.body
        const hashpassword=await bcrypt.hash(password,10)

        const updatinfo=await user.findByIdAndUpdate(iduser,{
            $set:{
                fristName,
                email,
                password:hashpassword,
                phonename

            }
        },{new:true})
        res.status(200).json({status:"sucess",code:200,message:"user updated succesfuly",user:updatinfo})

    }catch(error)
    {
        res.status(404).json({status:"erorr",code:404,message:"can't updated user"})


    }

 }

 const deletuser=async(req,res)=>{
    try{
        const userid=req.params.id
     const afterdelet = await user.findByIdAndDelete(userid,{new:true})
       res.status(200).json({status:"sucess",code:200,message:"user deleted succesfuly",user:afterdelet})




    }catch(erorr)
    {
        res.status(404).json({status:"erorr",code:404,message:"can't deleted user"})

    }


 }

 
 module.exports={
    viewuser,
    viewoneuser,
    updatallinfouser,
    deletuser
    
 }