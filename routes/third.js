const express = require('express');
const router = express.Router();
const bodyParser= require('body-parser');
var ObjectId = require('mongoose').Types.ObjectId;
const { Third }=require('../models/thirdparty.js');



router.post('/',(req,res)=>{
    var trip = new Third(req.body);
        trip.save((err,doc)=>{
            if(!err){
                res.send(doc)
            }
            else{console.log('error in data')}
        })
})

router.get('/',(req,res)=>{
    Third.find((err,data)=>{
        if(!err){res.send(data)}
        else{res.send(err)}
    })
})

module.exports=router;