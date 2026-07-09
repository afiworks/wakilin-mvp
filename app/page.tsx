import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
export default function Home() {
 return (
<main className="relative flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-50 px-6">
  <Navbar />
<Hero />
</main>
 );
}