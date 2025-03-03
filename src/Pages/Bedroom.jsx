import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import main from '../assets/main.jpg';

const bedroomProducts = [
  {
    id: 1,
    name: 'Minimalist Bed Frame',
    price: '$749',
    image: '/api/placeholder/500/300',
    description: 'Experience comfort and style with our minimalist bed frame.',
  },
  {
    id: 2,
    name: 'Cozy Nightstand',
    price: '$199',
    image: '/api/placeholder/500/300',
    description: 'Keep your essentials close with this sleek nightstand.',
  },
  {
    id: 3,
    name: 'Modern Wardrobe',
    price: '$999',
    image: '/api/placeholder/500/300',
    description: 'Store your clothes in style with our modern wardrobe.',
  },
  {
    id: 4,
    name: 'Comfortable Mattress',
    price: '$599',
    image: '/api/placeholder/500/300',
    description: 'Sleep better with our plush and supportive mattress.',
  }
];

const Bedroom = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="relative h-96 flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <img src={main} alt="Bedroom" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <h1 className="text-5xl font-bold z-10">Bedroom Collection</h1>
      </header>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-semibold">Featured Bedroom Furniture</h2>
          <button className="text-blue-600 flex items-center hover:text-blue-700">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bedroomProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{product.price}</span>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Bedroom;
