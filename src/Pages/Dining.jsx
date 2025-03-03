import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const Card = ({ children }) => (
  <div className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    {children}
  </div>
);

const CardContent = ({ children }) => (
  <div className="p-6 flex flex-col space-y-4">{children}</div>
);

const Button = ({ children, onClick }) => (
  <button 
    onClick={onClick}
    className="px-6 py-3 bg-[#FFD700] text-[#556B2F] rounded-full shadow-md hover:bg-[#e6c200] transition-all duration-300 font-semibold flex items-center space-x-2"
  >
    {children}
  </button>
);

const DiningPage = () => {
  const [cart, setCart] = useState([]);

  const diningItems = [
    { name: 'Elegant Dining Set', description: 'A luxurious dining set for a classic look.', price: '$999', image: 'https://via.placeholder.com/300' },
    { name: 'Modern Glass Table', description: 'A sleek design with tempered glass.', price: '$499', image: 'https://via.placeholder.com/300' },
    { name: 'Rustic Wooden Set', description: 'A cozy wooden dining experience.', price: '$799', image: 'https://via.placeholder.com/300' },
    { name: 'Compact 4-Seater', description: 'Ideal for small spaces.', price: '$299', image: 'https://via.placeholder.com/300' },
    { name: 'Marble Top Dining', description: 'A premium marble experience.', price: '$1299', image: 'https://via.placeholder.com/300' },
  ];

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] py-10">
      <h1 className="text-5xl text-center font-bold mb-12 text-[#556B2F]">Dining Collections</h1>
      <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {diningItems.map((item, index) => (
          <Card key={index}>
            <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
            <CardContent>
              <h2 className="text-3xl font-semibold mb-2 text-[#6B8E23]">{item.name}</h2>
              <p className="text-[#556B2F] mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-[#808000]">{item.price}</span>
                <Button onClick={() => handleAddToCart(item)}>
                  <ShoppingCart className="inline-block mr-2" />
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DiningPage;
