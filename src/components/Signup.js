import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; 
const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',  
    email: '',
    phone: '',
    gender: 'Male',   
    heardAbout: [],   
    city: 'Mumbai',
    state: 'Maharashtra',       
  });
    
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,    
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => {   
      if (checked) {
        return {
          ...prevData,
          heardAbout: [...prevData.heardAbout, name],
        };
      } else {
        return {
          ...prevData,
          heardAbout: prevData.heardAbout.filter((item) => item !== name),
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement API call to save data
  };


  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="signup-form p-8 bg-white rounded-lg shadow-md max-w-md w-full mx-4 text-gray-800">
        <h2 className="text-3xl font-extrabold mb-6 text-center">Sign Up</h2>
        <label className="block mb-4">
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} pattern="[A-Za-z ]+" required className="form-input mt-1 block w-full" />
        </label>
        <label className="block mb-4">
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-input mt-1 block w-full" />
        </label>
        <label className="block mb-4">
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} pattern="[0-9]+" required className="form-input mt-1 block w-full" />
        </label>
        <label className="block mb-4">
          Gender:
          <div className="gender-options flex justify-between">
            {/* ... (No changes here) */}
          </div>
        </label>
        <label className="block mb-4">
          How did you hear about this?
          <div className="heard-about-options flex flex-col">
            <label className="mb-2">
              <input
                type="checkbox"
                name="LinkedIn"
                checked={formData.heardAbout.includes('LinkedIn')}
                onChange={handleCheckboxChange}
              />
              LinkedIn
            </label>
            <label className="mb-2">
              <input
                type="checkbox"
                name="Friends"
                checked={formData.heardAbout.includes('Friends')}
                onChange={handleCheckboxChange}
              />
              Friends
            </label>
            <label className="mb-2">
              <input
                type="checkbox"
                name="JobPortal"
                checked={formData.heardAbout.includes('JobPortal')}
                onChange={handleCheckboxChange}
              />
              Job Portal
            </label>
            <label className="mb-2">
              <input
                type="checkbox"
                name="Others"
                checked={formData.heardAbout.includes('Others')}
                onChange={handleCheckboxChange}
              />
              Others
            </label>
          </div>
        </label>
        <label className="block mb-4">
          City:
          <select name="city" value={formData.city} onChange={handleChange} className="form-select mt-1 block w-full">
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Ahmedabad">Ahmedabad</option>
          </select>
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transform hover:scale-105 transition-transform duration-300 w-full"
        >
          Save
        </button>
              {/* Button for navigating to the login form */}
      <div className="mt-4 text-center">
        <p>Already have an account?</p>
      <Link to="/login" className='text-blue-500 '>Login Page</Link>
      </div>   
      </form>
    </div>
  );
};   

export default Signup;   
