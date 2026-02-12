import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ShieldCheck, Truck, CreditCard } from 'lucide-react';

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [step, setStep] = useState('shipping'); // shipping, payment, success
    const [isLoading, setIsLoading] = useState(false);

    if (cart.length === 0 && step !== 'success') {
        navigate('/cart');
        return null;
    }

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setStep('success');
            clearCart();
        }, 2000);
    };

    if (step === 'success') {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
                    <div className="bg-green-100 p-4 rounded-full inline-flex mb-6">
                        <CheckCircle size={48} className="text-green-600" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Order Placed!</h2>
                    <p className="text-gray-500 mb-8">
                        Thank you for building with RuralBuild. Your order <span className="font-mono font-bold text-gray-900">#RB-{Math.floor(Math.random() * 10000)}</span> has been confirmed and will be dispatched within 7 days.
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Secure Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Form Section */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="border-b border-gray-100 bg-gray-50 p-4 flex items-center space-x-2">
                                <Truck size={20} className="text-gray-500" />
                                <h3 className="font-bold text-gray-700">Shipping Details</h3>
                            </div>

                            <form className="p-6 space-y-6" id="checkout-form" onSubmit={handlePlaceOrder}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                        <input type="text" required className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 px-4 py-2 border" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                        <input type="text" required className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 px-4 py-2 border" placeholder="Doe" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input type="tel" required className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 px-4 py-2 border" placeholder="+91 98765 43210" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                                    <textarea required rows={3} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 px-4 py-2 border" placeholder="Street address, Village/Town..."></textarea>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
                                        <input type="text" required className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 px-4 py-2 border" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                                        <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 px-4 py-2 border">
                                            <option>Tamil Nadu</option>
                                            <option>Kerala</option>
                                            <option>Karnataka</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">PIN Code</label>
                                        <input type="text" required className="w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 px-4 py-2 border" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Order Summary Section */}
                    <div className="lg:col-span-4">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                                <CreditCard size={18} className="mr-2 text-gray-500" /> Payment Summary
                            </h3>

                            <div className="space-y-4 mb-6 text-sm">
                                <div className="flex justify-between text-gray-600">
                                    <span>Items Total</span>
                                    <span>₹{cartTotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="text-green-600">Free</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Taxes (18%)</span>
                                    <span>₹{(cartTotal * 0.18).toLocaleString()}</span>
                                </div>
                                <div className="border-t border-gray-100 pt-4 flex justify-between text-lg font-bold text-gray-900">
                                    <span>Payable Amount</span>
                                    <span>₹{(cartTotal * 1.18).toLocaleString()}</span>
                                </div>
                            </div>

                            <button
                                form="checkout-form"
                                disabled={isLoading}
                                className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Processing...' : 'Place Order'}
                            </button>

                            <div className="mt-6 flex flex-col items-center gap-2 text-xs text-gray-400 text-center">
                                <div className="flex items-center gap-1">
                                    <ShieldCheck size={14} className="text-green-500" />
                                    <span>SSL Encrypted Transaction</span>
                                </div>
                                <p>By placing this order, you agree to our Terms of Service.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Checkout;
