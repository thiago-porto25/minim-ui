# Container

Container is a simple component that restricts its children to a max width.

It receives an optional `maxW` prop that defines the max width of the container. If not provided, it will default to `lg`.

<br/>

## Import

<br/>

```tsx
import { Container } from "@thiagoporto/minim-ui"
```

<br/>

## Usage

<br/>

```tsx
<Container>
	<h1>Title</h1>

	<p>paragraph</p>
</Container>
```

<br/>

## Props

<br/>

### maxW

This prop is used to set the max width of the container, similar to bootstrap's `container` class. Its value can be one of our theme's breakpoints, or a default size.

<br/>

```tsx
<Container maxW="md">
	<h1>Title</h1>

	<p>paragraph</p>
</Container>
```

<hr/>

### [Back to README](../README.md)
