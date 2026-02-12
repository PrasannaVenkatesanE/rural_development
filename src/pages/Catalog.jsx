import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../lib/data';
import { Filter, ChevronDown, LayoutGrid, List } from 'lucide-react';

const Catalog = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Walls', 'Flooring', 'Stickers', 'Roofing', 'Windows', 'Sanitary'];

    const filteredProducts = filter === 'All'
        ? products
        : products.filter(p => p.category === filter);

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumbs & Header */}
                <div className="flex justify-between items-center mb-6">
                    <div className="text-sm text-gray-500">
                        Home / <span className="text-gray-900 font-medium">All Products</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="text-sm text-gray-600">
                            <span className="font-bold text-gray-900">{filteredProducts.length}</span> Products found
                        </div>
                        <div className="flex border border-gray-300 rounded overflow-hidden bg-white">
                            <button className="p-2 bg-gray-100 text-gray-900"><LayoutGrid size={18} /></button>
                            <button className="p-2 text-gray-500 hover:bg-gray-50"><List size={18} /></button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-8">

                    {/* Sidebar Filters */}
                    <div className="hidden lg:col-span-3 lg:block space-y-6">
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-4 flex justify-between items-center">
                                Categories
                                <ChevronDown size={16} />
                            </h3>
                            <div className="space-y-2">
                                {categories.map(cat => (
                                    <div
                                        key={cat}
                                        onClick={() => setFilter(cat)}
                                        className={`cursor-pointer text-sm py-1 px-2 rounded transition-colors ${filter === cat ? 'bg-orange-50 text-orange-600 font-medium' : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {cat}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-4">Supplier Type</h3>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                                    <input type="checkbox" className="rounded text-orange-600 focus:ring-orange-500" />
                                    <span className="flex items-center">
                                        <img src="https://img.alicdn.com/tps/TB1uM3xMXXXXXcDXpXXXXXXXXXX-36-36.png" className="w-4 h-4 mr-1" alt="" />
                                        Trade Assurance
                                    </span>
                                </label>
                                <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                                    <input type="checkbox" className="rounded text-orange-600 focus:ring-orange-500" />
                                    <span className="flex items-center">Verified Supplier</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="col-span-12 lg:col-span-9">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Catalog;
