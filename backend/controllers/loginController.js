const generateToken = require("../confing/generateToken");
const User = require("../models/userModel");

exports.authUser = async(req, res) => {
    try{

        // Get the data from the user
        const {email, password} = req.body;

        // Check if any field is empty
        if(!email || !password){
            res.status(400).json({
                error : "Some fields are missing"
            })
        }else{
            const user = await User.findOne({email});

            // Check if the passwords match

            let passwordMatch = (password === user.password);

            if(user && passwordMatch){
                res.json({
                    success : true,
                    id : user._id,
                    name : user.name,
                    email : user.email,
                    pic : user.image,
                    token : generateToken(user._id),
                    message : " Authentication Success"
                })
            }else{
                res.status(401).json({
                    success : false,
                    message : "User Atuthentication Failed, Please check your Password"
                })
            }
        }

    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success : false,
            data : "No user found",
            message : error.message
        })
    }
}