const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = async () => {
    const connection = await mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("Database Connected Successfully"))
    .catch((error) => {
        console.log(error);
        console.log("Database connection failed");
        process.exit(1);
    })
}

module.exports = dbConnect;