const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const signUp = require('./routes/signup')
const login = require('./routes/login')
const mango = require('./routes/mango')
const mini = require('./routes/mini')
const third = require('./routes/third')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();
mongoose.connect('mongodb+srv://system:root@cluster0.27piq.mongodb.net/mango?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
})
.then(()=>console.log('database connected'))
.catch((err)=>console.log(err))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.listen(process.env.PORT || 4000,()=>{
    console.log('server is running')
})
app.use(cors());
app.use('/signup',signUp)
app.use('/login',login)
app.use('/mango',mango)
app.use('/mini',mini)
app.use('/third',third)
