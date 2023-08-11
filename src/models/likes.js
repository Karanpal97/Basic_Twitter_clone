const mongoose=require('mongoose')

const likeSchema=new mongoose.Schema({
    
   onModel:{
      type:String,
      required:true,
      enum:['Tweet','Comment']
 },
   
   likeable:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    refPath:'onModel'

   }
})

const Likes=mongoose.model("Likes",likeSchema);
module.exports={Likes};