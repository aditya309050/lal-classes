import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  User, 
  Calendar, 
  Clock, 
  BookOpen, 
  FileText, 
  CreditCard, 
  Award, 
  CheckCircle2, 
  Printer, 
  Sparkles, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Download,
  AlertCircle
} from 'lucide-react';
import { FeeItem } from '../../types';
import { SCHOOL_INFO } from '../../data/mockData';

interface StudentPortalProps {
  isHome?: boolean;
}

export const StudentPortal: React.FC<StudentPortalProps> = ({ isHome: propIsHome }) => {
  const { 
    activeView,
    activeStudent, 
    setActiveStudent, 
    allStudents, 
    fees, 
    transactions, 
    setSelectedFeeForPay, 
    setIsPaymentModalOpen,
    entranceResults,
    showToast
  } = useApp();
  const isHome = propIsHome !== undefined ? propIsHome : activeView === 'home';

  const [activeTab, setActiveTab] = useState<'overview' | 'fees' | 'result' | 'leave'>('overview');
  const [leaveReason, setLeaveReason] = useState('');
  const [leaveDays, setLeaveDays] = useState('1');
  const [leaveSubmitted, setLeaveSubmitted] = useState(false);

  const studentFees = fees.filter(f => f.studentId === activeStudent.id);
  const studentTx = transactions.filter(t => t.studentId === activeStudent.id);
  const studentResult = entranceResults.find(r => r.studentName.toLowerCase().includes(activeStudent.name.toLowerCase()));

  const handlePay = (fee: FeeItem) => {
    setSelectedFeeForPay(fee);
    setIsPaymentModalOpen(true);
  };

  const handleLeaveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeaveSubmitted(true);
    showToast('Leave request submitted to Class Teacher & Director.');
    setTimeout(() => {
      setLeaveSubmitted(false);
      setLeaveReason('');
    }, 3000);
  };

  return (
    <div className="bg-slate-50 py-10 lg:py-14 min-h-[85vh]">
      <div className="w-[94%] lg:w-[85%] mx-auto px-2 sm:px-4 lg:px-6 space-y-8">
        
        {/* Scholar Header Bar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-5">
            <img
              src={activeStudent.photo}
              alt={activeStudent.name}
              className="w-20 h-20 rounded-2xl object-cover border-2 border-red-700 shadow-md"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded uppercase">
                  Scholar Portal
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded uppercase">
                  {activeStudent.status}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit'] mt-1">
                {activeStudent.name}
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                Admission No: <b className="text-red-800">{activeStudent.admissionNo}</b> • Roll No: <b>{activeStudent.rollNo}</b> • {activeStudent.grade} ({activeStudent.section})
              </p>
            </div>
          </div>

          {/* Student Switcher for Demo */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="text-right">
              <span className="text-[11px] text-slate-400 block font-semibold">Switch Demo Scholar:</span>
              <select
                value={activeStudent.id}
                onChange={(e) => {
                  const found = allStudents.find(s => s.id === e.target.value);
                  if (found) setActiveStudent(found);
                }}
                className="px-3 py-1.5 rounded-xl border border-slate-300 text-xs font-bold bg-slate-50 text-slate-800 focus:outline-none"
              >
                {allStudents.map(s => (
                  <option key={s.id} value={s.id}>{s.name} ({s.grade})</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Portal Tabs */}
        <div className="flex border-b border-slate-200 overflow-x-auto gap-2">
          {[
            { id: 'overview', label: 'Dashboard & Attendance' },
            { id: 'fees', label: 'Fees & Payment Receipts' },
            { id: 'result', label: 'Entrance & Exam Card' },
            { id: 'leave', label: 'Apply Leave Request' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-3 text-xs font-bold rounded-t-xl transition whitespace-nowrap border-b-2 ${
                activeTab === tab.id
                  ? 'border-red-700 text-red-800 bg-white font-black'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: Overview */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase">Attendance Rate</span>
              <h3 className="text-3xl font-black text-emerald-700 font-['Outfit']">
                {activeStudent.attendanceRate}%
              </h3>
              <p className="text-xs text-slate-500">Regular attendance record in 07:00 AM - 02:30 PM day classes.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase">Fee Status</span>
              <h3 className={`text-3xl font-black font-['Outfit'] ${activeStudent.feeDue > 0 ? 'text-amber-700' : 'text-emerald-700'}`}>
                {activeStudent.feeDue > 0 ? `₹${activeStudent.feeDue.toLocaleString('en-IN')} Due` : 'All Cleared'}
              </h3>
              <p className="text-xs text-slate-500">Paid: ₹{activeStudent.feePaid.toLocaleString('en-IN')}</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase">Academic Wing</span>
              <h3 className="text-xl font-black text-slate-900 font-['Outfit']">
                {activeStudent.section}
              </h3>
              <p className="text-xs text-slate-500">Mentored under Director Devendra Prasad (Devi Lal).</p>
            </div>

            {/* Parent & Contact Details Card */}
            <div className="md:col-span-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-base text-slate-900 font-['Outfit'] border-b border-slate-200 pb-2">
                Student & Guardian Registered Record
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 block">Father / Guardian:</span>
                  <b className="text-slate-800 text-sm">{activeStudent.parentName}</b>
                </div>
                <div>
                  <span className="text-slate-500 block">Contact Mobile:</span>
                  <b className="text-slate-800 text-sm">{activeStudent.parentPhone}</b>
                </div>
                <div>
                  <span className="text-slate-500 block">Blood Group:</span>
                  <b className="text-slate-800 text-sm">{activeStudent.bloodGroup}</b>
                </div>
                <div>
                  <span className="text-slate-500 block">Campus Address:</span>
                  <b className="text-slate-800">{activeStudent.address}</b>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: Fees */}
        {activeTab === 'fees' && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6 animate-fade-in">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <h3 className="font-bold text-lg text-slate-900 font-['Outfit']">Tuition & Foundation Invoices</h3>
                <p className="text-xs text-slate-500">Session 2026-27 billing status</p>
              </div>
            </div>

            <div className="space-y-3">
              {studentFees.map(fee => (
                <div key={fee.id} className="p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      fee.status === 'PAID' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {fee.status}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm mt-1">{fee.title}</h4>
                    <p className="text-xs text-slate-500">Due: {fee.dueDate} {fee.receiptNo && `• Receipt: ${fee.receiptNo}`}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="font-black text-lg text-slate-900">₹{fee.amount.toLocaleString('en-IN')}</span>
                    {fee.status === 'PENDING' ? (
                      <button
                        onClick={() => handlePay(fee)}
                        className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white font-bold text-xs rounded-xl shadow transition"
                      >
                        Pay Online
                      </button>
                    ) : (
                      <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-lg">
                        Paid on {fee.paidDate}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Result Card */}
        {activeTab === 'result' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 animate-fade-in">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <h3 className="font-bold text-lg text-slate-900 font-['Outfit']">Entrance Examination Scorecard 2026</h3>
                <p className="text-xs text-slate-500">Declared on 15th February 2026</p>
              </div>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4" /> Print Card
              </button>
            </div>

            {studentResult ? (
              <div className="p-6 rounded-2xl bg-gradient-to-br from-red-50 to-amber-50 border border-red-200 space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold text-red-800 font-mono">Roll: {studentResult.rollNo}</span>
                    <h4 className="text-2xl font-black text-slate-900">{studentResult.studentName}</h4>
                  </div>
                  <span className="px-3 py-1 bg-emerald-600 text-white font-black text-xs rounded-full uppercase">
                    {studentResult.status} (Rank #{studentResult.rank})
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-slate-500 block">Class:</span>
                    <b className="text-slate-900 text-sm">{studentResult.classLevel}</b>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Marks Obtained:</span>
                    <b className="text-red-700 text-sm">{studentResult.marksObtained} / {studentResult.totalMarks}</b>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Percentage:</span>
                    <b className="text-emerald-700 text-sm">{studentResult.percentage}%</b>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Admission Date:</span>
                    <b className="text-slate-900 text-sm">{studentResult.admissionDate}</b>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl text-xs text-slate-700 border border-red-200">
                  <b>Remarks:</b> {studentResult.remarks}
                </div>
              </div>
            ) : (
              <div className="p-6 text-center text-slate-500 text-xs">
                No individual entrance exam record mapped for this profile.
              </div>
            )}
          </div>
        )}

        {/* TAB 4: Leave */}
        {activeTab === 'leave' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm max-w-xl space-y-4 animate-fade-in">
            <h3 className="font-bold text-lg text-slate-900 font-['Outfit']">Submit Leave Request</h3>
            
            {leaveSubmitted ? (
              <div className="p-6 text-center bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-800 text-xs">
                <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-600 mb-2" />
                Leave application submitted successfully.
              </div>
            ) : (
              <form onSubmit={handleLeaveSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Number of Days</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={leaveDays}
                    onChange={(e) => setLeaveDays(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-slate-50 text-sm"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Reason for Absence</label>
                  <textarea
                    required
                    rows={3}
                    value={leaveReason}
                    onChange={(e) => setLeaveReason(e.target.value)}
                    placeholder="Provide medical or domestic reason..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-slate-50 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-red-700 hover:bg-red-800 text-white font-bold rounded-xl transition"
                >
                  Submit to Class Teacher
                </button>
              </form>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
