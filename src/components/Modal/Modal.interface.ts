import { AnimationOptions } from "../../types/animationOptions.interface"
import { BackdropOptions } from "../../types/backdropOptions.interface"

export interface ModalProps extends React.PropsWithChildren {
	isOpen: boolean
	close: React.Dispatch<React.SetStateAction<boolean>>
	onClose?: () => void
	backdropOptions?: BackdropOptions
	animationOptions?: AnimationOptions
}

export interface ModalContainerProps {
	backdropOptions: BackdropOptions
	animationOptions: AnimationOptions
}
