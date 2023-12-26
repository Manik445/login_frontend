// Login.js
import React, { useState } from 'react';  
import { Link } from 'react-router-dom';
     
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <label className="block mb-4 w-full">
          <span className="text-gray-700">Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input mt-1 block w-full"
          />
        </label>
        <label className="block mb-4 w-full">
          <span className="text-gray-700">Password:</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input mt-1 block w-full"
          />
        </label>
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
        >
          Login
        </button>
        <div className="mt-4 text-center">
        <p>  New user ?  </p>
      <Link to="/" className='text-blue-500 '>Regiseter</Link>
      </div>      
      </div>
    </div>
  );
};

export default Login;
