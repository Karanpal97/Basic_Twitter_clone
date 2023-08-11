
const userService=require("../service/user")
const{SuccessResponce,ErrorResponce}=require("../utils")
const {StatusCodes}=require("http-status-codes")

async function createUser(req,res){

  try{ const responce=await userService.signUp({
      email:req.body.email,
      password:req.body.password,
      bio:req.body.bio,
      name:req.body.name

       })
      SuccessResponce.data=responce
       return res
       .status(StatusCodes.CREATED)
       .json(
            SuccessResponce
        )
   }  
catch(error){
   ErrorResponce.error=error
       return res
       .status(StatusCodes.BAD_REQUEST)
       .json(
           ErrorResponce
       )
       
}}

module.exports={ createUser}