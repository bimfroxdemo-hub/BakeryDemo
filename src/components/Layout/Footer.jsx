import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-lg">🧁</span>
              </div>
              <div>
                <h3 className="font-bold text-white">Sweet Delights</h3>
                <p className="text-xs text-gray-400">Bakery & Sweet Shop</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              "Happiness Baked Fresh, Every Day."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-gray-400 hover:text-orange-400">
                Home
              </Link>
              <Link to="/menu" className="block text-sm text-gray-400 hover:text-orange-400">
                Menu
              </Link>
              <Link to="/about" className="block text-sm text-gray-400 hover:text-orange-400">
                About
              </Link>
              <Link to="/gallery" className="block text-sm text-gray-400 hover:text-orange-400">
                Gallery
              </Link>
              <Link to="/contact" className="block text-sm text-gray-400 hover:text-orange-400">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <p className="flex items-center gap-2">
                <FiPhone className="text-orange-400" /> +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <FiMail className="text-orange-400" /> hello@sweetdelights.com
              </p>
              <p className="flex items-center gap-2">
                <FiMapPin className="text-orange-400" /> 123 Baker Street, Sweet City
              </p>
              <p className="flex items-center gap-2">
                <FiClock className="text-orange-400" /> Mon-Sun: 7:00 AM - 10:00 PM
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center hover:bg-orange-500/30 transition-colors"
              >
                <FaFacebookF className="text-orange-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center hover:bg-orange-500/30 transition-colors"
              >
                <FaInstagram className="text-orange-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center hover:bg-orange-500/30 transition-colors"
              >
                <FaYoutube className="text-orange-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Sweet Delights Bakery. All rights reserved. Made with ❤️
            for our sweet customers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
