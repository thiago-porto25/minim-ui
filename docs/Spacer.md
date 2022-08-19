# Spacer

Spacer is a simple component used for spacing elements.

It receives the required `variant` prop, which is used to set if the spacer is vertical or horizontal.

It also receives the required `size` prop, which can be one our theme's sizes.

<br/>

## Import

<br/>

```tsx
import { Spacer } from "@thiagoporto/minim-ui"
```

<br/>

## Usage

<br/>

```tsx
<h1>Title</h1>
<Spacer variant="stack" size="xxxs" />
<p>lorem ipsum, this is a description</p>
```

<br/>

## Props

<br/>

### variant

This prop is used to set if the spacer is a vertical or horizontal.

<br/>

#### vertical

<br/>

```tsx
<Spacer variant="stack" size="nn" />
```

<br/>

#### horizontal

<br/>

```tsx
<Spacer variant="inline" size={{ sm: "qk", md: "nn", lg: "nn" }} />
```

<br/>

### size

This prop is used to set the size of the logo. It can be one of our theme's sizes, or a default size. You can pass a string or an object with specific sizes for each breakpoint.

<br/>

#### Passing a string

<br/>

```tsx
<Spacer variant="inline" size="nn" />
```

<br/>

#### Passing an object

<br/>

```tsx
<Spacer variant="stack" size={{ sm: "qk", md: "nn", lg: "nn" }} />
```

<hr/>

### [Back to README](../README.md)
