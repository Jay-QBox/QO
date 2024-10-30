// src/components/Login.jsx
import { useState } from 'react';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const correctUsername = import.meta.env.VITE_USERNAME;
  const correctPassword = import.meta.env.VITE_PASSWORD;

  const handleLogin = () => {
    if (username === correctUsername && password === correctPassword) {
      const expirationTime = Date.now() + 2 * 60 * 60 * 1000; // 2 hours in milliseconds
      localStorage.setItem('sessionToken', JSON.stringify({ token: 'logged_in', expiration: expirationTime }));
      onLoginSuccess();
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <div className="flex items-start justify-center min-h-screen pt-12 bg-gray-100">
      <div className="w-full max-w-xs p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 mb-4 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-base"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-6  bg-white  border rounded-lg focus:outline-none focus:ring-2 focus:ring-base"
        />
        <button
          onClick={handleLogin}
          className="w-full py-2 text-white bg-base rounded-lg hover:bg-base focus:outline-none focus:ring-2 focus:ring-base"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
