const express = require("express");
const { registerUser } = require("../controllers/userController");
const { authUser } = require("../controllers/loginController");

const router = express.Router();

router.post("/", registerUser);
router.post("/login", authUser);

module.exports = router;