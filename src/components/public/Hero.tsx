import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Play, 
  Volume2, 
  VolumeX, 
  Download, 
  CheckCircle2, 
  Phone,
  FileText,
  Video,
  Award,
  Sparkles,
  ExternalLink,
  X
} from 'lucide-react';
import { SCHOOL_INFO } from '../../data/mockData';

export const Hero: React.FC = () => {
  const { 
    setActiveView, 
    setIsAdmissionModalOpen,
    openLightbox 
  } = useApp();

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative w-full overflow-hidden bg-[#700000] text-white">
      
      {/* Background Image with Precise Crimson Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/live-assets/071221031623.jpg" 
          alt="Lal Classes Concept School Campus" 
          className="w-full h-full object-cover object-[center_35%]"
        />
        {/* Deep Crimson Gradient: Solid dark crimson on the left for text contrast, fading across to reveal the school campus on the right */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(125, 0, 0, 0.98) 0%, rgba(138, 6, 6, 0.95) 36%, rgba(115, 5, 5, 0.72) 64%, rgba(55, 0, 0, 0.36) 100%)'
          }}
        />
        {/* Subtle bottom vignette to blend into page */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#600000]/70 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Badge, Description & Action Buttons */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Top Badge: ★ A CENTRE OF RESULTS MAKERS! */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/80 bg-red-950/70 text-amber-300 font-bold text-xs uppercase tracking-wider shadow-sm backdrop-blur-xs">
              <span className="text-amber-400 text-sm">★</span>
              <span>A CENTRE OF RESULTS MAKERS!</span>
            </div>

            {/* Giant Impactful Headline */}
            <h1 className="font-['Outfit'] font-black uppercase tracking-tight leading-[0.92] text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] drop-shadow-lg">
              <span className="block text-white">IIT/PMT</span>
              <span className="block text-[#FFE500] drop-shadow-[0_2px_18px_rgba(255,229,0,0.35)]">
                FOUNDATION
              </span>
              <span className="block text-white">SCHOOL.</span>
            </h1>

            {/* Description Subtitle */}
            <p className="text-slate-100/90 text-sm sm:text-base lg:text-lg max-w-xl font-medium leading-relaxed drop-shadow-sm">
              LAL CLASSES Concept School Bihar Sharif - Preparing students to excel in competitive exams through conceptual excellence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setIsAdmissionModalOpen(true)}
                className="px-7 py-3.5 rounded-xl bg-[#FFE500] hover:bg-[#ffea2e] text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:shadow-yellow-400/30 transition transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                ADMISSION 2026-27
              </button>

              <a
                href="https://wa.me/918969940709?text=Hello%20Lal%20Classes%20Reception%2C%20I%20have%20an%20inquiry%20regarding%20school%20admissions%20and%20courses."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:shadow-emerald-500/30 transition transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2"
                title="Chat with Receptionist on WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.495 2 2 6.494 2 12.029c0 1.942.555 3.754 1.517 5.292L2 22l4.821-1.479a9.98 9.98 0 005.21 1.487h.004c5.534 0 10.029-4.495 10.029-10.03 0-2.678-1.042-5.198-2.936-7.091A9.97 9.97 0 0012.031 2zm0 18.256c-1.636 0-3.238-.439-4.633-1.272l-.332-.198-3.447 1.057 1.077-3.359-.217-.346a8.212 8.212 0 01-1.264-4.409c0-4.549 3.702-8.251 8.255-8.251 2.203 0 4.275.859 5.834 2.417a8.204 8.204 0 012.416 5.833c0 4.551-3.703 8.254-8.255 8.254zm4.529-6.182c-.248-.124-1.469-.725-1.696-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.186-.538.062-.248-.124-1.048-.387-1.996-1.233-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.016-.382.108-.506.112-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.35-.767-1.847-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.248-.871.851-.871 2.074 0 1.224.891 2.406 1.015 2.572.124.166 1.754 2.678 4.25 3.754.594.256 1.058.41 1.42.525.597.19 1.14.163 1.569.099.478-.072 1.469-.601 1.676-1.182.207-.581.207-1.078.145-1.182-.062-.104-.228-.166-.476-.29z" />
                </svg>
                <span>WhatsApp: 8969940709</span>
              </a>

              <button
                onClick={() => {
                  const el = document.getElementById('courses-section');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setActiveView('courses');
                  }
                }}
                className="px-7 py-3.5 rounded-xl bg-[#600000]/70 hover:bg-[#780000]/80 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/30 hover:border-white/60 shadow transition transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                EXPLORE COURSES
              </button>
            </div>

          </div>

          {/* Right Column: Featured Golden-Bordered Card with AIR 1 Badge */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative group max-w-md sm:max-w-lg mx-auto lg:ml-auto">
              
              {/* Floating Top-Right Achievement Badge (AIR 1 SAINIK SCHOOL RESULTS) */}
              <div className="absolute -top-6 right-2 sm:-right-4 z-20 bg-white rounded-2xl shadow-2xl px-5 py-3.5 border border-slate-100 text-center min-w-[170px] sm:min-w-[195px] transform group-hover:scale-105 transition duration-300">
                {/* Red corner accent tab from mockup */}
                <div className="absolute -top-1 left-4 w-4 h-2 bg-[#990000] rounded-t-sm"></div>
                <div className="text-2xl sm:text-3xl font-black text-[#990000] font-['Outfit'] tracking-tight leading-none">
                  AIR 1
                </div>
                <div className="text-[9px] sm:text-[10px] font-black text-slate-700 tracking-wider uppercase mt-1">
                  SAINIK SCHOOL RESULTS
                </div>
              </div>

              {/* Golden Framed Image Card */}
              <div 
                onClick={() => openLightbox('/live-assets/271121030029.jpg', 'Merit Achievers with Director Sir Devendra Prasad')}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-[3px] border-amber-400 shadow-2xl bg-black cursor-pointer group"
                title="Click to view full photo"
              >
                <img
                  src="/live-assets/271121030029.jpg"
                  alt="Director Sir Devendra Prasad with students"
                  className="w-full h-[320px] sm:h-[390px] lg:h-[430px] object-cover object-center group-hover:scale-103 transition duration-500"
                />

                {/* Dark bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 sm:p-7 pointer-events-none">
                  <div className="font-['Outfit']">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-md leading-none">
                      98% SUCCESS
                    </div>
                    <div className="text-xs sm:text-sm font-black text-[#FFE500] tracking-widest uppercase mt-2 drop-shadow">
                      LEGACY OF BIHAR SHARIF
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Statutory & Quick Links Ribbon directly below hero */}
      <div className="relative z-10 bg-[#540000]/90 border-t border-red-800/60 text-white/95 py-3 px-4 sm:px-8 text-xs backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#FFE500] text-slate-950 font-black text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">
              OFFICIAL AFFILIATION
            </span>
            <span className="font-semibold text-slate-100">
              Affiliated to Education Department of Bihar (Class I – VIII)
            </span>
            <span className="text-white/40 hidden lg:inline">•</span>
            <span className="text-slate-200 hidden lg:inline">
              UDISE: <b className="text-[#FFE500]">{SCHOOL_INFO.udiseCode}</b>
            </span>
            <span className="text-white/40 hidden lg:inline">•</span>
            <span className="text-slate-200 hidden lg:inline">
              Reg No: <b className="text-white">{SCHOOL_INFO.registrationNo}</b>
            </span>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition border border-white/20"
            >
              <Video className="w-3.5 h-3.5 text-[#FFE500]" />
              <span>Campus Video Tour</span>
            </button>

            <a
              href="/live-assets/Admission_Form.pdf"
              download
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Admission Form</span>
            </a>
          </div>

        </div>
      </div>

      {/* Interactive Video Tour Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-4xl bg-slate-950 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-ping"></span>
                <span className="font-bold text-white text-sm">Lal Classes Concept School — Campus Video Tour</span>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative aspect-video bg-black">
              <video
                src="http://www.lalclasses.com/download/lccs_2026.mp4"
                poster="/live-assets/lalposter.PNG"
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
