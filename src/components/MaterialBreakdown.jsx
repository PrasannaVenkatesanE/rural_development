import React from 'react';
import { Package, Layers, Grid } from 'lucide-react';

const MaterialBreakdown = ({ specs }) => {
    // Estimations
    const wallPanels = Math.ceil(specs.walls / 10); // Assume 10sqft per panel
    const floorPanels = Math.ceil(specs.area / 15); // Assume 15sqft per panel
    const roofPanels = Math.ceil(specs.area / 20); // Assume 20sqft per panel

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Package className="mr-2 text-primary-600" size={20} />
                Material Quantity Breakdown
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-gray-50 rounded-lg">
                    <Layers className="mx-auto text-blue-500 mb-2" size={20} />
                    <div className="text-2xl font-bold text-gray-800">{wallPanels}</div>
                    <div className="text-xs text-gray-500">Wall Panels</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                    <Grid className="mx-auto text-orange-500 mb-2" size={20} />
                    <div className="text-2xl font-bold text-gray-800">{floorPanels}</div>
                    <div className="text-xs text-gray-500">Floor Panels</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                    <Package className="mx-auto text-green-500 mb-2" size={20} />
                    <div className="text-2xl font-bold text-gray-800">{roofPanels}</div>
                    <div className="text-xs text-gray-500">Roof Panels</div>
                </div>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
                *Exact quantities may vary based on final site measurements.
            </p>
        </div>
    );
};

export default MaterialBreakdown;
