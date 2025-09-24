"use client";
import { motion } from "framer-motion";
import ContactForm from "../../Components/Contact/ContactForm";
import ContactInfo from "../../Components/Contact/ContactInfo";
import MapSection from "../../Components/Contact/MapSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50/30 pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            <ContactForm />
            <MapSection />
          </div>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our fruit basket services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-600 text-sm">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const faqItems = [
  {
    question: "How quickly can I get a fruit basket delivered?",
    answer: "We offer same-day delivery for orders placed before 2 PM. Next-day delivery is available for orders after 2 PM."
  },
  {
    question: "Do you offer custom fruit basket arrangements?",
    answer: "Yes! We specialize in custom arrangements for corporate events, birthdays, and special occasions."
  },
  {
    question: "What areas do you deliver to?",
    answer: "We deliver across the city and surrounding areas. Free delivery for orders over $50 within 15 miles."
  },
  {
    question: "Can I schedule delivery for a specific date?",
    answer: "Absolutely! You can schedule delivery up to 30 days in advance during checkout."
  }
];