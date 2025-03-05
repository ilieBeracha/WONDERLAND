import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AudioPlayer from "./components/AudioPlayer";
import Store from "./components/Store";
import Events from "./components/Events";
import AboutUs from "./components/AboutUs";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className="min-h-screen bg-brightGray">
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
