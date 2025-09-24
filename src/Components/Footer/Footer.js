"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FooterSections from "./FooterSections";
import Newsletter from "./Newsletter";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  const footerData = {
    company: {
      title: "MAA ANANTA FRUITS",
      description: "Fresh, delicious fruits delivered to your doorstep. Quality guaranteed since 2015.",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Story", href: "/story" },
        { name: "Careers", href: "/careers" },
        { name: "Press Kit", href: "/press" },
        { name: "Sustainability", href: "/sustainability" }
      ]
    },
    services: {
      title: "Our Services",
      links: [
        { name: "Fruit Basket Booking", href: "/booking" },
        { name: "Corporate Gifting", href: "/corporate" },
        { name: "Wedding Fruits", href: "/wedding" },
        { name: "Subscription Plans", href: "/subscription" },
        { name: "Custom Arrangements", href: "/custom" },
        { name: "Bulk Orders", href: "/bulk" }
      ]
    },
    support: {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Contact Us", href: "/contact" },
        { name: "Shipping Info", href: "/shipping" },
        { name: "Returns", href: "/returns" },
        { name: "Size Guide", href: "/size-guide" },
        { name: "Order Status", href: "/order-status" }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Refund Policy", href: "/refunds" },
        { name: "Delivery Policy", href: "/delivery" }
      ]
    }
  };

  return (
    <footer ref={footerRef} className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Wave Divider */}
      <div className="relative -top-1">
        <svg className="w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-current text-gray-900"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-current text-gray-900"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current text-gray-900"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Newsletter Section */}
        <Newsletter />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Footer Sections Grid */}
          <FooterSections data={footerData} isInView={isInView} />

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-t border-gray-700 my-8"
          />

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center lg:text-left"
            >
              <p className="text-gray-400">
                © 2024 MAA ANANTA FRUITS. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Freshness guaranteed since 2015
              </p>
            </motion.div>

            {/* Social Links */}
            <SocialLinks isInView={isInView} />

            {/* Payment Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center space-x-4"
            >
              <span className="text-gray-400 text-sm">We accept:</span>
              <div className="flex space-x-2">
                {['visa', 'mastercard', 'paypal', 'apple-pay'].map((method, index) => (
                  <div
                    key={method}
                    className="w-8 h-8 bg-white rounded flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-gray-800">{method.split('-')[0].charAt(0).toUpperCase()}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Fruit Elements */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-10 left-10 text-orange-400 opacity-20"
          >
            🍊
          </motion.div>
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-20 right-20 text-green-400 opacity-20"
          >
            🍏
          </motion.div>
          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-5 right-1/4 text-red-400 opacity-20"
          >
            🍓
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}