"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBasket, Leaf } from "lucide-react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);

  const slides = [
    {
      title: "Fresh Fruits Delivered Daily",
      subtitle: "Handpicked seasonal fruits delivered straight to your doorstep.",
      cta1: "Order Now",
      cta2: "Explore Baskets",
      badge: "100% Organic",
    },
    {
      title: "Custom Fruit Baskets for Every Occasion",
      subtitle:
        "Perfect for gifts, events, and celebrations. Beautifully curated baskets.",
      cta1: "Create Basket",
      cta2: "View Collection",
      badge: "Best Sellers",
    },
    {
      title: "Sustainable & Local Farming",
      subtitle:
        "Supporting local farmers with eco-friendly practices for healthier living.",
      cta1: "Learn More",
      cta2: "Our Story",
      badge: "Eco Friendly",
    },
  ];

  // Auto slide every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Slow down video playback
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // 0.5 = half speed
    }
  }, []);

  return (
    <section className="relative h-[700px] flex items-center justify-center overflow-hidden w-full ">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0  " 
      >
        <source src="/images/1758651345243.mp4" type="video/mp4" />
        <source src="https://cdn.pixabay.com/video/2023/02/28/160456-802959852_large.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />

      {/* Content */}
      <div className="relative max-w-[80%] z-20 w-full mx-auto px-4 lg:px-10 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
          {/* Left Content */}
          <div className="text-white max-w-xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 bg-green-600/90 px-4 py-1.5 rounded-full text-sm font-medium">
              <Leaf size={16} />
              <span>{slides[currentSlide].badge}</span>
            </div>

            {/* Animated Headline */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentSlide}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>
            </AnimatePresence>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-semibold text-white flex items-center gap-2 transition">
                <ShoppingBasket size={18} />
                {slides[currentSlide].cta1}
              </button>
              <button className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl font-semibold text-white transition">
                {slides[currentSlide].cta2}
              </button>
            </div>

            {/* Indicators */}
            <div className="flex space-x-2 mt-8">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentSlide
                      ? "bg-orange-500 w-8"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side Image Grid (masonry-style) */}
          <div className="hidden lg:grid grid-cols-2 gap-4 relative z-20">
            {[
              { img: "unnamed(1).png", colSpan: "row-span-2 h-72" },
              { img: "unnamed(2).png", colSpan: "h-36" },
              { img: "unnamed(3).png", colSpan: "h-36" },
              { img: "unnamed(6).png", colSpan: "row-span-2 h-72" },
                { img: "unnamed(7).png", colSpan: "row-span-2 h-72" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`overflow-hidden rounded-2xl shadow-lg ${item.colSpan} relative group`}
              >
                <img
                  src={`/images/${item.img}`}
                  alt={item.img}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        {/* <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div> */}
      </motion.div>
    </section>
  );
}
