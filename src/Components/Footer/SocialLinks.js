"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, MessageCircle, Pin } from "lucide-react"; // ✅ Use Pin

export default function SocialLinks({ isInView }) {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/MAA ANANTA FRUITS",
      label: "Facebook",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/MAA ANANTA FRUITS",
      label: "Instagram",
      color: "hover:text-pink-400",
      bgColor: "hover:bg-pink-500"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/MAA ANANTA FRUITS",
      label: "Twitter",
      color: "hover:text-blue-300",
      bgColor: "hover:bg-blue-400"
    },
    {
      icon: Youtube,
      href: "https://youtube.com/MAA ANANTA FRUITS",
      label: "YouTube",
      color: "hover:text-red-400",
      bgColor: "hover:bg-red-500"
    },
    {
      icon: Pin, // ✅ Fixed
      href: "https://pinterest.com/MAA ANANTA FRUITS",
      label: "Pinterest",
      color: "hover:text-red-500",
      bgColor: "hover:bg-red-600"
    },
    {
      icon: MessageCircle,
      href: "https://tiktok.com/MAA ANANTA FRUITS",
      label: "TikTok",
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-700"
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
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "backOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex items-center space-x-4"
    >
      <span className="text-gray-400 text-sm">Follow us:</span>
      
      <div className="flex space-x-2">
        {socialLinks.map((social) => (
          <motion.div
            key={social.label}
            variants={itemVariants}
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${social.bgColor} ${social.color} backdrop-blur-sm`}
              aria-label={social.label}
            >
              <social.icon className="w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* App Store Badges */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex space-x-2 ml-4"
      >
        <button className="bg-black/20 hover:bg-black/30 backdrop-blur-sm rounded px-3 py-1 text-xs font-semibold transition-colors border border-white/20">
          App Store
        </button>
        <button className="bg-black/20 hover:bg-black/30 backdrop-blur-sm rounded px-3 py-1 text-xs font-semibold transition-colors border border-white/20">
          Google Play
        </button>
      </motion.div>
    </motion.div>
  );
}
