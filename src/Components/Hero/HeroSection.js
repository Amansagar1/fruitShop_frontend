"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VideoBackground from "./VideoBackground";
import HeroContent from "./HeroContent";
import ImageGrid from "./ImageGrid";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const heroSlides = [
    {
      title: "Fresh Fruits Delivered to Your Doorstep",
      subtitle: "Handpicked seasonal fruits, delivered fresh daily. Taste the difference nature intended.",
      cta: "Order Now",
      badge: "Seasonal Special"
    },
    {
      title: "Custom Fruit Baskets for Every Occasion",
      subtitle: "Create beautiful arrangements for gifts, events, or corporate presents.",
      cta: "Create Basket",
      badge: "Perfect Gifting"
    },
    {
      title: "Organic & Sustainable Farming",
      subtitle: "100% organic fruits from local farms supporting sustainable agriculture.",
      cta: "Learn More",
      badge: "Eco-Friendly"
    }
  ];

  // Auto slide change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="h-screen  flex items-center justify-center overflow-hidden ">
      {/* Video Background */}
      <VideoBackground onLoad={() => setIsVideoLoaded(true)} />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8  ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <HeroContent 
                  slide={heroSlides[currentSlide]} 
                  isVideoLoaded={isVideoLoaded}
                />
              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="flex space-x-2 mt-8">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-orange-500 w-8' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="hidden lg:block">
            <ImageGrid isVideoLoaded={isVideoLoaded} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}