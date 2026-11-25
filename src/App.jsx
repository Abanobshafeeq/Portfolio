import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import usePortfolioMotion from './hooks/usePortfolioMotion'
import './motion.css'

function App() {
  usePortfolioMotion();
  return (
    <>
      <div className="reading-progress" aria-hidden="true" />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />

    </>
  );
}


export default App;
