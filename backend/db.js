const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://nmathan:g1QTTS3zmCQJgIML@cluster0.vwspo.mongodb.net/to-doapp");
const todoSchema = mongoose.Schema({
    title:String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports={
    todo
}