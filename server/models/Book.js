const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const bookSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        index: true,
        default: uuidv4,
    },
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    price: {
        mr_price: {
            type: Number,
            required: true,
            set: (value) => parseFloat(value.toFixed(2)),
        },
        final_price: {
            type: Number,
            required: true,
            set: (value) => parseFloat(value.toFixed(2)),
        },
    },
    stock: { type: Number, required: true },
});

module.exports = mongoose.model("Book", bookSchema);
