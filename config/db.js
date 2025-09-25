const mongoose=require('mongoose')

const ConnectDB=async()=>{
    try
    {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Server MongoDB Start Success");
    }catch (error) {
        console.error(" DB connection failed:", error.message);
        process.exit(1);
    }
}
module.exports=ConnectDB;