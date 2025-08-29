const express=require('express')
const mongoose=require('mongoose')
const cors = require('cors')
require("dotenv").config();

const authRoutes=require("./routes/auth")
const Routes=require("./routes/dashboard")

const app=express();
app.use(express.json());
app.use(cors())

app.use("/auth",authRoutes);
app.use("/dashboard",Routes);

mongoose.connect("mongodb://127.0.0.1:27017/demo")
.then(()=>{
    console.log("DB Connected")
});

app.listen(3000,()=> console.log("Server running"))
