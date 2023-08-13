const {Likes}=require("../models/comment")
const crudRepository=require("./crud-repository")


class likeRepository extends crudRepository{
   constructor(){
      super(Likes)
   }

   async findByUserAndLikable(data){
     try{ const like=await Likes.findOne(data);
      return like;}
      catch(error){
     throw error
      }

   }
}


module.exports=likeRepository
