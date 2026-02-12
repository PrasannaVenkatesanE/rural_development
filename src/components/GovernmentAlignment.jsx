import React from 'react';
import { Landmark, Users, Briefcase, TrendingUp, ShieldCheck } from 'lucide-react';

const GovernmentAlignment = () => {
    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

                    <div className="lg:col-span-6 mb-12 lg:mb-0">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-700 font-bold text-sm mb-6 border border-green-100">
                            <Landmark size={16} className="mr-2" /> DRDA & PMAY-G Aligned
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Built for Government & <br /> Rural Development Missions
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            Our modular housing system is specifically engineered to meet the speed, cost, and quality requirements of district-level housing schemes and disaster relief operations.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                                        <ShieldCheck size={24} />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg leading-6 font-medium text-slate-900">PMAY-G Compliant</h3>
                                    <p className="mt-2 text-base text-slate-500">
                                        Meets all technical specifications and carpet area requirements for Pradhan Mantri Awas Yojana - Gramin.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                                        <Briefcase size={24} />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg leading-6 font-medium text-slate-900">Local Employment Generation</h3>
                                    <p className="mt-2 text-base text-slate-500">
                                        Assembly requires minimal skill. We train local SHGs and youth to assemble homes, creating district-level jobs.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100 text-orange-600">
                                        <TrendingUp size={24} />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg leading-6 font-medium text-slate-900">Rapid Deployment</h3>
                                    <p className="mt-2 text-base text-slate-500">
                                        Ideal for disaster relief and clearing housing backlogs. 10x faster than traditional brick-and-mortar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6">
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                            <h3 className="font-bold text-slate-800 mb-6 text-center">Impact at Scale</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                                    <div className="text-4xl font-extrabold text-blue-600 mb-2">500+</div>
                                    <div className="text-sm text-slate-500 font-medium">Homes Delivered</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                                    <div className="text-4xl font-extrabold text-green-600 mb-2">12</div>
                                    <div className="text-sm text-slate-500 font-medium">Districts Covered</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                                    <div className="text-4xl font-extrabold text-purple-600 mb-2">₹15Cr</div>
                                    <div className="text-sm text-slate-500 font-medium">Govt. Funds Saved</div>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                                    <div className="text-4xl font-extrabold text-orange-600 mb-2">200+</div>
                                    <div className="text-sm text-slate-500 font-medium">Local Jobs Created</div>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                                <p className="text-sm text-slate-500 italic">
                                    "This technology is a game-changer for rural development."
                                </p>
                                <p className="text-xs font-bold text-slate-700 mt-2">
                                    - Project Director, DRDA Tamil Nadu (Testimonial)
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GovernmentAlignment;
