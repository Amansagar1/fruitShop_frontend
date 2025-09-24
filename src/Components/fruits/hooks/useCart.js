import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('fruitCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('fruitCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (fruit, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === fruit.id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === fruit.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...fruit, quantity }];
      }
    });
  };

  const removeFromCart = (fruitId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== fruitId));
  };

  const updateQuantity = (fruitId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(fruitId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === fruitId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return {
    cart,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount
  };
};