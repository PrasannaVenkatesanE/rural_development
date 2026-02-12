import React, { useEffect } from 'react';
import { Download, Shield, Box, Smartphone, Umbrella, Activity, Wind } from 'lucide-react';

const TechnicalSpecs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const specs = [
        {
            category: "Wall System",
            icon: Box,
            details: [
                { label: "Material", value: "Precast Reinforced Concrete Panels" },
                { label: "Thickness", value: "100 mm – 150 mm (Customizable)" },
                { label: "Fire Resistance", value: "2–3 Hours (Class A Fire Rating)" },
                { label: "Finish", value: "Smooth finish, ready for paint/putty" },
                { label: "Waterproofing", value: "Integrated hydrophobic coating" }
            ]
        },
        {
            category: "Floor System",
            icon: Layers,
            details: [
                { label: "Type", value: "High-density modular base panels" },
                { label: "Load Capacity", value: "250 kg/m² (Residential Standard)" },
                { label: "Moisture Resistance", value: "< 5% water absorption" },
                { label: "Lifespan", value: "20+ years estimated service life" }
            ]
        },
        {
            category: "Roofing System",
            icon: Umbrella,
            details: [
                { label: "Material", value: "Insulated Puff Panels / Galvalume" },
                { label: "Thermal Insulation", value: "Reduces indoor temp by 4-6°C" },
                { label: "Weatherproof", value: "100% Leak-proof guarantee" }
            ]
        },
        {
            category: "Structural Integrity",
            icon: Shield,
            details: [
                { label: "Seismic Zone", value: "Compatible with Zone III & IV" },
                { label: "Wind Resistance", value: "Up to 150 km/h" },
                { label: "Foundation", value: "Minimal strip foundation required" }
            ]
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <div className="bg-slate-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Technical Specifications & Compliance</h1>
                    <p className="text-xl text-slate-300 max-w-3xl">
                        Detailed engineering data for architects, contractors, and government officials.
                    </p>
                </div>
            </div>

            {/* Spec Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {specs.map((section, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="bg-slate-50 p-6 border-b border-slate-100 flex items-center">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg mr-4">
                                    <section.icon size={24} />
                                </div>
                                <h2 className="text-xl font-bold text-slate-800">{section.category}</h2>
                            </div>
                            <div className="p-6">
                                <table className="w-full text-sm text-left">
                                    <tbody>
                                        {section.details.map((detail, dIdx) => (
                                            <tr key={dIdx} className="border-b border-slate-100 last:border-0">
                                                <td className="py-3 font-medium text-slate-500 w-1/3">{detail.label}</td>
                                                <td className="py-3 font-semibold text-slate-800 w-2/3">{detail.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Compliance */}
                <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">Certification & Compliance</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-center">
                            <Shield className="text-green-600 mr-3" size={24} />
                            <span className="text-slate-700 font-medium">IS 15916:2010 (Prefab Concrete Standards)</span>
                        </div>
                        <div className="flex items-center">
                            <Wind className="text-blue-600 mr-3" size={24} />
                            <span className="text-slate-700 font-medium">Wind Load: IS 875 (Part 3)</span>
                        </div>
                        <div className="flex items-center">
                            <BarChart3 className="text-orange-600 mr-3" size={24} />
                            <span className="text-slate-700 font-medium">Seismic Code: IS 1893</span>
                        </div>
                    </div>
                </div>

                {/* Download Area */}
                <div className="mt-12 text-center">
                    <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center shadow-lg hover:bg-slate-800 transition-colors">
                        <Download className="mr-2" size={20} />
                        Download Full Technical Data Sheet
                    </button>
                    <div className="mt-4 text-sm text-slate-500">
                        Format: PDF | Size: 2.4 MB | Includes architectural drawings
                    </div>
                </div>
            </div>
        </div>
    );
};

// Simple Layers icon component since it was missing in import or usage
const Layers = ({ size, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
    </svg>
);

export default TechnicalSpecs;
