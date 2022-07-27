import { Sizes } from "../../types/sizes.interface"

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	smSize?: Sizes
	mdSize?: Sizes
	lgSize?: Sizes
}
