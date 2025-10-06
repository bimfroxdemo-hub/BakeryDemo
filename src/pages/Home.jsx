import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaLeaf, FaTruck, FaCookieBite } from "react-icons/fa";
import heroImage1 from "../assets/home/Hero.png";
import heroImage2 from "../assets/home/hero1.png";
import sweetsImage from "../assets/home/sweets-collection.png";
import breadsImage from "../assets/home/fresh-breads.jpg";
import cakeImage from "../assets/cakes/black-forest.png";



const Home = () => {
  const heroImages = [heroImage1, heroImage2];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden flex items-center justify-center">
        {/* Sliding wrapper */}
        <div
          className="flex transition-transform duration-1000 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {heroImages.map((img, index) => (
            <div key={index} className="min-w-full h-full relative">
              {/* Actual image */}
              <img src={img} alt={`Hero ${index + 1}`} className="w-full h-full object-cover" />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}
        </div>

        {/* Hero content */}
        <div className="absolute z-20 container mx-auto px-4 sm:px-6 text-center md:text-left">
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-snug md:leading-tight">
              Freshly Baked Happiness, Made with Love.
            </h1>
            <p className="text-sm sm:text-base md:text-2xl text-white/90 mb-4 sm:mb-6 leading-relaxed">
              From artisan breads to traditional sweets, our kitchen serves joy in every bite.
            </p>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 bg-green-600 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-lg font-semibold shadow-lg hover:bg-green-700 transition"
            >
              <FaWhatsapp />
              Order on WhatsApp
            </a>
          </div>
        </div>

        {/* Bullets */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-20 bg-orange-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-600">
              Today's Specials & Seasonal Treats
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-full sm:max-w-2xl mx-auto mt-2">
              Discover our freshly baked favorites and limited-time delights
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <img
                src={sweetsImage}
                alt="Traditional Sweets"
                className="w-full h-64 sm:h-72 object-cover rounded-t-lg"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-amber-700 mb-2">
                  Traditional Sweets
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Authentic mithai made with pure ghee and love.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-base sm:text-lg font-semibold text-yellow-500">
                    ₹299/kg
                  </span>
                  <Link
                    to="/menu"
                    className="text-sm sm:text-md font-medium bg-orange-400 text-gray-700 px-3 sm:px-4 py-2 rounded hover:bg-orange-300 transition"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <img
                src={breadsImage}
                alt="Artisan Breads"
                className="w-full h-64 sm:h-72 object-cover rounded-t-lg"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-amber-700 mb-2">
                  Artisan Breads
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Freshly baked sourdough, whole wheat, and more.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-base sm:text-lg font-semibold text-yellow-500">
                    ₹45–₹120
                  </span>
                  <Link
                    to="/menu"
                    className="text-sm sm:text-md font-medium bg-orange-400 text-gray-700 px-3 sm:px-4 py-2 rounded hover:bg-orange-300 transition"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <img
                src={cakeImage}
                alt="Custom Cakes"
                className="w-full h-64 sm:h-72 object-cover rounded-t-lg"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-amber-700 mb-2">
                  Custom Cakes
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Personalized cakes for birthdays, weddings, and special occasions.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-base sm:text-lg font-semibold text-yellow-500">
                    ₹500+
                  </span>
                  <Link
                    to="/menu"
                    className="text-sm sm:text-md font-medium bg-orange-400 text-gray-700 px-3 sm:px-4 py-2 rounded hover:bg-orange-300 transition"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Why Choose Sweet Delights?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-full sm:max-w-2xl mx-auto mt-2">
              We're committed to bringing you the finest baked goods with uncompromising quality.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-orange-200 transition">
                <FaLeaf className="text-2xl sm:text-3xl text-orange-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
                Fresh & Hygienic
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                All products baked daily using the finest ingredients in a hygienic environment.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-orange-200 transition">
                <FaCookieBite className="text-2xl sm:text-3xl text-orange-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
                Traditional Recipes
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Our master bakers follow time-tested recipes passed down for generations.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-orange-200 transition">
                <FaTruck className="text-2xl sm:text-3xl text-orange-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
                Doorstep Delivery
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Quick and safe delivery to your doorstep. Order via WhatsApp and enjoy fresh treats at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-amber-600 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Taste Happiness?
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-full sm:max-w-2xl mx-auto">
            Join thousands of happy customers who start their day with our freshly baked delights.
          </p>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 text-white px-4 sm:px-6 py-3 rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:bg-green-700 transition"
          >
            <FaWhatsapp />
            Order on WhatsApp Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
