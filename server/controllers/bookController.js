const fs = require("fs");
const path = require("path");

const Book = require("../models/Book");
const allBooksPath = "../data/books.json";
const dealBooksPath = "../data/deals.json";

const getAllBooks = async (req, res) => {
    try {
        const booksFromDB = (await Book.find()) || [];
        const booksFromJson = JSON.parse(
            fs.readFileSync(path.join(__dirname, allBooksPath))
        );
        const bookDealsFromJson = JSON.parse(
            fs.readFileSync(path.join(__dirname, dealBooksPath))
        );

        // If no books are found in the database, load from JSON as fallback
        // if (booksFromDB.length === 0) {
        //     return res.status(200).json(booksFromJson);
        // }

        // If books are found in the DB, combine with books from JSON
        const combinedBooks = [
            ...booksFromDB,
            ...booksFromJson,
            ...bookDealsFromJson,
        ];

        res.status(200).json(combinedBooks);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

const addBook = async (req, res) => {
    if (req.user.role !== "Seller")
        return res.status(403).json({ message: "Access denied" });

    const { title, author, description, price, stock } = req.body;

    try {
        const newBook = new Book({ title, author, description, price, stock });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    getAllBooks,
    addBook,
};
