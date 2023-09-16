const express=require("express");
const router=express.Router();




router.route("/").get((req,res)=>{//basically want to send a
    res.status(200).json({message:"Get all contacts"});
});

router.route("/").post((req,res)=>{//putting a request probably new
    res.status(200).json({message:"Post all contacts"});
});

router.route("/:id").get((req,res)=>{//getting for the particular 
    res.status(200).json({message:`Get contact for ${req.params.id}`});
});


router.route("/:id").put((req,res)=>{//put for is for updating
    res.status(200).json({message:`Update contact for ${req.params.id}`});
});

router.route("/:id").delete((req,res)=>{
    res.status(200).json({message:`Delete contact for ${req.params.id}`});
});


module.exports=router;//basically mapping a router and all logiv requred to map