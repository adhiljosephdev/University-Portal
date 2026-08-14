import React, { createContext, useState } from "react";

// Create Context
export const AuthContext = createContext();

// Create Provider
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // login function
    const login = (userData) => {
        setUser(userData);
    };

    // logout function
    const logout = () => {
        setUser(null);
    };

    return (
        //Pass values to the Provider
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
