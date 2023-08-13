const {tweetRepository,likesRepository}=require("../repository");

class LikesService{
   constructor(){
      this.tweetRepo=new tweetRepository;
      this.likesRepo=new likesRepository
   }


   async toggleLike(modelId,modelName,userId){

     if(modelType=="Tweet"){
        let likeable=await this.tweetRepo.getTweet(modelId);

     }
     else if (modelType=="Comment"){
     }
     else{console.log("something went wrong")}

     const exists=await this.likesRepo.findByUserAndLikable({
      user:userId,
      onModel:modelType,
      likeable:modelId
     })
    console.log(exists)
    if(exists){

    }else{
      const newLike=await this.likesRepo.create({
         user:userId,
         onModel:modelType,
         likeable:modelId
      })
      likeable.lokes.push(newLike);
      await likeable.save();
    }
   }
    


}
module.exports=LikesService

