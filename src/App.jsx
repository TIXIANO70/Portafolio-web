import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './i18n/LanguageContext';
import Navbar from './components/Navbar/Navbar';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import SoftSkills from './components/SoftSkills/SoftSkills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/global.css';
import './styles/themes.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ParticlesBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <SoftSkills />
          <Contact />
        </main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
