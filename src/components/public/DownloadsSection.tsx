import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Download, 
  FileText, 
  Eye, 
  Sparkles, 
  CheckCircle, 
  ZoomIn, 
  ExternalLink 
} from 'lucide-react';
import { DOWNLOADS_DATA } from '../../data/mockData';

interface DownloadsSectionProps {
  isHome?: boolean;
}

export const DownloadsSection: React.FC<DownloadsSectionProps> = ({ isHome: propIsHome }) => {
  const { activeView, openLightbox, setIsAdmissionModalOpen } = useApp();
  const isHome = propIsHome !== undefined ? propIsHome : activeView === 'home';
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'Admission Form' | 'Entrance Syllabus' | 'Notice/Brochure'>('ALL');

  const filteredItems = DOWNLOADS_DATA.filter(item => {
    if (activeCategory === 'ALL') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="bg-slate-50 py-10 lg:py-14">
      <div className="w-[94%] lg:w-[85%] mx-auto px-2 sm:px-4 lg:px-6 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 font-bold text-xs uppercase tracking-wider">
            Official Document & Syllabus Center
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 font-['Outfit']">
            Downloads & <span className="text-[#990000]">Materials</span>
          </h1>
          <p className="text-sm text-slate-600">
            Download official school admission forms, class-wise entrance test syllabi (Class III, IV & V), notices, and sample preparation guidelines.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {(['ALL', 'Admission Form', 'Entrance Syllabus', 'Notice/Brochure'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeCategory === cat
                  ? 'bg-red-700 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              {/* Preview Thumbnail */}
              <div 
                onClick={() => openLightbox(item.previewUrl, item.title, item.description)}
                className="relative h-48 bg-slate-900 overflow-hidden cursor-pointer group"
              >
                <img 
                  src={item.previewUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="px-3 py-1.5 bg-red-700 text-white rounded-lg text-xs font-bold flex items-center gap-1 shadow">
                    <ZoomIn className="w-3.5 h-3.5" /> Preview Document
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase shadow ${
                    item.fileType === 'PDF' ? 'bg-red-700 text-white' : 'bg-amber-400 text-slate-950'
                  }`}>
                    {item.fileType} • {item.fileSize}
                  </span>
                </div>
              </div>

              {/* Document Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-red-700 uppercase bg-red-50 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-base text-slate-900 font-['Outfit'] mt-1.5 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Download and Preview CTAs */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => openLightbox(item.previewUrl, item.title, item.description)}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1 transition"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect</span>
                  </button>

                  <a
                    href={item.fileUrl}
                    download
                    className="px-4 py-1.5 rounded-lg bg-red-700 hover:bg-red-800 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Online Registration Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-red-900 via-red-800 to-amber-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black font-['Outfit']">
              Need to Submit an Online Application Form Directly?
            </h3>
            <p className="text-xs sm:text-sm text-amber-100">
              You can fill out our interactive online admission wizard and receive an instant printable registration slip.
            </p>
          </div>

          <button
            onClick={() => setIsAdmissionModalOpen(true)}
            className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-lg transition shrink-0 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Open Online Admission Wizard</span>
          </button>
        </div>

      </div>
    </div>
  );
};
