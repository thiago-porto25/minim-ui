import Ts from "rollup-plugin-typescript2"
import css from "rollup-plugin-import-css"
import image from "@rollup/plugin-image"

export default {
	input: ["src/index.ts"],
	output: {
		dir: "dist",
		format: "esm",
		sourcemap: true,
	},
	plugins: [Ts(), css(), image()],
	preserveModules: true,
	external: [
		"react",
		"react-dom",
		"styled-components",
		"normalize.css/normalize.css",
		"dayjs",
		"focus-trap-react",
	],
}
