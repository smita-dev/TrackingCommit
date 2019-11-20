const express=require('express');
const app=express();
const commitCount=require('git-commit-count');
//to keep logging details
const bodyparser=require('body-parser');


//port number
const port=8080;

//Bodyparser
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


app.listen(port,()=>{
    console.log("connected on port "+port)
})

app.get("/commit",(req,res)=>{
    let data=req.body;
    console.log(data)
    let commit=commitCount("https://github.com/smita-dev/Car-Becho");
    console.log(commit);
    let url="https://github.com/"+req.body.username+"/"+req.body.repository;
    let commit1=commitCount(url);
    console.log(commit1);
    // let commits=commitCount(`https://github.com/${req.body.username}/${req.body.repository}`)
    // console.log(commits)
})
