const {Comment}=require("../models/hashtag")
const crudRepository=require("./crud-repository")


class commentRepository extends crudRepository{
   constructor(){
      super(Comment)
   }
}


module.exports=commentRepository