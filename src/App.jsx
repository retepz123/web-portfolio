import './App.css';
import AboutMe from './components/About-Me';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Project from './components/Project';
import Skills from './components/Skills';

function App() {

  return (
    <main>
      <NavBar />
      <Hero/>
      <AboutMe />
      <Skills/>
      <Project />
      <Footer />
    </main>
  );
}

export default App;