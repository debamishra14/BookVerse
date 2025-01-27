const express = require("express");
const { getAllBooks, addBook } = require("../controllers/bookController");
const { authenticateToken } = require("../controllers/authController");

const router = express.Router();

router.get("/getbooks", getAllBooks);
router.post("/addbooks", authenticateToken, addBook);

module.exports = router;
