import React from 'react';
import { ShieldCheck, Droplets } from 'lucide-react';

const WarrantyBadge = () => {
    return (
        <div className="flex space-x-4 mt-6">
            <div className="flex-1 bg-gradient-to-br from-blue-50 to-white p-3 rounded-lg border border-blue-100 flex items-center">
                <ShieldCheck className="text-blue-600 mr-3" size={24} />
                <div>
                    <div className="text-xs font-bold text-blue-900">5-Year Warranty</div>
                    <div className="text-[10px] text-blue-700">Structural Integrity</div>
                </div>
            </div>
            <div className="flex-1 bg-gradient-to-br from-cyan-50 to-white p-3 rounded-lg border border-cyan-100 flex items-center">
                <Droplets className="text-cyan-600 mr-3" size={24} />
                <div>
                    <div className="text-xs font-bold text-cyan-900">Waterproof</div>
                    <div className="text-[10px] text-cyan-700">100% Leak Guarantee</div>
                </div>
            </div>
        </div>
    );
};

export default WarrantyBadge;
