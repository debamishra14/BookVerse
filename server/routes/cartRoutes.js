const express = require("express");
const { addToCart, checkout } = require("../controllers/cartController");
const { authenticateToken } = require("../controllers/authController");

const router = express.Router();

router.post("/add", authenticateToken, addToCart);
router.post("/checkout", authenticateToken, checkout);

module.exports = router;
