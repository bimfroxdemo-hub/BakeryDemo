import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBirthdayCake,
  FaCandyCane,
  FaBreadSlice,
  FaPizzaSlice,
  FaCoffee,
  FaStar,
} from "react-icons/fa";
motion
// Import product images
import chocolateTruffle from "../assets/cakes/chocolate-truffle.png";
import vanillaSponge from "../assets/cakes/vanilla-sponge.png";
import redVelvet from "../assets/cakes/red-velvet.png";
import blackForest from "../assets/cakes/black-forest.png";

import gulabJamun from "../assets/sweets/gulab-jamun.png";
import rasgulla from "../assets/sweets/rasgulla.png";
import kajuKatli from "../assets/sweets/kaju-katli.png";
import motichoor from "../assets/sweets/motichoor-ladoo.png";

import sourdough from "../assets/breads/sourdough.png";
import wholeWheat from "../assets/breads/wholewheat.png";
import croissant from "../assets/breads/croissant.png";
import garlicBread from "../assets/breads/garlic-bread.png";

import samosa from "../assets/savories/samosa.png";
import kachori from "../assets/savories/kachori.png";
import pavBhaji from "../assets/savories/pav-bhaji.png";
import pizzaBase from "../assets/savories/pizza-base.png";

import masalaChai from "../assets/beverages/masala-chai.png";
import filterCoffee from "../assets/beverages/filter-coffee.png";
import lassi from "../assets/beverages/lassi.png";
import freshJuice from "../assets/beverages/fresh-juice.png";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("cakes");

  const categories = [
    { id: "cakes", name: "Cakes", icon: <FaBirthdayCake /> },
    { id: "sweets", name: "Sweets", icon: <FaCandyCane /> },
    { id: "breads", name: "Breads", icon: <FaBreadSlice /> },
    { id: "savories", name: "Savories", icon: <FaPizzaSlice /> },
    { id: "beverages", name: "Beverages", icon: <FaCoffee /> },
  ];

  const products = {
    cakes: [
      { id: 1, name: "Chocolate Truffle Cake", price: "₹650", image: chocolateTruffle, description: "Rich chocolate cake with truffle filling", popular: true },
      { id: 2, name: "Vanilla Sponge Cake", price: "₹450", image: vanillaSponge, description: "Light and fluffy vanilla sponge", popular: false },
      { id: 3, name: "Red Velvet Cake", price: "₹750", image: redVelvet, description: "Classic red velvet with cream cheese frosting", popular: true },
      { id: 4, name: "Black Forest Cake", price: "₹700", image: blackForest, description: "Chocolate sponge with cherries and cream", popular: false },
    ],
    sweets: [
      { id: 5, name: "Gulab Jamun", price: "₹45/piece", image: gulabJamun, description: "Traditional milk dumplings in sugar syrup", popular: true },
      { id: 6, name: "Rasgulla", price: "₹40/piece", image: rasgulla, description: "Soft cottage cheese balls in syrup", popular: true },
      { id: 7, name: "Kaju Katli", price: "₹800/kg", image: kajuKatli, description: "Premium cashew fudge", popular: false },
      { id: 8, name: "Motichoor Ladoo", price: "₹50/piece", image: motichoor, description: "Traditional gram flour ladoos", popular: false },
    ],
    breads: [
      { id: 9, name: "Sourdough Bread", price: "₹120", image: sourdough, description: "Artisan sourdough with crispy crust", popular: true },
      { id: 10, name: "Whole Wheat Bread", price: "₹45", image: wholeWheat, description: "Healthy whole grain bread", popular: false },
      { id: 11, name: "Croissant", price: "₹80", image: croissant, description: "Buttery, flaky French pastry", popular: true },
      { id: 12, name: "Garlic Bread", price: "₹95", image: garlicBread, description: "Herb-infused garlic bread", popular: false },
    ],
    savories: [
      { id: 13, name: "Samosa", price: "₹25/piece", image: samosa, description: "Crispy pastry with spiced potato filling", popular: true },
      { id: 14, name: "Kachori", price: "₹30/piece", image: kachori, description: "Flaky pastry with lentil filling", popular: false },
      { id: 15, name: "Pav Bhaji Bread", price: "₹15/piece", image: pavBhaji, description: "Soft bread for pav bhaji", popular: true },
      { id: 16, name: "Pizza Base", price: "₹85", image: pizzaBase, description: "Fresh pizza base, ready to top", popular: false },
    ],
    beverages: [
      { id: 17, name: "Masala Chai", price: "₹25", image: masalaChai, description: "Traditional spiced tea", popular: true },
      { id: 18, name: "Filter Coffee", price: "₹35", image: filterCoffee, description: "South Indian filter coffee", popular: true },
      { id: 19, name: "Fresh Lassi", price: "₹45", image: lassi, description: "Sweet or salty yogurt drink", popular: false },
      { id: 20, name: "Fresh Juice", price: "₹55", image: freshJuice, description: "Seasonal fresh fruit juices", popular: false },
    ],
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
            Our Delicious Menu
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of freshly baked goods, traditional sweets,
            and savory treats
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition ${
                activeCategory === category.id
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-white text-orange-600 border border-orange-300 hover:bg-orange-100"
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {products[activeCategory].map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-2 group"
            >
              <div className="aspect-square flex items-center justify-center rounded-t-xl relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.popular && (
                  <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold text-white px-2 py-1 rounded-full flex items-center gap-1">
                    <FaStar className="text-white" /> Popular
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-orange-600">
                    {product.price}
                  </span>
                  <a
                    href={`https://wa.me/1234567890?text=Hi! I'd like to order ${product.name} (${product.price})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600 transition"
                  >
                    Order
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-10 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
            Can’t find what you’re looking for?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We also take custom orders! Contact us for special requests and
            personalized treats crafted with love.
          </p>
          <a
            href="https://wa.me/1234567890?text=Hi! I'd like to place a custom order."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition"
          >
            📱 Contact for Custom Orders
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
