import React from 'react';
import { FileText, Download, CheckCircle } from 'lucide-react';

const DownloadDPR = () => {
    return (
        <div id="download-dpr" className="bg-slate-900 py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-blue-900 to-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700 flex flex-col md:flex-row items-center justify-between">

                    <div className="mb-8 md:mb-0 md:mr-12">
                        <div className="flex items-center mb-4">
                            <div className="p-3 bg-blue-600 rounded-lg mr-4">
                                <FileText className="text-white h-8 w-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">Download Detailed Project Report</h2>
                        </div>
                        <p className="text-slate-300 text-lg mb-6 max-w-xl">
                            Get the complete technical and financial breakdown for administrative approval.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                            {[
                                "Executive Summary", "Solution Overview",
                                "Cost Analysis", "Timeline Comparison",
                                "Benefits for DRDA & Government",
                                "Scalability Model", "Environmental Impact"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center text-slate-400 text-sm">
                                    <CheckCircle size={16} className="text-blue-500 mr-2" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-shrink-0">
                        <button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center hover:scale-105 transform duration-200">
                            <Download className="mr-2 h-5 w-5" />
                            Download DPR PDF
                        </button>
                        <p className="text-center text-slate-500 text-xs mt-3">PDF • 4.2 MB • Updated Jan 2026</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DownloadDPR;
