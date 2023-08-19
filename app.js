const express =require('express');
const mongoose=require('mongoose');
const morgan=require('morgan');
const cors=require('cors');
const app=new express();
const path=require('path');
require('dotenv').config();
require("./db/dbconnection")
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname,'/build')));
const todoapi=require('./routes/todoRouter')
app.use('/api',todoapi);
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname,'/build/index.html'));
});
const PORT=process.env.PORT;
app.listen(PORT,()=>{
console.log(`The Server is runnuing at port ${PORT}`)
})