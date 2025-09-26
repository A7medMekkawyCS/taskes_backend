const bcrypt=require('bcrypt')
const user=require('../model/User')

const register=async(req,res)=>{
    const {fristName,email,password,phonename}=req.body
    try{
     if (!fristName || !email || !password || !phonename ) {
        return res.status(400).json({status:error,message:"All fields are required",error:error.message})
 }
    const existemail=await user.findOne({email})
    if(existemail)
    {
        return res.status(400).json({status:error,message:"Email already registered",error:error.message})

    }
    const hash_password=await bcrypt.hash(password,10)
    const new_user=await new user({
        fristName,
        email,
       password:hash_password,
        phonename
    })
   await new_user.save();
   res.status(201).json({status:true,message:"User created Succesful",user:{new_user}})


}catch(error)
{
    console.error('Error',error.message);
    res.status(500).json({status:error,message:"failed created user",error:error.message})

}



}

const login=async(req,res)=>{

}


module.exports={
    register,
    login

}