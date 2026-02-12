import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ShoppingCart, User, Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cartCount } = useCart();

    const categories = [
        "Precast Walls", "Flooring", "Roofing", "Stickers", "Windows & Doors", "Sanitary"
    ];

    return (
        <div className="bg-white border-b border-gray-200 sticky top-0 z-50 font-sans">
            {/* Top Utility Bar */}
            <div className="bg-gray-100 text-xs text-gray-500 py-1 px-4 border-b border-gray-200 hidden md:block">
                <div className="max-w-7xl mx-auto flex justify-end space-x-6">
                    <span className="hover:text-primary-600 cursor-pointer">Buyer Central</span>
                    <span className="hover:text-primary-600 cursor-pointer">Help Center</span>
                    <span className="hover:text-primary-600 cursor-pointer">App</span>
                    <span className="hover:text-primary-600 cursor-pointer">Become a Supplier</span>
                </div>
            </div>

            {/* Main Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between gap-8">

                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
                        <div className="bg-orange-500 p-2 rounded-lg text-white"> {/* Updated to Orange as per screenshot vibe */}
                            <Home size={28} />
                        </div>
                        <span className="text-2xl font-bold text-gray-900 tracking-tight">RuralBuild</span>
                    </Link>

                    {/* Search Bar - Center */}
                    <div className="flex-1 max-w-2xl hidden md:flex relative">
                        <div className="flex w-full border-2 border-orange-500 rounded-r-lg rounded-l-lg overflow-hidden">
                            <div className="bg-gray-50 px-3 py-2 border-r border-gray-200 flex items-center cursor-pointer hover:bg-gray-100 text-sm text-gray-700">
                                <span>Products</span>
                                <ChevronDown size={14} className="ml-1" />
                            </div>
                            <input
                                type="text"
                                placeholder="What are you looking for..."
                                className="flex-1 px-4 py-2 outline-none text-gray-700"
                            />
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 font-medium transition-colors flex items-center">
                                <Search size={20} className="mr-2" />
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center space-x-6 text-gray-600">

                        <Link to="/login" className="flex flex-col items-center hover:text-orange-500 transition-colors group">
                            <User size={24} className="mb-0.5 group-hover:scale-110 transition-transform" />
                            <div className="text-xs">
                                <span className="block text-gray-400 text-[10px]">Welcome</span>
                                <span className="font-medium">Sign In / Join</span>
                            </div>
                        </Link>

                        <Link to="/cart" className="flex flex-col items-center hover:text-orange-500 transition-colors group relative">
                            <ShoppingCart size={24} className="mb-0.5 group-hover:scale-110 transition-transform" />
                            <div className="text-xs font-medium">Cart</div>
                            <span className="absolute -top-1 right-2 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        </Link>

                        <div className="flex flex-col items-center hover:text-orange-500 transition-colors cursor-pointer">
                            <Globe size={24} className="mb-0.5" />
                            <div className="text-xs font-medium">English-INR</div>
                        </div>

                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <Search size={24} className="text-gray-600" />
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Secondary Nav - Categories */}
            <div className="border-t border-gray-100 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-8 h-10 text-sm font-medium text-gray-700">
                        <div className="flex items-center space-x-2 mr-4 cursor-pointer hover:text-orange-600 relative group h-full">
                            <Menu size={18} />
                            <span>All Categories</span>

                            {/* Dropdown (Hover) */}
                            <div className="absolute top-10 left-0 w-56 bg-white border border-gray-200 shadow-xl rounded-b-lg hidden group-hover:block z-50">
                                {categories.map((cat, idx) => (
                                    <Link key={idx} to="/catalog" className="block px-4 py-3 hover:bg-orange-50 hover:text-orange-600 text-sm border-b border-gray-50 last:border-0 transition-colors">
                                        {cat}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link to="/catalog" className="hover:text-orange-600 transition-colors">Featured Selections</Link>
                        <Link to="/suppliers" className="hover:text-orange-600 transition-colors">Trade Assurance</Link>
                        <Link to="/configurator" className="hover:text-orange-600 transition-colors text-orange-600 font-bold">House Configurator</Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full z-50 shadow-lg">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        <Link to="/" className="block py-2 text-base font-medium text-gray-700 hover:text-orange-600 border-b border-gray-50" onClick={() => setIsOpen(false)}>Home</Link>
                        {categories.map((cat, idx) => (
                            <Link key={idx} to="/catalog" className="block py-2 pl-4 text-sm font-medium text-gray-600 hover:text-orange-600" onClick={() => setIsOpen(false)}>
                                {cat}
                            </Link>
                        ))}
                        <Link to="/login" className="block py-2 mt-4 text-base font-medium text-orange-600" onClick={() => setIsOpen(false)}>Sign In / Join</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
