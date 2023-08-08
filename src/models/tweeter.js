const mongoose=require("mongoose");
const {ObjectId}=require("bson");

const  tweetSchema=new mongoose.Schema({
   content:{
      type:String
   },
   likes:{
      type:Number
   },
   noOfRetweet:{
     type:Number
   },
   Comment:{
      type:ObjectId
   }
})

const Tweet=mongoose.model("Tweet",tweetSchema)

module.exports={Tweet}
