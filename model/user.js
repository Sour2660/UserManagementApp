//create scheamas 

const mongoose = require("mongoose")

let UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
});

module.exports =mongoose.model('user',UserSchema)