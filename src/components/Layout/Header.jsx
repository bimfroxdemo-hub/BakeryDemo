import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
motion
const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/about", label: "About Us" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // animations
  const logoVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const navVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  const mobileMenuVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div variants={logoVariant} initial="hidden" animate="visible">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition">
                <span className="text-2xl">🧁</span>
              </div>
              <div>
                <h1
                  className={`text-xl font-extrabold transition-colors ${
                    scrolled
                      ? "text-gray-800 group-hover:text-orange-600"
                      : "text-white group-hover:text-pink-200"
                  }`}
                >
                  Sweet Delights
                </h1>
                <p
                  className={`text-xs transition-colors ${
                    scrolled ? "text-gray-500" : "text-gray-200"
                  }`}
                >
                  Bakery & Sweet Shop
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                custom={i}
                variants={navVariant}
                initial="hidden"
                animate="visible"
              >
                <Link
                  to={link.path}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    isActive(link.path)
                      ? scrolled
                        ? "text-orange-600"
                        : "text-orange-300"
                      : scrolled
                      ? "text-gray-700"
                      : "text-white"
                  } hover:text-orange-500`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2.5 rounded-full shadow-lg hover:scale-105 hover:shadow-green-500/40 transition-all"
            >
              <FaWhatsapp className="text-lg" />
              <span className="font-medium">WhatsApp</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden text-2xl transition ${
                scrolled
                  ? "text-gray-700 hover:text-orange-600"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`md:hidden transition-all duration-500 ${
                scrolled ? "bg-white/95 backdrop-blur-md" : "bg-black/90"
              } shadow-lg`}
            >
              <nav className="flex flex-col items-start space-y-3 py-6 px-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    custom={i}
                    variants={navVariant}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-base font-medium transition-colors ${
                        isActive(link.path)
                          ? "text-orange-300"
                          : scrolled
                          ? "text-gray-700"
                          : "text-white"
                      } hover:text-orange-600`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* WhatsApp in mobile */}
                <motion.a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2.5 rounded-full shadow-lg w-full justify-center hover:scale-105 hover:shadow-green-500/40 transition-all"
                >
                  <FaWhatsapp className="text-lg" />
                  <span className="font-medium">WhatsApp</span>
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Add padding so content starts below the header */}
      <main className="pt-20">
        {/* Page content goes here */}
      </main>
    </>
  );
};

export default Header;
