import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import {Helmet} from "react-helmet-async";

function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://sentimetre-backend.onrender.com/auth/login" , {username, password},{withCredentials:true,});
      toast.success(response.data.message);
      localStorage.setItem("username", response.data.username);
      navigate('/Upload');
    } 
    catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message || 'Incorrect username or password.');
      } else if (error.response && error.response.status === 404) {
        toast.error(error.response.data.message || 'User not found.');
      } else {
        toast.error('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-700">
            <Helmet>
                <title>Login</title>
                <meta name="description" content="Log In page" />
                <meta name="keywords" content="Sentimeter, LogIn, Log In" />
            </Helmet>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Admin Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Log In
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/" className="text-blue-500 hover:text-blue-700">Back to Home</a>
        </div>
        <div className="mt-4 text-center">
          <a href="/signup" className="text-blue-500 hover:text-blue-700">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
