import React, { useState } from 'react';
import { products } from '../lib/data';
import { Check, Settings, Calculator, Home, Clock, Users, IndianRupee, Info, Wrench } from 'lucide-react';
import SubsidyChecker from '../components/SubsidyChecker';
import ComparisonDashboard from '../components/ComparisonDashboard';
import TransportEstimator from '../components/TransportEstimator';
import EMICalculator from '../components/EMICalculator';
import CarbonFootprint from '../components/CarbonFootprint';
import MaterialBreakdown from '../components/MaterialBreakdown';
import AssemblyDiagram from '../components/AssemblyDiagram';
import WarrantyBadge from '../components/WarrantyBadge';
import RuralAccessibility from '../components/RuralAccessibility';
import { translations } from '../lib/translations';
import { useLanguage } from '../context/LanguageContext';

const Configurator = () => {
    // Accessibility State
    const { language, switchLanguage } = useLanguage();
    const [lowBandwidth, setLowBandwidth] = useState(false);

    // Config state
    const [houseType, setHouseType] = useState('1BHK'); // 1BHK, 2BHK
    const [selectedWall, setSelectedWall] = useState(products.find(p => p.category === 'Walls') || null);
    const [selectedFloor, setSelectedFloor] = useState(products.find(p => p.category === 'Flooring') || null);
    const [selectedSticker, setSelectedSticker] = useState(null);
    const [subsidy, setSubsidy] = useState(0);
    const [transportCost, setTransportCost] = useState(0);
    const [includeInstallation, setIncludeInstallation] = useState(false);

    const t = translations[language];

    // House Dimensions (Mock data)
    const specs = {
        '1BHK': { area: 450, walls: 1200 },
        '2BHK': { area: 750, walls: 1800 }
    };

    const currentSpec = specs[houseType];

    // Estimations
    const estimatedDays = Math.ceil(currentSpec.area / 15);
    const labourRequired = Math.ceil(currentSpec.area / 100);

    // Calculations
    const baseCost = houseType === '1BHK' ? 350000 : 550000;
    const wallCost = selectedWall ? selectedWall.price * currentSpec.walls : 0;
    const floorCost = selectedFloor ? selectedFloor.price * currentSpec.area : 0;
    const stickerCost = selectedSticker ? selectedSticker.price * (currentSpec.walls * 0.2) : 0;
    const installationCost = includeInstallation ? currentSpec.area * 50 : 0; // ₹50/sqft for installation

    const totalCost = baseCost + wallCost + floorCost + stickerCost + installationCost;
    const finalCost = totalCost - subsidy + transportCost;

    const traditionalCost = currentSpec.area * 1800;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div className="flex items-center space-x-3">
                    <div className="bg-primary-600 p-2 rounded-lg text-white">
                        <Settings size={24} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
                        <p className="text-gray-600">{t.subtitle}</p>
                    </div>
                </div>

                {/* Accessibility Controls */}
                <RuralAccessibility
                    lowBandwidth={lowBandwidth}
                    setLowBandwidth={setLowBandwidth}
                />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">

                {/* Left Column: Controls */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Carbon Footprint Banner */}
                    <CarbonFootprint area={currentSpec.area} />

                    {/* Step 1: House Type */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-gray-900 flex items-center">
                                <span className="bg-gray-100 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                                {t.selectLayout}
                            </h2>
                            <div className="flex space-x-4 text-sm">
                                <span className="flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                    <Clock size={14} className="mr-1" /> {estimatedDays} {t.days}
                                </span>
                                <span className="flex items-center text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                                    <Users size={14} className="mr-1" /> {labourRequired} {t.workers}
                                </span>
                            </div>
                        </div>

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
                                    <span className="text-xs opacity-75">{specs[type].area} sq.ft {t.plinthArea}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Step 2: Wall Material */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <span className="bg-gray-100 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                            {t.wallMaterial}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {products.filter(p => p.category === 'Walls').map(wall => (
                                <div
                                    key={wall.id}
                                    onClick={() => setSelectedWall(wall)}
                                    className={`relative p-3 rounded-xl border cursor-pointer transition-all flex items-start space-x-3 group ${selectedWall?.id === wall.id
                                        ? 'border-primary-600 bg-primary-50 ring-1 ring-primary-600'
                                        : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    {!lowBandwidth && (
                                        <img src={wall.image} alt={wall.name} className="w-16 h-16 rounded-lg object-cover" />
                                    )}
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-semibold text-gray-900 text-sm">{wall.name}</h3>
                                            <div className="relative group/tooltip">
                                                <Info size={14} className="text-gray-400 hover:text-primary-600" />
                                                <div className="absolute z-10 bottom-full right-0 mb-2 w-48 bg-gray-900 text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-opacity">
                                                    {wall.features.join(', ')}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">₹{wall.price} {t.perSqft}</p>
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
                            {t.flooring}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {products.filter(p => p.category === 'Flooring').map(floor => (
                                <div
                                    key={floor.id}
                                    onClick={() => setSelectedFloor(floor)}
                                    className={`relative p-3 rounded-xl border cursor-pointer transition-all flex items-start space-x-3 group ${selectedFloor?.id === floor.id
                                        ? 'border-primary-600 bg-primary-50 ring-1 ring-primary-600'
                                        : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    {!lowBandwidth && (
                                        <img src={floor.image} alt={floor.name} className="w-16 h-16 rounded-lg object-cover" />
                                    )}
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-semibold text-gray-900 text-sm">{floor.name}</h3>
                                            <div className="relative group/tooltip">
                                                <Info size={14} className="text-gray-400 hover:text-primary-600" />
                                                <div className="absolute z-10 bottom-full right-0 mb-2 w-48 bg-gray-900 text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-opacity">
                                                    {floor.features.join(', ')}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">₹{floor.price} {t.perSqft}</p>
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

                    {/* Step 4: Installation Check */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="bg-purple-100 p-2 rounded-lg text-purple-600 mr-4">
                                    <Wrench size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">{t.installation}</h3>
                                    <p className="text-sm text-gray-500">{t.installationDesc}</p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={includeInstallation}
                                    onChange={(e) => setIncludeInstallation(e.target.checked)}
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                            </label>
                        </div>
                    </div>

                    {/* Step 5: Subsidy Check */}
                    <SubsidyChecker onSubsidyApply={setSubsidy} />

                    {/* Step 6: Technical Details */}
                    <MaterialBreakdown specs={currentSpec} />
                    <AssemblyDiagram />

                    {/* Step 7: Comparison Dashboard */}
                    <ComparisonDashboard
                        traditionalCost={traditionalCost}
                        modularCost={totalCost}
                        days={estimatedDays}
                        workers={labourRequired}
                    />

                </div>

                {/* Right Column: Price Estimate */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
                        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                            <Calculator className="mr-2 text-primary-600" />
                            {t.costEstimate}
                        </h2>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">{t.baseStructure} ({houseType})</span>
                                <span className="font-medium">₹{baseCost.toLocaleString()}</span>
                            </div>

                            {selectedWall && (
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">{t.walls} ({selectedWall.name})</span>
                                    <span className="font-medium">₹{wallCost.toLocaleString()}</span>
                                </div>
                            )}

                            {selectedFloor && (
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">{t.flooring} ({selectedFloor.name})</span>
                                    <span className="font-medium">₹{floorCost.toLocaleString()}</span>
                                </div>
                            )}

                            {selectedSticker && (
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">{t.stickers} ({selectedSticker.name})</span>
                                    <span className="font-medium">₹{stickerCost.toLocaleString()}</span>
                                </div>
                            )}

                            {includeInstallation && (
                                <div className="flex justify-between text-sm text-purple-700 font-medium">
                                    <span>Installation (₹50/sqft)</span>
                                    <span>₹{installationCost.toLocaleString()}</span>
                                </div>
                            )}

                            {/* Gross Total */}
                            <div className="border-t border-gray-100 pt-4 flex justify-between text-gray-500 text-sm">
                                <span>{t.grossTotal}</span>
                                <span>₹{totalCost.toLocaleString()}</span>
                            </div>

                            {/* Transport Estimator Integration */}
                            <div>
                                <TransportEstimator onCostChange={setTransportCost} />
                                {transportCost > 0 && (
                                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                                        <span>{t.transport}</span>
                                        <span>+ ₹{transportCost.toLocaleString()}</span>
                                    </div>
                                )}
                            </div>

                            {/* Subsidy Deduction */}
                            {subsidy > 0 && (
                                <div className="flex justify-between text-green-600 font-medium">
                                    <span className="flex items-center"><IndianRupee size={14} className="mr-1" /> {t.subsidy}</span>
                                    <span>- ₹{subsidy.toLocaleString()}</span>
                                </div>
                            )}

                            <div className="border-t-2 border-dashed border-gray-200 pt-4 flex justify-between items-end">
                                <span className="font-bold text-gray-900">{t.netPayable}</span>
                                <span className="text-2xl font-bold text-primary-600">₹{finalCost.toLocaleString()}</span>
                            </div>
                        </div>

                        <p className="text-xs text-gray-500 mb-6 bg-gray-50 p-3 rounded">
                            *Preliminary estimate. Subsidy subject to verification.
                        </p>

                        <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-lg hover:shadow-xl mb-6">
                            {t.downloadQuote}
                        </button>

                        <WarrantyBadge />

                        {/* EMI Calculator Integration */}
                        <EMICalculator loanAmount={finalCost} />

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Configurator;
