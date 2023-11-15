import React, { useState } from 'react';

import '../styles/Login.css'

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if(username === `denys${password}`) {
            onLogin();
        } else {
            setIsError(true)
        }
    };

    return (
        <div className="login" style={isError ? {height: '260px'} : {height: '230px'}}>
            <header className="loginHeader">
                <h2>Log to Weather App</h2>
                {isError ? <p style={{color:'red'}}>Invalid login or password</p> : null}
            </header>
            <form className="loginForm" action="">
                <label htmlFor="username"><b>Username</b></label>
                <input id="username" className="inputForm" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor="password"><b>Password</b></label>
                <input id="password" className="inputForm" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <label htmlFor="checkbox"><input id="checkbox" type="checkbox"/>  Remember me</label>

                <button className="submitButton" onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
};

export default Login;
