import React from 'react';
import { Home, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="bg-primary-600 p-1.5 rounded-lg text-white">
                                <Home size={20} />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">RuralBuild</span>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Revolutionizing rural housing with speed, affordability, and durability through modern precast technology.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Platform</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/catalog" className="hover:text-primary-500 transition-colors">Catalog</Link></li>
                            <li><Link to="/configurator" className="hover:text-primary-500 transition-colors">House Configurator</Link></li>
                            <li><Link to="/suppliers" className="hover:text-primary-500 transition-colors">Find Suppliers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-primary-500 transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-primary-500 transition-colors">Government Grants</a></li>
                            <li><a href="#" className="hover:text-primary-500 transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <p className="text-sm text-slate-400 mb-2">Thoothukudi, Tamil Nadu</p>
                        <p className="text-sm text-slate-400 mb-4">support@ruralbuild.com</p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-primary-500 transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="hover:text-primary-500 transition-colors"><Twitter size={18} /></a>
                            <a href="#" className="hover:text-primary-500 transition-colors"><Instagram size={18} /></a>
                            <a href="#" className="hover:text-primary-500 transition-colors"><Linkedin size={18} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>&copy; 2026 RuralBuild. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 space-x-4">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
