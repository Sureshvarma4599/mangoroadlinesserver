const mongoose=require('mongoose');
const Mango =mongoose.model('Mango',{
    
    date:{
        type:String,

    },
    transport:{
        type:String,
    },
    lr:{
        type:Number,
    },
    vehicle:{
        type:String,

    },
    invoice:{
        type:String,
    },
    from:{
        type:String,

    },
    to:{
        type:String,

    },
    qty:{
       type:Number,
    },
    point:{
        type:String,
    },
    amount:{
        type:Number,
    }
})
module.exports= {Mango};