# ClickableIcon

ClickableIcon is a simple component that renders an icon wrapped by a styled button.

It receives all props an `button` element does, such as `type`, `disabled`.

<br/>

## Import

<br/>

```tsx
import { ClickableIcon } from "@thiagoporto/minim-ui"
```

<br/>

## Usage

<br/>

```tsx
<ClickableIcon>
	<ArrowIcon />
</ClickableIcon>
```

<br/>

## Props

<br/>

### size

This prop is used to set the size of the ClickableIcon. It can be one of our theme's sizes, or a default size. You can pass a string or an object with specific sizes for each breakpoint.

<br/>

#### Passing a string

<br/>

```tsx
<ClickableIcon size="xxs">
	<ArrowIcon />
</ClickableIcon>
```

<br/>

#### Passing an object

<br/>

```tsx
<ClickableIcon size={{ sm: "xs", md: "sm", lg: "sm" }}>
	<ArrowIcon />
</ClickableIcon>
```

<br/>

### bgColor

This prop is used to set the background color. It can be one our theme's colors or any color accepted in css. If not set, the default is `transparent`.

<br/>

```tsx
// Our theme's color
<ClickableIcon bgColor="gray10">
	<ArrowIcon />
</ClickableIcon>

// css color
<ClickableIcon bgColor="darkGray">
	<ArrowIcon />
</ClickableIcon>

// css color
<ClickableIcon bgColor="#ffddee">
	<ArrowIcon />
</ClickableIcon>

// css color
<ClickableIcon bgColor="rgb(240,255,255)">
	<ArrowIcon />
</ClickableIcon>

```

<br/>

### hoverBgColor

This prop is used to set the background color when the ClickableIcon is hovered. It can be one our theme's colors or any color accepted in css. If not set, the default is `gray20`.

<br/>

```tsx
// Our theme's color
<ClickableIcon hoverBgColor="blue20">
	<ArrowIcon />
</ClickableIcon>

// css color
<ClickableIcon hoverBgColor="transparent">
	<ArrowIcon />
</ClickableIcon>

// css color
<ClickableIcon hoverBgColor="#ddffff">
	<ArrowIcon />
</ClickableIcon>

// css color
<ClickableIcon hoverBgColor="rgb(150,255,255)">
	<ArrowIcon />
</ClickableIcon>

```

<br/>

### activeBgColor

This prop is used to set the background color when the ClickableIcon is active. It can be one our theme's colors or any color accepted in css. If not set, the default is `gray30`.

<br/>

```tsx
// Our theme's color
<ClickableIcon activeBgColor="blue30">
	<ArrowIcon />
</ClickableIcon>

// css color
<ClickableIcon activeBgColor="gray">
	<ArrowIcon />
</ClickableIcon>

// css color
<ClickableIcon activeBgColor="#ffd">
	<ArrowIcon />
</ClickableIcon>

// css color
<ClickableIcon activeBgColor="rgb(255,255,230)">
	<ArrowIcon />
</ClickableIcon>

```

<hr/>

### [Back to README](../README.md)
