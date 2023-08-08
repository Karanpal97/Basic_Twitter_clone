const express=require("express")
const { tweetController}=require("../../controller")

const router=express.Router();


router.post("/",tweetController.createTweet)




router.get("/get",tweetController.findAllTweet)

router.get('/:id', tweetController.findTweet)


module.exports=router;