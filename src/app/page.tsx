import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import NewCollection from "./components/NewCollection";
export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
     
      <Hero />
      <NewCollection/>
    </div>
  );
}
