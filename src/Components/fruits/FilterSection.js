"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, X } from "lucide-react";
import { useState } from "react";

const FilterSection = ({ 
  categories, 
  selectedCategory, 
  setSelectedCategory, 
  sortBy, 
  setSortBy, 
  priceRange, 
  setPriceRange, 
  searchTerm, 
  setSearchTerm,
  sortOptions 
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search fruits by name or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Category Filter */}
        <div className="flex-1">
          <h3 className="font-semibold text-gray-700 mb-3">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-green-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Sort and Filter Buttons */}
        <div className="flex gap-4">
          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <Filter size={16} />
            </div>
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden px-4 py-3 bg-green-500 text-white rounded-xl font-medium"
          >
            <Filter size={16} className="inline mr-2" />
            Filters
          </button>
        </div>
      </div>

      {/* Price Range Filter (Mobile/Expandable) */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-6 overflow-hidden"
          >
            <div className="border-t pt-6">
              <h3 className="font-semibold text-gray-700 mb-3">Price Range</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.5"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseFloat(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Price Range Filter (Desktop) */}
      <div className="hidden lg:block border-t mt-6 pt-6">
        <h3 className="font-semibold text-gray-700 mb-3">Price Range: ${priceRange[0]} - ${priceRange[1]}</h3>
        <input
          type="range"
          min="0"
          max="10"
          step="0.5"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], parseFloat(e.target.value)])}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
      </div>
    </div>
  );
};

export default FilterSection;