const {Likes}=require("../models/likes")
const crudRepository=require("./crud-repository")


class likeRepository extends crudRepository{
   constructor(){
      super(Likes)
   }
}


module.exports=likeRepository
