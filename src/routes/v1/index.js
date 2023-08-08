const express=require('express');
const tweeterRoute=require("./tweeterRoutes")

const router=express.Router();


router.use("/tweet",tweeterRoute)

module.exports=router;
