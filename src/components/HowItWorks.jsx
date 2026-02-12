import React from 'react';
import { ClipboardCheck, Factory, Search, Truck, Hammer, Key } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    const steps = [
        { title: "Design & Order", desc: "Select layout & customize", icon: ClipboardCheck },
        { title: "Factory Production", desc: "Precision precast manufacturing", icon: Factory },
        { title: "Quality Testing", desc: "Rigorous strength checks", icon: Search },
        { title: "Transportation", desc: "Dispatched to site", icon: Truck },
        { title: "On-Site Assembly", desc: "Rapid 30-45 day construction", icon: Hammer },
        { title: "Handover", desc: "Ready-to-occupy home", icon: Key },
    ];

    return (
        <div className="py-16 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold tracking-wide uppercase text-sm">Our Process</span>
                    <h2 className="text-3xl font-extrabold text-slate-900 mt-2">How Our Modular System Works</h2>
                    <p className="mt-4 text-lg text-slate-600">From factory to foundation in record time.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-slate-200 -z-10"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-24 h-24 bg-white rounded-full border-4 border-white shadow-md flex items-center justify-center mb-6 relative z-10 group-hover:border-blue-500 transition-colors duration-300">
                                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <step.icon size={32} />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                                <p className="text-sm text-slate-500 max-w-[150px]">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
