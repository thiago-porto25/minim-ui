import React from "react"
import { IconComponent } from "../types/icon.interface"

export const Google: IconComponent = (props) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M23.745 12.27C23.745 11.48 23.675 10.73 23.555 10H12.255V14.51H18.725C18.435 15.99 17.585 17.24 16.325 18.09V21.09H20.185C22.445 19 23.745 15.92 23.745 12.27Z"
				fill="#4285F4"
			/>
			<path
				d="M12.255 24C15.495 24 18.205 22.92 20.185 21.09L16.325 18.09C15.245 18.81 13.875 19.25 12.255 19.25C9.12498 19.25 6.47498 17.14 5.52498 14.29H1.54498V17.38C3.51498 21.3 7.56498 24 12.255 24Z"
				fill="#34A853"
			/>
			<path
				d="M5.52501 14.29C5.27501 13.57 5.145 12.8 5.145 12C5.145 11.2 5.28501 10.43 5.52501 9.71V6.62H1.545C0.725004 8.24 0.255005 10.06 0.255005 12C0.255005 13.94 0.725004 15.76 1.545 17.38L5.52501 14.29Z"
				fill="#FBBC05"
			/>
			<path
				d="M12.255 4.75C14.025 4.75 15.605 5.36 16.855 6.55L20.275 3.13C18.205 1.19 15.495 0 12.255 0C7.56498 0 3.51498 2.7 1.54498 6.62L5.52498 9.71C6.47498 6.86 9.12498 4.75 12.255 4.75Z"
				fill="#EA4335"
			/>
		</svg>
	)
}