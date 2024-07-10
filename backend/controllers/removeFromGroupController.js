const Chat = require("../models/chatModel");



exports.removeFromGroup = async (req, res) => {
    const {chatId, userId} = req.body;

    const removed = await Chat.findByIdAndUpdate(chatId,
        {$pull : {users : userId}},
        {new : true}
        )
        .populate("users", "-password")
        .populate("groupAdmin", "-password")

    if(!removed){
        res.status(404);
        throw new Error("Chat Does Not Exist");
    }else{
        res.status(200).json(removed);
    }
}