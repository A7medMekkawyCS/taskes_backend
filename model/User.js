const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({

    fristName:{type:String,required:true},
    email:{type:String,required:true,trim:true,unique: true },
    password:{type:String,required:true},
    phonename:{type:String,trim:true}

},{timestamps:true});


module.exports=mongoose.model('User',userSchema);
