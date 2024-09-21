import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" storageKey="@pizza-shop:theme">
        <Helmet titleTemplate="%s | Pizza.shop" />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
        <Toaster richColors />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
