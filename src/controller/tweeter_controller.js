
const tweetService=require("../service/tweeter")
const{SuccessResponce,ErrorResponce}=require("../utils")
const {StatusCodes}=require("http-status-codes")

async function createTweet(req,res){

  try{ const responce=await tweetService.create({
      content:req.body.content,
      likes:req.body.likes,
      noOfRetweet:req.body.noOfRetweet

       })
      SuccessResponce.data=responce
       return res
       .status(StatusCodes.CREATED)
       .json(
            SuccessResponce
        )
   }  
catch(error){
   ErrorResponce.error=error
       return res
       .status(StatusCodes.BAD_REQUEST)
       .json(
           ErrorResponce
       )
       
}}


async function findTweet(req,res){

   try{ 
    console.log("hello")
    const responce=await tweetService.find(req.params.id)
    
       SuccessResponce.data=responce
       
        return res
        .status(StatusCodes.CREATED)
        .json(
             SuccessResponce
         )
    }  
 catch(error){
    ErrorResponce.error=error
    console.log(error)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(
            ErrorResponce
        )
        
 }}


 async function findAllTweet(req,res){

   try{ 
    const responce=await tweetService.findAll(req.query)
       SuccessResponce.data=responce
  
        return res
        .status(StatusCodes.CREATED)
        .json(
             SuccessResponce
         )
    }  
 catch(error){
    ErrorResponce.error=error
    console.log(error)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(
            ErrorResponce
        )
        
 }}



module.exports={
   createTweet,
   findTweet,
   findAllTweet
}