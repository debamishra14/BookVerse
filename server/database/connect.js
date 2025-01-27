const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const MONGO_URI = process.env.MONGODB_URI;
        if (!MONGO_URI) {
            console.error("\x1b[41mMONGODB_URI is not available\x1b[0m");
            process.exit(1);
        }
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("\x1b[42mConnected to MongoDB\x1b[0m");
    } catch (err) {
        console.error(`\x1b[41mMongoDB connection error: ${err}\x1b[0m`);
        process.exit(1);
    }
};

module.exports = connectDB;
