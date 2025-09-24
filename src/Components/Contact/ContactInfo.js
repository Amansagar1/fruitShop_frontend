"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Truck, Heart } from "lucide-react";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      subtitle: "Mon-Fri from 8am to 6pm",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@MAA ANANTA FRUITS.com",
      subtitle: "We reply within 2 hours",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Fruit Street, Orchard City",
      subtitle: "OC 12345, United States",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Clock,
      title: "Store Hours",
      content: "Monday - Sunday: 7:00 AM - 9:00 PM",
      subtitle: "Holiday hours may vary",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    }
  ];

  const features = [
    { icon: Truck, text: "Free Delivery Over $50", color: "text-orange-500" },
    { icon: Heart, text: "Fresh & Organic Guarantee", color: "text-pink-500" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
        <p className="text-gray-600 mb-6">
          Reach out to us through any of these channels. We&apos;re here to help you create 
          the perfect fruit basket experience.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-4">
        {contactDetails.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${item.bgColor} p-4 rounded-xl border border-white shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg bg-white shadow-sm ${item.color}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-800 font-medium">{item.content}</p>
                <p className="text-gray-600 text-sm mt-1">{item.subtitle}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-6 text-white"
      >
        <h3 className="font-semibold mb-3">Why Choose MAA ANANTA FRUITS?</h3>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 text-sm">
              <feature.icon className="w-4 h-4" />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Emergency Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-red-50 border border-red-200 rounded-xl p-4"
      >
        <h4 className="font-semibold text-red-900 mb-2">Urgent Deliveries</h4>
        <p className="text-red-700 text-sm">
          Need immediate assistance? Call our emergency line: 
          <span className="font-semibold"> +1 (555) 911-FRUIT</span>
        </p>
      </motion.div>
    </motion.div>
  );
}