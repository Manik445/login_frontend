// UserList.js
import React from 'react';

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (    
        <div key={user.id}>
          <p>{user.username}</p>
          {/* Display other user details */}  
        </div>
      ))}
    </div>
  );
};

export default UserList;
