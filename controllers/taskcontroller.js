const task=require('../model/Task')

const createTask=async(req,res)=>{
    try
    {
    const {title,description,completed}=req.body
    const addtask=await new task({
        title,
        description,
        completed,
    })
    await addtask.save()
    res.status(201).json({status:true,message:"Task created Succesful",data:{addtask}})


    }catch(error)
    {
        console.error('Error',error.message);
        res.status(500).json({status:error,message:"failed created task",error:error.message})


    }
  
}
const getalltaskes=async(req,res)=>{
    try{
    const taskes=await task.find();
    res.status(200).json({status:"sucess",code:200,message:"Taskes fetched succesfuly",data:{taskes}})
    }catch(error)
    {
        res.status(500).json({status:error,message:"failed fetced tasks",error:error.message})


    }
}
const getonetask=async(req,res)=>{
    try{
        const idtask=req.params.id;

    const onetask=await task.findById(idtask);
    res.status(200).json({status:true,message:"Taske fetched succesfuly",data:{onetask}})
    }catch(error)
    {
        res.status(500).json({status:error,message:"failed fetced task",error:error.message})


    }
}
const updatetask=async(req,res)=>{
    try{
    const selecttask=req.params.id
    const newinfo=req.body
    const afterupdate=await task.findByIdAndUpdate(selecttask,newinfo,{new:true})
    res.status(200).json({status:true,message:"task update successful",data:{afterupdate}})
    }catch(error)
    {
        res.status(500).json({status:error,message:"failed update task",error:error.message})
  
    }

}
const delettask=async(req,res)=>{
    try{
    idtask=req.params.id
    const afterdelet =await task.findByIdAndDelete(idtask)
    res.status(200).json({status:true,message:"delet task succfully"})
    }catch(error)
    {
        res.status(500).json({status:false,message:"failed task succfully"})


    }
}
module.exports={
    createTask,
    getalltaskes,
    getonetask,
    updatetask,
    delettask

}
