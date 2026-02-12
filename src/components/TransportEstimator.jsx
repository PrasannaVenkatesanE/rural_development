import React, { useState } from 'react';
import { Truck } from 'lucide-react';

const TransportEstimator = ({ onCostChange }) => {
    const [distance, setDistance] = useState(0);
    const [cost, setCost] = useState(0);

    const calculateCost = (dist) => {
        const d = parseInt(dist) || 0;
        setDistance(d);

        // Mock Rate: ₹50 per km for heavy truck 
        // Base fee: ₹2000
        const calculated = d > 0 ? 2000 + (d * 50) : 0;
        setCost(calculated);
        onCostChange(calculated);
    };

    return (
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 mb-4">
            <h4 className="font-bold text-orange-900 mb-2 flex items-center">
                <Truck size={18} className="mr-2" />
                Transport Estimator
            </h4>
            <div className="flex gap-2">
                <input
                    type="number"
                    placeholder="Distance (km)"
                    className="flex-1 p-2 text-sm border border-orange-200 rounded"
                    onChange={(e) => calculateCost(e.target.value)}
                />
                <div className="bg-white px-3 py-2 border border-orange-200 rounded font-bold text-orange-700 min-w-[80px] text-center">
                    ₹{cost}
                </div>
            </div>
            <p className="text-xs text-orange-700 mt-1">
                *Estimated delivery cost from nearest hub.
            </p>
        </div>
    );
};

export default TransportEstimator;
