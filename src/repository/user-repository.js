const {Users}=require("../models/users")
const crudRepository=require("./crud-repository")


class userRepository extends crudRepository{
   constructor(){
      super(Users)
   }
}


module.exports=userRepository