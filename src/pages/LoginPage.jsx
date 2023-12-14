
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    toast.success("done",{autoClose:5000,closeButton:true, closeOnClick:true})
    console.log('Form submitted:', formData);
  };
  const handleGoogleSignIn = async() => {
    window.location.href = 'http://localhost:4040/google/login'
    toast.success("Google Sign-In successful!", { autoClose: 5000, closeButton: true, closeOnClick: true });
    console.log('Google Sign-In clicked');
  };

  return (
    <div className="max-w-md w-600 mx-auto mt-8 bg-cyan-50 p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login </h2>
      <form onSubmit={handleSubmit} className=" w-full space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className='flex justify-center' >

        <button type="submit" className="bg-blue-500 w-1/2 ml-30px text-white p-2 rounded-md hover:bg-blue-600">
          Login
        </button>
        </div>

        <div className='flex justify-center'>
        <button type="button" onClick={handleGoogleSignIn} className="bg-red-500 w-1/2 text-white p-2 rounded-md hover:bg-red-600">
          Sign In with Google
        </button>
        </div>
        <div>

        <p className="mt-4 text-center">
          Sign up with email? <Link to="/register" className="text-blue-500">Register</Link>
        </p>
        </div>
      </form>
    </div>
  );
};



export default LoginPage