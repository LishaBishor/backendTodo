const mongoose=require('mongoose');
const todoSchema=mongoose.Schema({
    id:String,
    userid:String,
    title:String,
    completed:String
    
});
const todoData=mongoose.model('todolist',todoSchema);
module.exports=todoData;