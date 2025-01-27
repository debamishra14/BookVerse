import React from "react";
import "./BookItem.css";

const BookItem = (props) => {
    const { title, author, price, stock } = props.data;
    const isStockAvailable = stock > 0;

    return (
        <div className="bookitem-container">
            <div className="bookitem-top">
                <div className="img-section"></div>
                <div className="text-section">
                    <p className="title">{title}</p>
                    <p className="author">by {author}</p>
                    <p className="price">Rs. {price}</p>
                    <p
                        className={`stock ${
                            isStockAvailable ? "in-stock" : "outof-stock"
                        }`}
                    >
                        {isStockAvailable ? "In stock" : "Out of stock"}
                    </p>
                </div>
            </div>
            <div className="bookitem-bottom">
                <button disabled={!isStockAvailable}>Add to Cart</button>
            </div>
        </div>
    );
};

export default BookItem;
