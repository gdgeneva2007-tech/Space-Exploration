const express=require("express");
const path=require("path");
const router=express.Router();
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views","solarSystem.html"));
});

//BOUNS: sub-route example - handles "/solar-system/planets"

router.get("/planets",(req,res)=>{
    res.send(`
        <h1>Planets Details Page</h1>
        <p>This is a sub-route of /solar-system</p>
        <a href="/solar-system">Back to Solar System</a>
    `)
})

module.exports=router;