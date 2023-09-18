const express=require("express");
const router=express.Router();
const {getContact,createContact,getContacts}=require("../controllers/contactController");



router.route("/").get(getContacts);

router.route("/").post(createContact);

router.route("/").get(getContact)
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