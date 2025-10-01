import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Tools from './components/Tools';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <div className="app">
          <Hero />
          <About />
          <Portfolio />
          <Tools />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
