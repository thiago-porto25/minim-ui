# ChatInput

ChatInput is a simple component that renders a styled textarea.

It receives all props an `textarea` element does, such as `disabled`, `placeholder`, `onChange`, and etc...

<br/>

## Import

<br/>

```tsx
import { ChatInput } from "@thiagoporto/minim-ui"
```

<br/>

## Usage

<br/>

```tsx
<ChatInput placeholder="Message..." />
```

<br/>

## Props

<br/>

### bgColor

This prop is used to set the background color. It can be one our theme's colors or any color accepted in css. If not set, the default is `gray10`.

<br/>

```tsx
// Our theme's color
<ChatInput bgColor="blue60"/>

// css color
<ChatInput bgColor="purple"/>

// css color
<ChatInput bgColor="#ffddee"/>

// css color
<ChatInput bgColor="rgb(255,0,255)"/>

```

<br/>

### hoverBgColor

This prop is used to set the background color when the ChatInput is hovered. It can be one our theme's colors or any color accepted in css. If not set, the default is `gray20`.

<br/>

```tsx
// Our theme's color
<ChatInput hoverBgColor="blue20"/>

// css color
<ChatInput hoverBgColor="purple"/>

// css color
<ChatInput hoverBgColor="#00ffee"/>

// css color
<ChatInput hoverBgColor="rgb(12,240,255)"/>

```

<br/>

### disabledBgColor

This prop is used to set the background color when the ChatInput is disabled. It can be one our theme's colors or any color accepted in css. If not set, the default is `gray10`.

It's important to note that when the ChatInput is disabled, an opacity of 60% is applied to the whole component.

<br/>

```tsx
// Our theme's color
<ChatInput disabled disabledBgColor="blue10"/>

// css color
<ChatInput disabled disabledBgColor="yellow"/>

// css color
<ChatInput disabled disabledBgColor="#ffaaaa"/>

// css color
<ChatInput disabled disabledBgColor="rgb(255,150,250)"/>

```

<br/>

### focusBgColor

This prop is used to set the background color when the ChatInput is focused. It can be one our theme's colors or any color accepted in css. If not set, the default is `gray20`.

<br/>

```tsx
// Our theme's color
<ChatInput focusBgColor="blue80"/>

// css color
<ChatInput focusBgColor="black"/>

// css color
<ChatInput focusBgColor="#fff"/>

// css color
<ChatInput focusBgColor="rgb(0,0,0)"/>

```

<br/>

### h & w

These props are used to set the ChatInput's height and width, respectively. If not set, the default value for `h` is `sm`. The default value for `w` will be `auto`.

<br/>

```tsx
<ChatInput h="md" w="xxxl" />
```

<br/>

### py & px

These props are used to set the ChatInput's padding in the y axis and x axis, respectively. If not set, the default value for both `py` and `px` is `nn`.

<br/>

```tsx
<ChatInput py="qk" px="xxxs" />
```

<br/>

### radius

This prop is used to set the ChatInput's border radius. It accepts values from our theme's borderRadius object. If not set, the default value is `md`.

<br/>

```tsx
<ChatInput radius="sm" />
```

<br/>

### shapedByParent

This prop is used to set the ChatInput's shape, when `true` the ChatInput will take `100%` of its parent width and height. If not set, the default value is `true`.

<br/>

```tsx
<ChatInput shapedByParent />
```

<hr/>

### [Back to README](../README.md)
