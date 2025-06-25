import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";

export default function App() {
  return (
    <main className="container mx-auto sm:px-12 px-5">
      <Navbar />
      <Project />
      <Testimonial />
    </main>
  );
}
