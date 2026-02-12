import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

const Hero = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const categories = [
        { name: "Precast Concrete Walls", icon: "🧱" },
        { name: "Modular Flooring", icon: "🔲" },
        { name: "Roofing Solutions", icon: "🏠" },
        { name: "Wall Stickers & Decor", icon: "🎨" },
        { name: "Windows & Doors", icon: "🚪" },
        { name: "Electrical & Plumbing", icon: "💡" },
        { name: "Sanitary Ware", icon: "🚽" },
        { name: "Construction Tools", icon: "🛠️" },
    ];

    return (
        <div className="bg-gray-100 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="grid grid-cols-12 gap-6 lg:h-[500px]">

                    {/* Left Sidebar - Categories (Desktop) */}
                    <div className="hidden lg:col-span-3 lg:flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full">
                        <div className="p-4 bg-gray-50 border-b border-gray-100 font-bold text-gray-800 flex items-center">
                            <Star size={18} className="mr-2 text-orange-500" />
                            Categories for you
                        </div>
                        <div className="flex-1 overflow-y-auto py-2">
                            {categories.map((cat, idx) => (
                                <Link key={idx} to="/catalog" className="flex items-center justify-between px-4 py-3 hover:bg-orange-50 group transition-colors">
                                    <div className="flex items-center text-gray-600 group-hover:text-orange-600">
                                        <span className="mr-3 text-lg opacity-80">{cat.icon}</span>
                                        <span className="text-sm font-medium">{cat.name}</span>
                                    </div>
                                    <ChevronRight size={14} className="text-gray-300 group-hover:text-orange-500" />
                                </Link>
                            ))}
                        </div>
                        <div className="p-4 bg-orange-50 border-t border-orange-100 text-center">
                            <Link to="/catalog" className="text-xs font-bold text-orange-600 hover:underline">View All Categories</Link>
                        </div>
                    </div>

                    {/* Center - Main Hero Slider */}
                    <div className="col-span-12 lg:col-span-6 flex flex-col h-full rounded-xl overflow-hidden shadow-sm relative group cursor-pointer">
                        <img
                            src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                            alt="Modern Prefab Home"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                        <div className="absolute bottom-8 left-8 text-white max-w-md">
                            <div className="bg-orange-600 text-white text-xs font-bold px-2 py-1 inline-block rounded mb-3 uppercase tracking-wider">
                                Factory Direct
                            </div>
                            <h1 className="text-4xl font-bold mb-4 leading-tight">
                                {t.heroTitle}
                            </h1>
                            <p className="text-gray-200 mb-6 text-sm line-clamp-2">
                                {t.heroSubtitle}
                            </p>
                            <Link to="/configurator" className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-full font-bold text-sm transition-colors inline-flex items-center">
                                {t.startDesigning}
                            </Link>
                        </div>

                    </div>

                    {/* Right Sidebar replacement or empty for now as per design */}
                    <div className="hidden lg:col-span-3 lg:flex flex-col gap-6 h-full">
                        <div className="h-full bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col justify-center items-center text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600 font-bold text-2xl">
                                4.9
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg mb-2">Trusted by Villagers</h3>
                            <p className="text-sm text-gray-500">Over 500+ homes built across Tamil Nadu using our platform.</p>
                        </div>
                        <div className="h-full bg-blue-50 rounded-xl shadow-sm border border-blue-100 p-6 flex flex-col justify-center items-center text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg mb-2">Government Approved</h3>
                            <p className="text-sm text-gray-500">All materials meet PMAY-G standards.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust Banner / Fast Customization Strip */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <div className="bg-purple-900 rounded-xl p-8 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                    <div className="relative z-10 mb-8 md:mb-0 md:w-1/3">
                        <div className="flex items-center mb-4">
                            <Zap className="mr-3 text-yellow-400 fill-current" />
                            <h2 className="text-2xl font-bold">Fast Customization</h2>
                        </div>
                        <p className="text-purple-200 mb-6 text-sm">Realize your custom precast house ideas fast and easy.</p>
                        <div className="space-y-2 text-sm text-purple-100 mb-8">
                            <div className="flex items-center"><ShieldCheck size={16} className="mr-2" /> Low MOQ</div>
                            <div className="flex items-center"><ShieldCheck size={16} className="mr-2" /> 14-day dispatch</div>
                            <div className="flex items-center"><ShieldCheck size={16} className="mr-2" /> True to design</div>
                        </div>
                        <Link to="/configurator" className="bg-white text-purple-900 px-6 py-2 rounded-full font-bold text-sm hover:bg-purple-50 transition-colors">
                            Explore Now
                        </Link>
                    </div>

                    {/* Product Cards Row */}
                    <div className="relative z-10 flex space-x-4 overflow-x-auto pb-4 md:pb-0 w-full md:w-2/3 scrollbar-hide">
                        {[
                            { name: "3D Mural Wall", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", price: "₹2,100", moq: "1 pc" },
                            { name: "Insulated Panel", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", price: "₹520", moq: "100 sqft" },
                            { name: "Self-locking Floor", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", price: "₹250", moq: "50 sqft" },
                            { name: "Eco Paint", img: "https://images.unsplash.com/photo-1562663474-d7d0d9299861?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", price: "₹1,100", moq: "5 L" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-3 min-w-[160px] text-gray-900 shadow-lg cursor-pointer transform hover:-translate-y-1 transition-transform duration-300">
                                <div className="h-32 mb-3 rounded overflow-hidden relative">
                                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                    <div className="absolute bottom-1 left-1 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm">
                                        Wait 5d
                                    </div>
                                </div>
                                <div className="font-bold text-lg mb-0.5">{item.price}</div>
                                <div className="text-[10px] text-gray-500 mb-2">MOQ: {item.moq}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
