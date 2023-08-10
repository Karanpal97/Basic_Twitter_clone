const express=require("express")
const { hashController}=require("../../controller")

const router=express.Router();


router.post("/",hashController.createhash)


module.exports=router;