const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());


app.post("/todo",async function(req,res){
   const createPayload =req.body;
   const parsePayload = createTodo.safeParse(createPayload);
   if(!parsePayload.success){
    res.status(411).json({
        msg: "youve sent the wrong message"
    })
    return;
   }
  await todo.create({
    title : createPayload.title,
    description : createPayload.description,
    completed: false
   })
   res.json({
    msg : "to do Created successfully"
   })

})

app.get("/todos",async function(req,res){
   const todos = await todo.find({});
   res.json({
    todos
   });
})


app.put("/completed" , async function(req,res){
   const updateTodo = req.body;
   const parsePayload = updateTodo.safeparse(updateTodo);
   if(!parsePayload.success){
    res.status(411).json({
        msg : "you sent the wrong input",
    })
    return;
   }
   await todo.update({
    _id: req.body.id
   },{
    completed : true
   }) 
   res.json({
    msg: "todo marked as completed"
   })
})

app.listen(3000);