import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();
const BASE_URL = `http://localhost:${process.env.PORT}/api/`;

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => {
        if (token) {
            axios.defaults.headers["Authorization"] = `Bearer ${token}`;
            const fetchUser = async () => {
                try {
                    const res = await axios.get(`${BASE_URL}/auth/me`);
                    setUser(res.data);
                } catch (error) {
                    console.log("Error fetching user:", error);
                    logout();
                }
            };
            fetchUser();
        }
    }, [token]);

    const signup = async (username, email, password, role) => {
        try {
            await axios.post(`${BASE_URL}/auth/signup`, {
                username,
                email,
                password,
                role,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const login = async (email, password) => {
        try {
            const res = await axios.post(`${BASE_URL}/auth/login`, {
                email,
                password,
            });
            setToken(res.data.token);
            localStorage.setItem("token", res.data.token);
        } catch (error) {
            console.log("Error during login:", error);
        }
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
