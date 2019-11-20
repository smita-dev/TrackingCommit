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


const gitRoutes=require('./route/git')

//filter routes
app.use('/',gitRoutes);


app.listen(port,()=>{
    console.log("connected on port "+port)
})
module.exports=app;