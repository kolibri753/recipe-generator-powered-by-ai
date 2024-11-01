import { create } from "zustand";

interface IngredientOption {
	label: string;
	value: string;
}

interface RecipeStore {
	ingredients: IngredientOption[];
	recipe: string;
	isLoading: boolean;
	setIngredients: (ingredients: IngredientOption[]) => void;
	setRecipe: (recipe: string) => void;
	setLoading: (isLoading: boolean) => void;
}

export const useRecipeStore = create<RecipeStore>((set) => ({
	ingredients: [],
	recipe: "",
	isLoading: false,
	setIngredients: (ingredients) => set({ ingredients }),
	setRecipe: (recipe) => set({ recipe }),
	setLoading: (isLoading) => set({ isLoading }),
}));
