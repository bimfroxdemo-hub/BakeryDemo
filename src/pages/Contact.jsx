import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaWhatsapp, 
  FaTruck, 
  FaBox, 
  FaStopwatch 
} from "react-icons/fa";
import { motion } from "framer-motion";
motion
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <div className="py-12 bg-orange-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4">
            Let’s Bake Happiness for You!
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to order or have questions? We’re here to help you create sweet memories.
          </p>
        </motion.div>

        {/* Contact Info + WhatsApp CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Left: Contact Information */}
          <motion.div 
            className="bg-white shadow-lg rounded-2xl p-8 space-y-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-orange-600">Get in Touch</h2>

            <div className="space-y-6">
              {[
                {
                  icon: <FaMapMarkerAlt className="text-2xl text-orange-600" />,
                  title: "Visit Our Shop",
                  desc: "123 Baker Street, Sweet City\nNear Central Market, PIN: 110001",
                },
                {
                  icon: <FaPhone className="text-2xl text-orange-600" />,
                  title: "Call Us",
                  desc: "+91 98765 43210\n+91 87654 32109",
                },
                {
                  icon: <FaEnvelope className="text-2xl text-orange-600" />,
                  title: "Email Us",
                  desc: "hello@sweetdelights.com\norders@sweetdelights.com",
                },
                {
                  icon: <FaClock className="text-2xl text-orange-600" />,
                  title: "Opening Hours",
                  desc: "Monday – Sunday\n7:00 AM – 10:00 PM",
                },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="flex items-start gap-4"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: WhatsApp CTA */}
          <motion.div 
            className="bg-gradient-to-r from-yellow-500 to-orange-400 text-white rounded-2xl shadow-lg p-10 flex flex-col items-center justify-center text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <FaWhatsapp className="text-5xl mb-6 animate-bounce" />
            <h3 className="text-3xl font-bold mb-4">Quick Order on WhatsApp</h3>
            <p className="text-white/90 mb-8">
              Get instant responses and place your order directly through WhatsApp.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hi! I'd like to place an order."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              <FaWhatsapp className="text-lg" />
              Start WhatsApp Chat
            </a>
          </motion.div>
        </div>

        {/* Delivery Information */}
        <motion.div 
          className="bg-orange-50 rounded-2xl p-10 mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Delivery Information</h2>
            <p className="text-gray-600">We deliver fresh happiness to your doorstep</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaTruck className="text-2xl text-orange-600" />,
                title: "Free Delivery",
                desc: "On orders above ₹500 within 5km radius",
              },
              {
                icon: <FaStopwatch className="text-2xl text-orange-600" />,
                title: "Quick Delivery",
                desc: "Within 1–2 hours for regular items",
              },
              {
                icon: <FaBox className="text-2xl text-orange-600" />,
                title: "Safe Packaging",
                desc: "Eco-friendly boxes to keep items fresh",
              },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="text-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Full Width Google Map */}
        <motion.div 
          className="w-full h-[65vh] rounded-2xl overflow-hidden shadow-lg"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <iframe
            title="Sweet Delights Bakery Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086476!2d-122.41941548468148!3d37.77492977975924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8d9a3b%3A0xa4b6b8c42d1ecbb!2sBakery!5e0!3m2!1sen!2sin!4v1672534567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
