const express = require('express');
const router = express.Router();
const bodyParser= require('body-parser');
var ObjectId = require('mongoose').Types.ObjectId;
const { Mini }=require('../models/miniTransport');



router.post('/',(req,res)=>{
    var trip = new Mini(req.body);
        trip.save((err,doc)=>{
            if(!err){
                res.send(doc)
            }
            else{console.log('error in data')}
        })
})

router.get('/',(req,res)=>{
    Mini.find((err,data)=>{
        if(!err){res.send(data)}
        else{res.send(err)}
    })
})

module.exports=router;