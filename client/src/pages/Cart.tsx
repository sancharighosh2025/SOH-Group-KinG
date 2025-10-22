import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "../components/ui/button"
import { ArrowLeft, ShoppingCart, Plus, Minus, Trash2, CreditCard } from "lucide-react"
import { useCartActions } from '../hooks/useCartActions'

export default function Cart() {
  const { 
    state, 
    updateQuantityWithToast, 
    removeItemWithToast, 
    clearCartWithToast 
  } = useCartActions();

  const handleQuantityChange = (id: string, newQuantity: number, itemName: string) => {
    updateQuantityWithToast(id, newQuantity, itemName);
  };

  const handleRemoveItem = (id: string, itemName: string) => {
    removeItemWithToast(id, itemName);
  };

  const handleClearCart = () => {
    clearCartWithToast();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/made-my-day/more" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all duration-300">
              <ArrowLeft className="w-4 h-4" />
              Continue Shopping
            </Link>
            <h1 className="text-3xl font-bold text-slate-900">Shopping Cart</h1>
          </div>
          {state.items.length > 0 && (
            <Button 
              onClick={handleClearCart}
              variant="outline" 
              className="text-red-600 border-red-200 hover:bg-red-50"
            >
              Clear Cart
            </Button>
          )}
        </div>

        {state.items.length === 0 ? (
          /* Empty Cart */
          <div className="text-center py-20">
            <div className="w-32 h-32 mx-auto mb-8 bg-slate-100 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-16 h-16 text-slate-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Your cart is empty</h2>
            <p className="text-slate-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link to="/made-my-day/more">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          /* Cart with Items */
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {state.items.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                  <div className="flex gap-6">
                    {/* Item Image */}
                    <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ShoppingCart className="w-8 h-8 text-red-500" />
                    </div>
                    
                    {/* Item Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-slate-900">{item.name}</h3>
                        <button
                          onClick={() => handleRemoveItem(item.id, item.name)}
                          className="text-red-500 hover:text-red-700 transition-colors duration-300"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      <p className="text-slate-600 text-sm mb-2">{item.category}</p>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">{item.about}</p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-slate-600">Quantity:</span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1, item.name)}
                              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors duration-300"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-12 text-center font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1, item.name)}
                              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors duration-300"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-slate-900">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </div>
                          <div className="text-sm text-slate-600">
                            ₹{item.price.toLocaleString()} each
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sticky top-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Items ({state.totalItems})</span>
                    <span className="font-semibold">₹{state.totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Shipping</span>
                    <span className="font-semibold text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Tax (18%)</span>
                    <span className="font-semibold">₹{(state.totalPrice * 0.18).toLocaleString()}</span>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <div className="flex justify-between">
                      <span className="text-xl font-bold text-slate-900">Total</span>
                      <span className="text-xl font-bold text-slate-900">
                        ₹{(state.totalPrice * 1.18).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 text-lg font-semibold rounded-xl">
                    <CreditCard className="mr-2 w-5 h-5" />
                    Proceed to Checkout
                  </Button>
                  <Link to="/made-my-day/more" className="block">
                    <Button variant="outline" className="w-full border-2 border-slate-200 hover:border-slate-300 py-4 text-lg font-semibold rounded-xl">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>

                <div className="mt-6 p-4 bg-slate-50 rounded-xl">
                  <h3 className="font-semibold text-slate-900 mb-2">Delivery Information</h3>
                  <p className="text-sm text-slate-600">
                    Free shipping on orders above ₹500. Estimated delivery: 3-5 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
