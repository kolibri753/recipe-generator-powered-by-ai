import { create } from "zustand";

interface RecipeStore {
	recipe: string;
	isLoading: boolean;
	setRecipe: (recipe: string) => void;
	setLoading: (isLoading: boolean) => void;
}

export const useRecipeStore = create<RecipeStore>((set) => ({
	recipe: "",
	isLoading: false,
	setRecipe: (recipe) => set({ recipe }),
	setLoading: (isLoading) => set({ isLoading }),
}));
