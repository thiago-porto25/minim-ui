import Ts from "rollup-plugin-typescript2"
import css from "rollup-plugin-import-css"

export default {
	input: ["src/index.ts"],
	output: {
		dir: "dist",
		format: "esm",
		sourcemap: true,
	},
	plugins: [Ts(), css()],
	preserveModules: true,
	external: ["react", "styled-components", "normalize.css/normalize.css"],
}
