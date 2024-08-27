const mongoose= require("mongoose");
const { boolean } = require("zod");
//mongodb+srv://ganapathipriyadharsani:Mongodb2020@cluster0.i65ll.mongodb.net/
//mongodb+srv://ganapathipriyadharsani:Mongodb2020@cluster0.i65ll.mongodb.net/todos
mongoose.connect(" mongodb+srv://ganapathipriyadharsani:Mongodb2020@cluster0.i65ll.mongodb.net/todos")

const todoschema=mongoose.Schema({
    title: String,
    desc: String,
    comptd: boolean
})

const todo= mongoose.model('todos',todoschema);

module.exports={
    todo
}
// https://github.com/PriyaD17/TODO-App