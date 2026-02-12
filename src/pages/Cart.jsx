import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <div className="bg-orange-50 p-6 rounded-full mb-6">
                    <ShoppingBag size={64} className="text-orange-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Cart is Empty</h2>
                <p className="text-gray-500 mb-8 max-w-md">Looks like you haven't added any construction materials yet. Browse our catalog to find what you need.</p>
                <Link to="/catalog" className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition-colors">
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Cart Items List */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="p-6 border-b border-gray-100 hidden md:grid grid-cols-12 gap-4 text-sm font-medium text-gray-500">
                                <div className="col-span-6">Product</div>
                                <div className="col-span-2 text-center">Price</div>
                                <div className="col-span-2 text-center">Quantity</div>
                                <div className="col-span-2 text-center">Total</div>
                            </div>

                            <div className="divide-y divide-gray-100">
                                {cart.map((item) => (
                                    <div key={item.id} className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

                                        {/* Product Info */}
                                        <div className="md:col-span-6 flex items-center gap-4">
                                            <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                                                <p className="text-xs text-gray-500 mb-2">Unit: {item.unit}</p>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-red-500 text-xs font-medium hover:text-red-700 flex items-center gap-1"
                                                >
                                                    <Trash2 size={12} /> Remove
                                                </button>
                                            </div>
                                        </div>

                                        {/* Price */}
                                        <div className="md:col-span-2 text-center">
                                            <span className="font-medium text-gray-900">₹{item.price}</span>
                                        </div>

                                        {/* Quantity */}
                                        <div className="md:col-span-2 flex justify-center">
                                            <div className="flex items-center border border-gray-300 rounded-lg">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="p-2 text-gray-600 hover:bg-gray-50 transition-colors"
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <span className="w-10 text-center font-medium text-sm">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="p-2 text-gray-600 hover:bg-gray-50 transition-colors"
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Total */}
                                        <div className="md:col-span-2 text-center">
                                            <span className="font-bold text-orange-600">
                                                ₹{(parseFloat(String(item.price).replace(/[^0-9.]/g, '')) * item.quantity).toLocaleString()}
                                            </span>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-4 flex justify-between items-center">
                            <Link to="/catalog" className="text-gray-600 font-medium hover:text-orange-600 flex items-center gap-2">
                                <ArrowRight size={16} className="rotate-180" /> Continue Shopping
                            </Link>
                            <button
                                onClick={clearCart}
                                className="text-red-500 text-sm font-medium hover:text-red-700"
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>

                    {/* Checkout Summary */}
                    <div className="lg:col-span-4">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
                            <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>₹{cartTotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping Estimate</span>
                                    <span className="text-green-600">Free</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Tax (18% GST)</span>
                                    <span>₹{(cartTotal * 0.18).toLocaleString()}</span>
                                </div>
                                <div className="border-t border-gray-100 pt-4 flex justify-between text-lg font-bold text-gray-900">
                                    <span>Total</span>
                                    <span>₹{(cartTotal * 1.18).toLocaleString()}</span>
                                </div>
                            </div>

                            <Link to="/checkout" className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                                Checkout Now <ArrowRight size={20} />
                            </Link>

                            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                                <ShieldCheck size={14} /> Secure Transaction
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

// Start: Mock Shield Icon
const ShieldCheck = ({ size, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
);
// End

export default Cart;
