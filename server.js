const express=require('express');
const app=express();
const commitCount=require('git-commit-count');
//to keep logging details
const bodyparser=require('body-parser');
const cors=require('cors');

//port number
const port=8080;

//cors
app.use(cors());
//Bodyparser
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());



app.listen(port,()=>{
    console.log("connected on port "+port)
})

app.get("/commit",(req,res)=>{
    let data=req.body;
    console.log(data)
    let url="https://github.com/"+req.body.username+"/"+req.body.repository;
    let commit=commitCount(url);
    console.log(commit);
    res.json(commit);
    // let commits=commitCount(`https://github.com/${req.body.username}/${req.body.repository}`)
    // console.log(commits)
})
