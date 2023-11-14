import React, { useState, useEffect } from 'react';
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import './App.css';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setLoggedIn(true);
            setUsername(storedUsername);
        }
    }, []);

    const handleLogin = async (user) => {
        setLoggedIn(true);
        setUsername(user);
        localStorage.setItem('username', user);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/login"/>}
                />
                <Route
                    path="/login"
                    element={loggedIn ? <Navigate to="/dashboard"/> : <Login onLogin={handleLogin} />}
                />
                <Route
                    path="/dashboard"
                    element={loggedIn ? <Dashboard username={username} /> : <Navigate to="/login" />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
