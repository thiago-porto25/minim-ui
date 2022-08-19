# Typography

Typography is a simple component used to render text using our theme's textStyles.

It receives all props that are valid for HTML text elements, such as h1, p, b, i, and etc...

It also receives the `as` prop, from styled-components, we recommend only using it to transform the component in another HTML text element. If not provided, it will default to a `p` element.

Additionally it receives the optional `textStyles` prop, which is a string with the name of the text style that will be applied to the text. If not provided, it will default to the `text` text style.

<br/>

## Import

<br/>

```tsx
import { Typography } from "@thiagoporto/minim-ui"
```

<br/>

## Usage

<br/>

```tsx
<Typography>Example text</Typography>
```

<br/>

## Props

<br/>

### as

This prop is used to transform the component in another HTML text element.

<br/>

```tsx
<Typography as="strong" />
```

<br/>

### textStyle

This prop is used to set the text style.

<br/>

```tsx
<Typography textStyle="link" as="a" href="https://google.com">
	Go to google
</Typography>
```

<hr/>

### [Back to README](../README.md)
