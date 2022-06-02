const express = require("express")
const fs = require("fs")


function serverCallback(req,res){
    console.log("connected to:"+req.hostname)
    var video=req.query.video
    res.sendFile("videos/"+video,{root:__dirname,Headers:{"type":"video/mp4"}})
        
}

const app = express()
app.get("/",serverCallback)
app.listen(8080,function(){
});
//127.0.0.1:8080/?video=video2298596538.mp4