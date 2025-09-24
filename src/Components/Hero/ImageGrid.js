"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ImageGrid({ isVideoLoaded }) {
  const [imageErrors, setImageErrors] = useState({});

  const images = [
    {
      src: "/images/unnamed(1).png",
      alt: "Fresh fruit basket",
      delay: 0.1,
      position: "row-span-2 col-span-2"
    },
    {
      src: "/images/unnamed(2).png",
      alt: "Organic apples",
      delay: 0.2,
      position: "col-span-1 row-span-1"
    },
    {
      src: "/images/unnamed(3).png",
      alt: "Colorful berries",
      delay: 0.3,
      position: "col-span-1 row-span-1"
    },
    {
      src: "/images/unnamed(4).png",
      alt: "Citrus fruits",
      delay: 0.4,
      position: "col-span-2 row-span-1"
    }
  ];

  const handleImageError = (src) => {
    setImageErrors(prev => ({ ...prev, [src]: true }));
  };

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
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
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
      className="grid grid-cols-3 grid-rows-3 gap-4 h-[500px] w-full"
    >
      {images.map((image, index) => (
        <motion.div
          key={image.src}
          variants={itemVariants}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
          className={`relative rounded-2xl overflow-hidden shadow-2xl ${image.position} group bg-gradient-to-br from-orange-100 to-amber-100`}
        >
          {/* Image with error handling */}
          {!imageErrors[image.src] ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => handleImageError(image.src)}
              priority={index === 0} // Priority for first image
            />
          ) : (
            // Fallback content if image fails to load
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-200 to-amber-200">
              <div className="text-center text-orange-600">
                <div className="text-4xl mb-2">🍎</div>
                <p className="text-sm font-semibold">{image.alt}</p>
              </div>
            </div>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
          
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </motion.div>
      ))}

  
    </motion.div>
  );
}