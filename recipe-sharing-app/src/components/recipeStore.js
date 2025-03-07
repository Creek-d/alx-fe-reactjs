import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // ✅ Always initialized as an empty array
  filteredRecipes: [],
  searchTerm: '',
  favorites: [],

  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title?.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe],
    })),
}));

export default useRecipeStore;
