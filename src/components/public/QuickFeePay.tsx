import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  CreditCard, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  AlertCircle,
  Receipt
} from 'lucide-react';
import { FeeItem, Student } from '../../types';

interface QuickFeePayProps {
  isHome?: boolean;
}

export const QuickFeePay: React.FC<QuickFeePayProps> = ({ isHome: propIsHome }) => {
  const { activeView, allStudents, fees, setSelectedFeeForPay, setIsPaymentModalOpen, setLatestReceipt } = useApp();
  const isHome = propIsHome !== undefined ? propIsHome : activeView === 'home';
  
  const [searchQuery, setSearchQuery] = useState('');
  const [foundStudent, setFoundStudent] = useState<Student | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    const matched = allStudents.find(s => 
      s.admissionNo.toLowerCase().includes(query) || 
      s.rollNo.toLowerCase().includes(query) ||
      s.name.toLowerCase().includes(query)
    );

    setFoundStudent(matched || null);
  };

  const studentFees = foundStudent 
    ? fees.filter(f => f.studentId === foundStudent.id) 
    : [];

  const handlePayClick = (fee: FeeItem) => {
    setSelectedFeeForPay(fee);
    setIsPaymentModalOpen(true);
  };

  return (
    <section className="bg-slate-50 py-12 px-2 sm:px-4 lg:px-6 w-[94%] lg:w-[85%] mx-auto min-h-[80vh] space-y-8">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-xs font-bold text-emerald-800">
          <Lock className="w-3.5 h-3.5 text-emerald-600" /> 256-Bit Encrypted Secure Fee Payment
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-['Outfit']">
          Online School <span className="text-[#990000]">Fee Payment</span>
        </h1>
        <p className="text-sm text-slate-600">
          Lal Classes Concept School online payment portal for tuition, entrance registration, and study material kits.
        </p>
      </div>

      {/* Quick Search Card */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <form onSubmit={handleSearch} className="space-y-4">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
            Enter Admission Number (e.g. LCCS/2026/0158) or Student Name
          </label>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="e.g. LCCS/2026/0158 or Rohan Verma"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 bg-red-700 hover:bg-red-800 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center justify-center gap-2"
            >
              <span>Fetch Dues</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Hint quick tags */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 pt-1">
            <span>Demo Students:</span>
            <button
              type="button"
              onClick={() => { 
                setSearchQuery('LCCS/2026/0158'); 
                const s = allStudents.find(x => x.admissionNo === 'LCCS/2026/0158');
                setFoundStudent(s || null);
                setHasSearched(true);
              }}
              className="px-2.5 py-1 bg-slate-100 hover:bg-red-50 hover:text-red-700 rounded-lg text-slate-800 font-mono text-[11px] border border-slate-300 transition"
            >
              Rohan Verma (LCCS/2026/0158)
            </button>
            <button
              type="button"
              onClick={() => { 
                setSearchQuery('LCCS/2026/0142'); 
                const s = allStudents.find(x => x.admissionNo === 'LCCS/2026/0142');
                setFoundStudent(s || null);
                setHasSearched(true);
              }}
              className="px-2.5 py-1 bg-slate-100 hover:bg-red-50 hover:text-red-700 rounded-lg text-slate-800 font-mono text-[11px] border border-slate-300 transition"
            >
              Adarsh Raj (LCCS/2026/0142)
            </button>
          </div>
        </form>
      </div>

      {/* Search Results Display */}
      {hasSearched && (
        <div className="space-y-6 animate-fade-in">
          {foundStudent ? (
            <div className="space-y-6">
              
              {/* Student Identity Card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={foundStudent.photo}
                    alt={foundStudent.name}
                    className="w-14 h-14 rounded-xl object-cover border-2 border-red-700 shadow-2xs"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">{foundStudent.name}</h3>
                    <p className="text-xs text-slate-500">
                      Admission No: <span className="font-mono text-red-800 font-bold">{foundStudent.admissionNo}</span> | Roll: {foundStudent.rollNo}
                    </p>
                    <p className="text-xs text-slate-600 font-medium">
                      {foundStudent.grade} ({foundStudent.section}) • Parent: {foundStudent.parentName}
                    </p>
                  </div>
                </div>

                <div className="text-right bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Total Outstanding</span>
                  <p className="text-xl font-bold text-red-700 font-['Outfit']">
                    ₹{foundStudent.feeDue.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>

              {/* Fee Invoices List */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                  Pending & Active Fee Invoices
                </h4>

                {studentFees.map((fee) => (
                  <div
                    key={fee.id}
                    className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-300 transition"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          fee.status === 'PAID'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {fee.status}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">{fee.term}</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm font-['Outfit']">{fee.title}</h4>
                      <p className="text-xs text-slate-500">Due Date: {fee.dueDate}</p>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-lg font-black text-slate-900 font-['Outfit']">
                          ₹{fee.amount.toLocaleString('en-IN')}
                        </p>
                      </div>

                      {fee.status === 'PAID' ? (
                        <button
                          disabled
                          className="px-4 py-2 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200 flex items-center gap-1 cursor-default"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Paid</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => handlePayClick(fee)}
                          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-bold text-xs shadow transition active:scale-95 flex items-center gap-1.5"
                        >
                          <CreditCard className="w-3.5 h-3.5" />
                          <span>Pay Now</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ) : (
            <div className="bg-white p-8 rounded-2xl border border-red-200 text-center space-y-2">
              <AlertCircle className="w-8 h-8 text-red-500 mx-auto" />
              <h4 className="font-bold text-slate-900 text-sm">No Student Found</h4>
              <p className="text-xs text-slate-500">
                No matching scholar record for "{searchQuery}". Please verify the admission number.
              </p>
            </div>
          )}
        </div>
      )}

    </section>
  );
};
