import { createStore } from "zustand/vanilla";

export interface RecipeStoreState {
	recipe: string;
	isLoading: boolean;
}

export interface RecipeStoreActions {
	setRecipe: (recipe: string) => void;
	setLoading: (isLoading: boolean) => void;
}

export type RecipeStore = RecipeStoreState & RecipeStoreActions;

const defaultInitState: RecipeStoreState = {
	recipe: "",
	isLoading: false,
};

export const createRecipeStore = (
	initState: RecipeStoreState = defaultInitState
) => {
	return createStore<RecipeStore>((set) => ({
		...initState,
		setRecipe: (recipe) => set({ recipe }),
		setLoading: (isLoading) => set({ isLoading }),
	}));
};
