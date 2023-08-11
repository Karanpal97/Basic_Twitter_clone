const express=require('express');
const tweeterRoute=require("./tweeterRoutes")
const userRoute=require("./userRoutes")


const router=express.Router();


router.use("/tweet",tweeterRoute)
router.use("/signUp",userRoute)


module.exports=router;
