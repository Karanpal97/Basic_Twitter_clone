const express=require("express")
const { userController}=require("../../controller")

const router=express.Router();


router.post("/signUp",userController.createUser)
router.post("/signIn",userController.signIn)



module.exports=router;