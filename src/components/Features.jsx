import React from 'react';
import { CheckCircle, XCircle, Clock, DollarSign, Leaf, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
    return (
        <section className="py-20 bg-white" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Problem vs Solution Comparison */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Modular?</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Compare traditional construction with our modern precast solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Traditional Method */}
                        <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                            <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center">
                                <XCircle className="w-6 h-6 mr-2 text-red-600" />
                                Traditional Construction
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="p-1 bg-red-100 rounded-full mr-3 mt-1 opacity-70">
                                        <Clock size={16} className="text-red-700" />
                                    </div>
                                    <span className="text-red-800">Slow construction (6-12 months)</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="p-1 bg-red-100 rounded-full mr-3 mt-1 opacity-70">
                                        <DollarSign size={16} className="text-red-700" />
                                    </div>
                                    <span className="text-red-800">High unpredictable labour costs</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="p-1 bg-red-100 rounded-full mr-3 mt-1 opacity-70">
                                        <Leaf size={16} className="text-red-700" />
                                    </div>
                                    <span className="text-red-800">High material wastage & pollution</span>
                                </li>
                            </ul>
                        </div>

                        {/* Our Solution */}
                        <div className="bg-green-50 p-8 rounded-2xl border border-green-100 shadow-lg transform -translate-y-2">
                            <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
                                <CheckCircle className="w-6 h-6 mr-2 text-green-600" />
                                Our Precast Solution
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="p-1 bg-green-100 rounded-full mr-3 mt-1">
                                        <Clock size={16} className="text-green-700" />
                                    </div>
                                    <span className="text-green-800 font-medium">Fast assembly (2-4 weeks)</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="p-1 bg-green-100 rounded-full mr-3 mt-1">
                                        <DollarSign size={16} className="text-green-700" />
                                    </div>
                                    <span className="text-green-800 font-medium">Fixed low cost & minimal labour</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="p-1 bg-green-100 rounded-full mr-3 mt-1">
                                        <Leaf size={16} className="text-green-700" />
                                    </div>
                                    <span className="text-green-800 font-medium">Eco-friendly & zero wastage</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Key Features Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Shield className="w-10 h-10 text-primary-600" />,
                            title: "Durable & Safe",
                            desc: "Reinforced concrete panels resistant to weather, fire, and cracks."
                        },
                        {
                            icon: <DollarSign className="w-10 h-10 text-primary-600" />,
                            title: "Affordable",
                            desc: "Factory-scale production reduces costs significantly compared to brick."
                        },
                        {
                            icon: <Leaf className="w-10 h-10 text-primary-600" />,
                            title: "Sustainable",
                            desc: "Minimal on-site water usage and debris. Better for the environment."
                        }
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div className="bg-primary-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;
