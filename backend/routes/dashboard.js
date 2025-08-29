const express = require("express")
const auth = require("../middleware/auth")
const route=express.Router();

route.get("/",auth,(req,res)=>{
    res.json({message:`Welcome ${req.user.email}, this is your dashboard!`})
})

module.exports = route;