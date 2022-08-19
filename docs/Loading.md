# Loading

Loading is a simple component that renders loading indicator.

It receives the optional `size` prop, which can be one our theme's sizes. If not provided, it will default to `qk` for all breakpoints.

It also receives the optional `gap` prop, which can be one of our theme's sizes. If not provided, it will default to `nn` for all breakpoints.

Additionally it receives the optional `dots` prop, which dictates how many dots will be rendered. If not provided, it will default to `4`.

<br/>

## Import

<br/>

```tsx
import { Loading } from "@thiagoporto/minim-ui"
```

<br/>

## Usage

<br/>

```tsx
<Loading />
```

<br/>

## Props

<br/>

### size

This prop is used to set the size of the logo. It can be one of our theme's sizes, or a default size. You can pass a string or an object with specific sizes for each breakpoint.

<br/>

#### Passing a string

<br/>

```tsx
<Loading size="nn" />
```

<br/>

#### Passing an object

<br/>

```tsx
<Loading size={{ sm: "qk", md: "nn", lg: "nn" }} />
```

<br/>

### gap

This prop is dictates the size of the gap between dots. It can be one of our theme's sizes, or a default size. You can pass a string or an object with specific sizes for each breakpoint.

<br/>

#### Passing a string

<br/>

```tsx
<Loading gap="xxxs" />
```

<br/>

#### Passing an object

<br/>

```tsx
<Loading gap={{ sm: "nn", md: "xxxs", lg: "xxxs" }} />
```

<br/>

### dots

This prop is used to set the number of dots to be rendered. If not provided, it will default to `4`.

<br/>

```tsx
<Loading dots={6} />
```

<hr/>

### [Back to README](../README.md)
