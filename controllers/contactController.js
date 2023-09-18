//@desc get all contacts
//@route GET /api/contacts
//@access public later onna make orivate

const getContacts=(req,res)=>{//basically want to send a
    res.status(200).json({message:"Get all contacts"});
};

//@desc Get new contacts
//@route GET /api/contacts/:id
//@access public later onna make orivate

const getContact=(req,res)=>{//getting for the particular 
    res.status(200).json({message:`Get contact for ${req.params.id}`});
}

//@desc Create new contacts
//@route POST /api/contacts
//@access public later onna make orivate

const createContact=(req,res)=>{//putting a request probably new
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