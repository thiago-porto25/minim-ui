module.exports = {
	roots: ["<rootDir>/src"],
	testRegex: "(/.*\\.test)\\.(ts|tsx)$",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	testEnvironment: "jsdom",
	moduleNameMapper: {
		"\\.(css|less|scss)$": "identity-obj-proxy",
	},
}
