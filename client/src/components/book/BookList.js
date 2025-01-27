import React, { useEffect, useState } from "react";
import axios from "axios";

const BookList = () => {
    const [books, setBooks] = useState([]);
    // const BASE_URL = `http://localhost:${process.env.PORT}/api`;

    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get(
                `http://localhost:5091/api/books/getbooks`
            );
            setBooks(res.data);
            console.log(res);
        };
        fetchBooks();
    }, []);

    return (
        <div>
            <h2>Books</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        <p>{book.price}</p>
                        <p>{book.stock} in stock</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
