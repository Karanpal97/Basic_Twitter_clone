const {Likes}=require("../models/comment")
const crudRepository=require("./crud-repository")


class likeRepository extends crudRepository{
   constructor(){
      super(Likes)
   }

   async findByUserAndLikable(data){
    
   }
}


module.exports=likeRepository
