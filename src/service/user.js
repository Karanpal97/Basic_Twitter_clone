const userRepository=require("../repository/user-repository");
const AppError=require("../utils/errors/app-error")
const {StatusCodes}=require("http-status-codes")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")



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
     const user = await userRepo.findByEmail(data.email);
    
     if(!user){
      throw new AppError("cannot find the user with the give email address!! ",StatusCodes.NOT_FOUND)
     }
     const matchpassword=checkPassword(data.password,user.password);
     if(!matchpassword){
      throw new AppError("Write the correct password",StatusCodes.BAD_REQUEST)
     }

     return generateJWT({email:user.email,_id:user.id})

  }
     catch(error){
        console.log(error)
        throw error
     }
  }


  async function isAuthentication(token){
   try{
   if(!token){
     throw new AppError("jwt token is missing",StatusCodes.BAD_REQUEST)
   }
   const user=verifyToken(token);
   return user;


   }catch(error){
      console.log(error);
      throw error;

   }


  }



   function checkPassword(inputPassword,dataBasePassword){
      const responce=bcrypt.compareSync(inputPassword,dataBasePassword);
      return responce

  }
   function generateJWT(input){
      const token =jwt.sign({input},"karan_secret",{expiresIn:"300s"})
      return token

   }
   function verifyToken(token){
      const responce =jwt.verify(token,"karan_secret");
      return responce
   }

  module.exports={signUp,signIn,isAuthentication}

