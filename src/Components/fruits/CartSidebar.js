"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";

const CartSidebar = ({ 
  isOpen, 
  onClose, 
  cart, 
  onUpdateQuantity, 
  onRemoveFromCart, 
  onClearCart, 
  total 
}) => {
  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center space-x-3">
                <ShoppingCart size={24} className="text-green-600" />
                <h2 className="text-xl font-bold">Your Cart</h2>
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm">
                  {cart.length} items
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500 text-lg">Your cart is empty</p>
                  <p className="text-gray-400 text-sm mt-2">Add some fresh fruits to get started!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center space-x-4 bg-gray-50 rounded-xl p-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-green-600 font-bold">${item.price}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveFromCart(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t p-6 space-y-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                    Proceed to Checkout
                  </button>
                  <button
                    onClick={onClearCart}
                    className="w-full bg-gray-100 text-gray-600 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartSidebar;