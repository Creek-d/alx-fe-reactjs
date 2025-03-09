import { useRecipeStore } from '../store/recipeStore';
import { useParams, useNavigate } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();  // Get recipe ID from URL
  const navigate = useNavigate();
  
  // Find the recipe based on the ID
  const recipe = useRecipeStore((state) => 
    state.recipes.find((recipe) => recipe.id === Number(id))
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
      <button onClick={() => navigate('/')}>Back to Recipes</button>
    </div>
  );
};

export default RecipeDetails;
