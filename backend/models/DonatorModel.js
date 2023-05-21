const mongoose = require('mongoose');

const schema = mongoose.Schema;

const donatorSchema = new schema({

    first_name : {
        type : String,
        required: true
    },
    last_name : {
        type : String,
        required: true
    },
    address : {
        type : String,
        required: true
    },
    phone_no : {
        type : Number,
        required: true
    },
    donation_type: {
        type : String,
        required: true
    },
    d_qty : {
        type : Number,
        required: true
    },
   
})

const Donator = mongoose.model("Donations",donatorSchema)

module.exports = Donator;