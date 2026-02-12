import React, { useState } from 'react';
import { products } from '../lib/data';
import { Check, Settings, Calculator, Home } from 'lucide-react';
import { cn } from '../lib/utils'; // Assuming you have a cn utility, or use standard class strings

const Configurator = () => {
    // Config state
    const [houseType, setHouseType] = useState('1BHK'); // 1BHK, 2BHK
    const [selectedWall, setSelectedWall] = useState(products.find(p => p.category === 'Walls') || null);
    const [selectedFloor, setSelectedFloor] = useState(products.find(p => p.category === 'Flooring') || null);
    const [selectedSticker, setSelectedSticker] = useState(null);

    // House Dimensions (Mock data)
    const specs = {
        '1BHK': { area: 450, walls: 1200 }, // sq.ft
        '2BHK': { area: 750, walls: 1800 }
    };

    const currentSpec = specs[houseType];

    // Calculations
    const baseCost = houseType === '1BHK' ? 450000 : 700000; // Base structure cost
    const wallCost = selectedWall ? selectedWall.price * currentSpec.walls : 0;
    const floorCost = selectedFloor ? selectedFloor.price * currentSpec.area : 0;
    const stickerCost = selectedSticker ? selectedSticker.price * (currentSpec.walls * 0.5) : 0; // Assuming stickers covers 50% walls

    const totalCost = baseCost + wallCost + floorCost + stickerCost;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center space-x-3 mb-8">
                <div className="bg-primary-600 p-2 rounded-lg text-white">
                    <Settings size={24} />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">House Configurator</h1>
                    <p className="text-gray-600">Customize your modular home and get an instant estimate.</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">

                {/* Left Column: Controls */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Step 1: House Type */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <span className="bg-gray-100 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                            Select Layout
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {['1BHK', '2BHK'].map(type => (
                                <button
                                    key={type}
                                    onClick={() => setHouseType(type)}
                                    className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center ${houseType === type
                                            ? 'border-primary-600 bg-primary-50 text-primary-700'
                                            : 'border-gray-200 hover:border-gray-300 text-gray-600'
                                        }`}
                                >
                                    <Home size={32} className="mb-2" />
                                    <span className="font-bold">{type}</span>
                                    <span className="text-xs opacity-75">{specs[type].area} sq.ft</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Step 2: Wall Material */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <span className="bg-gray-100 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                            Wall Material
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {products.filter(p => p.category === 'Walls').map(wall => (
                                <div
                                    key={wall.id}
                                    onClick={() => setSelectedWall(wall)}
                                    className={`relative p-3 rounded-xl border cursor-pointer transition-all flex items-start space-x-3 ${selectedWall?.id === wall.id
                                            ? 'border-primary-600 bg-primary-50 ring-1 ring-primary-600'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <img src={wall.image} alt={wall.name} className="w-16 h-16 rounded-lg object-cover" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-sm">{wall.name}</h3>
                                        <p className="text-xs text-gray-500 mt-1">₹{wall.price} / sq.ft</p>
                                    </div>
                                    {selectedWall?.id === wall.id && (
                                        <div className="absolute top-2 right-2 bg-primary-600 text-white rounded-full p-1">
                                            <Check size={12} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Step 3: Flooring */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <span className="bg-gray-100 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span>
                            Flooring
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {products.filter(p => p.category === 'Flooring').map(floor => (
                                <div
                                    key={floor.id}
                                    onClick={() => setSelectedFloor(floor)}
                                    className={`relative p-3 rounded-xl border cursor-pointer transition-all flex items-start space-x-3 ${selectedFloor?.id === floor.id
                                            ? 'border-primary-600 bg-primary-50 ring-1 ring-primary-600'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <img src={floor.image} alt={floor.name} className="w-16 h-16 rounded-lg object-cover" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-sm">{floor.name}</h3>
                                        <p className="text-xs text-gray-500 mt-1">₹{floor.price} / sq.ft</p>
                                    </div>
                                    {selectedFloor?.id === floor.id && (
                                        <div className="absolute top-2 right-2 bg-primary-600 text-white rounded-full p-1">
                                            <Check size={12} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Step 4: Decorative Stickers */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <span className="bg-gray-100 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">4</span>
                            Wall Stickers (Optional)
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div
                                onClick={() => setSelectedSticker(null)}
                                className={`p-4 rounded-xl border cursor-pointer text-center flex items-center justify-center h-full ${selectedSticker === null
                                        ? 'border-gray-400 bg-gray-100 text-gray-700'
                                        : 'border-gray-200 hover:border-gray-300 text-gray-500'
                                    }`}
                            >
                                No Sticker
                            </div>
                            {products.filter(p => p.category === 'Stickers').map(sticker => (
                                <div
                                    key={sticker.id}
                                    onClick={() => setSelectedSticker(sticker)}
                                    className={`relative p-3 rounded-xl border cursor-pointer transition-all flex items-start space-x-3 ${selectedSticker?.id === sticker.id
                                            ? 'border-primary-600 bg-primary-50 ring-1 ring-primary-600'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <img src={sticker.image} alt={sticker.name} className="w-16 h-16 rounded-lg object-cover" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-sm">{sticker.name}</h3>
                                        <p className="text-xs text-gray-500 mt-1">₹{sticker.price} / sq.ft</p>
                                    </div>
                                    {selectedSticker?.id === sticker.id && (
                                        <div className="absolute top-2 right-2 bg-primary-600 text-white rounded-full p-1">
                                            <Check size={12} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right Column: Price Estimate */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
                        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                            <Calculator className="mr-2 text-primary-600" />
                            Cost Estimate
                        </h2>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Base Structure ({houseType})</span>
                                <span className="font-medium">₹{baseCost.toLocaleString()}</span>
                            </div>

                            {selectedWall && (
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Walls ({selectedWall.name})</span>
                                    <span className="font-medium">₹{wallCost.toLocaleString()}</span>
                                </div>
                            )}

                            {selectedFloor && (
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Flooring ({selectedFloor.name})</span>
                                    <span className="font-medium">₹{floorCost.toLocaleString()}</span>
                                </div>
                            )}

                            {selectedSticker && (
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Stickers ({selectedSticker.name})</span>
                                    <span className="font-medium">₹{stickerCost.toLocaleString()}</span>
                                </div>
                            )}

                            <div className="border-t border-gray-100 pt-4 flex justify-between items-end">
                                <span className="font-bold text-gray-900">Total Estimate</span>
                                <span className="text-2xl font-bold text-primary-600">₹{totalCost.toLocaleString()}</span>
                            </div>
                        </div>

                        <p className="text-xs text-gray-500 mb-6 bg-gray-50 p-3 rounded">
                            *Preliminary estimate including material and standard installation. Transport costs extra.
                        </p>

                        <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-lg hover:shadow-xl">
                            Download Quote
                        </button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Configurator;
