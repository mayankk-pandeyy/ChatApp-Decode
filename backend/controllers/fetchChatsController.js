const Chat = require("../models/chatModel");
const User = require("../models/userModel");



exports.fetchChats = async(req, res) => {
    try{
        Chat.find({users : {$elemMatch : {$eq : req.user._id}}})
        .populate("users", "-password")
        .populate("groupAdmin", "-password")
        .populate("latestMessage")
        .sort({updatedAt : -1})
        .then(async (output) => {
            result = await User.populate(output, {
                path : "latestMessage.sender",
                select : "name email pic"
            })
            res.status(200).send(result);
        })


    }catch(error){
        res.status(400);
        throw new Error(error.message);

    }
}