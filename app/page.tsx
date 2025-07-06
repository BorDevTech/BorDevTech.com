import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="main-container">
      <Navbar />
      <div className="hero-section">
        <Hero />
      </div>
      <Footer />
    </div>
  );
}
