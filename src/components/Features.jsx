import React from 'react';
import { Clock, IndianRupee, Leaf, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

const Features = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const features = [
        {
            name: t.feature1Title,
            description: t.feature1Desc,
            icon: Clock,
        },
        {
            name: t.feature2Title,
            description: t.feature2Desc,
            icon: IndianRupee,
        },
        {
            name: t.feature3Title,
            description: t.feature3Desc,
            icon: Leaf,
        },
        {
            name: t.feature4Title,
            description: t.feature4Desc,
            icon: ShieldCheck,
        },
    ];

    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Why Choose RuralBuild?</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Better Homes, Faster Delivery
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        We combine technology with local materials to create sustainable and affordable housing solutions.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Features;
