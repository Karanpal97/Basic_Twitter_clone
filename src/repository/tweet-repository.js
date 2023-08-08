const {Tweet}=require("../models/tweeter")
const crudRepository=require("./crud-repository")


class tweetRepository extends crudRepository{
   constructor(){
      super(Tweet)
   }
}


module.exports=tweetRepository