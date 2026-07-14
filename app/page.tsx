import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyWakilin from "./components/WhyWakilin";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gray-50 px-6 py-20">
      <Navbar />

      <div className="flex flex-col items-center justify-center">
        <Hero />
      </div>

      <HowItWorks />

      <WhyWakilin />
    </main>
  );
}