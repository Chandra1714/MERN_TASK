const jsonwebtoken = require('jsonwebtoken');
require("dotenv").config();

function auth(req,res,next){
    const token =req.headers.authorization?.split(" ")[1];
    if(!token) return res.status(401).json({message:"No taken"});

    try{
        const decoded = jsonwebtoken.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();

    }catch(err){
        res.status(401).json({message:"Invalid token"})
    }
}
module.exports=auth;
