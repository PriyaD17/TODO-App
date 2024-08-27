const mongoose= require("mongoose");
const { boolean } = require("zod");

mongoose.connect(" mongodb+srv://ganapathipriyadharsani:Mongodb2020@cluster0.i65ll.mongodb.net/todos")

const todoschema=mongoose.Schema({
    title: String,
    desc: String,
    comptd: Boolean
})

const todo= mongoose.model('todos',todoschema);

module.exports={
    todo
}
