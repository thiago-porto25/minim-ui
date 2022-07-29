# Minim UI

Minim UI is a React Component Library for faster UI development using easy and reusable components following our design system.

## Installation

To install Minim UI use the package manager (npm) that comes with [nodeJS](https://nodejs.org/en/download/).

```bash
npm install @thiagoporto/minim-ui
```

or

```bash
yarn add @thiagoporto/minim-ui
```

## Usage

In your React app, import `MinimThemeProvider` and wrap it around your `App` component.

To use our design system's fonts (Lato and Anek Latin) you must import them into your project. We recommend using [Fontsource](https://fontsource.org/) to self host these fonts, but you can also use [Google Fonts](https://fonts.google.com/).

You must also add the `GlobalAndCSSReset` component as a child of our provider to be able to use our components as their are meant to be.

```jsx
// In your react entrypoint file
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { MinimThemeProvider, GlobalAndCSSReset } from "@thiagoporto/minim-ui"

import "@fontsource/lato"
import "@fontsource/anek-latin"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<MinimThemeProvider>
			<GlobalAndCSSReset />
			<App />
		</MinimThemeProvider>
	</React.StrictMode>
)
```

If you'd like to use custom fonts, you can import them with either Google Fonts or Fontsource and pass their name through our provider's `customFonts` prop:

```jsx
// In your react entrypoint file
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { MinimThemeProvider, GlobalAndCSSReset } from "@thiagoporto/minim-ui"

import "@fontsource/open-sans"
import "@fontsource/roboto"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<MinimThemeProvider
			customFonts={{
				primary: "Open Sans, sans-serif",
				secondary: "Roboto, sans-serif",
			}}
		>
			<GlobalAndCSSReset />
			<App />
		</MinimThemeProvider>
	</React.StrictMode>
)
```

After that you can start importing our components and use them in your files.

```jsx
// ExampleComponent.tsx
import { Button, Typography, Spacer } from "@thiagoporto/minim-ui"

export const ExampleComponent: React.FC = () => (
	<div>
		<Button>Hello World</Button>
		<Spacer variant="stack" size={{ sm: "sm", md: "md", lg: "lg" }} />
		<Typography textStyle="heading1" as="h1">
			Hello Minim user
		</Typography>
	</div>
)
```

## Future

We plan to update our library in the future to support more components, support theme extension and better dev experience with some components such as our `Spacer`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
