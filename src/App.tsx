import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function App() {
  return (
    <main className="container mx-auto sm:px-12 px-5 space-y-7">
      <Navbar />
      <Hero />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
}
