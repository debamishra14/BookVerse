const express = require("express");
const {
    signup,
    login,
    // authenticateToken,
} = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
