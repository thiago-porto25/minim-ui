import { render, RenderOptions } from "@testing-library/react"
import { ChatRandomThemeProvider } from "../components"

const renderWithContexts = (ui: JSX.Element, options?: RenderOptions) => {
	return render(ui, { wrapper: ChatRandomThemeProvider, ...options })
}

export { renderWithContexts as render }
