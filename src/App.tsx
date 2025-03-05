import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AudioPlayer from "./components/AudioPlayer";
import Store from "./components/Store";
import Events from "./components/Events";
import AboutUs from "./components/AboutUs";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    scrollTo({ top: 0 });

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden">
      {/* Floating Background Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(180, 195, 220, 0.3), transparent 80%)",
          transform: `translateY(${scrollY * 0.2}px)`, // Moves as you scroll
          transition: "transform 0.1s ease-out",
          zIndex: 0,
        }}
      />

      {/* Animated Soft Lines */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20"
        style={{
          backgroundImage: "url('/assets/soft-waves.svg')", // Softer SVG pattern
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${scrollY * 0.1}px)`,
          transition: "transform 0.1s ease-out",
          zIndex: 0,
        }}
      />

      <Navbar />
      <Hero />
      <AboutUs />
      <div className="relative z-10">
        <AudioPlayer />
      </div>
      <Store />
      <Events />
    </div>
  );
}

export default App;
