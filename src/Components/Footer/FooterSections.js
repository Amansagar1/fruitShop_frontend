"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Leaf, Truck, Shield, Award } from "lucide-react";

export default function FooterSections({ data, isInView }) {
  const features = [
    {
      icon: Leaf,
      title: "100% Organic",
      description: "Fresh from local farms"
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "On orders over $50"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "30-day satisfaction"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Best fruit service 2024"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
      {/* Company Info */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="lg:col-span-2"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-2">
            {data.company.title}
          </h3>
          <p className="text-gray-300 leading-relaxed">
            {data.company.description}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm"
            >
              <feature.icon className="w-6 h-6 text-orange-400" />
              <div>
                <p className="font-semibold text-white text-sm">{feature.title}</p>
                <p className="text-gray-400 text-xs">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Services Links */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h4 variants={itemVariants} className="text-lg font-semibold mb-4 text-white">
          {data.services.title}
        </motion.h4>
        <ul className="space-y-2">
          {data.services.links.map((link, index) => (
            <motion.li key={link.name} variants={itemVariants}>
              <Link
                href={link.href}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center group"
              >
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Support Links */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h4 variants={itemVariants} className="text-lg font-semibold mb-4 text-white">
          {data.support.title}
        </motion.h4>
        <ul className="space-y-2">
          {data.support.links.map((link, index) => (
            <motion.li key={link.name} variants={itemVariants}>
              <Link
                href={link.href}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center group"
              >
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Legal Links */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h4 variants={itemVariants} className="text-lg font-semibold mb-4 text-white">
          {data.legal.title}
        </motion.h4>
        <ul className="space-y-2">
          {data.legal.links.map((link, index) => (
            <motion.li key={link.name} variants={itemVariants}>
              <Link
                href={link.href}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center group"
              >
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Trust Badges */}
        <motion.div
          variants={itemVariants}
          className="mt-6 p-4 bg-white/5 rounded-lg backdrop-blur-sm"
        >
          <div className="flex items-center space-x-2 mb-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-sm font-semibold text-white">SSL Secured</span>
          </div>
          <p className="text-gray-400 text-xs">256-bit encryption</p>
        </motion.div>
      </motion.div>
    </div>
  );
}