const express= require("express");
const app= express();
const {createtodo, updatetodo} = require("./types");
// app.get("/",function(req,res));
app.use(express.json())

app.post("/todo",function(req,res){
const newtodo= req.body;
const checktodo= createtodo.safeParse(newtodo);
if(!checktodo.success){
    res.status(411).json({
        msg:"invalid input",
    })
    return;
}
})

app.get("/todos", function(req,res){

})

app.put("/completed",function(req,res){
    const cmptodo= req.body;
const checkcmp= updatetodo.safeParse(cmptodo);
if(!checkcmp.success){
    res.status(411).json({
        msg:"invalid input",
    })
    return;
}

})