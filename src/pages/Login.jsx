import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if(username === `denys${password}`) {
            onLogin({username: username, password: password});
        } else {
            setIsError(true)
        }
    };

    return (
        <div className="Login">
            <h2>Log to Weather App</h2>
            {isError ? <p style={{color:'red'}}>Invalid login or password</p> : null}
            <form action="">
                <label>Username: </label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label>Password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
};

export default Login;
