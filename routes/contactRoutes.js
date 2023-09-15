const express=require("express");
const router=express.Router();



router.route("/",(req,res)=>{//basically want to send a
    res.status(200).json({message:"Get all contacts"});
});

