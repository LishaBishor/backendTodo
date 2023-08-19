const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const todomodel=require('../model/todomodel');

//...get.../viewtodoAll
router.get('/viewtodoAll', async(req,res)=>{
   
    try{
        const data= await todomodel.find();
         res.json(data)
         
       
    }catch(error){
        res.status(400).json("cannot get, Error:"+ error);
    }
})


//...get.../viewtodocompleted
router.get('/viewtodoComp', async(req,res)=>{
   
    try{
        const data= await todomodel.find();
        let completed=[]
        data.forEach(element => {
            if(element.completed=="True"){
                completed.push(element)
            }
        });
         res.json(completed)
         
       
    }catch(error){
        res.status(400).json("cannot get, Error:"+ error);
    }
})

//...get.../viewtodocompleted
router.get('/viewtodoInComp', async(req,res)=>{
   
    try{
        const data= await todomodel.find();
        let completed=[]
        data.forEach(element => {
            if(element.completed=="False"){
                completed.push(element)
            }
        });
         res.json(completed)
         
       
    }catch(error){
        res.status(400).json("cannot get, Error:"+ error);
    }
})

//...post..addtodo api
router.post('/addtodo',async(req,res)=>{
    try {
        const todo=req.body;
        newTodo=new todomodel(todo);
            const savedata=await newTodo.save();
        res.json({message:"Added Successfully"})  
           
       
    } catch (error) {console.log("error"+error)
        res.json({message:'Unable to add'});
        
    }
})
//delete...to delete a item in todos
router.delete('/deletetodo/:id',(req,res)=>{
    
    try{
        let id=req.params.id;
        const deleteddata=req.body;
         
        console.log(deleteddata)
        let deldata= todomodel.findByIdAndDelete(id).exec();
        res.json({message:'deleted sucessfully'})
            
        
    }catch(error){
        console.log("error:"+error)
        res.json({message:"cannot deleted "+error})
    }
})



module.exports=router;