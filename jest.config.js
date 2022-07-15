module.exports = {
	roots: ["<rootDir>/src"],
	testRegex: "(/.*\\.test)\\.(ts|tsx)$",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	testEnvironment: "jsdom",
	moduleNameMapper: {
		"\\.(css|less|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy",
	},
}
