import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [], // ✅ Always initialize recommendations as an array

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () =>
    set((state) => {
      if (state.favorites.length === 0) return { recommendations: [] }; // ✅ Handle no favorites case

      // Mock recommendation logic: suggest recipes NOT already favorited
      const recommended = state.recipes.filter(
        (recipe) =>
          !state.favorites.includes(recipe.id) && Math.random() > 0.3 // ✅ Ensure variety in recommendations
      );

      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
