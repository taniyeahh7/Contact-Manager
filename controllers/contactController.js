//@desc get all contacts
//@route GET /api/contacts
//@access public later onna make orivate

const getContact=(req,res)=>{//basically want to send a
    res.status(200).json({message:"Get all contacts"});
};

//@desc Create new contacts
//@route POST /api/contacts
//@access public later onna make orivate

const createContact=(req,res)=>{//putting a request probably new
    res.status(201).json({message:"Create contact"});
}

module.exports={getContact,createContact};