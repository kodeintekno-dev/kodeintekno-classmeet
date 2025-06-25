import About from "./components/About";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="container mx-auto sm:px-12 px-5">
      <Navbar />
      <About />
    </main>
  );
}
