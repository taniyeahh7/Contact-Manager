//@desc get all contacts
//@route GET /api/contacts
//@access public later onna make orivate

const getContacts=(req,res)=>{//basically want to send a
    res.status(200).json({message:"Get all contacts"});
};

//@desc Get new contacts
//@route GET /api/contacts/:id
//@access public later onna make orivate

const getContact=(req,res)=>{//putting a request probably new
    res.status(201).json({message:"Get contact"});
}

//@desc Create new contacts
//@route POST /api/contacts
//@access public later onna make orivate

const createContact=(req,res)=>{//putting a request probably new
    res.status(201).json({message:"Create contact"});
}

module.exports={getContact,createContact,getContacts};