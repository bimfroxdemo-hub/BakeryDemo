import { FaStore, FaLeaf, FaGem, FaHeart, FaAward, FaStar, FaMedal, FaUsers } from "react-icons/fa";

// Import team images
import RajeshImg from "../assets/Images/Team/rajesh.png";
import PriyaImg from "../assets/Images/Team/priya.png";
import AmitImg from "../assets/Images/Team/amit.png";

const About = () => {
  return (
    <div className="py-8 bg-orange-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
            About Sweet Delights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over three generations, we've been crafting happiness one bite at a time, 
            bringing the finest baked goods and traditional sweets to our community.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-orange-600 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sweet Delights began in 1985 when our founder, Master Baker Rajesh Kumar, 
                  opened a small bakery with a simple mission: to bring the authentic taste 
                  of traditional Indian sweets and freshly baked goods to every household.
                </p>
                <p>
                  What started as a humble neighborhood bakery has grown into a beloved 
                  institution, serving thousands of families with the same dedication to 
                  quality and authenticity that inspired our founding.
                </p>
                <p>
                  Today, we continue the legacy with our second and third-generation bakers, 
                  combining time-tested recipes with modern techniques to create the perfect 
                  balance of tradition and innovation.
                </p>
              </div>
            </div>
            <div className="bg-orange-100 rounded-2xl p-8 text-center shadow-md">
              <div className="flex justify-center mb-4">
                <FaStore className="text-6xl text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Since 1985</h3>
              <p className="text-gray-600">
                Nearly 40 years of baking excellence and community service
              </p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Meet Our Master Bakers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The skilled artisans behind every delicious creation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Rajesh Kumar */}
            <div className="p-6 bg-white shadow-md rounded-xl text-center hover:shadow-lg transition-all">
              <div className="overflow-hidden rounded-full w-28 h-28 mx-auto mb-4 shadow-md">
                <img
                  src={RajeshImg}
                  alt="Rajesh Kumar"
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-2">Rajesh Kumar</h3>
              <p className="text-sm text-yellow-600 font-medium mb-3">Founder & Master Baker</p>
              <p className="text-gray-600 text-sm">
                With 40+ years of experience, Rajesh specializes in traditional Indian sweets 
                and has trained over 50 bakers in authentic recipes.
              </p>
            </div>

            {/* Priya Sharma */}
            <div className="p-6 bg-white shadow-md rounded-xl text-center hover:shadow-lg transition-all">
              <div className="overflow-hidden rounded-full w-28 h-28 mx-auto mb-4 shadow-md">
                <img
                  src={PriyaImg}
                  alt="Priya Sharma"
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-2">Priya Sharma</h3>
              <p className="text-sm text-yellow-600 font-medium mb-3">Head Pastry Chef</p>
              <p className="text-gray-600 text-sm">
                Expert in European pastries and custom cakes, Priya brings 15 years of 
                experience from top hotels and restaurants.
              </p>
            </div>

            {/* Amit Kumar */}
            <div className="p-6 bg-white shadow-md rounded-xl text-center hover:shadow-lg transition-all">
              <div className="overflow-hidden rounded-full w-28 h-28 mx-auto mb-4 shadow-md">
                <img
                  src={AmitImg}
                  alt="Amit Kumar"
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-2">Amit Kumar</h3>
              <p className="text-sm text-yellow-600 font-medium mb-3">Artisan Bread Specialist</p>
              <p className="text-gray-600 text-sm">
                Son of the founder, Amit specializes in artisan breads and sourdough, 
                combining traditional techniques with modern innovations.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-orange-100 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-2xl text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-3">Freshness</h3>
              <p className="text-gray-600">
                We bake everything fresh daily using only the finest ingredients, 
                ensuring every product meets our high standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGem className="text-2xl text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-3">Purity</h3>
              <p className="text-gray-600">
                No artificial preservatives or additives. We believe in pure, 
                natural ingredients for authentic taste and health.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-2xl text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-3">Customer Care</h3>
              <p className="text-gray-600">
                Every customer is family. We take pride in creating memorable 
                experiences with personalized service and attention to detail.
              </p>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-8">Awards & Recognition</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4">
              <FaAward className="text-4xl text-orange-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-orange-600">Best Bakery 2023</p>
              <p className="text-xs text-gray-600">City Food Awards</p>
            </div>
            <div className="p-4">
              <FaStar className="text-4xl text-orange-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-orange-600">5-Star Rating</p>
              <p className="text-xs text-gray-600">Google Reviews</p>
            </div>
            <div className="p-4">
              <FaMedal className="text-4xl text-orange-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-orange-600">Excellence Award</p>
              <p className="text-xs text-gray-600">Local Business Chamber</p>
            </div>
            <div className="p-4">
              <FaUsers className="text-4xl text-orange-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-orange-600">Customer's Choice</p>
              <p className="text-xs text-gray-600">Community Voting</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
