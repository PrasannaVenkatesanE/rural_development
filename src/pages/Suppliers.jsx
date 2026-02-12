import React from 'react';
import { MapPin, Phone, Star, ShieldCheck } from 'lucide-react';

const suppliers = [
    {
        id: 1,
        name: "Thoothukudi Precast Solutions",
        location: "Sipcot Industrial Complex, Thoothukudi",
        rating: 4.8,
        reviews: 124,
        specialty: "Wall Panels & Roofing",
        phone: "+91 98765 43210"
    },
    {
        id: 2,
        name: "RuralBuild Infra",
        location: "Kovilpatti, Tamil Nadu",
        rating: 4.5,
        reviews: 89,
        specialty: "Full House Kits",
        phone: "+91 98765 12345"
    },
    {
        id: 3,
        name: "GreenStep Flooring",
        location: "Tirunelveli High Road",
        rating: 4.9,
        reviews: 56,
        specialty: "Eco-friendly Flooring",
        phone: "+91 98765 67890"
    },
    {
        id: 4,
        name: "DecorWall Stickers",
        location: "Madurai Main Road",
        rating: 4.2,
        reviews: 32,
        specialty: "Waterproof Stickers",
        phone: "+91 98765 09876"
    }
];

const Suppliers = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-16">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Trusted Partners</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Connect with verified manufacturers and certified installers in your region.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {suppliers.map(supplier => (
                    <div key={supplier.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-bold text-lg text-gray-900">{supplier.name}</h3>
                                <div className="flex items-center text-sm text-gray-500 mt-1">
                                    <MapPin size={14} className="mr-1" />
                                    {supplier.location}
                                </div>
                            </div>
                            <div className="flex items-center bg-green-50 px-2 py-1 rounded text-green-700 font-bold text-sm">
                                <Star size={12} className="mr-1 fill-current" />
                                {supplier.rating}
                            </div>
                        </div>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-center text-sm text-gray-600">
                                <ShieldCheck size={16} className="mr-2 text-primary-500" />
                                <span>Verified Supplier</span>
                            </div>
                            <div className="text-sm text-gray-600">
                                <span className="font-semibold">Specialty:</span> {supplier.specialty}
                            </div>
                        </div>

                        <button className="w-full border border-primary-600 text-primary-600 hover:bg-primary-50 font-medium py-2 rounded-lg transition-colors flex items-center justify-center">
                            <Phone size={16} className="mr-2" />
                            Contact Now
                        </button>
                    </div>
                ))}

                {/* Call to Action for new partners */}
                <div className="bg-primary-50 p-6 rounded-xl border border-primary-100 flex flex-col justify-center items-center text-center">
                    <h3 className="font-bold text-lg text-primary-900 mb-2">Are you a Supplier?</h3>
                    <p className="text-sm text-primary-700 mb-4">Join our network to reach thousands of rural customers.</p>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                        Register Business
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Suppliers;
