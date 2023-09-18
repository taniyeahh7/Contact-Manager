const express=require("express");
const router=express.Router();
const {getContact,createContact,getContacts,updateContact,deleteContact}=require("../controllers/contactController");



router.route("/").get(getContacts);

router.route("/").post(createContact);


router.route("/:id").get(getContact);


router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);


module.exports=router;//basically mapping a router and all logiv requred to map