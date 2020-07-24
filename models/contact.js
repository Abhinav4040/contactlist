const mongoose = require('mongoose');
const { string } = require('yargs');

const contactSchema = new mongoose.Schema({

    name: {
        type:string,
        required:true
    },
    phone: {
        type:string,
        required:true
    }
});

const Contact = mongoose.model('Contact',contactSchema);

module.exports = Contact;