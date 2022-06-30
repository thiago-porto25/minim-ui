import { tokens } from "./tokens"

export const theme = {
	...tokens,
	textStyles: {
		// TODO: After design is ready, add content to each text style
		pageHeading: {},
		pageSubHeading: {},
		sectionHeading: {},
		sectionSubHeading: {},
		paragraphHeading: {},
		text: {},
		link: {},
		button: {},
		input: {},
		placeholder: {},
		error: {},
	},
	foundations: {
		bg: {
			primary: tokens.colors.brand.gray10,
			medium: tokens.colors.brand.gray20,
			dark: tokens.colors.brand.gray30,
			darker: tokens.colors.brand.gray40,
		},
		layer: {
			first: tokens.colors.brand.gray30,
			second: tokens.colors.brand.gray40,
			third: tokens.colors.brand.gray60,
			fourth: tokens.colors.brand.gray80,
		},
		field: {
			primary: tokens.colors.brand.gray20,
			hover: tokens.colors.brand.gray30,
		},
		border: {
			primary: tokens.colors.brand.gray50,
			secondary: tokens.colors.action.blue50,
		},
		text: {
			dark: tokens.colors.pure.black,
			light: tokens.colors.pure.white,
		},
		link: {
			primary: tokens.colors.action.blue50,
			hover: tokens.colors.action.blue40,
		},
		icon: {
			primary: tokens.colors.brand.gray80,
			primaryHover: tokens.colors.brand.gray70,
			secondary: tokens.colors.action.blue50,
			secondaryHover: tokens.colors.action.blue40,
			light: tokens.colors.brand.gray10,
			lightHover: tokens.colors.brand.gray20,
		},
		alert: {
			error: tokens.colors.feedback.red,
			problem: tokens.colors.feedback.orange,
			caution: tokens.colors.feedback.yellow,
			success: tokens.colors.feedback.green,
		},
		button: {
			primaryBg: tokens.colors.action.blue50,
			primaryBgHover: tokens.colors.action.blue40,
			primaryText: tokens.colors.pure.white,
			secondaryBg: tokens.colors.brand.gray10,
			secondaryBgHover: tokens.colors.brand.gray20,
			secondaryText: tokens.colors.pure.black,
		},
	},
}
