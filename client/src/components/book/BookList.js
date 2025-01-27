import React, { useEffect, useState } from "react";
import axios from "axios";
import BookItem from "./BookItem";
import "./BookList.css";

const BookList = () => {
    const [books, setBooks] = useState([]);

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
        <div className="booklist-container">
            <h2 className="booklist-title">Books</h2>
            <ul className="booklist-list">
                {books.map((book) => (
                    <li key={book.id} className="booklist-item">
                        <BookItem data={book} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
