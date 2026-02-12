import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Calculator, TrendingDown, Clock, Users, Recycle, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const stats = [
        { label: "Faster Construction", value: "60%", icon: Clock },
        { label: "Cost Reduction", value: "30%", icon: TrendingDown },
        { label: "Less Labor Required", value: "40%", icon: Users },
        { label: "Lower Material Wastage", value: "25%", icon: Recycle },
    ];

    return (
        <div className="bg-slate-50 relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                    alt="Rural Development"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-24 lg:pt-32 lg:pb-40">
                <div className="lg:w-2/3">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="mb-8"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-6 border border-blue-500/30">
                            Government-Ready Rural Housing Solutions
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Build Rural Homes <span className="text-blue-400">60% Faster</span> at <span className="text-green-400">30% Lower Cost</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                            Modular prefabricated housing solutions designed for DRDA, PMAY-G, and large-scale rural development projects. Engineering-grade quality meets speed.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button
                                onClick={() => document.getElementById('cost-calculator').scrollIntoView({ behavior: 'smooth' })}
                                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-all shadow-lg hover:shadow-blue-500/30"
                            >
                                <Calculator className="mr-2 h-5 w-5" />
                                Calculate Project Cost
                            </button>
                            <button
                                onClick={() => document.getElementById('download-dpr').scrollIntoView({ behavior: 'smooth' })}
                                className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 text-base font-medium rounded-lg text-slate-100 bg-slate-800/50 hover:bg-slate-800 md:text-lg transition-all backdrop-blur-sm"
                            >
                                <Download className="mr-2 h-5 w-5" />
                                Download DPR
                            </button>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                                className="bg-slate-800/40 backdrop-blur-md rounded-xl p-4 border border-slate-700/50"
                            >
                                <div className="flex items-center mb-2">
                                    <div className="p-2 bg-blue-500/20 rounded-lg">
                                        <stat.icon className="h-5 w-5 text-blue-400" />
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
