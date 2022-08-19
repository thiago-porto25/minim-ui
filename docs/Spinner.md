# Spinner

Spinner is a simple component that renders a spinning loading indicator.

<br/>

## Import

<br/>

```tsx
import { Spinner } from "@thiagoporto/minim-ui"
```

<br/>

## Usage

<br/>

```tsx
<Spinner />
```

<br/>

## Props

<br/>

### size

This prop is used to set the size of the Spinner. It can be one of our theme's sizes, or a default size. You can pass a string or an object with specific sizes for each breakpoint.

<br/>

#### Passing a string

<br/>

```tsx
<Spinner size="xs" />
```

<br/>

#### Passing an object

<br/>

```tsx
<Spinner size={{ sm: "nn", md: "xxxs", lg: "xxs" }} />
```

<br/>

### color

This prop is used to set the spinner's main color. It can be one our theme's colors or any color accepted in css. If not set, the default is `gray20`.

<br/>

```tsx
// Our theme's color
<Spinner color="blue60" />

// css color
<Spinner color="purple" />

// css color
<Spinner color="#ffddee" />

// css color
<Spinner color="rgb(255,0,255)" />

```

<br/>

### emptyColor

This prop is used to set the spinner's empty (secondary) color. It can be one our theme's colors or any color accepted in css. If not set, the default is `gray10`.

<br/>

```tsx
// Our theme's color
<Spinner emptyColor="blue60" />

// css color
<Spinner emptyColor="purple "/>

// css color
<Spinner emptyColor="#00ffee "/>

// css color
<Spinner emptyColor="rgb(12,240,255) "/>

```

<br/>

### thickness

This prop is used to set the Spinner's thickness. If not set, the default is `3`.

<br/>

```tsx
<Spinner thickness={5} />
```

<br/>

### speed

This prop is used to set the Spinner's speed. If not set, the default is `1100`.

<br/>

```tsx
<Spinner speed={500} />
```

<hr/>

### [Back to README](../README.md)
