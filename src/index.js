const express=require("express");

const {connect}=require("./config/databases")
const {Tweet}=require("../src/models/tweeter")
const {HashTags}=require("../src/models/hashtags")
const apiRoute=require("./routes")


const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api',apiRoute)



app.listen(4001,  async()=>{

        console.log("server is running at 4001")
           connect();
    console.log("connected ")

    // Tweet.create({ 
    //  content:"this is my first tweet",
    //  likes:25,
    //  noOfRetweet:5
    //  })

    //  console.log("done")
    
   

    // HashTags.create({
    //     text:"snfnfmmfm,",
    //     tweet:[ ]
    //  })
   


})