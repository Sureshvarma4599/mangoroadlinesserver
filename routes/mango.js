const express = require('express');
const router = express.Router();
const bodyParser= require('body-parser');
var ObjectId = require('mongoose').Types.ObjectId;
const { Mango }=require('../models/mangoroadlines');



router.post('/',(req,res)=>{
    var trip = new Mango(req.body);
        trip.save((err,doc)=>{
            if(!err){
                res.send(doc)
            }
            else{console.log('error in data')}
        })
})

router.get('/',(req,res)=>{
    Mango.find((err,data)=>{
        if(!err){res.send(data)}
        else{res.send(err)}
    })
})

module.exports=router;