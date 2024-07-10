const express = require("express");
const dbConnect = require("./confing/database")
 const userRoutes = require("./routes/userRoutes")
 const chatRoutes = require('../backend/routes/chatRoutes')

require("dotenv").config();


dbConnect();

const app = express();

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);


const PORT = process.env.PORT || 4000;



app.listen(PORT, ()=>{
    console.log(`Server started on Port ${PORT}`)
    console.log("Nodemon Running")
})

app.get('/', (req, res)=>{
    res.send("Hello bhai");
})


// // Get, Post, Put, Delete

// app.get("/", (req, res)=>{
//     res.send("Hii this is Pranav");
// })

// app.get("/api/chats", (req, res)=>{
//     res.send(data.chats);
// })

// app.get("/api/chats/:id", (req, res)=>{
//     const id = req.params.id;
//     const singleChat = data.chats.find(chat => {
//         return (chat._id === id);
//     })
//     res.send(singleChat);

// })