const mongoose=require('mongoose');
const Third =mongoose.model('Third',{
    
    date:{
        type:String,

    },
    transporter:{
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
    driver:{
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
module.exports= {Third};