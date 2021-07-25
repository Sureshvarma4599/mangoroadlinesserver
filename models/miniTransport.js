const mongoose=require('mongoose');
const Mini =mongoose.model('Mini',{
    
    date:{
        type:String,

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
module.exports= {Mini};