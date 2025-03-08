import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import ProfileDetails from "./pages/ProfileDetails.jsx";
import ProfileSettings from "./pages/ProfileSettings.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <BrowserRouter>  {/* ✅ Wrap all routes inside BrowserRouter */}
      <div>
        <h1>React Router Advanced</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Protected Route for Profile */}
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />}>
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>
          </Route>

          {/* Dynamic Routing for Blog Posts */}
          <Route path="/blog/:postId" element={<BlogPost />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
