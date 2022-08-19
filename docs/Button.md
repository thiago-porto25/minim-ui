# Button

Button is a simple component that renders a styled button.

It receives all props an `button` element does, such as `type`, `disabled`.

<br/>

## Import

<br/>

```tsx
import { Button } from "@thiagoporto/minim-ui"
```

<br/>

## Usage

<br/>

```tsx
<Button>Click Me!</Button>
```

<br/>

## Props

<br/>

### variant

This prop is used to set the button's styles based on the variant. If not set, the default is `primary`.

<br/>

```tsx
<Button variant="secondary">Click Me!</Button>
```

<br/>

### bgColor

This prop is used to set the background color. It can be one our theme's colors or any color accepted in css. If not set, the default is `blue50` for primary variant and `gray100` for secondary variant.

<br/>

```tsx
// Our theme's color
<Button bgColor="blue60">Click Me!</Button>

// css color
<Button bgColor="purple">Click Me!</Button>

// css color
<Button bgColor="#ffddee">Click Me!</Button>

// css color
<Button bgColor="rgb(255,0,255)">Click Me!</Button>

```

<br/>

### hoverBgColor

This prop is used to set the background color when the button is hovered. It can be one our theme's colors or any color accepted in css. If not set, the default is `blue40` for primary variant and `gray80` for secondary variant.

<br/>

```tsx
// Our theme's color
<Button hoverBgColor="blue60">Click Me!</Button>

// css color
<Button hoverBgColor="purple">Click Me!</Button>

// css color
<Button hoverBgColor="#00ffee">Click Me!</Button>

// css color
<Button hoverBgColor="rgb(12,240,255)">Click Me!</Button>

```

<br/>

### disabledBgColor

This prop is used to set the background color when the button is disabled. It can be one our theme's colors or any color accepted in css. If not set, the default is `blue50` for primary variant and `gray100` for secondary variant.

It's important to note that when the button is disabled, an opacity of 40% is applied to the selected `disabledBgColor`.

<br/>

```tsx
// Our theme's color
<Button disabledBgColor="blue90">Click Me!</Button>

// css color
<Button disabledBgColor="yellow">Click Me!</Button>

// css color
<Button disabledBgColor="#ff0000">Click Me!</Button>

// css color
<Button disabledBgColor="rgb(255,0,0)">Click Me!</Button>

```

<br/>

### activeBgColor

This prop is used to set the background color when the button is active. It can be one our theme's colors or any color accepted in css. If not set, the default is `blue30` for primary variant and `gray70` for secondary variant.

<br/>

```tsx
// Our theme's color
<Button activeBgColor="blue100">Click Me!</Button>

// css color
<Button activeBgColor="black">Click Me!</Button>

// css color
<Button activeBgColor="#fff">Click Me!</Button>

// css color
<Button activeBgColor="rgb(0,0,0)">Click Me!</Button>

```

<br/>

### large

This prop is used to set the button's size. If not set, the default is `false`.

<br/>

```tsx
<Button large>Click Me!</Button>
```

<br/>

### h & w

These props are used to set the button's height and width, respectively. If not set, the default value for `h` is `md` when `large` is true or `sm` when it's false. The default value for `w` will be `o`.

<br/>

```tsx
<Button h="md" w="xxxl">
	Click Me!
</Button>
```

<br/>

### py & px

These props are used to set the button's padding in the y axis and x axis, respectively. If not set, the default value for both `py` and `px` is `nn`.

<br/>

```tsx
<Button py="qk" px="xxxs">
	Click Me!
</Button>
```

<br/>

### radius

This prop is used to set the button's border radius. It accepts values from our theme's borderRadius object. If not set, the default value is `md`.

<br/>

```tsx
<Button radius="sm">Click Me!</Button>
```

<br/>

### ripple

This prop is used to set the button's ripple effect. If not set, the default value is `false` and no ripple effect is applied.

<br/>

```tsx
<Button ripple>Click Me!</Button>
```

<br/>

### shapedByParent

This prop is used to set the button's shape, when `true` the button will take `100%` of its parent width and height. If not set, the default value is `false` and the button will follow its default height and width.

<br/>

```tsx
<Button shapedByParent>Click Me!</Button>
```

<br/>

### isLoading

This prop is used to display a loading Spinner instead of the button's text. If not set, the default value is `false` and no loading spinner is applied.

<br/>

```tsx
<Button loading={true}>Click Me!</Button>
```

<hr/>

### [Back to README](../README.md)
