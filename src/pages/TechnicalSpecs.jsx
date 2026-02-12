import React, { useEffect } from 'react';
import { Download, Shield, Box, Umbrella, Activity, Wind, Layers, Flame, Anchor, Leaf, Clock, CheckCircle } from 'lucide-react';

const TechnicalSpecs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const specs = [
        {
            category: "1. Structural System",
            icon: Box,
            subsections: [
                {
                    title: "Wall System",
                    details: [
                        { label: "Material", value: "Precast Reinforced Concrete (RCC) Panels" },
                        { label: "Thickness", value: "100mm – 150mm" },
                        { label: "Grade", value: "M25 Concrete" },
                        { label: "Reinforcement", value: "Fe500 Steel" },
                        { label: "Load Capacity", value: "Suitable for G+1 Structure" }
                    ]
                },
                {
                    title: "Joint System",
                    details: [
                        { label: "Connection", value: "Mechanical interlocking with sealed joints" },
                        { label: "Bonding", value: "Waterproof chemical bonding" },
                        { label: "Protection", value: "Expansion gap protection" }
                    ]
                }
            ]
        },
        {
            category: "2. Foundation Compatibility",
            icon: Anchor,
            subsections: [
                {
                    title: "Foundation Specs",
                    details: [
                        { label: "Type", value: "Compatible with shallow foundation / isolated footing" },
                        { label: "Soil Suitability", value: "Medium to hard soil" },
                        { label: "Adaptability", value: "Can be adapted for flood-prone regions" }
                    ]
                }
            ]
        },
        {
            category: "3. Flooring System",
            icon: Layers,
            subsections: [
                {
                    title: "Base & Finish",
                    details: [
                        { label: "Base", value: "High-density modular base panels" },
                        { label: "Protection", value: "Anti-moisture layer integrated" },
                        { label: "Load Capacity", value: "300 kg/m²" },
                        { label: "Lifespan", value: "20+ years" },
                        { label: "Finish Options", value: "Standard Cement Finish / Premium Decorative Panels" }
                    ]
                }
            ]
        },
        {
            category: "4. Roofing System",
            icon: Umbrella,
            subsections: [
                {
                    title: "Roof Specs",
                    details: [
                        { label: "Material", value: "Lightweight insulated roofing panels" },
                        { label: "Coating", value: "Heat reflective coating" },
                        { label: "Waterproofing", value: "Waterproof membrane layer" },
                        { label: "Wind Resistance", value: "Up to 150 km/h" }
                    ]
                }
            ]
        },
        {
            category: "5. Fire & Safety Standards",
            icon: Flame,
            subsections: [
                {
                    title: "Safety Features",
                    details: [
                        { label: "Fire Rating", value: "2–3 Hours" },
                        { label: "Material", value: "Non-combustible wall panels" },
                        { label: "Electrical", value: "Conduit pathways pre-integrated" },
                        { label: "Compliance", value: "Safe wiring design compliance" }
                    ]
                }
            ]
        },
        {
            category: "6. Seismic & Environmental",
            icon: Activity,
            subsections: [
                {
                    title: "Performance",
                    details: [
                        { label: "Seismic Zone", value: "Designed for Zone III & IV" },
                        { label: "Climate", value: "Suitable for rural climatic variations" },
                        { label: "Durability", value: "Resistant to cracks & moisture penetration" }
                    ]
                }
            ]
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            {/* Header */}
            <div className="bg-slate-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-2 block">Engineering Data</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Technical Specifications & Compliance</h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive engineering details for architects, contractors, and government officials.
                        Designed for durability, speed, and safety.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Main Specs Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {specs.map((section, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                            <div className="bg-slate-50 p-6 border-b border-slate-100 flex items-center">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl mr-4 shadow-sm">
                                    <section.icon size={24} strokeWidth={2} />
                                </div>
                                <h2 className="text-xl font-bold text-slate-800">{section.category}</h2>
                            </div>
                            <div className="p-6">
                                {section.subsections.map((sub, subIdx) => (
                                    <div key={subIdx} className="mb-6 last:mb-0">
                                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                                            {sub.title}
                                        </h3>
                                        <table className="w-full text-sm text-left">
                                            <tbody>
                                                {sub.details.map((detail, dIdx) => (
                                                    <tr key={dIdx} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                                                        <td className="py-3 font-medium text-slate-500 w-1/3 align-top pr-4">{detail.label}</td>
                                                        <td className="py-3 font-bold text-slate-800 w-2/3">{detail.value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Construction Timeline & Sustainability */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

                    {/* Timeline Comparison */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                        <div className="flex items-center mb-8">
                            <div className="p-3 bg-purple-100 text-purple-600 rounded-xl mr-4">
                                <Clock size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Construction Timeline</h2>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-slate-200">
                            <table className="w-full text-left bg-white">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Method</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Completion Time</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="px-6 py-4 text-slate-600 font-medium">Traditional Brick Construction</td>
                                        <td className="px-6 py-4 text-red-500 font-bold">90–120 Days</td>
                                    </tr>
                                    <tr className="bg-green-50/50">
                                        <td className="px-6 py-4 text-blue-900 font-bold flex items-center">
                                            Modular Precast Model
                                            <span className="ml-2 bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full uppercase">Fast</span>
                                        </td>
                                        <td className="px-6 py-4 text-green-600 font-bold">30–45 Days</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Sustainability */}
                    <div className="bg-green-50 rounded-2xl shadow-sm border border-green-100 p-8">
                        <div className="flex items-center mb-8">
                            <div className="p-3 bg-green-200 text-green-700 rounded-xl mr-4">
                                <Leaf size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-green-900">Sustainability & Impact</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "25–30% reduction in material wastage",
                                "Reduced on-site dust pollution",
                                "Optimized concrete usage",
                                "Lower transportation frequency"
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-xl border border-green-100 flex items-start shadow-sm">
                                    <CheckCircle size={18} className="text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                                    <span className="text-green-800 text-sm font-medium leading-snug">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Download Area & Footer */}
                <div className="text-center bg-slate-100 py-12 rounded-3xl">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Need complete technical documentation?</h3>
                    <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg inline-flex items-center shadow-lg hover:bg-blue-700 hover:shadow-blue-500/25 transition-all transform hover:-translate-y-1">
                        <Download className="mr-2" size={20} />
                        Download Technical Sheet
                    </button>
                    <p className="mt-8 text-slate-500 italic max-w-2xl mx-auto px-4">
                        "All specifications can be customized based on district-level engineering requirements and compliance guidelines."
                    </p>
                </div>

            </div>
        </div>
    );
};

export default TechnicalSpecs;
