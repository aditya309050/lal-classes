import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Search, 
  Award, 
  CheckCircle2, 
  AlertCircle, 
  Printer, 
  FileText, 
  Download, 
  ZoomIn, 
  Sparkles,
  User,
  Calendar
} from 'lucide-react';
import { EntranceResultRecord } from '../../types';
import { SCHOOL_INFO } from '../../data/mockData';

interface ResultsSectionProps {
  isHome?: boolean;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ isHome: propIsHome }) => {
  const { activeView, entranceResults, openLightbox, setIsAdmissionModalOpen } = useApp();
  const isHome = propIsHome !== undefined ? propIsHome : activeView === 'home';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClassFilter, setSelectedClassFilter] = useState<'ALL' | 'Class III' | 'Class IV' | 'Class V'>('ALL');
  const [searchedRecord, setSearchedRecord] = useState<EntranceResultRecord | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const q = searchQuery.trim().toLowerCase();
    if (!q) {
      setSearchedRecord(null);
      return;
    }
    const found = entranceResults.find(
      r => r.rollNo.toLowerCase().includes(q) || r.studentName.toLowerCase().includes(q)
    );
    setSearchedRecord(found || null);
  };

  const filteredRecords = entranceResults.filter(r => {
    if (selectedClassFilter === 'ALL') return true;
    return r.classLevel === selectedClassFilter;
  });

  const printScorecard = () => {
    window.print();
  };

  return (
    <div className="bg-slate-50 py-10 lg:py-14">
      <div className="w-[94%] lg:w-[85%] mx-auto px-2 sm:px-4 lg:px-6 space-y-10">
        
        {/* Header matching Result.aspx */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 font-bold text-xs uppercase tracking-wider">
            <span className="h-2 w-2 rounded-full bg-red-600 animate-ping"></span>
            <span>Official Result Declaration 2026</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 font-['Outfit']">
            Entrance Exam Result 2026
          </h1>
          <p className="text-sm font-semibold text-red-800">
            Admission Test Result of Lal Classes Concept School (Class - III, IV & V)
          </p>
          <p className="text-xs text-slate-500">
            Conducted on 8th February 2026 • Declared on 15th February 2026
          </p>
        </div>

        {/* Search Bar & Original Scanned Sheet Header Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 7 Cols: Interactive Result Search Box */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-lg font-black text-slate-900 font-['Outfit'] flex items-center gap-2">
                <Search className="w-5 h-5 text-red-700" />
                <span>Search Entrance Result by Roll No. or Candidate Name</span>
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Enter candidate Roll Number (e.g. <b>LCCS-2601</b>, <b>LCCS-2603</b>, <b>LCCS-2605</b>) or Student Name.
              </p>
            </div>

            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. LCCS-2601 or Adarsh"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 bg-slate-50"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-bold text-xs shadow transition shrink-0"
              >
                Find Result
              </button>
            </form>

            {/* Quick Roll Suggestion Chips */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
              <span className="font-semibold text-slate-700">Sample Rolls:</span>
              {['LCCS-2601', 'LCCS-2603', 'LCCS-2605', 'LCCS-2609'].map((roll) => (
                <button
                  key={roll}
                  type="button"
                  onClick={() => {
                    setSearchQuery(roll);
                    const found = entranceResults.find(r => r.rollNo === roll);
                    setSearchedRecord(found || null);
                    setHasSearched(true);
                  }}
                  className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-red-50 hover:text-red-700 border border-slate-200 text-slate-700 font-mono transition"
                >
                  {roll}
                </button>
              ))}
            </div>

            {/* Searched Scorecard Result Display */}
            {hasSearched && (
              <div className="mt-4 pt-4 border-t border-slate-200 animate-fade-in">
                {searchedRecord ? (
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-white to-red-50/40 border-2 border-red-200 shadow-sm space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                      <div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase">Roll No:</span>
                        <h4 className="font-black text-xl text-red-900 font-mono">{searchedRecord.rollNo}</h4>
                      </div>

                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                          searchedRecord.status === 'QUALIFIED'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-amber-100 text-amber-800 border border-amber-300'
                        }`}>
                          {searchedRecord.status} (Rank #{searchedRecord.rank})
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                      <div>
                        <span className="text-slate-500 block">Candidate Name:</span>
                        <b className="text-slate-900 text-sm">{searchedRecord.studentName}</b>
                      </div>

                      <div>
                        <span className="text-slate-500 block">Father's Name:</span>
                        <b className="text-slate-900 text-sm">{searchedRecord.fatherName}</b>
                      </div>

                      <div>
                        <span className="text-slate-500 block">Applied Class:</span>
                        <b className="text-slate-900 text-sm">{searchedRecord.classLevel}</b>
                      </div>

                      <div>
                        <span className="text-slate-500 block">Marks Obtained:</span>
                        <b className="text-red-700 text-base">{searchedRecord.marksObtained} / {searchedRecord.totalMarks}</b>
                      </div>

                      <div>
                        <span className="text-slate-500 block">Percentage:</span>
                        <b className="text-emerald-700 text-base">{searchedRecord.percentage}%</b>
                      </div>

                      <div>
                        <span className="text-slate-500 block">Admission Dates:</span>
                        <b className="text-slate-900">{searchedRecord.admissionDate || '21-22 Feb 2026'}</b>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700">
                      <p className="font-semibold text-slate-900">Selection Remarks:</p>
                      <p className="mt-0.5">{searchedRecord.remarks}</p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <button
                        onClick={printScorecard}
                        className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 transition"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>Print Scorecard</span>
                      </button>

                      {searchedRecord.status === 'QUALIFIED' && (
                        <button
                          onClick={() => setIsAdmissionModalOpen(true)}
                          className="px-4 py-2 rounded-lg bg-red-700 hover:bg-red-800 text-white font-bold text-xs flex items-center gap-1.5 transition"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                          <span>Proceed to Enrolment</span>
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="p-6 text-center rounded-2xl bg-red-50 border border-red-200 text-red-800 space-y-2">
                    <AlertCircle className="w-8 h-8 mx-auto text-red-600" />
                    <h4 className="font-bold text-sm">No Result Found for "{searchQuery}"</h4>
                    <p className="text-xs text-slate-600">
                      Please double-check the Roll Number format (e.g. LCCS-2601) or check the official complete merit list below.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right 5 Cols: Authentic Scanned Result Sheet preview from Result.aspx */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="text-xs font-bold text-red-700 uppercase">Original Scanned Notice</span>
                <h3 className="font-black text-sm text-slate-900 font-['Outfit']">Official Results 2026 Sheet</h3>
              </div>
              <button
                onClick={() => openLightbox('/live-assets/Results_2026.jpeg', 'Official Scanned Result Sheet 2026')}
                className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
              >
                <ZoomIn className="w-3.5 h-3.5" /> Full Zoom
              </button>
            </div>

            <div 
              onClick={() => openLightbox('/live-assets/Results_2026.jpeg', 'Official Scanned Result Sheet 2026')}
              className="relative cursor-pointer group rounded-xl overflow-hidden border border-slate-200 bg-slate-900"
            >
              <img 
                src="/live-assets/Results_2026.jpeg" 
                alt="Entrance Exam Result 2026 Sheet"
                className="w-full h-auto max-h-[380px] object-contain group-hover:scale-102 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="px-4 py-2 bg-red-700 text-white rounded-lg font-bold text-xs shadow-lg flex items-center gap-1">
                  <ZoomIn className="w-4 h-4" /> Click to Inspect Official Sheet
                </span>
              </div>
            </div>

            <div className="text-xs text-slate-500 italic">
              Official published document signed by Director Devendra Prasad (Devi Lal).
            </div>

            <div className="pt-2 flex items-center justify-center gap-3">
              <a
                href="/live-assets/Results_2026.jpeg"
                download
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-lg text-xs flex items-center gap-1.5 transition"
              >
                <Download className="w-3.5 h-3.5" /> Download Sheet
              </a>
              <button
                onClick={() => openLightbox('/live-assets/Results_2026.jpeg', 'Official Scanned Result Sheet 2026')}
                className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white font-bold rounded-lg text-xs transition"
              >
                View Fullscreen
              </button>
            </div>
          </div>

        </div>

        {/* Complete Merit List Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden space-y-4 p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-xl font-black text-slate-900 font-['Outfit']">
                Official Merit List - Entrance Exam 2026
              </h3>
              <p className="text-xs text-slate-500">
                Summary of selected and waitlisted candidates for Class III, IV & V
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center space-x-1.5 bg-slate-100 p-1 rounded-xl">
              {(['ALL', 'Class III', 'Class IV', 'Class V'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedClassFilter(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    selectedClassFilter === tab
                      ? 'bg-red-700 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-black uppercase text-xs border-b border-slate-200">
                  <th className="py-3 px-3">Roll No</th>
                  <th className="py-3 px-3">Candidate Name</th>
                  <th className="py-3 px-3">Father's Name</th>
                  <th className="py-3 px-3">Class</th>
                  <th className="py-3 px-3">Score</th>
                  <th className="py-3 px-3">Rank</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3 text-right">Admission Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {filteredRecords.map((rec) => (
                  <tr key={rec.rollNo} className="hover:bg-slate-50 transition">
                    <td className="py-3 px-3 font-mono font-bold text-red-700">{rec.rollNo}</td>
                    <td className="py-3 px-3 font-bold text-slate-900">{rec.studentName}</td>
                    <td className="py-3 px-3 text-slate-600">{rec.fatherName}</td>
                    <td className="py-3 px-3">
                      <span className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-semibold text-xs">
                        {rec.classLevel}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-bold text-slate-800">
                      {rec.marksObtained}/{rec.totalMarks} ({rec.percentage}%)
                    </td>
                    <td className="py-3 px-3 font-bold text-amber-700">#{rec.rank}</td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold uppercase ${
                        rec.status === 'QUALIFIED'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {rec.status}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right text-slate-600 font-semibold">
                      {rec.admissionDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};
