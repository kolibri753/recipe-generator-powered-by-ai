"use client";

import { createContext, useContext, useRef, ReactNode } from "react";
import { useStore } from "zustand";
import { RecipeStore, createRecipeStore } from "@/app/stores/recipe-store";

type RecipeStoreApi = ReturnType<typeof createRecipeStore>;

const RecipeStoreContext = createContext<RecipeStoreApi | undefined>(undefined);

interface RecipeStoreProviderProps {
	children: ReactNode;
}

const RecipeStoreProvider = ({ children }: RecipeStoreProviderProps) => {
	const storeRef = useRef<RecipeStoreApi>();

	if (!storeRef.current) {
		storeRef.current = createRecipeStore();
	}

	return (
		<RecipeStoreContext.Provider value={storeRef.current}>
			{children}
		</RecipeStoreContext.Provider>
	);
};

const useRecipeStore = <T,>(selector: (state: RecipeStore) => T): T => {
	const store = useContext(RecipeStoreContext);

	if (!store) {
		throw new Error("useRecipeStore must be used within RecipeStoreProvider");
	}

	return useStore(store, selector);
};

export { RecipeStoreProvider, useRecipeStore };
