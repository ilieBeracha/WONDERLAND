import { Store, Calendar } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 py-2 transition-all duration-300">
      <div className="mx-20 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-center">
            {/* <Music2 className="h-7 w-7 text-purple-500" /> */}
            <a
              href="#wonderland"
              className="ml-2 text-2xl font-bold text-gray-300"
            >
              WONDERLAND
            </a>
          </div>
          <div className="flex space-x-8">
            <a
              href="#store"
              className="text-gray-300 hover:text-white flex items-center"
            >
              <Store className="h-5 w-5 mr-1" />
              <span>Tamu:studio</span>
            </a>
            <a
              href="#events"
              className="text-gray-300 hover:text-white flex items-center"
            >
              <Calendar className="h-5 w-5 mr-1" />
              <span>Events</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
