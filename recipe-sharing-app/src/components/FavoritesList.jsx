import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  // Get favorite recipes without triggering a state update in render
  const favoriteRecipes = recipes.filter((recipe) => favorites.includes(recipe.id));

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? <p>No favorite recipes yet.</p> : null}
      {favoriteRecipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '5px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
