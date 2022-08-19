# Avatar

Avatar is a simple component that displays an image. It is used to display the avatar of a user.

It receives all props an `img` element does, such as `src`, `alt`. It also receives the optional `size` prop, which can be one our theme's sizes.

If not provided, it will default to `xxs` for the sm breakpoint and `xs` for md and lg breakpoints.

<br/>

## Import

<br/>

```tsx
import { Avatar } from "@thiagoporto/minim-ui"
```

<br/>

## Usage

<br/>

```tsx
<Avatar src="avatar.png" alt="user profile avatar image" size="xxxs" />
```

<br/>

## Props

<br/>

### size

This prop is used to set the size of the avatar. It can be one of our theme's sizes, or a default size. You can pass a string or an object with specific sizes for each breakpoint.

<br/>

#### Passing a string

<br/>

```tsx
<Avatar src="thom.png" alt="thom's profile avatar image" size="nn" />
```

<br/>

#### Passing an object

<br/>

```tsx
<Avatar
	src="jonny.png"
	alt="jonny's profile avatar image"
	size={{ sm: "nn", md: "xxxs", lg: "xxs" }}
/>
```

<hr/>

### [Back to README](../README.md)
