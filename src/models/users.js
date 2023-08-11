const mongoose=require("mongoose");
const {ObjectId}=require("bson");
const bcrypt=require("bcrypt")

const  userSchema=new mongoose.Schema({
   email:{
      type:String,
      required:true,
      unique:true
   },
   password:{
      type:String,
      required:true,

   },
   bio:{
      type:String
   },
   tweets:[{
      type:mongoose.Schema.Types.ObjectId
   }],
   name:{
      type:String
   }
})
userSchema.pre('save',function(next){
   const user=this;
   const responce=bcrypt.hashSync(user.password,8);
   user.password=responce;
   next();
})

const Users=mongoose.model("Users",userSchema)



module.exports={Users}
