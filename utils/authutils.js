const jwt=require('jsonwebtoken')
const generateToke=(user)=>{
    return jwt.sign(
        {id:user._id,email:user.email},
    process.env.JWT_SECRET,
    process.env.EXPIRE
    );
}
module.exports={
    generateToke
}