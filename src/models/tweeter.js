const mongoose=require("mongoose");
const {ObjectId}=require("bson");

const  tweetSchema=new mongoose.Schema({
   content:{
      type:String
   },
   likes:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Likes"
   }],
   noOfRetweet:{
     type:Number
   },
   Comments:{
      type:ObjectId,
      ref:"Comment"
   }
})

const Tweet=mongoose.model("Tweet",tweetSchema)

module.exports={Tweet}
