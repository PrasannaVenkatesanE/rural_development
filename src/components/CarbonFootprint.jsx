import React from 'react';
import { Leaf } from 'lucide-react';

const CarbonFootprint = ({ area }) => {
    // Estimations:
    // Traditional Construction: ~50 kg CO2 / sqft
    // Modular Construction: ~20 kg CO2 / sqft
    const traditionalCO2 = area * 50;
    const modularCO2 = area * 20;
    const saving = traditionalCO2 - modularCO2;
    const percent = Math.round((saving / traditionalCO2) * 100);

    return (
        <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-center justify-between">
            <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Leaf className="text-green-600" size={20} />
                </div>
                <div>
                    <h4 className="font-bold text-green-900 text-sm">Carbon Footprint Reduced</h4>
                    <p className="text-green-700 text-xs">Compared to brick & mortar</p>
                </div>
            </div>
            <div className="text-right">
                <div className="text-xl font-bold text-green-700">-{percent}%</div>
                <div className="text-xs text-green-600 font-medium">{saving.toLocaleString()} kg CO2 saved</div>
            </div>
        </div>
    );
};

export default CarbonFootprint;
