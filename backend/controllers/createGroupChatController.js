const Chat = require("../models/chatModel");



exports.createGroupChat = async(req, res) => {
    if(!req.body.users || !req.body.name){
        return res.status(400).send({
            message : "Please fill all the fields"
        })
    }

    var users = JSON.parse(req.body.users);
     if(users.length < 2){
        return res.status(400).send({
            message : "More than 2 users are required to make a group"
        })
     }

    users.push(req.user);

    try{
        const groupChat = await Chat.create(
            {
                chatName : req.body.name,
                users : users,
                isGroupChat : true,
                groupAdmin : req.user
            }
        )

        const fullGroupChat = await Chat.findOne({_id : groupChat._id})
        .populate("users", "-password")
        .populate("groupAdmin", "-password")

        res.status(200).json(fullGroupChat);


    }catch(error){

        res.status(400);
        throw new Error(error.message);
    }



}