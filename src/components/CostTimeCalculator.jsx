import React, { useState, useEffect } from 'react';
import { Calculator, Clock, IndianRupee, Truck, Layers, CheckCircle } from 'lucide-react';

const CostTimeCalculator = () => {
    const [numHouses, setNumHouses] = useState(10);
    const [houseType, setHouseType] = useState('1BHK');
    const [distance, setDistance] = useState(50);
    const [flooring, setFlooring] = useState('Standard Panel');

    const [results, setResults] = useState({
        totalCost: 0,
        costPerUnit: 0,
        timeTraditional: 0,
        timeModular: 0,
        savings: 0
    });

    useEffect(() => {
        calculateEstimates();
    }, [numHouses, houseType, distance, flooring]);

    const calculateEstimates = () => {
        // Base Costs
        const baseSafe = houseType === '1BHK' ? 450000 : 650000;

        // Flooring Add-on
        const flooringCost = flooring === 'Premium Finish' ? 35000 : 0;

        // Transport Cost
        const transportCost = 25 * distance; // Per house

        // Total Unit Cost
        const unitCost = baseSafe + flooringCost + transportCost;

        // Total Project Cost
        const total = unitCost * numHouses;

        // Time Estimation
        // Assuming some economies of scale or parallelization for larger projects isn't the focus of this simple calc
        // but let's keep it linear for "Total Man Days" comparison or just Project Duration
        // Standard: 120 days. Modular: 45 days.

        setResults({
            totalCost: total,
            costPerUnit: unitCost,
            timeTraditional: 120, // Days
            timeModular: 45, // Days
            savings: (120 - 45) // Days saved
        });
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    return (
        <div id="cost-calculator" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-blue-600 font-bold tracking-wide uppercase text-sm">Project Planner</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
                        Rural Housing Cost & Time Estimator
                    </h2>
                    <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
                        Calculate potential savings for your development project instantly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Controls */}
                    <div className="lg:col-span-5 bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                            <Calculator className="mr-2 text-blue-600" /> Project Details
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Number of Houses</label>
                                <input
                                    type="number"
                                    min="1"
                                    value={numHouses}
                                    onChange={(e) => setNumHouses(parseInt(e.target.value) || 1)}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                />
                                <div className="mt-2 text-xs text-slate-500">Scale your project to see bulk efficiency.</div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">House Type</label>
                                <select
                                    value={houseType}
                                    onChange={(e) => setHouseType(e.target.value)}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                >
                                    <option value="1BHK">1BHK - 350 sq ft</option>
                                    <option value="2BHK">2BHK - 550 sq ft</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Distance from Factory (km)</label>
                                <div className="flex items-center">
                                    <Truck className="text-slate-400 mr-2" size={18} />
                                    <input
                                        type="range"
                                        min="10"
                                        max="500"
                                        value={distance}
                                        onChange={(e) => setDistance(parseInt(e.target.value))}
                                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                    />
                                    <span className="ml-3 font-mono text-slate-700 w-16 text-right">{distance} km</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Flooring Type</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => setFlooring('Standard Panel')}
                                        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${flooring === 'Standard Panel' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        Standard Panel
                                    </button>
                                    <button
                                        onClick={() => setFlooring('Premium Finish')}
                                        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${flooring === 'Premium Finish' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        Premium Finish
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="lg:col-span-7 space-y-6">
                        {/* Cost Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white shadow-lg">
                                <div className="text-blue-100 text-sm font-medium mb-1">Total Project Cost</div>
                                <div className="text-3xl font-bold mb-2">{formatCurrency(results.totalCost)}</div>
                                <div className="text-blue-200 text-xs">Based on {numHouses} units</div>
                            </div>
                            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                                <div className="text-slate-500 text-sm font-medium mb-1">Cost Per Unit</div>
                                <div className="text-3xl font-bold text-slate-800 mb-2">{formatCurrency(results.costPerUnit)}</div>
                                <div className="text-green-600 text-xs font-bold flex items-center">
                                    <CheckCircle size={12} className="mr-1" /> Includes transport
                                </div>
                            </div>
                        </div>

                        {/* Time Comparison */}
                        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-slate-800 mb-6 flex items-center">
                                <Clock className="mr-2 text-blue-600" /> Time to Completion
                            </h4>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-medium text-slate-500">Traditional Construction</span>
                                        <span className="font-bold text-slate-700">120 Days</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-3">
                                        <div className="bg-slate-400 h-3 rounded-full" style={{ width: '100%' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-medium text-blue-600">Modular (Our Solution)</span>
                                        <span className="font-bold text-blue-700">45 Days</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-3">
                                        <div className="bg-green-500 h-3 rounded-full relative" style={{ width: '37.5%' }}>
                                            <div className="absolute right-0 -top-1 bg-white border-2 border-green-500 w-3 h-3 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="mt-3 text-sm text-green-700 font-medium bg-green-50 px-3 py-1 rounded-md inline-block">
                                        🚀 62.5% Faster Completion
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Summary */}
                        <div className="bg-green-50 rounded-xl p-6 border border-green-100 flex items-start">
                            <Layers className="text-green-600 mt-1 mr-4" size={24} />
                            <div>
                                <h4 className="font-bold text-green-800">Massive Scale Efficiency</h4>
                                <p className="text-green-700 text-sm mt-1">
                                    For a project of {numHouses} houses, you save approximately <span className="font-bold">{(results.costPerUnit * 0.3 * numHouses / 100000).toFixed(1)} Lakhs</span> and <span className="font-bold">{results.savings} days</span> compared to traditional methods.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CostTimeCalculator;
