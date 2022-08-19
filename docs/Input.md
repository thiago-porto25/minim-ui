# Input

Input is a simple component that renders a styled input.

It receives all props an `input` element does, such as `type`, `disabled`, `placeholder`, `onChange`, and etc...

<br/>

## Import

<br/>

```tsx
import { Input } from "@thiagoporto/minim-ui"
```

<br/>

## Usage

<br/>

```tsx
<Input placeholder="Insert your email" type="email" />
```

<br/>

## Props

<br/>

### bgColor & borderColor

These props are used to set the background color and border color, respectively. They can be one our theme's colors or any color accepted in css. If not set, the default is bgColor is `white` and borderColor is `gray30`.

<br/>

```tsx
// Our theme's color
<Input bgColor="gray10" borderColor="gray40" />

// css color
<Input bgColor="purple" borderColor="black" />

// css color
<Input bgColor="#ffddee" borderColor="#ff00dd" />

// css color
<Input bgColor="rgb(25,100,25)" borderColor="#fff" />

```

<br/>

### hoverBgColor & hoverBorderColor

These props are used to set the background color and border color when the input is hovered, respectively. They can be one our theme's colors or any color accepted in css. If not set, the default is hoverBgColor is `white` and hoverBorderColor is `gray40`.

<br/>

```tsx
// Our theme's color
<Input hoverBgColor="blue20" hoverBorderColor="gray20" />

// css color
<Input hoverBgColor="purple" hoverBorderColor="red" />

// css color
<Input hoverBgColor="#00ffee" hoverBorderColor="#fff" />

// css color
<Input hoverBgColor="rgb(12,240,255)" hoverBorderColor="rgb(0,0,0)" />

```

<br/>

### disabledBgColor & disabledBorderColor

These props are used to set the background color and border color when the input is disabled, respectively. They can be one our theme's colors or any color accepted in css. If not set, the default is disabledBgColor is `white` and disabledBorderColor is `gray30`.

It's important to note that when the Input is disabled, an opacity of 80% is applied to the whole component.

<br/>

```tsx
// Our theme's color
<Input disabled disabledBgColor="blue10" disabledBorderColor="gray10" />

// css color
<Input disabled disabledBgColor="yellow" disabledBorderColor="white" />

// css color
<Input disabled disabledBgColor="#ffaaaa" disabledBorderColor="#ffcccc" />

// css color
<Input disabled disabledBgColor="rgb(255,150,250)" disabledBorderColor="rgb(255,200,250)" />

```

<br/>

### focusBgColor & focusBorderColor

These props are used to set the background color and border color when the input is focused, respectively. They can be one our theme's colors or any color accepted in css. If not set, the default is focusBgColor is `gray10` and focusBorderColor is `blue50`.

<br/>

```tsx
// Our theme's color
<Input focusBgColor="blue80" focusBorderColor="blue70" />

// css color
<Input focusBgColor="black" focusBorderColor="gray" />

// css color
<Input focusBgColor="#fff" focusBorderColor="#ddd" />

// css color
<Input focusBgColor="rgb(0,0,0)" focusBorderColor="rgb(30,30,30)" />

```

<br/>

### errorBorderColor

This prop is used to set the border color when the input `error` prop is `true`. It can be one our theme's colors or any color accepted in css. If not set, the default is `red`.

<br/>

```tsx
// Our theme's color
<Input errorBorderColor="orange" />

// css color
<Input errorBorderColor="darkRed" />

// css color
<Input errorBorderColor="#ffaaff" />

// css color
<Input errorBorderColor="rgb(255,0,0)" />

```

<br/>

### error

This prop is used to set the error styles of the input. If not set, the default is `false`.

<br/>

```tsx
<Input error placeholder="placeholder..." />
```

<br/>

### h & w

These props are used to set the Input's height and width, respectively. If not set, the default value for `h` is `sm`. The default value for `w` will be `auto`.

<br/>

```tsx
<Input h="md" w="xxxl" />
```

<br/>

### py & px

These props are used to set the Input's padding in the y axis and x axis, respectively. If not set, the default value for `py` is `nn` and for `px` is `xxxs`.

<br/>

```tsx
<Input py="qk" px="xxs" />
```

<br/>

### radius

This prop is used to set the Input's border radius. It accepts values from our theme's borderRadius object. If not set, the default value is `sm`.

<br/>

```tsx
<Input radius="md" />
```

<br/>

### shapedByParent

This prop is used to set the Input's shape, when `true` the Input will take `100%` of its parent width and height. If not set, the default value is `true`.

<br/>

```tsx
<Input shapedByParent="false" />
```

<hr/>

### [Back to README](../README.md)
