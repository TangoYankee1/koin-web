import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import heroImage from '../assets/background.jpeg';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (role) => {
    localStorage.setItem('role', role);
    navigate(role === 'student' ? '/student' : '/admin');
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#002147' }}
                type="button"
                onClick={() => handleLogin('student')}
              >
                Login as Student
              </button>
              <button
                className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#FFC72C' }}
                type="button"
                onClick={() => handleLogin('admin')}
              >
                Login as Admin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;