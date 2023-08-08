const tweetRepository=require("../repository/tweet-repository");
const tweetRepo=new tweetRepository();


async function create(data){
   const responce=await tweetRepo.create(data);
   return responce
}


async function find(id){
   const responce =await tweetRepo.findOne(id);
   console.log(responce)
   return responce
}


async function findAll(){
 try { const responce =await tweetRepo.findAll();
 

   return responce}
   catch(error){
      console.log(error);
      throw error
   }
}



module.exports={
   create,
   find,
   findAll

}