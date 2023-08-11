const userRepository=require("../repository/user-repository");

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


  module.exports={signUp}

