import event1 from "../assets/images/event1.jpg";
import event2 from "../assets/images/event2.jpg";
import event3 from "../assets/images/event3.jpg";

const events = [
  {
    date: "Date 1",
    title: "Event 1",
    venue: "Venue 1",
    description:
      "An unforgettable night filled with music, lights, and energy.",
    image: event1,
    position: "left",
  },
  {
    date: "Date 2",
    title: "Event 2",
    venue: "Venue 2",
    description: "A festival experience with top DJs and amazing vibes.",
    image: event2,
    position: "right",
  },
  {
    date: "Date 3",
    title: "Event 3",
    venue: "Venue 3",
    description: "A night of deep house beats and electric ambiance.",
    image: event3,
    position: "left",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="relative bg-gray-900 py-24 overflow-hidden shadow-lg shadow-gray-900/50"
    >
      {/* Floating Neon Glow Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-16 left-1/4 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute -bottom-16 right-1/4 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      <div className="relative max-w-screen-xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white text-center mb-6">
          Upcoming Events
        </h2>
        <p className="text-gray-400 text-lg text-center mb-24">
          Feel the bass, embrace the energy, and let the music take control.
        </p>

        <div className="space-y-24">
          {events.map((event, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                event.position === "right" ? "md:flex-row-reverse" : ""
              } items-center md:items-start gap-10`}
            >
              {/* Event Image */}
              <div className="w-full md:w-1/2">
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-96 object-cover rounded-xl shadow-xl shadow-gray-800/20"
                  />
                ) : (
                  <div className="w-full h-80 bg-gray-600 rounded-lg"></div>
                )}
              </div>

              {/* Event Details */}
              <div className="w-full md:w-1/2 text-white">
                <span className="text-pink-400 font-bold text-lg tracking-wider">
                  {event.date}
                </span>
                <h3 className="text-3xl font-extrabold mt-2">{event.title}</h3>
                <p className="text-gray-300 text-lg mt-2">{event.venue}</p>
                <p className="text-gray-400 mt-4">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
