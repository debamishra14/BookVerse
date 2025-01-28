import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import BookList from "./components/book/BookList";
import AddBook from "./components/book/AddBook";
// import Cart from "./components/cart/Cart";
// import Checkout from "./components/checkout/Checkout";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <div className="content">
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/" element={<BookList />} />
                        <Route path="/books" element={<BookList />} />

                        {/* Protected Routes */}
                        <Route
                            path="/add-book"
                            element={
                                <ProtectedRoute
                                    element={<AddBook />}
                                    role="seller"
                                />
                            }
                        />
                        {/* <Route
                            path="/cart"
                            element={
                                <ProtectedRoute
                                    element={<Cart />}
                                    role="buyer"
                                />
                            }
                        /> */}
                    </Routes>
                </div>
                <Footer />
            </Router>
        </AuthProvider>
    );
};

export default App;
