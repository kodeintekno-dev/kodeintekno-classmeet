import About from "./components/About";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

export default function App() {
  return (
    <main className="container mx-auto sm:px-12 px-5">
      <Navbar />
      <About />
      <Service />
    </main>
  );
}
