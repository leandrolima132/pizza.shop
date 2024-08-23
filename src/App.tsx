import { RouterProvider } from "react-router-dom"
import { router } from "./routers"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { Toaster } from "sonner"

function App() {

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Pizza.shop"/>
      <RouterProvider router={router} />
      <Toaster richColors/>
    </HelmetProvider>
  )
}

export default App
