import React from "react"
import { screen } from "@testing-library/react"

import { render } from "../../test-utils"
import { ClickableIcon, ClickableIconProps } from "."
import { theme } from "../../theme"

const svgTitle = "I am svg"

const getClickableIcon = () => screen.getByTestId("ClickableIcon")
const getSvg = () => screen.getByTitle(svgTitle)
const renderClickableIcon = (props?: ClickableIconProps) =>
	render(
		<ClickableIcon
			data-testid="ClickableIcon"
			activeBgColor={props?.activeBgColor}
			hoverBgColor={props?.hoverBgColor}
			bgColor={props?.bgColor}
			size={props?.size}
		>
			<svg>
				<title>{svgTitle}</title>
			</svg>
		</ClickableIcon>
	)

// --------------- SIMPLE TESTS ---------------
describe("ClickableIcon - simple tests", () => {
	it("should render without errors", () => {
		renderClickableIcon()

		expect(getClickableIcon()).toBeInTheDocument()
	})

	it("should render without errors with different Color props", () => {
		renderClickableIcon({
			bgColor: "blue10",
			hoverBgColor: "blue30",
			activeBgColor: "blue40",
		})

		expect(getClickableIcon()).toBeInTheDocument()
	})

	it("should render without errors with different Size prop", () => {
		renderClickableIcon({ size: "lg" })

		expect(getClickableIcon()).toBeInTheDocument()
	})

	it("should render children", () => {
		renderClickableIcon()

		expect(getSvg()).toBeInTheDocument()
		expect(getClickableIcon()).toBeInTheDocument()
	})
})

// --------------- STYLE TESTS ---------------
describe("ClickableIcon - Style tests", () => {
	it("should render correct default bgColor prop", () => {
		renderClickableIcon()

		expect(getClickableIcon()).toHaveStyle({
			backgroundColor: theme.colors.pure.transparent,
		})
	})

	it("should render correct default size prop", () => {
		renderClickableIcon()

		expect(getClickableIcon()).toHaveStyle({
			width: theme.base.spacing.xs,
			height: theme.base.spacing.xs,
		})
	})

	it("should render correct custom color props", () => {
		renderClickableIcon({ bgColor: "#ff00ff" })

		expect(getClickableIcon()).toHaveStyle({
			backgroundColor: "#ff00ff",
		})
	})

	it("should render correct custom size prop", () => {
		renderClickableIcon({ size: "lg" })

		expect(getClickableIcon()).toHaveStyle({
			width: theme.base.spacing.lg,
			height: theme.base.spacing.lg,
		})
	})
})
