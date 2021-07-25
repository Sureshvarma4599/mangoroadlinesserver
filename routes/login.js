const express = require('express');
const router=express.Router();
const bcrypt =require('bcrypt')

var {User} = require('../models/user')
 router.post('/',(req,res)=>{
     console.log(req.body.email)
     console.log(req.body.password)
    User.findOne({name:req.body.name})
     .then(user=>{
         if(!user)
         res.sendStatus(204);
         else{
             bcrypt.compare(req.body.password,user.password)
             .then(passwordMatch=>passwordMatch? res.send(req.body.name):res.sendStatus(204))
         }
     })
 })


 module.exports=router;