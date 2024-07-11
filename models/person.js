const mongoose = require("mongoose");

// define schema 
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: { // corrected typo from eamil to email
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
    },
    salary: {
        type: Number,
        required: true
    }
});

// creating model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;
