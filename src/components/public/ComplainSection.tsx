import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  MessageSquare, 
  Send, 
  Search, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Phone, 
  ShieldCheck,
  User
} from 'lucide-react';
import { GrievanceRecord } from '../../types';

interface ComplainSectionProps {
  isHome?: boolean;
}

export const ComplainSection: React.FC<ComplainSectionProps> = ({ isHome: propIsHome }) => {
  const { activeView, grievances, submitGrievance } = useApp();
  const isHome = propIsHome !== undefined ? propIsHome : activeView === 'home';

  const [activeTab, setActiveTab] = useState<'SUBMIT' | 'TRACK'>('SUBMIT');

  // Submit Form state
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNo: '',
    subject: '',
    category: 'Academic' as GrievanceRecord['category'],
    message: ''
  });

  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  // Track Form state
  const [trackQuery, setTrackQuery] = useState('');
  const [trackedResult, setTrackedResult] = useState<GrievanceRecord | null>(null);
  const [hasTracked, setHasTracked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobileNo || !formData.subject || !formData.message) {
      alert('Please fill in all mandatory fields.');
      return;
    }

    const created = submitGrievance(formData);
    setSubmittedTicket(created.ticketNo);
    setFormData({
      fullName: '',
      mobileNo: '',
      subject: '',
      category: 'Academic',
      message: ''
    });
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setHasTracked(true);
    const q = trackQuery.trim().toLowerCase();
    if (!q) {
      setTrackedResult(null);
      return;
    }
    const found = grievances.find(
      g => g.ticketNo.toLowerCase().includes(q) || g.mobileNo.includes(q)
    );
    setTrackedResult(found || null);
  };

  return (
    <div className="bg-slate-50 py-10 lg:py-14">
      <div className="w-[94%] lg:w-[85%] mx-auto px-2 sm:px-4 lg:px-6 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 font-bold text-xs uppercase tracking-wider">
            Grievance Redressal Cell
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 font-['Outfit']">
            Complain & <span className="text-[#990000]">Feedback Portal</span>
          </h1>
          <p className="text-sm text-slate-600">
            Submit your feedback, inquiry, or grievances directly to the Director & Management office. Each complaint is assigned a traceable ticket.
          </p>
        </div>

        {/* Tab Toggle: Submit Complaint vs Track Complaint */}
        <div className="flex justify-center">
          <div className="bg-slate-200/80 p-1 rounded-xl inline-flex space-x-1">
            <button
              onClick={() => setActiveTab('SUBMIT')}
              className={`px-6 py-2.5 rounded-lg text-xs font-bold transition ${
                activeTab === 'SUBMIT'
                  ? 'bg-red-700 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Submit New Complaint
            </button>
            <button
              onClick={() => setActiveTab('TRACK')}
              className={`px-6 py-2.5 rounded-lg text-xs font-bold transition ${
                activeTab === 'TRACK'
                  ? 'bg-red-700 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Track Existing Ticket Status
            </button>
          </div>
        </div>

        {/* TAB 1: Submit Form matching Complain.aspx */}
        {activeTab === 'SUBMIT' && (
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            
            {submittedTicket ? (
              <div className="p-8 text-center rounded-2xl bg-emerald-50 border border-emerald-200 space-y-4 animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-black text-slate-900 font-['Outfit']">
                  Your Complain has been Registered!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for bringing this to our attention. Our administrative team will review this issue immediately under Director supervision.
                </p>
                <div className="p-3 bg-white rounded-xl border border-emerald-200 inline-block font-mono font-bold text-red-800 text-base">
                  Ticket No: {submittedTicket}
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmittedTicket(null);
                      setActiveTab('TRACK');
                      setTrackQuery(submittedTicket);
                    }}
                    className="px-5 py-2.5 bg-red-700 hover:bg-red-800 text-white text-xs font-bold rounded-xl transition"
                  >
                    Track Status Now
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">
                    Your Complain Details
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fields marked with (*) are required. You will receive SMS / WhatsApp updates.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rameshwar Singh"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile No. *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.mobileNo}
                      onChange={(e) => setFormData({ ...formData, mobileNo: e.target.value })}
                      placeholder="e.g. 9304222662"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 bg-slate-50"
                    >
                      <option value="Academic">Academic / Study Quality</option>
                      <option value="Administration">Administrative Office / Counter</option>
                      <option value="Entrance Test">Entrance Test / Result Issue</option>
                      <option value="Hostel & Transport">Hostel & Transport Issue</option>
                      <option value="Other">Other Miscellaneous</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Inquiry regarding batch timing"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 bg-slate-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Message / Complaint Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your issue or query clearly with student details if applicable..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 bg-slate-50"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    Direct helpline: <b className="text-slate-800">+91-9304222662</b>
                  </span>

                  <button
                    type="submit"
                    className="px-7 py-3 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-bold text-xs shadow-md transition flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Complain</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        )}

        {/* TAB 2: Track Form */}
        {activeTab === 'TRACK' && (
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">
                Track Complaint Redressal Status
              </h3>
              <p className="text-xs text-slate-500">
                Enter your Ticket Number (e.g. <b>LCCS-GRV-2026-104</b>) or registered Mobile Number.
              </p>
            </div>

            <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={trackQuery}
                onChange={(e) => setTrackQuery(e.target.value)}
                placeholder="e.g. LCCS-GRV-2026-104 or 9304222662"
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 bg-slate-50"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold text-xs transition"
              >
                Track Ticket
              </button>
            </form>

            {hasTracked && (
              <div className="pt-4 border-t border-slate-200">
                {trackedResult ? (
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase font-bold">Ticket Number:</span>
                        <h4 className="font-mono font-bold text-lg text-slate-900">{trackedResult.ticketNo}</h4>
                      </div>

                      <span className={`px-3 py-1 rounded-full text-xs font-black uppercase ${
                        trackedResult.status === 'RESOLVED'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-amber-100 text-amber-800 border border-amber-300'
                      }`}>
                        {trackedResult.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-slate-500">Complainant:</span>
                        <b className="text-slate-900 block">{trackedResult.fullName}</b>
                      </div>
                      <div>
                        <span className="text-slate-500">Mobile No:</span>
                        <b className="text-slate-900 block">{trackedResult.mobileNo}</b>
                      </div>
                      <div>
                        <span className="text-slate-500">Subject:</span>
                        <b className="text-slate-900 block">{trackedResult.subject}</b>
                      </div>
                      <div>
                        <span className="text-slate-500">Submitted On:</span>
                        <b className="text-slate-900 block">{trackedResult.submittedAt}</b>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700">
                      <p className="font-semibold text-slate-900">Your Message:</p>
                      <p className="mt-0.5">{trackedResult.message}</p>
                    </div>

                    {trackedResult.resolutionNotes && (
                      <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900">
                        <p className="font-bold text-emerald-950">Administrative Resolution:</p>
                        <p className="mt-0.5">{trackedResult.resolutionNotes}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-6 text-center rounded-xl bg-red-50 text-red-800 text-xs">
                    <AlertCircle className="w-6 h-6 mx-auto mb-1 text-red-600" />
                    No grievance ticket found for "{trackQuery}". Please verify the Ticket Number.
                  </div>
                )}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
