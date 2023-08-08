class crudRepository{
   constructor(model){
      this.model=model
   }
    async create(data){
      const create= await this.model.create(data);
      return create
    }

    async findOne(id){
      
      const responce =await this.model.findById(id)
      return responce

    }



    async findAll(){
      try{const responce=await this.model.find({})
     
      return responce
   }
      catch(error){
         console.log(error);
         throw error
      }
    }
}





module.exports=crudRepository