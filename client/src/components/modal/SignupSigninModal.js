import React, { useState } from "react";
import "./SignupSigninModal.css";

const SignupSigninModal = ({ isOpen, closeModal }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("");
    const [modalType, setmodalType] = useState("signup");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (modalType === "signup") {
            console.log("Sign Up:", { username, email, password });
        } else {
            console.log("Sign In:", { email, password });
        }
        closeModal();
    };

    const toggleModalType = (type) => {
        setmodalType(type);
    };

    const renderToggleMessage = () => {
        if (modalType === "signup") {
            return (
                <p>
                    Already have an account?{" "}
                    <a
                        className="modal-toggle-link hover-link"
                        onClick={() => toggleModalType("signin")}
                    >
                        Sign In
                    </a>
                </p>
            );
        } else {
            return (
                <p>
                    Don't have an account?{" "}
                    <a
                        className="modal-toggle-link hover-link"
                        onClick={() => toggleModalType("signup")}
                    >
                        Sign Up
                    </a>
                </p>
            );
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={closeModal}>
                    x
                </button>
                <h2>{modalType === "signup" ? "Sign Up" : "Sign In"}</h2>
                <form onSubmit={handleSubmit}>
                    {modalType === "signup" && (
                        <div className="form-group">
                            <label htmlFor="name">Username</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                autoComplete="off"
                            />
                        </div>
                    )}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="off"
                        />
                    </div>
                    <button type="submit" className="submit-btn">
                        {modalType === "signup" ? "Sign Up" : "Sign In"}
                    </button>
                </form>
                <div className="modal-toggle-text">{renderToggleMessage()}</div>
            </div>
        </div>
    );
};

export default SignupSigninModal;
