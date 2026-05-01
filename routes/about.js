const express=require("express");
const path=require("path");
const router=express.Router();
router.get("/",(req,res)=>{
    //      ^ this "/" means "root of this router", which is actually "/about" in the full URL
    res.sendFile(path.join(__dirname,"../views","about.html"))
});
module.exports=router;