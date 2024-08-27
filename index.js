const express= require("express");
const app= express();
const {createtodo, updatetodo} = require("./types");
// app.get("/",function(req,res));
app.use(express.json())

app.post("/todo",async function(req,res){
const newtodo= req.body;
const checktodo= createtodo.safeParse(newtodo);
if(!checktodo.success){
    res.status(411).json({
        msg:"invalid input",
    })
    return;
}
await todo.create({
    title: newtodo.title,
    desc: newtodo.desc,
    comptd: false
})
res.json({
    msg: "Todo Created:)"
})
})

app.get("/todos", async function(req,res){
    const todos= await todo.find({});
    res.json({
        todos
    }) 
})

app.put("/completed",async function(req,res){
    const cmptodo= req.body;
const checkcmp= updatetodo.safeParse(cmptodo);
if(!checkcmp.success){
    res.status(411).json({
        msg:"invalid input",
    })
    return;
}
await todo.update({
    _id: req.body.id
},
{
 comptd: true
})
res.json({
    msg: "Todo marked as completed!"
})
})

app.listen(3000);