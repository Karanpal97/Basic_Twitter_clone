const tweetRepository=require("../repository/tweet-repository");
const hashtagRepository=require("../repository/hashtag-repository");
const hashRepo=new hashtagRepository();


const tweetRepo=new tweetRepository();



async function create(data){
 try{
   
   const content = data.content;
   const tags = content.match(/#+[a-zA-Z0-9(_)]+/g).
   map((tag) => tag.substring(1).toLowerCase());
   //storing the tweet
   const tweet = await tweetRepo.create(data);
   
   //storing the hashtags ---
   let alreadyPresentTags = await hashRepo.findByName(tags)
   console.log(alreadyPresentTags)
   let textOfPresentTags = alreadyPresentTags.map(tags => tags.text)
   let newTags = tags.filter(tag=> !textOfPresentTags.includes(tag) )
   newTags = newTags.map( tag => {
       return {
           text: tag,
           tweets: [tweet.id]
       }
   })
   await hashRepo.bulkCreate(newTags);
   alreadyPresentTags.forEach((tag) => {
       tag.tweet.push(tweet.id);
       tag.save();
   })
   return tweet;


}
   catch(error){
      console.log(error)
      throw error
   }
}


async function find(id){
   const responce =await tweetRepo.findOne(id);
   console.log(responce)
   return responce
}


async function findAll(){
 try { const responce =await tweetRepo.findAll();
   return responce
 

   }
   catch(error){
      console.log(error);
      throw error
   }
}
async function remove(id){
   try{
      const responce =await tweetRepo.delete(id)
      return responce


   }catch(error){
      console.log(error);
      throw error
   }
}



module.exports={
   create,
   find,
   findAll,
   remove

}