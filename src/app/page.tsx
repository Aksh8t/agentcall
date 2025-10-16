import Hero from "./components/Hero";
import Features from "./components/Features";
import Waitlist from "./components/Waitlist";
import AboveFooter from "./components/AboveFooter";
import Footer from "./components/Footer";
import { NavbarDemo } from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavbarDemo/>
      <main className="relative">
        <Hero />
        <Features />
        <Waitlist />
        <AboveFooter />
      </main>
      <Footer />
    </div>
  );
}
