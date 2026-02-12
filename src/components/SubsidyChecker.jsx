import React, { useState } from 'react';
import { Landmark, Check, AlertCircle } from 'lucide-react';

const SubsidyChecker = ({ onSubsidyApply }) => {
    const [income, setIncome] = useState('');
    const [category, setCategory] = useState('General');
    const [result, setResult] = useState(null);

    const checkEligibility = () => {
        const annualIncome = parseInt(income.replace(/,/g, ''), 10);

        if (!annualIncome) {
            setResult({ type: 'error', message: 'Please enter a valid income.' });
            return;
        }

        // Simplified PMAY-G Logic
        // Priority for SC/ST and Income < 3L
        let subsidyAmount = 0;
        let scheme = '';

        if (annualIncome <= 300000) {
            subsidyAmount = 130000; // PMAY-G Unit Assistance
            scheme = 'PMAY-Gramin Class A';
        } else if (annualIncome <= 600000) {
            subsidyAmount = 75000; // Interest Subsidy or partial support (Mock)
            scheme = 'PMAY-Gramin Interest Subsidy';
        } else {
            subsidyAmount = 0;
        }

        if (subsidyAmount > 0) {
            setResult({
                type: 'success',
                amount: subsidyAmount,
                scheme: scheme,
                message: `Eligible for ₹${subsidyAmount.toLocaleString()} subsidy under ${scheme}.`
            });
            onSubsidyApply(subsidyAmount);
        } else {
            setResult({
                type: 'info',
                message: 'Your income bracket may not qualify for direct PMAY-G unit assistance, but you may be eligible for low-interest loans.'
            });
            onSubsidyApply(0);
        }
    };

    return (
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8">
            <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                <Landmark className="mr-2" size={20} />
                Government Subsidy Checker (PMAY)
            </h3>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                    <label className="block text-sm text-blue-800 mb-1">Annual Household Income (₹)</label>
                    <input
                        type="number"
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                        placeholder="e.g. 180000"
                        className="w-full p-2 rounded-lg border border-blue-200 text-gray-900"
                    />
                </div>
                <div>
                    <label className="block text-sm text-blue-800 mb-1">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-2 rounded-lg border border-blue-200 text-gray-900"
                    >
                        <option>General</option>
                        <option>SC</option>
                        <option>ST</option>
                        <option>OBC</option>
                    </select>
                </div>
                <div className="flex items-end">
                    <button
                        onClick={checkEligibility}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium p-2 rounded-lg transition-colors"
                    >
                        Check Eligibility
                    </button>
                </div>
            </div>

            {result && (
                <div className={`p-4 rounded-lg flex items-start ${result.type === 'success' ? 'bg-green-100 text-green-800' :
                        result.type === 'error' ? 'bg-red-100 text-red-800' : 'bg-white text-gray-700'
                    }`}>
                    {result.type === 'success' ? <Check className="mr-2 mt-1" size={16} /> : <AlertCircle className="mr-2 mt-1" size={16} />}
                    <div>
                        <p className="font-bold">{result.message}</p>
                        {result.type === 'success' && (
                            <p className="text-xs mt-1">Subsidy will be directly deducted from the total estimate for planning purposes.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SubsidyChecker;
