// src/UserInfo.jsx
import React, { useContext } from 'react';
import UserContext from './UserContext'; // Import UserContext

function UserInfo() {
  const userData = useContext(UserContext); // Access userData from context

  return <UserDetails userData={userData} />; // Pass userData to UserDetails
}

export default UserInfo;
