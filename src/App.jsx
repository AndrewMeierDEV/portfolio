import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Stack from "./components/Stack.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="portfolio-shell" id="top">
      <a href="#main" className="skip-link">Saltar al contenido</a>
      <Header />
      <main id="main">
        <Hero />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
