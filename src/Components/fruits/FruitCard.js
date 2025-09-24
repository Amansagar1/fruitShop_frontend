"use client";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Heart, Scale, Truck, Shield } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const FruitCard = ({ fruit, onAddToCart, index }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(fruit);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Badge */}
      {fruit.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            {fruit.badge}
          </span>
        </div>
      )}

      {/* Discount Badge */}
      {fruit.discount && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
            -{fruit.discount}%
          </span>
        </div>
      )}

      {/* Like Button */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-all duration-300 ${
          isLiked 
            ? 'bg-red-500 text-white shadow-lg' 
            : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
        }`}
      >
        <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
      </button>

      {/* Image Container */}
      <Link href={`/fruits/${fruit.id}`} className="block cursor-pointer">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          {!isImageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-green-200 border-t-green-500 rounded-full animate-spin" />
            </div>
          )}
          <img
            src={fruit.image}
            alt={fruit.name}
            onLoad={() => setIsImageLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
          
          {/* Quick View Button */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className="bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              Quick View
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Stock Status */}
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
              fruit.inStock 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {fruit.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
            <div className="flex items-center text-xs text-gray-500">
              <Truck size={12} className="mr-1" />
              {fruit.harvest}
            </div>
          </div>

          {/* Title */}
          <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1 group-hover:text-green-600 transition-colors">
            {fruit.name}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {fruit.description}
          </p>

          {/* Nutrients */}
          <div className="flex flex-wrap gap-1 mb-4">
            {fruit.nutrients.slice(0, 3).map((nutrient, idx) => (
              <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                {nutrient}
              </span>
            ))}
          </div>

          {/* Rating */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={`${
                      i < Math.floor(fruit.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-1">
                {fruit.rating} ({fruit.reviews.toLocaleString()})
              </span>
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <Scale size={12} className="mr-1" />
              {fruit.unit}
            </div>
          </div>

          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between ">
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-green-600">
                ${fruit.price}
              </span>
              {fruit.originalPrice > fruit.price && (
                <span className="text-sm text-gray-500 line-through">
                  ${fruit.originalPrice}
                </span>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              disabled={!fruit.inStock}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                fruit.inStock
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg hover:from-green-600 hover:to-emerald-700'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              <ShoppingCart size={18} />
              <span className="text-sm">{fruit.inStock ? 'Add to Cart' : 'Stock Out'}</span>
            </motion.button>
          </div>

          {/* Origin */}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Origin: {fruit.origin}</span>
              <div className="flex items-center">
                <Shield size={10} className="mr-1 text-green-500" />
                Quality Guaranteed
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default FruitCard;