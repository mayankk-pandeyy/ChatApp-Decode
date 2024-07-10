const Chat = require("../models/chatModel");
const User = require("../models/userModel");



exports.accessChat = async(req, res) => {
    const {userId} = req.body;

    if(!userId){
        console.log("User not sent");
        res.status(400);
        return;
    }

    var isChatExist = await Chat.find({
        isGroupChat : false,
        $and : [
            {users : {$elemMatch : {$eq : req.user._id}}},
            {users : {$elemMatch : {$eq : userId}}}
        ]
    }).populate("users", "-password").populate("latestMessage");

    isChatExist = await User.populate(isChatExist, {
        path : "latestMessage.sender",
        select : "name email pic"
    })

    if(isChatExist.length > 0){
        res.send(isChatExist[0]);
    }else{
        var chatData = {
            chatName : "sender",
            isGroupChat : false,
            users : [req.user._id, userId]
        }

        try{
            const createdChat = await Chat.create(chatData);

            const fullChat = await Chat.findOne({_id : createdChat._id}).populate("users", "-password");

            res.status(200).send(fullChat);


        }catch(error){
            res.status(400);
            throw new Error(error.message);

        }
    }
}