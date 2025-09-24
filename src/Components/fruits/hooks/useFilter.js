import { useState, useMemo } from 'react';

export const useFilter = (fruits) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState([0, 10]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAndSortedFruits = useMemo(() => {
    let filtered = fruits.filter(fruit => {
      const matchesCategory = selectedCategory === 'all' || fruit.category === selectedCategory;
      const matchesPrice = fruit.price >= priceRange[0] && fruit.price <= priceRange[1];
      const matchesSearch = fruit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           fruit.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesPrice && matchesSearch;
    });

    // Sorting logic
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'popular':
      default:
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return filtered;
  }, [fruits, selectedCategory, sortBy, priceRange, searchTerm]);

  return {
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    priceRange,
    setPriceRange,
    searchTerm,
    setSearchTerm,
    filteredFruits: filteredAndSortedFruits
  };
};