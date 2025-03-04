import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import officeDesk from '../assets/1.jpg';
import officeChair from '../assets/1.jpg';
import bookshelf from '../assets/1.jpg';
import decor from '../assets/1.jpg';

const officeProducts = [
  {
    id: 1,
    name: 'Ergonomic Office Chair',
    price: '$199',
    image: officeChair,
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Modern Office Desk',
    price: '$499',
    image: officeDesk,
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Wooden Bookshelf',
    price: '$299',
    image: bookshelf,
    rating: 4.3,
  },
  {
    id: 4,
    name: 'Office Decor Set',
    price: '$99',
    image: decor,
    rating: 4.7,
  },
];

const OfficePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Office Furniture</h2>
          <button className="text-blue-600 flex items-center hover:text-blue-700">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {officeProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-xl overflow-hidden group">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-lg">{product.price}</p>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 h-5 w-5'
                              : 'text-gray-300 h-5 w-5'
                          }
                        />
                      ))}
                      <span className="text-sm text-gray-200 ml-2">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
                <span className="text-lg font-bold text-gray-800">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfficePage;
