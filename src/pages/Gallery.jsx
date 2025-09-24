import { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTimes } from "react-icons/fa";
import heroImage from "../assets/home/Hero.png";
import sweetsImage from "../assets/home/sweets-collection.png";
import breadsImage from "../assets/home/fresh-breads.jpg";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const filters = [
    { id: "all", name: "All", icon: "🍰" },
    { id: "cakes", name: "Cakes", icon: "🎂" },
    { id: "sweets", name: "Sweets", icon: "🍬" },
    { id: "breads", name: "Breads", icon: "🍞" },
    { id: "festive", name: "Festive Specials", icon: "✨" },
  ];

  const galleryItems = [
    { id: 1, image: heroImage, category: "all", title: "Our Beautiful Bakery", type: "photo" },
    { id: 2, image: sweetsImage, category: "sweets", title: "Traditional Sweets Collection", type: "photo" },
    { id: 3, image: breadsImage, category: "breads", title: "Fresh Artisan Breads", type: "photo" },
    { id: 4, emoji: "🎂", category: "cakes", title: "Chocolate Birthday Cake", type: "emoji" },
    { id: 5, emoji: "🧁", category: "cakes", title: "Vanilla Cupcakes", type: "emoji" },
    { id: 6, emoji: "🍪", category: "all", title: "Butter Cookies", type: "emoji" },
    { id: 7, emoji: "🥐", category: "breads", title: "Fresh Croissants", type: "emoji" },
    { id: 8, emoji: "🍯", category: "sweets", title: "Honey Glazed Donuts", type: "emoji" },
    { id: 9, emoji: "🎪", category: "festive", title: "Diwali Special Arrangements", type: "emoji" },
    { id: 10, emoji: "🎃", category: "festive", title: "Halloween Themed Treats", type: "emoji" },
    { id: 11, emoji: "🌟", category: "festive", title: "Wedding Cake Showcase", type: "emoji" },
    { id: 12, emoji: "🍰", category: "cakes", title: "Strawberry Layer Cake", type: "emoji" },
  ];

  const filteorangeItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter || item.category === "all");

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sweet Moments Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A visual feast of our finest creations, from daily fresh bakes to special occasion masterpieces.
          </p>
        </div>

        {/* Video Banner */}
        <div className="mb-12 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 rounded-2xl p-8 text-center text-white">
          <div className="text-6xl mb-4">🎥</div>
          <h2 className="text-2xl font-bold mb-4">Behind the Scenes</h2>
          <p className="text-lg mb-6 opacity-90">
            Watch our master bakers create magic in our kitchen every morning
          </p>
          <button
            onClick={() => setIsVideoOpen(true)}
            className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Watch Our Story Video
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg border text-sm font-medium flex items-center gap-2 transition ${
                activeFilter === filter.id
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              <span>{filter.icon}</span>
              {filter.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteorangeItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer overflow-hidden rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 bg-white"
            >
              <div className="aspect-square relative overflow-hidden">
                {item.type === "photo" ? (
                  <>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-yellow-100 via-orange-100 to-orange-100">
                    <span className="text-6xl group-hover:scale-125 transition-transform duration-300">
                      {item.emoji}
                    </span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition duration-300">
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl shadow p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Sweet Numbers</h2>
            <p className="text-gray-600">Our journey in numbers</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">10,000+</div>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
              <p className="text-sm text-gray-600">Products Daily</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">39</div>
              <p className="text-sm text-gray-600">Years of Excellence</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
              <p className="text-sm text-gray-600">Varieties Available</p>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Follow Us for Daily Updates
          </h2>
          <p className="text-gray-600 mb-8">
            See our latest creations and behind-the-scenes moments on social media
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="flex items-center gap-2 px-5 py-3 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              <FaFacebook className="text-xl text-blue-600" /> Facebook
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-5 py-3 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              <FaInstagram className="text-xl text-orange-500" /> Instagram
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-5 py-3 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              <FaYoutube className="text-xl text-orange-600" /> YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden shadow-lg">
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-3 right-3 text-white text-2xl hover:text-orange-500 transition"
            >
              <FaTimes />
            </button>

            {/* Embedded YouTube Video */}
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/1APwq1df6Mw?autoplay=1"
                title="Bakery Story Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
