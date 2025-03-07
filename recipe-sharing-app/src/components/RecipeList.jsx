import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.filteredRecipes.length > 0 ? state.filteredRecipes : state.recipes
  ) || []; // ✅ Ensure recipes is always an array

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes && recipes.length === 0 ? <p>No recipes found.</p> : null}
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
