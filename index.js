
const start=require('./server');

start();




// const app=require("express")();
// const cors= require('cors');
// const mongoose  = require("mongoose");
// const PORT= 5000;

// //cors
// app.use(cors());

// app.get("/",(req,res)=>{
//     res.status(200).json({message: "Success"})
// })

// const connect=()=>{
//     return mongoose.connect("mongodb://localhost:27017/masai")
// }

// const start= async ()=>{
//     await connect();

//     console.log("Connect to Mongo")

//     app.listen(PORT,()=>{
//         console.log(`app is listening on port ${PORT}`);
//     })
// }

// start();