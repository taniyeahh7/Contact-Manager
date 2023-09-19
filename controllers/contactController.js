//@desc get all contacts
//@route GET /api/contacts
//@access public later gonna make private

const getContacts=(req,res)=>{//basically want to send a
    res.status(200).json({message:"Get all contacts"});
};

//@desc Get new contacts
//@route GET /api/contacts/:id
//@access public 

const getContact=(req,res)=>{//getting for the particular 
    res.status(200).json({message:`Get contact for ${req.params.id}`});
}

//@desc Create new contacts
//@route POST /api/contacts
//@access public

const createContact=(req,res)=>{//putting a request probably new
    console.log("The request body is :",req.body);
    res.status(201).json({message:"Create contact"});
}


//@desc Update new contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact=(req,res)=>{//put for is for updating
    res.status(200).json({message:`Update contact for ${req.params.id}`});
}

//@desc Delete existing contacts
//@route DELETE /api/contacts/:id
//@access public

const deleteContact=(req,res)=>{
    res.status(200).json({message:`Delete contact for ${req.params.id}`});
}


module.exports={getContact,createContact,getContacts,updateContact,deleteContact};