import React from "react"
import { LoadingProps } from "."
import { LoadingDotsContainer } from "./styles"

export const Loading: React.FC<LoadingProps> = ({
	gap = { sm: "nn", md: "nn", lg: "nn" },
	size = { sm: "qk", md: "qk", lg: "qk" },
	dots = 4,
}) => {
	return (
		<LoadingDotsContainer title="Loading" gap={gap} size={size}>
			{new Array(dots).fill("").map((_, index) => (
				<div key={`dot-${index}`} className="casing">
					<span className="dot" />
				</div>
			))}
		</LoadingDotsContainer>
	)
}
