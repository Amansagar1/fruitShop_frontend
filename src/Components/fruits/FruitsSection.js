"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Grid, List } from "lucide-react";
import { fruitsData, categories, sortOptions } from "../../Components/data/fruitsData";
import { useCart } from "./hooks/useCart";
import { useFilter } from "./hooks/useFilter";
import FilterSection from "./FilterSection";
import FruitCard from "./FruitCard";
import CartSidebar from "./CartSidebar";

const FruitsSection = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [isInitialized, setIsInitialized] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("/images/unnamed(3).png");

  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
  } = useCart();

  const {
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    priceRange,
    setPriceRange,
    searchTerm,
    setSearchTerm,
    filteredFruits,
  } = useFilter(fruitsData);

  // Change background based on category
  useEffect(() => {
    const backgrounds = {
      all: "/images/unnamed(3).png",
      berries: "/images/unnamed(4).png",
      tropical: "/images/unnamed(6).png",
      citrus: "/images/unnamed(8).png",
    };

    setBackgroundImage(backgrounds[selectedCategory] || backgrounds.all);
  }, [selectedCategory]);

  useEffect(() => {
    setIsInitialized(true);
  }, []);

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500" />
      </div>
    );
  }

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-blue-500/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen bg-gradient-to-br from-white/70 to-blue-200/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-white mb-4">
              Fresh <span className="text-green-600">Fruits</span> Collection
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Discover our premium selection of fresh, organic fruits delivered directly
              from local farms to your doorstep.
            </p>
          </motion.div>

          {/* Cart FAB */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCartOpen(true)}
            aria-label="Open Cart"
            className="fixed right-6 bottom-6 z-40 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-full shadow-2xl flex items-center space-x-2"
          >
            <ShoppingCart size={24} />
            {getCartItemsCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                {getCartItemsCount()}
              </span>
            )}
          </motion.button>

          {/* Filter Section */}
          <FilterSection
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            sortBy={sortBy}
            setSortBy={setSortBy}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortOptions={sortOptions}
          />

          {/* View Controls */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-white">
              Showing <span className="font-bold">{filteredFruits.length}</span> products
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "grid"
                      ? "bg-white text-green-600 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "list"
                      ? "bg-white text-green-600 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Fruits Grid */}
          {filteredFruits.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🍎</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No fruits found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms</p>
            </motion.div>
          ) : (
            <motion.div
              layout
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-1"
              }`}
            >
              {filteredFruits.map((fruit, index) => (
                <FruitCard
                  key={fruit.id}
                  fruit={fruit}
                  onAddToCart={addToCart}
                  index={index}
                />
              ))}
            </motion.div>
          )}

          {/* Cart Sidebar */}
          <CartSidebar
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onRemoveFromCart={removeFromCart}
            onClearCart={clearCart}
            total={getCartTotal()}
          />
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }

        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </section>
  );
};

export default FruitsSection;
