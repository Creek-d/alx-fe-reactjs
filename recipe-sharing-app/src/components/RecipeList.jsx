import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';  // Use the relative path since recipeStore is now in the same directory



const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes) || [];

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 && <p>No recipes found.</p>}
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '5px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
