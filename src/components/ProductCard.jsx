import React from 'react';
import { Plus, Star, ShieldCheck, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer hover:border-orange-200">
            <div className="h-56 overflow-hidden relative bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide shadow-sm">
                    Factory Direct
                </div>
            </div>

            <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 line-clamp-2 leading-snug group-hover:text-orange-600 transition-colors">
                        {product.name}
                    </h3>
                </div>

                <div className="flex items-center mb-3 text-xs text-gray-500">
                    <div className="flex items-center text-orange-400 mr-2">
                        <Star size={12} className="fill-current" />
                        <Star size={12} className="fill-current" />
                        <Star size={12} className="fill-current" />
                        <Star size={12} className="fill-current" />
                        <Star size={12} className="fill-current text-gray-200" />
                        <span className="ml-1 text-gray-600 font-medium">4.5</span>
                    </div>
                    <span className="border-l border-gray-300 pl-2">200+ sold</span>
                </div>

                <div className="mb-2">
                    <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                    <span className="text-gray-500 text-xs ml-1">/{product.unit}</span>
                </div>

                <div className="text-xs text-gray-500 mb-4 bg-gray-50 p-2 rounded border border-gray-100">
                    <div className="flex justify-between mb-1">
                        <span>MOQ</span>
                        <span className="font-medium text-gray-900">100 {product.unit}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Dispatch</span>
                        <span className="font-medium text-gray-900">7 days</span>
                    </div>
                </div>

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                    }}
                    className="w-full bg-orange-600 text-white hover:bg-orange-700 py-2 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 transform active:scale-95"
                >
                    <ShoppingCart size={16} />
                    Add to Cart
                </button>
            </div>
        </div>
    );
};
