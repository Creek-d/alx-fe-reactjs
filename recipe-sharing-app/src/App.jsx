import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';  // Import AddRecipeForm

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />  {/* Route for adding new recipes */}
      </Routes>
    </Router>
  );
}

export default App;
