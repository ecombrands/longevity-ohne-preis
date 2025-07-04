import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Role from './components/Role';
import Gallery from './components/Gallery';
import Contribution from './components/Contribution';
import PresentationDetails from './components/PresentationDetails';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Role />
        <About />
        <Gallery />
        <Contribution />
        <PresentationDetails />
      </main>
      <Footer />
    </div>
  );
}

export default App;