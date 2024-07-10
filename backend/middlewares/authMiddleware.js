const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

require("dotenv").config();


const protect = async(req, res, next) => {
    let token;

    // "Bearer efbcvsdbvkdsbjvkjdsnvb"
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.id).select("-password");

            next();


        }catch(error){

            res.statud(401);
            throw new Error("Not Authorized, Token Failed");
        }

    }

    if(!token){
        res.status(401);
        throw new Error("Not authorized, No Token");
    }
}

module.exports = {protect};