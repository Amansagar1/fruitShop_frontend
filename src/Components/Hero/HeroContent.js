"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Truck, Shield, Clock } from "lucide-react";

export default function HeroContent({ slide, isVideoLoaded }) {
  const features = [
    { icon: Truck, text: "Free Delivery", subtext: "Over $50" },
    { icon: Clock, text: "Fresh Daily", subtext: "From Farm" },
    { icon: Shield, text: "Quality", subtext: "Guaranteed" },
    { icon: Star, text: "4.9/5", subtext: "Rating" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVideoLoaded ? "visible" : "hidden"}
      className="space-y-6"
    >
      {/* Badge */}
      <motion.div
        variants={itemVariants}
        className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-400/30"
      >
        <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
        <span className="text-orange-300 font-semibold text-sm">{slide.badge}</span>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
      >
        {slide.title.split(' ').map((word, index) => (
          <span key={index} className="inline-block mr-2">
            {word}
          </span>
        ))}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={itemVariants}
        className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl"
      >
        {slide.subtitle}
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 mt-8"
      >
        <Link
          href="/shop"
          className="group relative bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <span className="relative z-10">{slide.cta}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>

        <Link
          href="/about"
          className="group border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
        >
          <span className="relative z-10">Learn More</span>
        </Link>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.text}
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300"
          >
            <feature.icon className="w-8 h-8 text-orange-400 mx-auto mb-2" />
            <div className="text-white font-semibold">{feature.text}</div>
            <div className="text-orange-300 text-sm">{feature.subtext}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        variants={itemVariants}
        className="flex items-center space-x-6 mt-8 text-sm text-gray-300"
      >
        <div className="flex items-center space-x-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <span>2,500+ Reviews</span>
        </div>
        <div>•</div>
        <div>10,000+ Happy Customers</div>
        <div>•</div>
        <div>Since 2015</div>
      </motion.div>
    </motion.div>
  );
}