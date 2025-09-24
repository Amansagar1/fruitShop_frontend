"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingCart,
  Search,
  Phone,
  Menu,
  Home,
  Info,
  ShoppingBag,
  Calendar,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import MobileDrawer from "./MobileDrawer";
import UserMenu from "./UserMenu";

const navItems = [
  { href: "/dashboard", label: "Home", icon: Home, color: "text-orange-500" },
  { href: "/about", label: "About Us", icon: Info, color: "text-blue-500" },
  {
    href: "/shop",
    label: "Shop",
    icon: ShoppingBag,
    color: "text-pink-500",
    submenu: [
      { href: "/shop/fruits", label: "Seasonal Fruits" },
      { href: "/shop/organic", label: "Organic Fruits" },
      { href: "/shop/combo", label: "Fruit Combos" },
      { href: "/shop/offers", label: "Special Offers" },
    ],
  },
  { href: "/booking", label: "Book Fruit Basket", icon: Calendar, color: "text-purple-500" },
  { href: "/faq", label: "FAQ", icon: HelpCircle, color: "text-green-500" },
  { href: "/contact", label: "Contact", icon: Phone, color: "text-red-500" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const user = {
    name: "John Doe",
    email: "johndoe@email.com",
    avatar: "/images/user-avatar.png",
    cartItems: 3,
  };

  return (
    <>
      {/* Top Announcement Bar (also sticky) */}
      <div className="bg-gradient-to-r from-red-500 to-sky-500 text-white text-sm py-2 px-4 text-center sticky top-0 z-50 ">
        🎉 Free delivery on orders over $50! Order now and get 10% off your first basket.
      </div>

      {/* Main Navbar (sticky below announcement) */}
      <nav className="w-full bg-white/95 backdrop-blur-lg shadow-lg sticky top-8 z-40 border-b border-gray-100 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/dashboard" className="flex items-center space-x-3 flex-shrink-0">
              <div className="relative w-24 h-20">
                <Image
                  src="/images/logopng.png"
                  alt="Fruit Basket Booking"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors duration-200 rounded-lg hover:bg-gray-50"
                  >
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                    <span>{item.label}</span>
                    {item.submenu && <ChevronDown className="w-3 h-3 ml-1" />}
                  </Link>

                  {/* Submenu Dropdown */}
                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <AnimatePresence>
                  {searchOpen && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 200, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      className="absolute right-0 top-1/2 -translate-y-1/2"
                    >
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search fruits..."
                        className="w-34 pl-3 pr-10 ml-7 py-2 text-sm bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent "
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-2 text-gray-600 hover:text-orange-600 transition-colors "
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>

              {/* Cart */}
              <Link href="/cart" className="relative p-2 text-gray-600 hover:text-orange-600 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                {user.cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {user.cartItems}
                  </span>
                )}
              </Link>

              {/* User Menu */}
              <UserMenu user={user} />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-gray-600 hover:text-orange-600 transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <MobileDrawer open={mobileOpen} setOpen={setMobileOpen} navItems={navItems} />
    </>
  );
}
