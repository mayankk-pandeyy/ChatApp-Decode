const mongoose = require("mongoose");
const User = require("../models/userModel");

exports.allUsers = async (req, res) => {

    // "/api/user?search=mayank"

    const keyword = req.query.search ? {
        $or : [
            {name : {$regex : req.query.search, $options : "i"}},
            {email : {$regex : req.query.search, $options : "i"}}
        ]
    } : {};

    const users = await User.find(keyword).find({_id : {$ne : req.user._id}});

    res.send(users);
}