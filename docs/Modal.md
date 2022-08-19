# Modal

Modal is a simple component that displays a modal with content provided by the user.

It's important to use it with the `ModalContent` component as its child for correct behavior.

<br/>

## Import

<br/>

```tsx
import { Modal, ModalContent } from "@thiagoporto/minim-ui"
```

<br/>

## Usage

<br/>

```tsx
const MockComponent = () => {
	const [open, setOpen] = useState(false)

	return (
		<Modal isOpen={open} close={setOpen}>
			<ModalContent>content</ModalContent>
		</Modal>
	)
}
```

<br/>

## Props

<br/>

### isOpen

This prop is used to determine if the Modal is open or not.

<br/>

```tsx
const MockComponent = () => {
	const [open, setOpen] = useState(false)

	return (
		<Modal isOpen={open} close={setOpen}>
			<ModalContent>content</ModalContent>
		</Modal>
	)
}
```

<br/>

### close

This prop is a function used to close the Modal.

<br/>

```tsx
const MockComponent = () => {
	const [open, setOpen] = useState(false)

	return (
		<Modal isOpen={open} close={setOpen}>
			<ModalContent>content</ModalContent>
		</Modal>
	)
}
```

<br/>

### onClose

This prop is a callback function that is called when the modal closes.

<br/>

```tsx
const MockComponent = () => {
	const [open, setOpen] = useState(false)

	const onClose = () => {
		alert("Modal closed")
	}

	return (
		<Modal isOpen={open} close={setOpen} onClose={onClose}>
			<ModalContent>content</ModalContent>
		</Modal>
	)
}
```

<br/>

### backdropOptions

This prop is an object that changes the styling of the Modal's backdrop.

<br/>

```tsx
const MockComponent = () => {
	const [open, setOpen] = useState(false)

	return (
		<Modal
			isOpen={open}
			close={setOpen}
			backdropOptions={{
				visible: true,
				bgColor: "#fff",
				alignChildren: "center",
				justifyChildren: "center",
			}}
		>
			<ModalContent>content</ModalContent>
		</Modal>
	)
}
```

<br/>

### animationOptions

This prop is an object that changes the Modal's animation.

<br/>

```tsx
const MockComponent = () => {
	const [open, setOpen] = useState(false)

	return (
		<Modal
			isOpen={open}
			close={setOpen}
			animationOptions={{
				type: "slideUp",
				duration: 0.5,
				easing: "ease-in-out",
			}}
		>
			<ModalContent>content</ModalContent>
		</Modal>
	)
}
```

<hr/>

### [Back to README](../README.md)
