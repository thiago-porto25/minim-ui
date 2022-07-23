export const defaultObjectPropsHelper = <T>(defaultProp: T, prop?: T): T => {
	return { ...defaultProp, ...prop }
}
