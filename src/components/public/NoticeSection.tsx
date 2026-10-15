import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Bell, 
  Search, 
  Calendar, 
  Download, 
  FileText, 
  Tag, 
  ExternalLink,
  AlertCircle
} from 'lucide-react';
import { Notice } from '../../types';

interface NoticeSectionProps {
  isHome?: boolean;
}

export const NoticeSection: React.FC<NoticeSectionProps> = ({ isHome: propIsHome }) => {
  const { activeView, notices, setSelectedNotice, openLightbox } = useApp();
  const isHome = propIsHome !== undefined ? propIsHome : activeView === 'home';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'ADMISSION' | 'EXAMINATION' | 'ACADEMIC' | 'GENERAL'>('ALL');

  const filteredNotices = notices.filter(n => {
    const matchCat = selectedCategory === 'ALL' || n.category === selectedCategory;
    const matchSearch = searchQuery === '' || 
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      n.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="bg-slate-50 py-10 lg:py-14">
      <div className="w-[94%] lg:w-[85%] mx-auto px-2 sm:px-4 lg:px-6 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 font-bold text-xs uppercase tracking-wider">
            Administrative Circulars & Orders
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 font-['Outfit']">
            Notice & <span className="text-[#990000]">Circulars</span>
          </h1>
          <p className="text-sm text-slate-600">
            Official institutional announcements regarding admissions, entrance examinations, results, and academic routine.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search circulars by keyword..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 bg-slate-50"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {(['ALL', 'ADMISSION', 'EXAMINATION', 'ACADEMIC', 'GENERAL'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  selectedCategory === cat
                    ? 'bg-red-700 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Notices Cards List */}
        <div className="space-y-4">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className={`p-6 rounded-2xl bg-white border transition shadow-sm hover:shadow-md ${
                notice.important ? 'border-red-300 ring-1 ring-red-200' : 'border-slate-200'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-3">
                <div className="flex items-center space-x-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                    notice.category === 'ADMISSION' ? 'bg-red-100 text-red-800' :
                    notice.category === 'EXAMINATION' ? 'bg-amber-100 text-amber-800' :
                    notice.category === 'ACADEMIC' ? 'bg-blue-100 text-blue-800' :
                    'bg-slate-100 text-slate-800'
                  }`}>
                    {notice.category}
                  </span>

                  {notice.important && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-700 text-white uppercase animate-pulse">
                      Urgent
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-2 text-xs text-slate-400 font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>Date: {notice.date}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 font-['Outfit'] mb-2">
                {notice.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 whitespace-pre-line leading-relaxed">
                {notice.content}
              </p>

              {notice.fileUrl && (
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    Attached Document: <b className="text-slate-700">{notice.attachmentName}</b>
                  </span>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => openLightbox(notice.fileUrl!, notice.title)}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition"
                    >
                      Preview File
                    </button>

                    <a
                      href={notice.fileUrl}
                      download
                      className="px-3.5 py-1.5 rounded-lg bg-red-700 hover:bg-red-800 text-white text-xs font-bold flex items-center gap-1 shadow-xs transition"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}

          {filteredNotices.length === 0 && (
            <div className="p-8 text-center rounded-2xl bg-white border border-slate-200 text-slate-500">
              <AlertCircle className="w-8 h-8 mx-auto text-slate-400 mb-2" />
              <p className="text-sm font-semibold">No notices match your current search query.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
