import { RouterProvider } from "react-router-dom"
import { router } from "./routers"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { Toaster } from "sonner"
import { ThemeProvider } from "./components/theme-provider"

function App() {

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" storageKey="@pizza-shop:theme">
        <Helmet titleTemplate="%s | Pizza.shop"/>
        <RouterProvider router={router} />
        <Toaster richColors/>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
