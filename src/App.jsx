import Navbar from "./components/Navbar/Navbar.jsx"
import Hero from "./components/Hero/Hero.jsx"
import About from "./components/About/About.jsx"
import Features from "./components/Features/Features.jsx"
import Testimonials from "./components/Testimonials/Testimonials.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Recipes from "./components/Recipes/Recipes.jsx"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Recipes />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App