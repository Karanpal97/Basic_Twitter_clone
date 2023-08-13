const express=require("express");

const {connect}=require("./config/databases")
const {Tweet}=require("../src/models/tweeter")
const {HashTags}=require("../src/models/hashtag")
const apiRoute=require("./routes")


const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api',apiRoute)



app.listen(4002,  async()=>{

        console.log("server is running at 4002")
           connect();
    console.log("connected ")

})