import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import { TabsDemo } from "./components/TabFeature";
import TextPage from "./components/TextPage";
import Integrations from "./components/Integrations";
import Footer from "./components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <Hero />
        <Feature />
        <TabsDemo />
        <TextPage />
        <Integrations />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
