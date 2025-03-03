import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Heart } from 'lucide-react';
import main from '../assets/main.jpg'
import bedroom from '../assets/bedroom.jpg';
import living from '../assets/living.jpg';
import office from '../assets/office.jpg';
import outdoor from '../assets/outdoor.jpg';
import chair from '../assets/chair.jpg';
import bed from '../assets/bed.jpg';
import one from '../assets/1.jpg';

const products = [
  {
    id: 1,
    name: "Modern Leather Sofa",
    price: "$1,299",
    image: main,
    category: "Living Room"
  },
  {
    id: 2,
    name: "Rustic Dining Table",
    price: "$899",
    image: one,
    category: "Dining Room"
  },
  {
    id: 3,
    name: "Minimalist Bed Frame",
    price: "$749",
    image: bed,
    category: "Bedroom"
  },
  {
    id: 4,
    name: "Accent Armchair",
    price: "$499",
    image: chair,
    category: "Chair"
  }
];

const categories = [
  "Bedroom",
  "Dining Room",
  "Office",
  "Outdoor"
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen relative">
      {/* Abstract Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500" />
        <div className="absolute inset-0" style={{ backgroundImage: main, backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Carousel */}
        <div className="relative h-screen overflow-hidden">
          <div className="flex transition-transform duration-700 ease-in-out h-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {products.map((product) => (
              <div key={product.id} className="min-w-full relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
                  <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
                    <div className="text-white max-w-lg">
                      <h1 className="text-5xl font-bold mb-4">Furniro</h1>
                      <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
                      <p className="text-xl mb-6">{product.price}</p>
                      <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-lg">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white transition-colors">
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white transition-colors">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Categories */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-semibold">Shop by Category</h2>
            <button className="text-blue-600 flex items-center hover:text-blue-700">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <div key={category} className="aspect-square relative overflow-hidden rounded-xl cursor-pointer group">
                <img src="/api/placeholder/300/300" alt={category} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center group-hover:bg-black/30 transition-all">
                  <h3 className="text-white text-xl font-semibold">{category}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-semibold">Featured Products</h2>
            <button className="text-blue-600 flex items-center hover:text-blue-700">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
                  <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{product.price}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
