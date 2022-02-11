

const app=require("express")();
const mongoose  = require("mongoose");

//Schema
const UserSchema= new mongoose.Schema({
    name: {type: String, required: true},
    code: {type: String, required: true},
    active: {type: Boolean, required: true},
    followers: {type: Number, required: true}
})

//Models

// const User= mongoose.model("User",UserSchema, "users");
// *or
const User= mongoose.model("User",UserSchema);

module.exports=User;