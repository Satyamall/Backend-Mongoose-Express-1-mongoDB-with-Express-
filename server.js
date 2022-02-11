

const express=require("express");
const app =express();
const cors= require('cors');
// const mongoose  = require("mongoose");
const connect = require('./config/db');
// const User= require('./models/user.model');
const userRouter = require('./routes/user.route');

const PORT=5000;

//cors
app.use(cors());
app.use(express.json())

app.use("/users", userRouter);

// app.get("/",async (req,res)=>{
//     const users= await User.find();

//     console.log(users);
//     res.status(200).json(users)
// })

const start= async ()=>{
    await connect();

    // console.log("Connect to Mongo")
    
    app.listen(PORT,()=>{
        console.log(`app is listening on port ${PORT}`);
    })
}

module.exports=start;