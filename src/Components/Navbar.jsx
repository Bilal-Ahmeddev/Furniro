import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Search, User, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('/');
  const [cartCount, setCartCount] = useState(0); // Initialize with 0 items
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Living Room', path: '/living-room' },
    { name: 'Bedroom', path: '/bedroom' },
    { name: 'Dining', path: '/dining' },
    { name: 'Office', path: '/office' }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load cart items from localStorage on initial render
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cartItems.length); // Set cart count based on items in localStorage
  }, []);

  const handleNavigation = (path) => {
    setActiveTab(path);
    setIsOpen(false);
    navigate(path);
  };

  const handleCartClick = () => {
    navigate('/cart'); // Navigate to the cart page
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <div className="text-3xl font-bold text-white cursor-pointer" onClick={() => handleNavigation('/')}>Furniro</div>
        <div className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <motion.button
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              className={`px-3 py-2 text-white text-lg font-medium transition-all duration-300 ${activeTab === item.path ? 'text-[#FFD700] underline' : 'hover:text-[#FFD700]'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Search className="text-white h-6 w-6 cursor-pointer hover:text-[#FFD700] transition" />
          <Bell className="text-white h-6 w-6 relative cursor-pointer hover:text-[#FFD700] transition" />
          <User className="text-white h-6 w-6 cursor-pointer hover:text-[#FFD700] transition" />
          <button onClick={handleCartClick} className="relative">
            <ShoppingCart className="text-white h-6 w-6 cursor-pointer hover:text-[#FFD700] transition" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>
      {isOpen && (
        <motion.div
          className="md:hidden bg-[#556B2F] py-4 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map(item => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              className="block w-full text-left px-4 py-2 text-white hover:bg-[#6B8E23] transition"
            >
              {item.name}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
