import { Link } from "react-router-dom";
import { FaWhatsapp, FaLeaf, FaTruck, FaBirthdayCake, FaBreadSlice, FaCookieBite } from "react-icons/fa";
import heroImage from "../assets/home/Hero.png";
import sweetsImage from "../assets/home/sweets-collection.png";
import breadsImage from "../assets/home/fresh-breads.jpg";
import cakeImage from "../assets/cakes/black-forest.png";


const Home = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Freshly Baked Happiness, Made with Love.
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-8 leading-relaxed">
              From artisan breads to traditional sweets, our kitchen serves joy in every bite.
            </p>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-green-700 transition"
            >
              <FaWhatsapp />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-600">
              Today's Specials & Seasonal Treats
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our freshly baked favorites and limited-time delights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <img
                src={sweetsImage}
                alt="Traditional Sweets"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-700 mb-2">Traditional Sweets</h3>
                <p className="text-gray-600 mb-4">
                  Authentic mithai made with pure ghee and love.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-yellow-500">₹299/kg</span>
                  <Link
                    to="/menu"
                   className="text-md font-medium bg-orange-400 text-gray-700 px-4 py-2 rounded hover:bg-orange-300 transition"
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
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-700 mb-2">Artisan Breads</h3>
                <p className="text-gray-600 mb-4">
                  Freshly baked sourdough, whole wheat, and more.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-yellow-500">₹45–₹120</span>
                  <Link
                    to="/menu"
                    className="text-md font-medium bg-orange-400 text-gray-700 px-4 py-2 rounded hover:bg-orange-300 transition"
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
                alt="Artisan Breads"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-700 mb-2">Custom Cakes</h3>
                <p className="text-gray-600 mb-4">
                  Personalized cakes for birthdays, weddings, and special occasions.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-yellow-500">₹500+</span>
                  <Link
                    to="/menu"
                    className="text-md font-medium bg-orange-400 text-gray-700 px-4 py-2 rounded hover:bg-orange-300 transition"
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
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4 ">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Why Choose Sweet Delights?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to bringing you the finest baked goods with uncompromising quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition">
                <FaLeaf className="text-3xl text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fresh & Hygienic</h3>
              <p className="text-gray-600">
                All products baked daily using the finest ingredients in a hygienic environment.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition">
                <FaCookieBite className="text-3xl text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Traditional Recipes</h3>
              <p className="text-gray-600">
                Our master bakers follow time-tested recipes passed down for generations.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition">
                <FaTruck className="text-3xl text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Doorstep Delivery</h3>
              <p className="text-gray-600">
                Quick and safe delivery to your doorstep. Order via WhatsApp and enjoy fresh treats at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-amber-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Taste Happiness?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who start their day with our freshly baked delights.
          </p>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-green-700 transition"
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
