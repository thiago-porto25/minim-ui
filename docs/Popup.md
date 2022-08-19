# Popup

Popup component displays a popup menu on top of its parent component.

It is recommended to use this component with `PopupItem` component as its children. The `PopupItem` component is used to display the items of the popup menu and it receives all props that a `div` element can receive.

<br/>

## Import

<br/>

```tsx
import { Popup, PopupItem } from "@thiagoporto/minim-ui"
```

<br/>

## Usage

<br/>

```tsx
const MockComponent = () => {
	const [open, setOpen] = useState(false)

	return (
		<Popup isOpen={open} close={setOpen}>
			<PopupItem text="Logout" />
		</Popup>
	)
}
```

<br/>

## Props

<br/>

### isOpen

This prop is used to determine if the Popup is open or not.

<br/>

```tsx
const MockComponent = () => {
	const [open, setOpen] = useState(false)

	return (
		<Popup isOpen={open} close={setOpen}>
			<PopupItem text="Logout" />
		</Popup>
	)
}
```

<br/>

### close

This prop is a function used to close the Popup.

<br/>

```tsx
const MockComponent = () => {
	const [open, setOpen] = useState(false)

	return (
		<Popup isOpen={open} close={setOpen}>
			<PopupItem text="Logout" />
		</Popup>
	)
}
```

<br/>

### x & y

These props are used to set the position of the Popup. If not provided, the default value is `qk` for `x` and `xxs` for `y`.

<br/>

```tsx
const MockComponent = () => {
	const [open, setOpen] = useState(false)

	return (
		<Popup isOpen={open} close={setOpen} x="nn" y="xs">
			<PopupItem text="Logout" />
		</Popup>
	)
}
```

<br/>

### animationOptions

This prop is an object that changes the Popup's animation.

<br/>

```tsx
const MockComponent = () => {
	const [open, setOpen] = useState(false)

	return (
		<Popup
			isOpen={open}
			close={setOpen}
			animationOptions={{
				type: "slideUp",
				duration: 0.5,
				easing: "ease-in-out",
			}}
		>
			<PopupItem text="Logout" />
		</Popup>
	)
}
```

<br/>

<hr/>

<br/>

## Props for PopupItem

### text

This prop is used to set the text of the PopupItem.

<br/>

```tsx
<PopupItem text="This is the PopupItem text" />
```

<hr/>

### [Back to README](../README.md)
