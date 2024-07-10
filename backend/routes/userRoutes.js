const express = require("express");
const { registerUser } = require("../controllers/userController");
const { authUser } = require("../controllers/loginController");
const { allUsers } = require("../controllers/allUsers");
const { protect } = require("../middlewares/authMiddleware");


const router = express.Router();

router.post("/", registerUser);
router.post("/login", authUser);

// Access all the users
router.get("/", protect, allUsers);

module.exports = router;