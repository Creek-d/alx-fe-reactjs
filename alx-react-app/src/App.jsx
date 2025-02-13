import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'; // Import UserProfile

function App() {
  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      
      {/* Add UserProfile component here */}
      <UserProfile name="David" age="31" bio="Loves hiking and biking" />

      <Footer />
    </div>
  );
}

export default App;
