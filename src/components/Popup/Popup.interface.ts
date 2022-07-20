import { AnimationOptions } from "../../types/animationOptions.interface"
import { Sizes } from "../../types/sizes.interface"

export interface PopupProps extends React.PropsWithChildren {
	isOpen: boolean
	close: React.Dispatch<React.SetStateAction<boolean>>
	x?: Sizes
	y?: Sizes
	animationOptions?: AnimationOptions
}

export interface PopupItemProps extends React.HTMLAttributes<HTMLDivElement> {
	text: string
}

export interface StyledPopupProps {
	x: Sizes
	y: Sizes
	animationOptions: AnimationOptions
}
