import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Calendar, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Clock, 
  ShieldCheck,
  ZoomIn
} from 'lucide-react';
import { SCHOOL_INFO, getReceptionistWhatsappUrl } from '../../data/mockData';

export const AdmissionSection: React.FC = () => {
  const { setIsAdmissionModalOpen, openLightbox, setActiveView } = useApp();

  return (
    <div className="bg-slate-50 py-10 lg:py-14">
      <div className="w-[94%] lg:w-[85%] mx-auto px-2 sm:px-4 lg:px-6 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 font-bold text-xs uppercase tracking-wider">
            Academic Session 2026-27
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 font-['Outfit']">
            Admission Notification & <span className="text-[#990000]">Process</span>
          </h1>
          <p className="text-sm text-slate-600">
            Official Entrance Notification for Class III, IV & V (Session 2026-27). Apply online or download the printable PDF form.
          </p>
        </div>

        {/* Real Scanned Admission Posters Showcase from Addmission.aspx */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Authentic Scanned Notification Poster */}
          <div className="md:col-span-5 bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm text-center">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
              <span className="text-xs font-bold text-red-700 uppercase">
                Official Scanned Notice
              </span>
              <button
                onClick={() => openLightbox('/live-assets/AdmissionNotice_2026.jpg', 'Admission Notification for Class III, IV & V Session 2026-27')}
                className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-semibold"
              >
                <ZoomIn className="w-3.5 h-3.5" /> Full Zoom
              </button>
            </div>

            <div 
              onClick={() => openLightbox('/live-assets/AdmissionNotice_2026.jpg', 'Admission Notification for Class III, IV & V Session 2026-27')}
              className="relative cursor-pointer group rounded-xl overflow-hidden border border-slate-200"
            >
              <img 
                src="/live-assets/AdmissionNotice_2026.jpg" 
                alt="Admission Notification for Class III, IV & V Session 2026-27"
                className="w-full h-auto max-h-[520px] object-contain group-hover:scale-102 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="px-4 py-2 bg-red-700 text-white rounded-lg font-bold text-xs shadow-lg flex items-center gap-1">
                  <ZoomIn className="w-4 h-4" /> Click to Enlarge
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-center gap-3">
              <a
                href="/live-assets/Admission_Form.pdf"
                download
                className="px-4 py-2 rounded-lg bg-red-700 hover:bg-red-800 text-white font-bold text-xs shadow transition flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Form (PDF)</span>
              </a>
              <button
                onClick={() => setIsAdmissionModalOpen(true)}
                className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow transition"
              >
                Apply Online Form
              </button>
            </div>
          </div>

          {/* Right Column: Admission Roadmap & Schedule */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Timeline Cards */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold text-red-700 uppercase tracking-wider">
                  Important Schedule & Timelines
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-['Outfit'] mt-1">
                  Entrance Examination Schedule (Session 2026-27)
                </h3>
              </div>

              <div className="space-y-4">
                
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-red-100 text-red-800 shrink-0 font-bold text-center w-14">
                    <span className="text-xs uppercase block">JAN</span>
                    <span className="text-lg block leading-none">02</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Form Issuing & Submission Period</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Date Range: <b>2nd January to 2nd February 2026</b>
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Forms available at school counter (Musadpur, Chhoti Pahari Road) or downloaded online.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-amber-200 text-amber-900 shrink-0 font-bold text-center w-14">
                    <span className="text-xs uppercase block">FEB</span>
                    <span className="text-lg block leading-none">08</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Entrance Test Performance Date</h4>
                    <p className="text-xs text-amber-950 mt-0.5">
                      Sunday, <b>8th February 2026</b> • Time: 09:30 AM to 12:30 PM
                    </p>
                    <p className="text-[11px] text-slate-600 mt-1">
                      Objective and descriptive tests evaluating Mental Ability, Mathematics, Science/EVS, and Languages.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-emerald-200 text-emerald-900 shrink-0 font-bold text-center w-14">
                    <span className="text-xs uppercase block">FEB</span>
                    <span className="text-lg block leading-none">15</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Declaration of Test Performance Results</h4>
                    <p className="text-xs text-emerald-950 mt-0.5">
                      Sunday, <b>15th February 2026</b>
                    </p>
                    <p className="text-[11px] text-slate-600 mt-1">
                      Result published on school notice board and official portal.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-200 text-purple-900 shrink-0 font-bold text-center w-14">
                    <span className="text-xs uppercase block">FEB</span>
                    <span className="text-lg block leading-none">21</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Admission Confirmation Dates</h4>
                    <p className="text-xs text-purple-950 mt-0.5">
                      <b>21st and 22nd February 2026</b> (08:00 AM to 03:00 PM)
                    </p>
                    <p className="text-[11px] text-slate-600 mt-1">
                      Final enrolment and fee submission for qualified candidates with original certificates.
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsAdmissionModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-bold text-xs shadow-md transition flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Start Online Admission Form (2026-27)</span>
                </button>

                <a
                  href={getReceptionistWhatsappUrl('Hello Reception, I want admission assistance and form submission details for Session 2026-27.')}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-md transition flex items-center gap-2 cursor-pointer"
                  title="Chat with Receptionist on WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 2C6.495 2 2 6.494 2 12.029c0 1.942.555 3.754 1.517 5.292L2 22l4.821-1.479a9.98 9.98 0 005.21 1.487h.004c5.534 0 10.029-4.495 10.029-10.03 0-2.678-1.042-5.198-2.936-7.091A9.97 9.97 0 0012.031 2zm0 18.256c-1.636 0-3.238-.439-4.633-1.272l-.332-.198-3.447 1.057 1.077-3.359-.217-.346a8.212 8.212 0 01-1.264-4.409c0-4.549 3.702-8.251 8.255-8.251 2.203 0 4.275.859 5.834 2.417a8.204 8.204 0 012.416 5.833c0 4.551-3.703 8.254-8.255 8.254zm4.529-6.182c-.248-.124-1.469-.725-1.696-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.186-.538.062-.248-.124-1.048-.387-1.996-1.233-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.016-.382.108-.506.112-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.35-.767-1.847-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.248-.871.851-.871 2.074 0 1.224.891 2.406 1.015 2.572.124.166 1.754 2.678 4.25 3.754.594.256 1.058.41 1.42.525.597.19 1.14.163 1.569.099.478-.072 1.469-.601 1.676-1.182.207-.581.207-1.078.145-1.182-.062-.104-.228-.166-.476-.29z" />
                  </svg>
                  <span>WhatsApp Receptionist (8969940709)</span>
                </a>

                <button
                  onClick={() => setActiveView('downloads')}
                  className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-300 transition cursor-pointer"
                >
                  Download Syllabus for Test
                </button>
              </div>

            </div>

            {/* Required Documents Checklist */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h4 className="font-bold text-slate-900 text-sm font-['Outfit']">
                Documents Required for Final Admission:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>3 Recent Passport Size Photos</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Photocopy of Aadhaar Card</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Previous School Progress Report</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Birth Certificate Copy</span>
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
