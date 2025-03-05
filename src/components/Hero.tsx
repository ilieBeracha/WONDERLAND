import NextEvent from "./NextEvent";

export default function Hero() {
  const timeLeft = {
    days: 41,
    hours: 23,
    minutes: 59,
    seconds: 51,
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-[80vh] ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-7xl md:text-7xl font-bold text-white mb-6">
            Welcome to Wonderland
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Step into a world where music and magic collide
          </p>
        </div>
      </div>
      <div className="p-4 w-full z-100">
        <div className="absolute bottom-[-100px] z-30 left-0 right-0 flex justify-center">
          <NextEvent timeLeft={timeLeft} />
        </div>
      </div>
    </div>
  );
}
