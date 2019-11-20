const express=require('express');
const app=express();

//to keep logging details
const bodyparser=require('body-parser');
const cors=require('cors');

//port number
const port=3000;

//cors
app.use(cors());

//Bodyparser
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

const userRoutes=require('./api/routes/user')
const carRoutes=require('./api/routes/car')

//filter routes
app.use('/api',userRoutes);
app.use('/car',carRoutes);

app.listen(port,()=>{
    console.log("connected on port "+port)
})
module.exports=app;