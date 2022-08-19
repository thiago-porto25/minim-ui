# Logo

Logo is a simple component that renders ChatRandom's logo.

It receives the optional `size` prop, which can be one our theme's sizes. If not provided, it will default to `sm` for all breakpoints.

It also receives the optional `linkTo` prop, which will make the logo a link. As default, this prop is undefined.

<br/>

## Import

<br/>

```tsx
import { Logo } from "@thiagoporto/minim-ui"
```

<br/>

## Usage

<br/>

```tsx
<Logo size="md" linkTo="/" />
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
<Logo size="xs" />
```

<br/>

#### Passing an object

<br/>

```tsx
<Logo size={{ sm: "nn", md: "xxxs", lg: "xxs" }} />
```

<br/>

### linkTo

This prop is used to make the logo a link. As default, this prop is undefined.

<br/>

```tsx
<Logo size="lg" linkTo="/home" />
```

<hr/>

### [Back to README](../README.md)
