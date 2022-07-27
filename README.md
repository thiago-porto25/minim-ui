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

In your React app, import `MinimThemeProvider` and wrap it around your `App` component. (As of now you cannot extend our default theme).

```jsx
// In your react entrypoint file
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { MinimThemeProvider } from "@thiagoporto/minim-ui"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<MinimThemeProvider>
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
