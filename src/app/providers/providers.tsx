"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
			{children}
		</ThemeProvider>
	);
};

export default Providers;
