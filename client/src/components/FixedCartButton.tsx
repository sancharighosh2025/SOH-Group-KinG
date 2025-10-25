import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export default function FixedCartButton() {
  const { state } = useCart();

  return (
    <Link 
      to="/cart" 
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        <div className="bg-slate-900 hover:bg-slate-800 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <ShoppingCart className="w-6 h-6" />
        </div>
        {state.totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-semibold shadow-lg">
            {state.totalItems}
          </span>
        )}
      </div>
    </Link>
  );
}
