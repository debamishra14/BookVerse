const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "../.env" });

const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");
const cartRoutes = require("./routes/cartRoutes");
const connectDB = require("./database/connect");

const app = express();
const PORT = process.env.PORT || 5091;

const startServer = () => {
    app.use(cors());
    app.use(express.json());

    // API routes
    app.use("/api/auth", authRoutes);
    app.use("/api/books", bookRoutes);
    app.use("/api/cart", cartRoutes);

    // Start the server
    app.listen(PORT, () => {
        console.log(`\x1b[42mServer running on port ${PORT}\x1b[0m`);
    });
};

// Connect to MongoDB and start the server
connectDB().then(async () => {
    await startServer();
});
