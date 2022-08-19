# Minim UI

Minim UI is a React Component Library for faster UI development using easy and reusable components following our design system.

## Installation

To install Minim UI use node package manager (npm) which comes with [nodeJS](https://nodejs.org/en/download/).

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

### Using custom fonts

If you'd like to use custom fonts, you can import them with either Google Fonts or Fontsource and pass their name through our provider's `customFonts` prop:

```jsx
// In your react entrypoint file

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { MinimThemeProvider, GlobalAndCSSReset } from "@thiagoporto/minim-ui"

// Don't forget to import your custom fonts here
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

### Intellisense with styled components

You're able to use our theme with intellisense in your own styled components, all you need to do is create a `styled.d.ts` file with the follow content in your project's root directory and add it to your tsconfig.json:

```typescript
// styled.d.ts
import "styled-components"
import { theme } from "@thiagoporto/minim-ui/dist/theme"

type ThemeType = typeof theme

declare module "styled-components" {
	export interface DefaultTheme extends ThemeType {}
}
```

```js
// tsconfig.json

{
  // .....rest of your configuration
  "include": [ /*... other paths */, "styled.d.ts"],
  // .....rest of your configuration
}
```

With these changes the `theme` object in your styled components should have intellisense and typescript checking.

## Usage with Next.js

If you're using this package with Next.js you may have noticed that a flash of unstyled content (FOUC) happens when loading the page. This happens because we use styled components, luckly if you follow these steps you can fix these issues.

In `next.config.js` you must add the following:

```typescript
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
	// .....rest of your configuration
	compiler: {
		// .....rest of your configuration
		styledComponents: true,
	},
}

module.exports = nextConfig
```

In `pages/_document.tsx` you must add the following to render our styled-components stylesheets on the server:

```typescript
// pages/_document.tsx

import Document, { DocumentContext } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: [initialProps.styles, sheet.getStyleElement()],
			}
		} finally {
			sheet.seal()
		}
	}
}
```

After these changes our styles should render correctly.

## Components API

- [Avatar](docs/Avatar.md)
- [Button](docs/Button.md)
- [ChatInput](docs/ChatInput.md)
- [ClickableIcon](docs/ClickableIcon.md)
- [Container](docs/Container.md)
- [GlobalAndCSSReset](docs/GlobalAndCSSReset.md)
- [Icons](docs/Icons.md)
- [Input](docs/Input.md)
- [Loading](docs/Loading.md)
- [Logo](docs/Logo.md)
- [Message](docs/Message.md)
- [MinimThemeProvider](docs/MinimThemeProvider.md)
- [Modal](docs/Modal.md)
- [Popup](docs/Popup.md)
- [Portal](docs/Portal.md)
- [Spacer](docs/Spacer.md)
- [Spinner](docs/Spinner.md)
- [Toast](docs/Toast.md)
- [Typography](docs/Typography.md)

## Future

We plan to update our library in the future to have more components and support theme extension.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
