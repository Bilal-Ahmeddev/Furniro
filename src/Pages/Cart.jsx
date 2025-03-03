import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-semibold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-6">
          {cart.map((product) => (
            <div key={product.id} className="flex items-center justify-between bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-lg" />
                <div>
                  <h3 className="text-xl font-medium">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-8">
            <button onClick={clearCart} className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">
              Clear Cart
            </button>
            <div className="text-xl font-semibold">
              Total: ${cart.reduce((total, product) => total + parseFloat(product.price.replace('$', '').replace(',', '')), 0).toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
