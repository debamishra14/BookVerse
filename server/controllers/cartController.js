const Cart = require("../models/Cart");
const Book = require("../models/Book");

const addToCart = async (req, res) => {
    const { bookId, quantity } = req.body;

    try {
        let cart = await Cart.findOne({ userId: req.user.userId });
        if (!cart) {
            cart = new Cart({
                userId: req.user.userId,
                items: [{ bookId, quantity }],
            });
        } else {
            const existingItem = cart.items.find(
                (item) => item.bookId.toString() === bookId
            );
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.items.push({ bookId, quantity });
            }
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

const checkout = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.userId }).populate(
            "items.bookId"
        );
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({ message: "Your cart is empty" });
        }

        // In a real app, here we would integrate a payment gateway
        cart.items = []; // Clear the cart after checkout
        await cart.save();

        res.status(200).json({ message: "Checkout successful" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    addToCart,
    checkout,
};
