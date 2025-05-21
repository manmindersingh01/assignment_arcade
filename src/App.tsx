import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import { TabsDemo } from "./components/TabFeature";
import TextPage from "./components/TextPage";
import Integrations from "./components/Integrations";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <TabsDemo />
      <TextPage />
      <Integrations />
      <Footer />
    </>
  );
}

export default App;
