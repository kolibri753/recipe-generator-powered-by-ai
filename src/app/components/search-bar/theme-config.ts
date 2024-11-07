const customTheme = (theme: any, themeMode: "light" | "dark") => ({
	...theme,
	colors: {
		...theme.colors,
		neutral0: themeMode === "dark" ? "var(--black)" : "var(--white)",
		neutral80: themeMode === "dark" ? "var(--white)" : "var(--dark-grey)",
		primary25: themeMode === "dark" ? "var(--dark-grey)" : "var(--light-grey)",
		primary: "var(--green)",
		primary50: "var(--orange)",
		primary75: themeMode === "dark" ? "var(--light-grey)" : "var(--light-grey)",
		neutral10: themeMode === "dark" ? "#444" : "#ddd",
		neutral20: themeMode === "dark" ? "#555" : "#ccc",
		neutral30: "var(--light-grey)",
	},
});

export { customTheme };
