import React from 'react';

const LivingRoom = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5DC] to-[#E0E0D1] p-8">
      <h1 className="text-4xl font-bold text-[#556B2F] mb-8">Living Room Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white shadow-xl rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Image {index + 1}</span>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-[#6B8E23]">Product {index + 1}</h2>
              <p className="text-gray-600 mt-2">Beautiful living room furniture that adds elegance to your home.</p>
              <button className="mt-4 bg-[#556B2F] text-[#F5F5DC] px-4 py-2 rounded-lg hover:bg-[#6B8E23] transition-colors duration-300">View Product</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LivingRoom;
