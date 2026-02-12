import React from 'react';
import { TrendingDown, Clock, Users, Leaf } from 'lucide-react';

const ComparisonDashboard = ({ traditionalCost, modularCost, days, workers }) => {

    // Traditional Benchmarks (Mock averages)
    const traditionalDays = days * 4; // Approx 4x longer
    const traditionalWorkers = workers * 3; // Approx 3x more workers

    const savings = traditionalCost - modularCost;
    const savingsPercent = Math.round((savings / traditionalCost) * 100);

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Traditional vs. RuralBuild Comparison</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Cost Comparison */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-500 text-sm">Total Cost</span>
                        <TrendingDown className="text-green-600" size={20} />
                    </div>
                    <div className="mb-2">
                        <div className="text-xs text-gray-400">Traditional</div>
                        <div className="font-semibold text-gray-600 line-through">₹{traditionalCost.toLocaleString()}</div>
                    </div>
                    <div>
                        <div className="text-xs text-primary-600 font-bold">RuralBuild</div>
                        <div className="text-xl font-bold text-gray-900">₹{modularCost.toLocaleString()}</div>
                    </div>
                    <div className="mt-2 text-xs font-bold text-green-600 bg-green-100 inline-block px-2 py-1 rounded">
                        Save {savingsPercent}%
                    </div>
                </div>

                {/* Time Comparison */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-500 text-sm">Construction Time</span>
                        <Clock className="text-blue-600" size={20} />
                    </div>
                    <div className="space-y-3 mt-4">
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-500">Traditional</span>
                                <span className="text-gray-700">{traditionalDays} days</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-gray-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-primary-700 font-bold">RuralBuild</span>
                                <span className="text-primary-700 font-bold">{days} days</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-primary-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Labour */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-500 text-sm">Labour Required</span>
                        <Users className="text-orange-600" size={20} />
                    </div>
                    <div className="mt-4 flex items-end justify-between">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-400">{traditionalWorkers}</div>
                            <div className="text-xs text-gray-500">Traditional</div>
                        </div>
                        <div className="text-gray-300 pb-2">vs</div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary-600">{workers}</div>
                            <div className="text-xs text-primary-700 font-bold">RuralBuild</div>
                        </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 text-center">Reduced dependency on skilled labour</p>
                </div>

                {/* Wastage */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-500 text-sm">Material Wastage</span>
                        <Leaf className="text-green-600" size={20} />
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center mb-2">
                            <span className="w-24 text-xs text-gray-500">Traditional</span>
                            <div className="flex-1 ml-2 flex gap-1">
                                <div className="w-8 h-8 rounded bg-red-100 border border-red-200"></div>
                                <div className="w-8 h-8 rounded bg-red-100 border border-red-200"></div>
                                <div className="w-8 h-8 rounded bg-red-100 border border-red-200"></div>
                            </div>
                            <span className="text-xs text-red-500 font-bold ml-2">High</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-24 text-xs text-primary-700 font-bold">RuralBuild</span>
                            <div className="flex-1 ml-2">
                                <div className="w-8 h-8 rounded bg-green-100 border border-green-200 flex items-center justify-center text-green-700 text-xs font-bold">
                                    ~0%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ComparisonDashboard;
