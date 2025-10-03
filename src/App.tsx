import { ThemeProvider } from "@/components/theme-provider";
import { AppFooter, AppHeader } from "./components/common";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="page">
        <AppHeader />
        <div className="container"></div>
        <AppFooter />
      </div>
    </ThemeProvider>
  );
}

export default App;
