import { Music, Users, Heart } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="relative bg-white py-52 w-screen ">
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
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
              <Music className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Original Music</h3>
            <p className="text-gray-600">
              Creating unique sounds that define our signature style and
              resonate with our audience.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Community</h3>
            <p className="text-gray-600">
              Building a vibrant community where music brings people together as
              one family.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Emotional Journey</h3>
            <p className="text-gray-600">
              Creating powerful emotional experiences that touch hearts and
              inspire souls.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
