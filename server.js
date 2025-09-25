const express =require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const ConnectDB=require('./config/db')
const taskroutes=require('./routes/taskroutes')

const app=express()
const port=4000 || process.env.PORT

app.use(express.json())
app.use(cors())

app.use('/api/task',taskroutes)



dotenv.config();
ConnectDB();
app.listen(port,(err)=>{
   try{
        console.log("Server start in http://localhost:4000");
   }catch(err)
   {
    console.log(console.error(err));
   }


})
