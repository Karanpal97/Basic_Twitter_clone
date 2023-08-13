const express=require("express")
const { tweetController}=require("../../controller")
const {AuthRequestMiddlewares}=require("../../middleware")

const router=express.Router();


router.post("/",AuthRequestMiddlewares.checkAuth,tweetController.createTweet)
router.patch("/",tweetController.remove)




router.get("/get",tweetController.findAllTweet)

router.get('/:id', tweetController.findTweet)


module.exports=router;