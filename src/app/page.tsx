import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Waitlist from "./components/Waitlist";
import AboveFooter from "./components/AboveFooter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Waitlist />
        <AboveFooter />
      </main>
      <Footer />
    </div>
  );
}
