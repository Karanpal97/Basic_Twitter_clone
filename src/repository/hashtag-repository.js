const {HashTags}=require("../models/hashtag")
const crudRepository=require("./crud-repository")


class hashRepository extends crudRepository{
   constructor(){
      super(HashTags)
   }
}


module.exports=hashRepository