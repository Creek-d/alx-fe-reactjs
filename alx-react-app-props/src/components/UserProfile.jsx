// src/components/UserProfile.jsx
import React, { useContext } from 'react';
import UserContext from '../UserContext'; // Import UserContext

const UserProfile = () => {
  // Use useContext to consume user data from UserContext
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>{userData.name}</h2> {/* Access name from context */}
      <p>Age: {userData.age}</p> {/* Access age from context */}
      <p>Bio: {userData.bio}</p> {/* Access bio from context */}
    </div>
  );
};

export default UserProfile;
