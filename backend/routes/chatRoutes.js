const { accessChat } = require("../controllers/accessChatController");
const { addToGroup } = require("../controllers/addToGroupController");
const { createGroupChat } = require("../controllers/createGroupChatController");
const { fetchChats } = require("../controllers/fetchChatsController");
const { removeFromGroup } = require("../controllers/removeFromGroupController");
const { renameGroup } = require("../controllers/renameGroupController");
const { protect } = require("../middlewares/authMiddleware");

const express = require("express");

const router = express.Router();


router.post("/", protect, accessChat);
router.get("/", protect, fetchChats);
router.post("/group", protect, createGroupChat);
router.put("/rename", renameGroup);
router.put("/addtogroup", addToGroup);
router.put("/removefromgroup", removeFromGroup);


module.exports = router;
