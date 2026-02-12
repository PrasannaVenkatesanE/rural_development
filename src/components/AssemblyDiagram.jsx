import React from 'react';

const AssemblyDiagram = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Modular Assembly Process</h3>
            <div className="relative bg-gray-50 h-48 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-200">
                {/* Placeholder for actual diagram/SVG */}
                <div className="text-center">
                    <div className="flex justify-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-blue-100 rounded border border-blue-300 flex items-center justify-center text-xs font-bold text-blue-800">Foundation</div>
                        <div className="text-gray-400 flex items-center">→</div>
                        <div className="w-16 h-16 bg-orange-100 rounded border border-orange-300 flex items-center justify-center text-xs font-bold text-orange-800">Wall Panels</div>
                        <div className="text-gray-400 flex items-center">→</div>
                        <div className="w-16 h-16 bg-green-100 rounded border border-green-300 flex items-center justify-center text-xs font-bold text-green-800">Roofing</div>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">Interlocking Joint System (No Cement Required)</p>
                </div>
            </div>
        </div>
    );
};

export default AssemblyDiagram;
