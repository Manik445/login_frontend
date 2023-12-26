// AddUser.js
import React, { useState } from 'react';

const AddUser = ({ addUser }) => {
  const [username, setUsername] = useState('');
  // Add other fields as needed

  const handleSave = () => {
    // Implement save logic
    addUser({ username });
    // Reset form fields
    setUsername('');
  };

  return (
    <div>
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

      {/* Add other input fields for mobile and email */}
      
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default AddUser;
