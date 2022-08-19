# Message

Message is a simple component that renders a chat message.

<br/>

## Import

<br/>

```tsx
import { Message } from "@thiagoporto/minim-ui"
```

<br/>

## Usage

<br/>

```tsx
<Message message="Hello world!" timestamp={new Date("Jul 12 2011")} />
```

<br/>

## Props

<br/>

### bgColor

This prop is used to set the background color. It can be one our theme's colors or any color accepted in css. If not set, the default is `blue10`.

<br/>

```tsx
// Our theme's color
<Message message="Hello world!" timestamp={new Date("Jul 12 2011")} bgColor="blue60"/>

// css color
<Message message="Hello world!" timestamp={new Date("Jul 12 2011")} bgColor="purple"/>

// css color
<Message message="Hello world!" timestamp={new Date("Jul 12 2011")} bgColor="#ffddee"/>

// css color
<Message message="Hello world!" timestamp={new Date("Jul 12 2011")} bgColor="rgb(255,0,255)"/>

```

<br/>

### sent

This prop is used to set if the message is sent or received, which will change its positioning. If not set, the default is `false`.

<br/>

```tsx
<Message message="Hello world!" timestamp={new Date("Jul 12 2011")} sent />
```

<br/>

### message

This prop is used to set the message text.

<br/>

```tsx
<Message message="Hello world!" timestamp={new Date("Jul 12 2011")} />
```

<br/>

### timestamp

This prop is used to set the timestamp of the message. It has to be a valid Date object.

<br/>

```tsx
<Message message="Hello world!" timestamp={new Date("Jul 12 2011")} />
```

<hr/>

### [Back to README](../README.md)
