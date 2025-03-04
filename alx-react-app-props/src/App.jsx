// src/App.jsx
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'; // Import UserProfile
import UserContext from './UserContext'; // Import UserContext

function App() {
  const userData = { name: "Alice", age: 25, bio: "Loves hiking and photography" };

  return (
    // Provide user data globally via UserContext.Provider
    <UserContext.Provider value={userData}>
      <div>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <UserProfile /> {/* Now UserProfile consumes context instead of props */}
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
