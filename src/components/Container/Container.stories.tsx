import React from "react"
import { Meta, Story } from "@storybook/react"
import { Container, ContainerProps } from "."

const meta: Meta = {
	title: "Components/Container",
	component: Container,
}

export default meta

const Template: Story<ContainerProps> = (args) => (
	<Container {...args}>
		<div style={{ backgroundColor: "gray", width: "100%", height: "500px" }}>
			<h1
				style={{
					color: "white",
					fontFamily: "sans-serif",
					fontSize: "20px",
					textAlign: "center",
					paddingTop: "200px",
				}}
			>
				Constrains children to 1024px max-width or what was passed through to
				the maxW prop
			</h1>
		</div>
	</Container>
)

export const Default: Story<ContainerProps> = Template.bind({})

export const DifferentMaxWidth: Story<ContainerProps> = Template.bind({})
DifferentMaxWidth.args = {
	maxW: "sm",
}
