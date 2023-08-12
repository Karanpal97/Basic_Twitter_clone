const express=require('express');
const tweeterRoute=require("./tweeterRoutes")
const userRoute=require("./userRoutes")


const router=express.Router();


router.use("/tweet",tweeterRoute)
router.use("/user",userRoute)



module.exports=router;
