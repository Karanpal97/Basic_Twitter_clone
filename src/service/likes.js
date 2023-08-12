const {tweetRepository,likesRepository}=require("../repository");

class LikesService{
   constructor(){
      this.tweetRepository=new tweetRepository;
      this.likesRepository=new likesRepository
   }


   async toggleLike(modelId,modelName,userId){

     if(modelType=="Tweet"){
        let likeable=await this.tweetRepository.getTweet(modelId);

     }
     else if (modelType=="Comment"){
     }
     else{console.log("something went wrong")}
   }


}

