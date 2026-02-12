import React, { useState, useEffect } from 'react';
import { Percent } from 'lucide-react';

const EMICalculator = ({ loanAmount }) => {
    const [tenure, setTenure] = useState(10); // Years
    const [interestRate, setInterestRate] = useState(9); // % P.A.
    const [emi, setEmi] = useState(0);

    useEffect(() => {
        if (loanAmount > 0) {
            const r = interestRate / 12 / 100;
            const n = tenure * 12;
            const calculatedEmi = loanAmount * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
            setEmi(Math.round(calculatedEmi));
        } else {
            setEmi(0);
        }
    }, [loanAmount, tenure, interestRate]);

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Monthly EMI Estimator</h3>

            <div className="space-y-4">
                <div>
                    <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Loan Amount</span>
                        <span className="font-bold">₹{loanAmount.toLocaleString()}</span>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Tenure (Years)</span>
                        <span className="font-bold text-primary-600">{tenure} Years</span>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="20"
                        value={tenure}
                        onChange={(e) => setTenure(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                    />
                </div>

                <div>
                    <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Interest Rate (%)</span>
                        <span className="font-bold text-primary-600">{interestRate}%</span>
                    </div>
                    <input
                        type="range"
                        min="5"
                        max="15"
                        step="0.5"
                        value={interestRate}
                        onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                    />
                </div>

                <div className="bg-primary-50 p-4 rounded-xl flex justify-between items-center">
                    <span className="text-primary-800 font-medium">Monthly EMI</span>
                    <span className="text-2xl font-bold text-primary-700">₹{emi.toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
};

export default EMICalculator;
