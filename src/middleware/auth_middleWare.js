const { StatusCodes } = require('http-status-codes');


const { userService} = require('../service');

async function checkAuth(req,res,next){
   try{const response= await userService.isAuthentication(req.headers['x-access-token']);
   if(response){
     req.user=response
   }
   next();}
   catch(error){
       return res
       .status(error.statusCode)
       .json(error);
   }
}


module.exports={checkAuth}