import React from "react";
import "./BookItem.css";

const BookItem = (props) => {
    const { title, author, price, stock } = props.data;
    const { type } = props;
    const isStockAvailable = stock > 0;

    // console.log(props);

    return (
        <div className="bookitem-container">
            <div className="bookitem-top">
                <div className="img-section"></div>
                <div className="text-section">
                    <p className="title">{title}</p>
                    <p className="author">by {author}</p>
                    <p className="price">
                        {type === "deals" && (
                            <>
                                <span className="mr-price">
                                    Rs. {price.mr_price}
                                </span>
                                <span className="final-price">
                                    {price.final_price}
                                </span>
                            </>
                        )}
                        {!type && (
                            <>
                                <span className="final-price">
                                    Rs. {price.mr_price}
                                </span>
                            </>
                        )}
                    </p>
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
