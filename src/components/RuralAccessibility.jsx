import React, { useState } from 'react';
import { Globe, Wifi, WifiOff, Phone, MessageCircle, Mic } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const RuralAccessibility = ({ lowBandwidth, setLowBandwidth }) => {
    const { language, switchLanguage } = useLanguage();
    const [isListening, setIsListening] = useState(false);

    const toggleVoice = () => {
        setIsListening(true);
        setTimeout(() => {
            setIsListening(false);
            alert("Voice Search functionality would activate here. (Prototype Mode)");
        }, 2000);
    };

    return (
        <div className="flex flex-wrap items-center gap-3 mb-6 bg-gray-50 p-2 rounded-lg border border-gray-200">

            {/* Language Toggle */}
            <button
                onClick={() => switchLanguage(language === 'en' ? 'ta' : 'en')}
                className="flex items-center space-x-2 px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 text-gray-700"
            >
                <Globe size={16} />
                <span>{language === 'en' ? 'தமிழ்' : 'English'}</span>
            </button>

            {/* Low Bandwidth Toggle */}
            <button
                onClick={() => setLowBandwidth(!lowBandwidth)}
                className={`flex items-center space-x-2 px-3 py-1.5 border rounded-md text-sm font-medium ${lowBandwidth
                        ? 'bg-yellow-100 border-yellow-300 text-yellow-800'
                        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
            >
                {lowBandwidth ? <WifiOff size={16} /> : <Wifi size={16} />}
                <span>{lowBandwidth ? 'Lite Mode On' : 'Lite Mode Off'}</span>
            </button>

            <div className="h-6 w-px bg-gray-300 mx-2 hidden sm:block"></div>

            {/* Quick Actions */}
            <div className="flex space-x-2">
                <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600" title="WhatsApp Us">
                    <MessageCircle size={18} />
                </button>
                <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600" title="Call to Order">
                    <Phone size={18} />
                </button>
                <button
                    onClick={toggleVoice}
                    className={`p-2 rounded-full text-white transition-colors ${isListening ? 'bg-red-500 animate-pulse' : 'bg-gray-500 hover:bg-gray-600'
                        }`}
                    title="Voice Search"
                >
                    <Mic size={18} />
                </button>
            </div>

        </div>
    );
};

export default RuralAccessibility;
