import { render, RenderOptions } from "@testing-library/react"
import { MinimThemeProvider } from "../components"

const renderWithContexts = (ui: JSX.Element, options?: RenderOptions) => {
	return render(ui, { wrapper: MinimThemeProvider, ...options })
}

export { renderWithContexts as render }
