const express=require('express');
const router=express.Router();
router.get("/commit",(req,res)=>{
    let commits=commitCount("https://github.com/smita-dev/Car-Becho")
    console.log(commits)
})

module.exports=router;