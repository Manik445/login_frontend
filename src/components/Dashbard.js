// Dashboard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserList from '../UserList';

const Dashboard = () => {  

   
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Dashboard</h2>
      <Link
        to="/add-user"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 inline-block mb-4"
      >
        Add User
      </Link>
      <UserList />
    </div>
  );
};  

export default Dashboard;
