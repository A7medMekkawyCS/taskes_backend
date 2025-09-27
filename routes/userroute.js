const express=require('express')
const {viewuser,viewoneuser,updatallinfouser,deletuser}=require('../controllers/usercontroller');


const router=express.Router();


router.get('/',viewuser)
router.get('/:id',viewoneuser)
router.put('/:id',updatallinfouser)
router.delete('/:id',deletuser)




module.exports=router;