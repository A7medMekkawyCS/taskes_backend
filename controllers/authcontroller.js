const express=require('express')
const user=require('../model/User')
const bcrypt=require('bcrypt')
const {generateToke}=require('../utils/authutils')
const jwt=require('jsonwebtoken')



const register=async(req,res)=>{
    try{

        const {fristName,email,password,phonename}=req.body
        const exit=await user.findOne({email})
        if(exit)
        {
            return res.status(400).json({status:"error",message:"email has been exist"})
        }
        if(!fristName || !email ||!password||!phonename)
        {
            return res.status(400).json({status:"error",message:"All fields are required"})

        }
        const hashpassword=await bcrypt.hash(password,10)
        const new_user=await new user({
            fristName,
            email,
            password:hashpassword,
            phonename

        })
        await new_user.save();
        const vtoken=generateToke(new_user)
        res.status(201).json({status:"sucess",code:201,message:"user created succesfuly",token:vtoken,user:new_user})


    }catch(error)
    {
        res.status(500).json({status:"error",message:"failed create user",error:error.message})

    }
}

const login=async(req,res)=>{
    try{

        const emailmatch=await user.findOne({email:req.body.email})
        if(!emailmatch)
        {
            return res.status(400).json({status:"error",message:"email is not find"})
        }
        const matchpassword=await bcrypt.compare(req.body.password,emailmatch.password)
        if(!matchpassword)
        {
            return res.status(400).json({status:"error",message:"wrong password"})

        }
       
        const vtoken=generateToke(emailmatch)
        res.status(200).json({status:"sucess",code:200,message:"user login succesfuly",token:vtoken,user:emailmatch})


    }catch(error)
    {
        res.status(500).json({status:"error",message:"failed login user",error:error.message})

    }
}



module.exports={
    register,
    login

}
