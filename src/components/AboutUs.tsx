import { motion } from "framer-motion";
import { Music, Users, Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-us");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      id="about-us"
      initial={{ opacity: 0.5, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="relative  py-52 w-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-10 flex flex-col items-center justify-center">
        <div className="text-center mb-16">
          <h2 className="text-xl font-medium text-gray-600 mb-3 uppercase tracking-[0.2em]">
            About Us
          </h2>
          <div className="text-4xl md:text-5xl font-bold text-gray-900">
            Connecting Through Music
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              Icon: Music,
              title: "Original Music",
              text: "Creating unique sounds that define our signature style and resonate with our audience.",
            },
            {
              Icon: Users,
              title: "Community",
              text: "Building a vibrant community where music brings people together as one family.",
            },
            {
              Icon: Heart,
              title: "Emotional Journey",
              text: "Creating powerful emotional experiences that touch hearts and inspire souls.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
                <item.Icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
