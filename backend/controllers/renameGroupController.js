const Chat = require("../models/chatModel");


exports.renameGroup = async(req, res)=> {
    const {chatId, chatName} = req.body;

    const updatedChat = await Chat.findByIdAndUpdate(chatId, {chatName : chatName}, {new : true})
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

    if(!updatedChat){
        res.staus(400);
        throw new Error("Group Chat does not exist");
    }else{
        res.status(200).json(updatedChat);
    }
}