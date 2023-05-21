const mongoose = require('mongoose');

const schema = mongoose.Schema;

const organSchema = new schema({

    name : {
        type : String,
        
    },
    organization_name : {
        type : String,
    },
    o_phone_no : {
        type : String,
      
    },
    o_donation_type : {
        type : String,
        
    },
    o_qty: {
        type : String,
        
    },
    location : {
        type : String,
       
    }
})

const Organ = mongoose.model("Organ",organSchema)

module.exports = Organ;