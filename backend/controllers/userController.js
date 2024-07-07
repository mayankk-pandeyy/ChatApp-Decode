const generateToken = require("../confing/generateToken")
const User = require("../models/userModel");

exports.registerUser = async (req, res) => {
    try{
        // Fetch all the data
        const {name, email, password, pic} = req.body;

        // If any field is missing
        if(!name || !email || !password){
            res.status(400).json({
                error : "Please enter all the required fields"
            })
        }
            // If the user exists or not
            const userExists = await User.findOne({email});

            if(userExists){
                res.status(400).json({
                    error : "User already exists"
                })
            }else{
                const newUser = await User.create(
                    {name, email, password, pic}
                )

                res.status(200).json({
                    success : true,
                    data : newUser,
                    message : "New user create Successfully",
                    token : generateToken(newUser._id)
                })
            }

    } catch(error){
        console.error(error);
        console.log("Error in creating user");
        res.status(500).json({
            success : false,
            data : "Unable to create new user",
            message : error.message
        })
    }
}
