const mongoose=require("mongoose");

const hashtagSchema=new mongoose.Schema({
   text:{
      type:String,
      required:true,
      unique:true
   },
   tweet:[
      {
      type:mongoose.Schema.Types.ObjectId
   }
]
})

const HashTags=mongoose.model("hashtag",hashtagSchema)

module.exports=(HashTags)

