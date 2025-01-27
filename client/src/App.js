import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import BookList from "./components/book/BookList";
import AddBook from "./components/book/AddBook";
// import Cart from "./components/cart/Cart";
// import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<BookList />} />
                    <Route
                        path="/add"
                        element={
                            <ProtectedRoute
                                element={<AddBook />}
                                role="Seller"
                            />
                        }
                    />
                    {/* <Route path="/cart" element={<Cart />} /> */}
                    {/* <Route path="/checkout" element={<Checkout />} /> */}
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
