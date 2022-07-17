import { Breakpoints } from "../../types/breakpoints.interface"

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	maxW?: Breakpoints
}
