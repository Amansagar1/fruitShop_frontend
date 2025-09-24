"use client";
import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, Star } from "lucide-react";

export default function MapSection() {
  // Simulated store locations
  const stores = [
    {
      id: 1,
      name: "Downtown Store",
      address: "123 Fruit Street, Orchard City",
      hours: "7:00 AM - 9:00 PM",
      rating: 4.8,
      distance: "0.5 miles"
    },
    {
      id: 2,
      name: "Westside Market",
      address: "456 Berry Avenue, Orchard City",
      hours: "6:00 AM - 10:00 PM",
      rating: 4.6,
      distance: "2.3 miles"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
    >
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6">
        <h2 className="text-2xl font-bold text-white">Find Our Stores</h2>
        <p className="text-white/90">Visit us in person for fresh picks</p>
      </div>

      {/* Map Container */}
      <div className="relative h-64 bg-gradient-to-br from-green-100 to-blue-100">
        {/* Simplified Map Visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Map Dots */}
            <div className="absolute -top-4 -left-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"
              />
            </div>
            <div className="absolute top-8 right-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 }}
                className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"
              />
            </div>
            
            {/* Map Background */}
            <div className="w-64 h-48 bg-white border-2 border-gray-200 rounded-lg shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-50"></div>
              
              {/* Roads */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300"></div>
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300"></div>
              
              {/* Store Labels */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -top-2 -left-4 bg-white px-2 py-1 rounded shadow text-xs font-semibold"
              >
                Downtown
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute -bottom-2 -right-4 bg-white px-2 py-1 rounded shadow text-xs font-semibold"
              >
                Westside
              </motion.div>
            </div>
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button className="bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow">
            <Navigation className="w-4 h-4 text-gray-600" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow">
            <MapPin className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Store List */}
      <div className="p-6 space-y-4">
        <h3 className="font-semibold text-gray-900 mb-4">Nearby Locations</h3>
        
        {stores.map((store, index) => (
          <motion.div
            key={store.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="font-semibold text-gray-900">{store.name}</h4>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span className="text-xs text-gray-600">{store.rating}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 flex items-center space-x-1 mb-1">
                <MapPin className="w-3 h-3" />
                <span>{store.address}</span>
              </p>
              <p className="text-sm text-gray-600 flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{store.hours}</span>
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                {store.distance}
              </span>
              <button className="mt-2 text-xs text-orange-600 hover:text-orange-700 font-medium">
                Directions →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="px-6 pb-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all flex items-center justify-center space-x-2"
        >
          <Navigation className="w-4 h-4" />
          <span>Get Directions to Nearest Store</span>
        </motion.button>
      </div>
    </motion.div>
  );
}