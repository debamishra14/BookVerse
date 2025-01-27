import React, { useEffect, useState } from "react";
import axios from "axios";
import BookItem from "./BookItem";
import "./BookList.css";

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [dealBooks, setDealBooks] = useState([]);
    const [timeRemaining, setTimeRemaining] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get(
                `http://localhost:5091/api/books/getbooks`
            );
            const dealBookList = res.data?.filter((book) => {
                return book?.price?.final_price > 0;
            });
            const allBookList = res.data?.filter((book) => {
                return book?.price?.final_price === 0;
            });
            setBooks(allBookList);
            setDealBooks(dealBookList);
            console.log(res);
        };
        fetchBooks();
    }, []);

    function getTimeRemaining() {
        const currentTime = new Date();
        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0);

        const timeDifference = midnight - currentTime;
        if (timeDifference <= 0) {
            return "23:59:59";
        }

        // Calculate hours, minutes, and seconds remaining
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Format the time as "hh:mm:ss"
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
            2,
            "0"
        )}:${String(seconds).padStart(2, "0")}`;
    }

    setInterval(() => {
        setTimeRemaining(getTimeRemaining());
    }, 1000);

    return (
        <div className="booklist-container">
            <div className="deal-section">
                <div className="title-container">
                    <h2 className="booklist-title">Deals of the Day</h2>
                    <p className="time">
                        <span className="time-text">Time Remaining:</span>
                        <span className="time-time">{timeRemaining}</span>
                    </p>
                </div>
                <ul className="booklist-list">
                    {dealBooks.map((book) => (
                        <li key={book.id} className="booklist-item">
                            <BookItem data={book} type={"deals"} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="allbook-section">
                <div className="title-container">
                    <h2 className="booklist-title">All Books</h2>
                </div>
                <ul className="booklist-list">
                    {books.map((book) => (
                        <li key={book.id} className="booklist-item">
                            <BookItem data={book} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BookList;
