import React, { useState, useEffect } from 'react';
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import Cookies from "js-cookie";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import './App.css';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const isAuthenticated = Cookies.get('isAuthenticated') === 'true';
        if (isAuthenticated) {
            setLoggedIn(true);
        }
    }, []);

    const handleLogin = async () => {
        setLoggedIn(true);
        Cookies.set('isAuthenticated', true);
    };

    const exitFunction = async () => {
        setLoggedIn(false);
        Cookies.remove('isAuthenticated');
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
                    element={loggedIn ? <Dashboard onExit={exitFunction} /> : <Navigate to="/login" />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
