// name
// email
// password
// image

const mongoose = require("mongoose");

const userModel = mongoose.Schema(
    {
      name : {
        type : String,
        required : true,
        trim : true
      },
      email : {
        type : String,
        required : true,
        trim : true
      },
      password : {
        type : String,
        required : true
      },
      image : {
        type : String,
        required : true,
        default : "https://avatarfiles.alphacoders.com/375/thumb-350-375269.webp",
      }
    },
    {
        timestamps : true
    }
)

const User = mongoose.model("User", userModel);

module.exports = User;