import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <nav>
        <Link to="/profile">Go to Profile</Link> | 
        <Link to="/blog/1">View Blog Post 1</Link> |
        <Link to="/blog/2">View Blog Post 2</Link>
      </nav>
    </div>
  );
};

export default Home;
