import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import backgroundImage from "./Imagem01.jpeg"; // Importando a imagem
import SuccessCases from './components/SuccessCases';

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed", // Faz a imagem de fundo rolar junto com a página
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Header />
      <HeroSection />
      <About />
      <SuccessCases />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
