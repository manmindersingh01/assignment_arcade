import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import { TabsDemo } from "./components/TabFeature";
import TextPage from "./components/TextPage";
import Integrations from "./components/Integrations";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

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
