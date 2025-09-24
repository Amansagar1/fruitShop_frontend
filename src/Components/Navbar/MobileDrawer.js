"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";

export default function MobileDrawer({ open, setOpen, navItems }) {
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (label) => {
    setOpenSubmenus(prev => ({ 
      ...prev, 
      [label]: !prev[label] 
    }));
  };

  const closeDrawer = () => {
    setOpen(false);
    setOpenSubmenus({});
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl z-50 flex flex-col"
          >
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <Link href="/" onClick={closeDrawer} className="flex items-center space-x-2">
                <div className="w-8 h-8 relative">
                  <Image 
                    src="/images/logopng.png" 
                    alt="Logo" 
                    fill 
                    className="object-contain" 
                  />
                </div>
                <span className="font-bold text-lg text-gray-900">MAA ANANTA FRUITS</span>
              </Link>
              <button onClick={closeDrawer} className="p-2">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => toggleSubmenu(item.label)}
                          className="flex items-center justify-between w-full p-3 text-left text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <item.icon className={`w-4 h-4 ${item.color}`} />
                            <span className="font-medium">{item.label}</span>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              openSubmenus[item.label] ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        
                        <AnimatePresence>
                          {openSubmenus[item.label] && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="ml-6 mt-1 space-y-1 overflow-hidden"
                            >
                              {item.submenu.map((subItem) => (
                                <li key={subItem.href}>
                                  <Link
                                    href={subItem.href}
                                    onClick={closeDrawer}
                                    className="block p-2 text-sm text-gray-600 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors"
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeDrawer}
                        className="flex items-center space-x-3 p-3 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <item.icon className={`w-4 h-4 ${item.color}`} />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <Link
                  href="/login"
                  onClick={closeDrawer}
                  className="flex-1 text-center py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  onClick={closeDrawer}
                  className="flex-1 text-center py-2 text-sm text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}