import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_BAse } from '../GlobalApi';
import axios from 'axios';

const RegisterPage = () => {
  const navigate=useNavigate()
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // At least one uppercase letter.
    // At least one lowercase letter.
    // At least one digit.
    // At least one special character from the set [@$!%*?&].
    // Minimum length of 8 characters.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ 
        ...formData,
        [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    console.log("clicked")
    e.preventDefault();
    const validEmail=emailPattern.test(formData.email)
    const strongPassword=passwordPattern.test(formData.password)
    if(validEmail&&strongPassword){
      try {
  const res = await axios.post(`${API_BAse}/auth/register`,formData)
  if(res.data.success){
    const userData=JSON.stringify(res.data.data)
    window.localStorage.setItem("userData",userData)
    navigate("/private/home")
    toast.success(res.data.message,{autoClose:5000,closeButton:true, closeOnClick:true})  
  }else{
    toast.error(res.data.message,{autoClose:5000,closeButton:true, closeOnClick:true})  
  }
} catch (error) {
  toast.error(res.data.message,{autoClose:5000,closeButton:true, closeOnClick:true})  

}
    }else{
        toast.error("please enter a valid email and strong password",{autoClose:5000,closeButton:true, closeOnClick:true})
    }
    
  };
  const handleGoogleSignIn = () => {
    // Add your Google Sign-In logic here
    toast.success("Google Sign-In successful!", { autoClose: 5000, closeButton: true, closeOnClick: true });
    console.log('Google Sign-In clicked');
  };

  return (
    <div className="max-w-md w-600 mx-auto mt-8 bg-cyan-50 p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Register</h2>
      <form className=" w-full space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
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
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className='flex justify-center' >

        <button onClick={handleSubmit} type="submit" className="bg-blue-500 w-1/2 ml-30px text-white p-2 rounded-md hover:bg-blue-600">
          Register
        </button>
        </div>

        <div className='flex justify-center'>
        <button type="button" onClick={handleGoogleSignIn} className="bg-red-500 w-1/2 text-white p-2 rounded-md hover:bg-red-600">
          register with Google
        </button>
        </div>
        <div>

        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-500">Register</Link>
        </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
