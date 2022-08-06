import { SizeProp } from "../../types/sizes.interface"

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	size?: SizeProp
}
