const express=require('express');
const app=express();

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

const gitRoutes=require('./route/git')

//filter routes
app.use('/',gitRoutes);


app.listen(port,()=>{
    console.log("connected on port "+port)
})
module.exports=app;