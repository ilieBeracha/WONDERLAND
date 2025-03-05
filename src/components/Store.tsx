import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    name: "Neon Dreams T-Shirt",
    price: "$39.99",
    image:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Bass Drop Hoodie",
    price: "$59.99",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Wonderland Tour Shirt",
    price: "$34.99",
    image:
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
];

export default function Store() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("store");
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
      id="store"
      initial={{ opacity: 0.5, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="py-48"
    >
      <div className="max-w-6xl mx-auto px-6 ">
        <h2 className="text-4xl md:text-6xl font-extrabold text-black mb-8 text-center">
          Tamu:Studio
        </h2>
        <p className="text-black text-center mb-28">
          Official Wonderland Merchandise - In collaboration with TAMU
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.5, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-white">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-purple-300 font-bold text-lg">
                    {product.price}
                  </span>
                  <button className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-lg flex items-center justify-center transition-all">
                    <ShoppingCart className="h-5 w-5 mr-1" /> Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
