import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div style={{ maxWidth: '600px', margin: '20px auto', textAlign: 'center' }}>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={<>
            <AddRecipeForm />
            <RecipeList />
          </>} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
