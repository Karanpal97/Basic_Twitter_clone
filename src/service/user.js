const userRepository=require("../repository/user-repository");
const AppError=require("../utils/errors/app-error")
const {StatusCodes}=require("http-status-codes")
const bcrypt=require("bcrypt")



const userRepo=new userRepository();


async function signUp(data){
   try{
     const user = await userRepo.create(data);
     return user;
  }
     catch(error){
        console.log(error)
        throw error
     }
  }

  
async function signIn(data){
   try{
     const email = await userRepo.findByEmail(data.email);
    
     if(!email){
      throw new AppError("cannot find the user with the give email address!! ",StatusCodes.NOT_FOUND)
     }
     const matchpassword=checkPassword(data.password,email.password);
     if(!matchpassword){
      throw new AppError("Write the correct password",StatusCodes.BAD_REQUEST)
     }

     console.log("success")
  }
     catch(error){
        console.log(error)
        throw error
     }
  }



   function checkPassword(inputPassword,dataBasePassword){
      const responce=bcrypt.compareSync(inputPassword,dataBasePassword);
      return responce

  }


  module.exports={signUp,signIn}

