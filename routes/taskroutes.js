const express=require('express')
const{createTask,getalltaskes,getonetask,updatetask,delettask}=require('../controllers/taskcontroller')

const router=express.Router();
/**
*   @descs  create new task
*   @route  /api/task
*   @method  Post
*   @access  public
*/
router.post('/',createTask)
/**
*   @descs  View All task
*   @route  /api/task
*   @method  Get
*   @access  public
*/
router.get('/',getalltaskes)
/**
*   @descs  View one task
*   @route  /api/task:id
*   @method  Get
*   @access  public
*/
router.get('/:id',getonetask)
/**
*   @descs  Update All information task
*   @route  /api/task:id
*   @method  Put
*   @access  public
*/
router.put('/:id',updatetask)
/**
*   @descs  Update part information task
*   @route  /api/task:id
*   @method  Patch
*   @access  public
*/
router.patch('/:id',updatetask)
/**
*   @descs  delet task by id task
*   @route  /api/task:id
*   @method  Delet
*   @access  public
*/
router.delete('/:id',delettask)


module.exports=router;