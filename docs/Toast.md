# Toast

Toast component displays a toast message on top of all other components.

<br/>

## Import

<br/>

```tsx
import { Toast } from "@thiagoporto/minim-ui"
```

<br/>

## Usage

<br/>

```tsx
const MockComponent = () => {
	const [open, setOpen] = useState(false)

	return (
		<Toast isOpen={open} close={setOpen} type="success" message="Hello world" />
	)
}
```

<br/>

## Props

<br/>

### isOpen

This prop is used to determine if the Toast is open or not.

<br/>

```tsx
const MockComponent = () => {
	const [open, setOpen] = useState(false)

	return (
		<Toast isOpen={open} close={setOpen} type="success" message="Hello world" />
	)
}
```

<br/>

### close

This prop is a function used to close the Toast.

<br/>

```tsx
const MockComponent = () => {
	const [open, setOpen] = useState(false)

	return (
		<Toast isOpen={open} close={setOpen} type="error" message="Hello world" />
	)
}
```

<br/>

### type

This prop is used to determine the Toast styling and title. It can receive the string `error`, `success` or `warning`.

<br/>

```tsx
const MockComponent = () => {
	const [open, setOpen] = useState(false)

	return (
		<Toast isOpen={open} close={setOpen} type="error" message="Hello world" />
	)
}
```

<br/>

### duration

This prop is used to set the duration of time the Toast will be displayed on screen. If not provided, the default value is `3000`.

<br/>

```tsx
const MockComponent = () => {
	const [open, setOpen] = useState(false)

	return (
		<Toast
			isOpen={open}
			close={setOpen}
			type="error"
			message="Hello world"
			duration={5000}
		/>
	)
}
```

<br/>

### message

This prop is used to set the message of the Toast.

<br/>

```tsx
const MockComponent = () => {
	const [open, setOpen] = useState(false)

	return (
		<Toast
			isOpen={open}
			close={setOpen}
			type="success"
			message="This is the toast message"
		/>
	)
}
```

<br/>

### onClose

This prop is a callback function that is called when the Toast closes.

<br/>

```tsx
const MockComponent = () => {
	const [open, setOpen] = useState(false)

	const onClose = () => {
		alert("Toast closed")
	}

	return (
		<Toast
			isOpen={open}
			close={setOpen}
			type="error"
			message="Hello world"
			onClose={onClose}
		/>
	)
}
```

<br/>

### horizontalPosition & verticalPosition

These props are used to set the position of the Toast. If not provided, the default value is `bottom` for verticalPosition and `right` for horizontalPosition.

<br/>

```tsx
const MockComponent = () => {
	const [open, setOpen] = useState(false)

	return (
		<Toast
			isOpen={open}
			close={setOpen}
			type="warning"
			message="Hello world"
			horizontalPosition="left"
			verticalPosition="top"
		/>
	)
}
```

<br/>

### animationOptions

This prop is an object that changes the Toast's animation.

<br/>

```tsx
const MockComponent = () => {
	const [open, setOpen] = useState(false)

	return (
		<Toast
			isOpen={open}
			close={setOpen}
			type="success"
			message="Hello world"
			animationOptions={{
				type: "slideUp",
				duration: 0.5,
				easing: "ease-in-out",
			}}
		/>
	)
}
```

<hr/>

### [Back to README](../README.md)
