import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setSubmitted(true);
    navigate('/welcome');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="border rounded-lg px-4 py-2 focus:outline-none focus:border-green-400 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input type="password" id="password" name="password" className="border rounded-lg px-4 py-2 focus:outline-none focus:border-green-400 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" className="border rounded-lg px-4 py-2 focus:outline-none focus:border-green-400 w-full" />
          </div>
          <button onClick={handleSubmit} className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
