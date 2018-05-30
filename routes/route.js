// importing modules
const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.get('/contacts', (req,res,next)=>{
    Contact.find(function(err, contacts, contacts){
        res.json(contacts);
    })
    //res.send('Retrieving the contact list');
});

router.post('/contact', (req,res,nex)=>{
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    });

    newContact.save((err, contacts)=>{
        if(err){
            res.json({msg: 'Failed to add contact'});
        }
        else{
            res.json({msg: 'Contact added successfully'})
        }
    }
);

router.delete('/contact', (req,res,nex)=>{

});

module.exports = router.exports();