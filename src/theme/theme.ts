import { tokens } from "./tokens"

export const theme = {
	...tokens,
	textStyles: {
		heading1: {
			fontFamily: tokens.typography.fontFamily.secondary,
			fontWeight: tokens.typography.fontWeight.bold,
			fontSize: tokens.typography.fontSize.xxxl,
			lineHeight: tokens.typography.lineHeight.md,
			color: tokens.colors.brand.gray100,
		},
		heading2: {
			fontFamily: tokens.typography.fontFamily.secondary,
			fontWeight: tokens.typography.fontWeight.bold,
			fontSize: tokens.typography.fontSize.lg,
			lineHeight: tokens.typography.lineHeight.md,
			color: tokens.colors.brand.gray100,
		},
		heading3: {
			fontFamily: tokens.typography.fontFamily.primary,
			fontWeight: tokens.typography.fontWeight.semibold,
			fontSize: tokens.typography.fontSize.xs,
			lineHeight: tokens.typography.lineHeight.md,
			color: tokens.colors.brand.gray100,
		},
		subHeading1: {
			fontFamily: tokens.typography.fontFamily.secondary,
			fontWeight: tokens.typography.fontWeight.regular,
			fontSize: tokens.typography.fontSize.xs,
			lineHeight: tokens.typography.lineHeight.md,
			color: tokens.colors.brand.gray100,
		},
		subHeading2: {
			fontFamily: tokens.typography.fontFamily.primary,
			fontWeight: tokens.typography.fontWeight.regular,
			fontSize: tokens.typography.fontSize.nn,
			lineHeight: tokens.typography.lineHeight.md,
			color: tokens.colors.brand.gray100,
		},
		text: {
			fontFamily: tokens.typography.fontFamily.primary,
			fontWeight: tokens.typography.fontWeight.regular,
			fontSize: tokens.typography.fontSize.xxxs,
			lineHeight: tokens.typography.lineHeight.sm,
			color: tokens.colors.brand.gray100,
		},
		link: {
			fontFamily: tokens.typography.fontFamily.primary,
			fontWeight: tokens.typography.fontWeight.semibold,
			fontSize: tokens.typography.fontSize.nn,
			lineHeight: tokens.typography.lineHeight.sm,
			color: tokens.colors.action.blue50,
			cursor: "pointer",
			"&:hover": {
				textDecoration: "underline",
			},
		},
		error: {
			fontFamily: tokens.typography.fontFamily.primary,
			fontWeight: tokens.typography.fontWeight.regular,
			fontSize: tokens.typography.fontSize.nn,
			lineHeight: tokens.typography.lineHeight.sm,
			color: tokens.colors.feedback.red,
		},
		buttonLg: {
			fontFamily: tokens.typography.fontFamily.primary,
			fontWeight: tokens.typography.fontWeight.bold,
			fontSize: tokens.typography.fontSize.xs,
			lineHeight: tokens.typography.lineHeight.sm,
			color: tokens.colors.pure.white,
		},
		buttonSm: {
			fontFamily: tokens.typography.fontFamily.primary,
			fontWeight: tokens.typography.fontWeight.bold,
			fontSize: tokens.typography.fontSize.xxxs,
			lineHeight: tokens.typography.lineHeight.sm,
			color: tokens.colors.pure.white,
		},
		inputLabel: {
			fontFamily: tokens.typography.fontFamily.primary,
			fontWeight: tokens.typography.fontWeight.semibold,
			fontSize: tokens.typography.fontSize.xxxs,
			lineHeight: tokens.typography.lineHeight.sm,
			color: tokens.colors.brand.gray100,
		},
		placeholder: {
			fontFamily: tokens.typography.fontFamily.primary,
			fontWeight: tokens.typography.fontWeight.regular,
			fontSize: tokens.typography.fontSize.nn,
			lineHeight: tokens.typography.lineHeight.sm,
			color: tokens.colors.brand.gray40,
		},
		timestamp: {
			fontFamily: tokens.typography.fontFamily.primary,
			fontWeight: tokens.typography.fontWeight.regular,
			fontSize: tokens.typography.fontSize.qk,
			lineHeight: tokens.typography.lineHeight.sm,
			color: tokens.colors.brand.gray40,
		},
	},
	foundations: {
		bg: {
			primary: tokens.colors.brand.gray10,
			secondary: tokens.colors.brand.gray20,
			tertiary: tokens.colors.brand.gray30,
			modal: tokens.colors.pure.black + "26",
		},
		field: {
			regular: tokens.colors.pure.white,
			focus: tokens.colors.brand.gray40,
		},
		border: {
			regular: tokens.colors.brand.gray30,
			focus: tokens.colors.action.blue50,
			error: tokens.colors.feedback.red,
		},
		text: {
			dark: tokens.colors.brand.gray100,
			light: tokens.colors.pure.white,
			link: tokens.colors.action.blue50,
			error: tokens.colors.feedback.red,
			placeholder: tokens.colors.brand.gray40,
		},
		link: {
			primary: tokens.colors.action.blue50,
			hover: tokens.colors.action.blue40,
		},
		icon: {
			primary: tokens.colors.action.blue50,
			primaryHover: tokens.colors.action.blue40,
			secondary: tokens.colors.brand.gray70,
			secondaryHover: tokens.colors.brand.gray60,
		},
		alert: {
			error: tokens.colors.feedback.red,
			warning: tokens.colors.feedback.orange,
			success: tokens.colors.feedback.green,
		},
		button: {
			textColor: tokens.colors.pure.white,
			primaryBg: tokens.colors.action.blue50,
			primaryBgHover: tokens.colors.action.blue40,
			primaryBgDisabled: tokens.colors.action.blue50 + "66",
			secondaryBg: tokens.colors.brand.gray100,
			secondaryBgHover: tokens.colors.brand.gray80,
			secondaryBgDisabled: tokens.colors.brand.gray50,
		},
	},
}

export type ThemeType = typeof theme
