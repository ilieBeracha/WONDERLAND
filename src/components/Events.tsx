import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Calendar, MapPin, Music, Clock, Users } from "lucide-react";
import event1 from "../assets/images/event1.jpg";
import event2 from "../assets/images/event2.jpg";
import event3 from "../assets/images/event3.jpg";

const events = [
  {
    date: "June 12, 2025",
    time: "10:00 PM - 4:00 AM",
    title: "Neon Dreams Festival",
    venue: "Skyline Warehouse, Downtown",
    capacity: "2,000 people",
    description:
      "An unforgettable night filled with music, lights, and energy. Featuring international DJs and immersive visual experiences.",
    image: event1,
    genre: "Techno & House",
    position: "left",
    color: "purple",
  },
  {
    date: "July 24, 2025",
    time: "9:00 PM - 5:00 AM",
    title: "Pulse Rhythm Night",
    venue: "The Crystal Garden",
    capacity: "1,500 people",
    description:
      "A festival experience with top DJs and amazing vibes. Dive into a night of progressive beats and euphoric moments.",
    image: event2,
    genre: "Progressive & Trance",
    position: "right",
    color: "pink",
  },
  {
    date: "August 8, 2025",
    time: "11:00 PM - 6:00 AM",
    title: "Deep Fusion Underground",
    venue: "The Vault Club",
    capacity: "1,200 people",
    description:
      "A night of deep house beats and electric ambiance. Experience the underground scene with cutting-edge sound systems.",
    image: event3,
    genre: "Deep House & Minimal",
    position: "left",
    color: "blue",
  },
];

export default function Events() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeEvent, setActiveEvent] = useState(0);
  const sectionRef = useRef(null);

  // Mouse parallax effect for event cards
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    if (sectionRef.current) {
      const rect = (sectionRef.current as any).getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = (sectionRef.current as any).getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.6) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sound effect on hover
  const playHoverSound = () => {
    const audio = new Audio(
      "data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAASAAAeMwAUFBQUHh4eHh4qKioqKjMzMzMzMzs7Ozs7SUlJSUlJVVVVVVVidi4uLi4uKioqKlpaWlpaWmZmZmZmZnJycnJye3t7e3t7iIiIiIiIlpaWlpaWo6Ojvb29vb3KysrKysrV1dXV1eDg4ODg4O/v7+/v7+/v7+/v7+/vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//gRZAAAApUAKeEAIBQiZXaOIQJhIiZbXihEpImTbTKiESYSImWGkCSFCI+WmhJCJkQjld4QiFCJkZn8IERLf//Kn//lTJT4S//8w//5g19+GvwmYIN/+fv//0t/////nKn//6RSLIRdGDYOxEIUGYNGPnCIOS/n//ggyCjz//6SzRUBwoCh4zA0CjwGBQkFgJJGCR//o//pLbLeTEFNRTMuOTkuNaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//gxZOQH8XoATigDDDQ34AnFQGMjAqgBPkAEIGFEACfMAIQMlKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy45OS41qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EGTgB/MmAE14AxQ8OEAJvwBBBwngATMgCCAMaAAnGAEEAAqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//sQZP8H8qYATXgCCDwoIAnGAGKHQRgBM+AMUWAXACX8AQQYqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy45OS41qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
    );
    audio.volume = 0.2;
    audio.play().catch((e) => console.log("Audio play error:", e));
  };

  return (
    <motion.section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-32 overflow-hidden"
      id="events"
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.15),transparent_40%)]"></div>
        <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center_right,rgba(219,39,119,0.15),transparent_70%)]"></div>

        {/* Animated lines */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent w-full"
              style={{ top: `${10 + i * 12}%` }}
              initial={{ x: "-100%" }}
              animate={isVisible ? { x: "100%" } : {}}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: i * 0.3,
              }}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-pink-500/20 to-transparent h-full"
              style={{ left: `${10 + i * 12}%` }}
              initial={{ y: "-100%" }}
              animate={isVisible ? { y: "100%" } : {}}
              transition={{
                duration: 10 + i * 0.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white opacity-80"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading with 3D effect */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block relative"
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            <motion.h2
              className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 pb-3"
              animate={{
                rotateX: [0, 5, 0],
                rotateY: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              Upcoming Events
            </motion.h2>
            <div className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </motion.div>
          <motion.p
            className="text-gray-300 text-xl mt-6 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Feel the bass, embrace the energy, and let the music take control of
            your senses
          </motion.p>
        </motion.div>

        {/* Events timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600/30 via-pink-500/30 to-blue-600/30 rounded-full hidden md:block"
            initial={{ height: 0 }}
            animate={isVisible ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          ></motion.div>

          <div className="relative space-y-32">
            {events.map((event, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => {
                  setActiveEvent(index);
                  playHoverSound();
                }}
                onMouseLeave={() => setActiveEvent(0)}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className={`flex flex-col ${
                  event.position === "right"
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } items-center gap-12 relative z-10`}
              >
                {/* Timeline connector */}
                <motion.div
                  className={`absolute top-1/3 left-1/2 w-8 h-8 rounded-full hidden md:flex items-center justify-center ${
                    activeEvent === index
                      ? `bg-${event.color}-500`
                      : "bg-gray-700"
                  }`}
                  style={{
                    transform: "translate(-50%, -50%)",
                    boxShadow:
                      activeEvent === index
                        ? `0 0 20px 2px rgba(${
                            event.color === "purple"
                              ? "124,58,237"
                              : event.color === "pink"
                              ? "219,39,119"
                              : "59,130,246"
                          }, 0.5)`
                        : "none",
                    transition: "all 0.3s ease",
                  }}
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                >
                  <span className="text-white text-sm font-bold">
                    {index + 1}
                  </span>
                </motion.div>

                {/* Event image with effects */}
                <motion.div
                  className="w-full md:w-5/12"
                  style={{
                    transform:
                      activeEvent === index
                        ? `perspective(1000px) rotateX(${
                            mousePosition.y * -5
                          }deg) rotateY(${
                            mousePosition.x *
                            (event.position === "right" ? 5 : -5)
                          }deg)`
                        : "perspective(1000px) rotateX(0) rotateY(0)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <div className="relative overflow-hidden rounded-2xl group">
                    <motion.div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></motion.div>

                    <motion.img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-96 object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Hover effect overlay */}
                    <motion.div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-${event.color}-600/30 to-transparent transition-opacity duration-300`}
                    ></motion.div>

                    {/* Corner accent */}
                    <motion.div
                      className={`absolute top-0 left-0 w-16 h-16 bg-${event.color}-500/80 rounded-br-lg flex items-center justify-center`}
                      initial={{ x: -64, y: -64 }}
                      animate={isVisible ? { x: 0, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                    >
                      <Calendar className="text-white h-6 w-6" />
                    </motion.div>

                    {/* Genre tag */}
                    <div className="absolute bottom-4 left-4">
                      <motion.span
                        className={`px-3 py-1 bg-${event.color}-500/90 text-white text-sm rounded-full font-medium`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                      >
                        {event.genre}
                      </motion.span>
                    </div>
                  </div>
                </motion.div>

                {/* Event details with hover effects */}
                <motion.div
                  className="w-full md:w-7/12 text-white"
                  style={{
                    transform:
                      activeEvent === index
                        ? `perspective(1000px) translateZ(10px)`
                        : "perspective(1000px) translateZ(0px)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all shadow-lg hover:shadow-xl">
                    <div className="flex flex-col">
                      <motion.div
                        className="flex items-center space-x-2"
                        initial={{
                          opacity: 0,
                          x: event.position === "right" ? -20 : 20,
                        }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                      >
                        <span
                          className={`text-${event.color}-400 font-bold text-lg`}
                        >
                          {event.date}
                        </span>
                      </motion.div>

                      <motion.h3
                        className={`text-4xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-${event.color}-300`}
                        initial={{
                          opacity: 0,
                          x: event.position === "right" ? -20 : 20,
                        }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                      >
                        {event.title}
                      </motion.h3>

                      <div className="mt-6 space-y-3">
                        <motion.div
                          className="flex items-center space-x-3 text-gray-300"
                          initial={{ opacity: 0, y: 10 }}
                          animate={isVisible ? { opacity: 1, y: 0 } : {}}
                          transition={{
                            duration: 0.5,
                            delay: 0.7 + index * 0.2,
                          }}
                        >
                          <MapPin className="h-5 w-5 text-gray-400" />
                          <span>{event.venue}</span>
                        </motion.div>

                        <motion.div
                          className="flex items-center space-x-3 text-gray-300"
                          initial={{ opacity: 0, y: 10 }}
                          animate={isVisible ? { opacity: 1, y: 0 } : {}}
                          transition={{
                            duration: 0.5,
                            delay: 0.8 + index * 0.2,
                          }}
                        >
                          <Clock className="h-5 w-5 text-gray-400" />
                          <span>{event.time}</span>
                        </motion.div>

                        <motion.div
                          className="flex items-center space-x-3 text-gray-300"
                          initial={{ opacity: 0, y: 10 }}
                          animate={isVisible ? { opacity: 1, y: 0 } : {}}
                          transition={{
                            duration: 0.5,
                            delay: 0.9 + index * 0.2,
                          }}
                        >
                          <Users className="h-5 w-5 text-gray-400" />
                          <span>{event.capacity}</span>
                        </motion.div>
                      </div>

                      <motion.p
                        className="text-gray-300 mt-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                      >
                        {event.description}
                      </motion.p>

                      <motion.div
                        className="mt-8"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 1.1 + index * 0.2 }}
                      >
                        <button
                          className={`px-6 py-3 bg-${event.color}-600 hover:bg-${event.color}-500 text-white rounded-lg font-medium flex items-center space-x-2 transform transition-all duration-300 hover:translate-y-px hover:shadow-lg`}
                          onMouseEnter={() => playHoverSound()}
                        >
                          <Music className="h-5 w-5" />
                          <span>Get Tickets</span>
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            View All Events
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
