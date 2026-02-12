import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cartCount } = useCart();
    const { language } = useLanguage();
    const t = translations[language];

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
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">

                        {/* Logo & Desktop Nav */}
                        <div className="flex items-center">
                            <Link to="/" className="flex-shrink-0 flex items-center">
                                <span className="text-2xl font-bold text-orange-600">RuralBuild</span>
                            </Link>
                            <div className="hidden md:ml-8 md:flex md:space-x-4">
                                <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-600 font-medium" : "text-gray-500 hover:text-gray-900"}>{t.home}</NavLink>
                                <NavLink to="/catalog" className={({ isActive }) => isActive ? "text-orange-600 font-medium" : "text-gray-500 hover:text-gray-900"}>{t.catalog}</NavLink>
                                <NavLink to="/configurator" className={({ isActive }) => isActive ? "text-orange-600 font-medium" : "text-gray-500 hover:text-gray-900"}>{t.configurator}</NavLink>
                                <NavLink to="/suppliers" className={({ isActive }) => isActive ? "text-orange-600 font-medium" : "text-gray-500 hover:text-gray-900"}>{t.suppliers}</NavLink>
                            </div>
                        </div>

                        {/* Right Icons */}
                        <div className="hidden md:flex items-center space-x-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder={t.searchPlaceholder || "Search..."}
                                    className="pl-10 pr-4 py-1.5 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-64"
                                />
                                <Search className="absolute left-3 top-2 text-gray-400" size={16} />
                            </div>

                            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-orange-600">
                                <ShoppingCart size={24} />
                                {cartCount > 0 && (
                                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>

                            <Link to="/login" className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 font-medium">
                                <User size={20} />
                                <span>{t.login}</span>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center md:hidden">
                            <Link to="/cart" className="mr-4 relative p-2 text-gray-600">
                                <ShoppingCart size={24} />
                                {cartCount > 0 && (
                                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 focus:outline-none"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full z-50 shadow-lg">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        <Link to="/" className="block py-2 text-base font-medium text-gray-700 hover:text-orange-600 border-b border-gray-50" onClick={() => setIsOpen(false)}>{t.home}</Link>
                        <Link to="/catalog" className="block py-2 text-base font-medium text-gray-700 hover:text-orange-600 border-b border-gray-50" onClick={() => setIsOpen(false)}>{t.catalog}</Link>
                        <Link to="/configurator" className="block py-2 text-base font-medium text-gray-700 hover:text-orange-600 border-b border-gray-50" onClick={() => setIsOpen(false)}>{t.configurator}</Link>
                        <Link to="/suppliers" className="block py-2 text-base font-medium text-gray-700 hover:text-orange-600 border-b border-gray-50" onClick={() => setIsOpen(false)}>{t.suppliers}</Link>

                        <div className="pt-4 pb-2 border-t border-gray-100">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Categories</p>
                            {categories.map((cat, idx) => (
                                <Link key={idx} to="/catalog" className="block py-2 pl-4 text-sm font-medium text-gray-600 hover:text-orange-600" onClick={() => setIsOpen(false)}>
                                    {cat}
                                </Link>
                            ))}
                        </div>
                        <Link to="/login" className="block py-2 mt-4 text-base font-medium text-orange-600" onClick={() => setIsOpen(false)}>{t.login}</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
