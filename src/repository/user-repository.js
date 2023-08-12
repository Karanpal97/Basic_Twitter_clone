const {Users}=require("../models/users")
const crudRepository=require("./crud-repository")


class userRepository extends crudRepository{
   constructor(){
      super(Users)
   }

   async findByEmail(email){
   try{const responce=await Users.findOne({email:email});
   return responce}
   catch(error){
      console.log(error)
      throw error
   }
}


}


module.exports=userRepository