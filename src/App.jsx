import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import SuccessCases from './components/SuccessCases/SuccessCases';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <SuccessCases />
      <Services />
      <Footer />
    </>
  );
};

export default App;
