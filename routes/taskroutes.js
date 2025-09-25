const express=require('express')
const{createTask,getalltaskes,getonetask,updatetask,delettask}=require('../controllers/taskcontroller')

const router=express.Router();

router.post('/',createTask)
router.get('/',getalltaskes)
router.get('/:id',getonetask)
router.put('/:id',updatetask)
router.patch('/:id',updatetask)
router.delete('/:id',delettask)


module.exports=router;