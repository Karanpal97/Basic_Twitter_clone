const {HashTags}=require("../models/hashtag")
const crudRepository=require("./crud-repository")


class likeRepository extends crudRepository{
   constructor(){
      super(HashTags)
   }
}


module.exports=likeRepository