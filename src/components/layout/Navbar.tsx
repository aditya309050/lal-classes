import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Phone, 
  Mail, 
  ChevronDown, 
  Menu, 
  X, 
  Download, 
  Sparkles, 
  CreditCard, 
  FileText, 
  UserCheck, 
  CheckCircle,
  ExternalLink,
  MessageSquare,
  Bell,
  Image as ImageIcon
} from 'lucide-react';
import { ActiveView } from '../../types';
import { SCHOOL_INFO } from '../../data/mockData';

export const Navbar: React.FC = () => {
  const { 
    activeView, 
    setActiveView, 
    setCurrentRole,
    setIsAdmissionModalOpen,
    openLightbox 
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadDropdownOpen, setDownloadDropdownOpen] = useState(false);

  const handleNav = (view: ActiveView) => {
    setActiveView(view);
    setMobileMenuOpen(false);
    setDownloadDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDownloadDoc = (url: string, title: string) => {
    openLightbox(url, title);
    setDownloadDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative z-20 w-full shadow-md">
      
      {/* TIER 1: Top Contact & Statutory Ribbon (Full Width) */}
      <div className="w-full bg-[#111827] text-slate-200 text-xs px-4 sm:px-8 lg:px-12 py-1.5 border-b border-slate-800">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2">
          
          {/* Statutory badges */}
          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <span className="bg-red-950/70 text-red-300 font-bold px-2 py-0.5 rounded border border-red-700/60 shadow-xs">
              Reg: {SCHOOL_INFO.registrationNo}
            </span>
            <span className="bg-amber-950/70 text-amber-300 font-bold px-2 py-0.5 rounded border border-amber-700/60 shadow-xs">
              UDISE: {SCHOOL_INFO.udiseCode}
            </span>
            <span className="text-slate-500 hidden xl:inline">|</span>
            <span className="text-slate-300 hidden xl:inline font-medium">
              Affiliated to Education Department of Bihar for Class I – VIII
            </span>
          </div>

          {/* Contact & Socials */}
          <div className="flex items-center space-x-4 text-[11px]">
            <a 
              href={`tel:${SCHOOL_INFO.phone}`} 
              className="hover:text-amber-400 transition flex items-center gap-1 font-semibold text-white"
            >
              <Phone className="w-3 h-3 text-red-400" /> {SCHOOL_INFO.phone}
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a 
              href={`mailto:${SCHOOL_INFO.email}`} 
              className="hover:text-amber-400 transition hidden sm:flex items-center gap-1 text-slate-300"
            >
              <Mail className="w-3 h-3 text-amber-400" /> {SCHOOL_INFO.email}
            </a>
            <span className="text-slate-600 hidden md:inline">|</span>
            <div className="flex items-center space-x-2.5">
              <a 
                href={SCHOOL_INFO.facebook} 
                target="_blank" 
                rel="noreferrer"
                className="hover:opacity-80 transition text-blue-400 font-bold hover:scale-110"
                title="Facebook"
              >
                FB
              </a>
              <a 
                href={SCHOOL_INFO.twitter} 
                target="_blank" 
                rel="noreferrer"
                className="hover:opacity-80 transition text-sky-400 font-bold hover:scale-110"
                title="Twitter"
              >
                TW
              </a>
              <a 
                href="https://wa.me/918969940709?text=Hello%20Lal%20Classes%20Reception%2C%20I%20have%20an%20inquiry%20regarding%20school%20admissions." 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 transition shadow-xs text-[10px]"
                title="WhatsApp Receptionist: 8969940709"
              >
                <span>WA: 8969940709</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* TIER 2: Main Branding Header (Full Width, White Background) */}
      <div className="w-full bg-white border-b border-slate-200 px-4 sm:px-8 lg:px-12 py-3">
        <div className="w-full flex items-center justify-between gap-4">
          
          {/* Logo & School Name */}
          <div 
            onClick={() => handleNav('home')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="relative">
              <img 
                src="/live-assets/logo1.jpg" 
                alt="Lal Classes Concept School" 
                className="h-12 sm:h-14 lg:h-16 object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <img 
                src="/live-assets/logo.png" 
                alt="Emblem" 
                className="h-10 w-10 object-contain sm:hidden"
              />
            </div>
            
            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="text-xl lg:text-2xl font-black text-[#990000] tracking-tight font-['Outfit'] group-hover:text-red-700 transition">
                  LAL CLASSES CONCEPT SCHOOL
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-bold text-amber-700 uppercase tracking-wide">
                A Centre of Results Makers......! IIT/PMT Foundation School
              </p>
              <p className="text-[10px] text-slate-500 font-medium">
                Under "Devi Lal Educational & Welfare Trust" • Bihar Sharif (Nalanda)
              </p>
            </div>
          </div>

          {/* Quick Action Buttons on Desktop */}
          <div className="hidden lg:flex items-center space-x-2.5">
            <button
              onClick={() => setIsAdmissionModalOpen(true)}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-bold text-xs shadow-sm transition active:scale-95 flex items-center gap-1.5 cursor-pointer hover:shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Apply Online 2026</span>
            </button>

            <button
              onClick={() => handleNav('results')}
              className="px-3.5 py-2 rounded-lg bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs shadow-sm transition flex items-center gap-1.5 cursor-pointer animate-pulse hover:animate-none hover:shadow-md"
            >
              <CheckCircle className="w-3.5 h-3.5 text-slate-950" />
              <span>Entrance Result 2026</span>
            </button>

            <button
              onClick={() => handleNav('quick-fee')}
              className="px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-300 transition flex items-center gap-1.5 cursor-pointer hover:shadow-xs"
            >
              <CreditCard className="w-3.5 h-3.5 text-red-700" />
              <span>Pay Fee</span>
            </button>

            <a
              href="https://wa.me/918969940709?text=Hello%20Reception%2C%20I%20have%20an%20inquiry%20regarding%20Lal%20Classes."
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-xs transition flex items-center gap-1.5 cursor-pointer hover:shadow-md"
              title="Chat with Receptionist (8969940709)"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 2C6.495 2 2 6.494 2 12.029c0 1.942.555 3.754 1.517 5.292L2 22l4.821-1.479a9.98 9.98 0 005.21 1.487h.004c5.534 0 10.029-4.495 10.029-10.03 0-2.678-1.042-5.198-2.936-7.091A9.97 9.97 0 0012.031 2zm0 18.256c-1.636 0-3.238-.439-4.633-1.272l-.332-.198-3.447 1.057 1.077-3.359-.217-.346a8.212 8.212 0 01-1.264-4.409c0-4.549 3.702-8.251 8.255-8.251 2.203 0 4.275.859 5.834 2.417a8.204 8.204 0 012.416 5.833c0 4.551-3.703 8.254-8.255 8.254zm4.529-6.182c-.248-.124-1.469-.725-1.696-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.186-.538.062-.248-.124-1.048-.387-1.996-1.233-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.016-.382.108-.506.112-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.35-.767-1.847-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.248-.871.851-.871 2.074 0 1.224.891 2.406 1.015 2.572.124.166 1.754 2.678 4.25 3.754.594.256 1.058.41 1.42.525.597.19 1.14.163 1.569.099.478-.072 1.469-.601 1.676-1.182.207-.581.207-1.078.145-1.182-.062-.104-.228-.166-.476-.29z" />
              </svg>
              <span>WhatsApp Reception</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsAdmissionModalOpen(true)}
              className="px-3 py-1.5 rounded-lg bg-red-700 hover:bg-red-800 text-white font-bold text-[11px] shadow-xs transition"
            >
              Apply Online
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* TIER 3: Main Navigation Bar Links (Full Width, Red Theme) */}
      <nav className="w-full bg-[#990000] text-white px-4 sm:px-8 lg:px-12 py-0 border-b border-red-950 shadow-md">
        <div className="w-full flex items-center justify-between">
          
          <ul className="hidden lg:flex items-center space-x-0 text-sm font-semibold">
            <li>
              <button
                onClick={() => handleNav('home')}
                className={`px-4 py-3 transition hover:bg-red-800 cursor-pointer ${activeView === 'home' ? 'bg-red-950 text-amber-300 font-bold' : ''}`}
              >
                Home
              </button>
            </li>

            <li>
              <button
                onClick={() => handleNav('about')}
                className={`px-4 py-3 transition hover:bg-red-800 cursor-pointer ${activeView === 'about' ? 'bg-red-950 text-amber-300 font-bold' : ''}`}
              >
                About Us
              </button>
            </li>

            <li>
              <button
                onClick={() => handleNav('courses')}
                className={`px-4 py-3 transition hover:bg-red-800 cursor-pointer ${activeView === 'courses' ? 'bg-red-950 text-amber-300 font-bold' : ''}`}
              >
                Courses
              </button>
            </li>

            <li>
              <button
                onClick={() => handleNav('admissions')}
                className={`px-4 py-3 transition hover:bg-red-800 relative cursor-pointer ${activeView === 'admissions' ? 'bg-red-950 text-amber-300 font-bold' : ''}`}
              >
                <span>Admission</span>
                <span className="ml-1.5 text-[10px] bg-amber-400 text-slate-900 font-black px-1.5 py-0.2 rounded-full uppercase">
                  2026-27
                </span>
              </button>
            </li>

            <li>
              <button
                onClick={() => handleNav('results')}
                className={`px-4 py-3 transition hover:bg-red-800 relative cursor-pointer ${activeView === 'results' ? 'bg-red-950 text-amber-300 font-bold' : ''}`}
              >
                <span>Result</span>
                <span className="ml-1.5 text-[9px] bg-white text-red-700 font-extrabold px-1.5 py-0.5 rounded uppercase">
                  New
                </span>
              </button>
            </li>

            {/* Downloads Dropdown (Auto drop down on cursor hover) */}
            <li 
              className="relative nav-dropdown-group"
              onMouseEnter={() => setDownloadDropdownOpen(true)}
              onMouseLeave={() => setDownloadDropdownOpen(false)}
            >
              <button
                onClick={() => {
                  handleNav('downloads');
                  setDownloadDropdownOpen(false);
                }}
                className={`px-4 py-3 transition hover:bg-red-800 flex items-center gap-1 cursor-pointer ${activeView === 'downloads' ? 'bg-red-950 text-amber-300' : ''}`}
                aria-expanded={downloadDropdownOpen}
                aria-haspopup="true"
              >
                <span>Download</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 nav-dropdown-chevron ${downloadDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu: auto drops down via CSS hover and state */}
              <div 
                className={`nav-dropdown-menu absolute left-0 top-full mt-0 w-72 bg-white text-slate-900 shadow-2xl rounded-b-xl border border-slate-200 py-2 z-50 ${
                  downloadDropdownOpen ? 'is-open' : ''
                }`}
                onMouseEnter={() => setDownloadDropdownOpen(true)}
                onMouseLeave={() => setDownloadDropdownOpen(false)}
              >
                  <a
                    href="/live-assets/Admission_Form.pdf"
                    download
                    className="flex items-center gap-2 px-4 py-2 text-xs font-semibold hover:bg-red-50 hover:text-red-700 transition"
                  >
                    <FileText className="w-4 h-4 text-red-600 shrink-0" />
                    <span>Admission Form 2026 (PDF)</span>
                  </a>

                  <button
                    onClick={() => handleOpenDownloadDoc('/live-assets/CLASS-III.jpg', 'Syllabus For Ent. Test Learner Class III')}
                    className="w-full text-left flex items-center gap-2 px-4 py-2 text-xs font-semibold hover:bg-red-50 hover:text-red-700 transition cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Syllabus For Ent. Test Learner Class III</span>
                  </button>

                  <button
                    onClick={() => handleOpenDownloadDoc('/live-assets/CLASS-IV.jpg', 'Syllabus For Ent. Test Junior Foundation Class IV')}
                    className="w-full text-left flex items-center gap-2 px-4 py-2 text-xs font-semibold hover:bg-red-50 hover:text-red-700 transition cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Syllabus For Ent. Test Junior Foundation Class IV</span>
                  </button>

                  <button
                    onClick={() => handleOpenDownloadDoc('/live-assets/CLASS-V.jpg', 'Syllabus For Ent. Test Target Class V')}
                    className="w-full text-left flex items-center gap-2 px-4 py-2 text-xs font-semibold hover:bg-red-50 hover:text-red-700 transition cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Syllabus For Ent. Test Target Class V</span>
                  </button>

                  <div className="border-t border-slate-100 my-1"></div>

                  <button
                    onClick={() => {
                      handleNav('downloads');
                      setDownloadDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs font-bold text-red-800 hover:bg-red-50 transition cursor-pointer"
                  >
                    View All Downloads & Materials →
                  </button>
                </div>
            </li>

            <li>
              <button
                onClick={() => handleNav('notices')}
                className={`px-4 py-3 transition hover:bg-red-800 cursor-pointer ${activeView === 'notices' ? 'bg-red-950 text-amber-300 font-bold' : ''}`}
              >
                Notice
              </button>
            </li>

            <li>
              <button
                onClick={() => handleNav('gallery')}
                className={`px-4 py-3 transition hover:bg-red-800 cursor-pointer ${activeView === 'gallery' ? 'bg-red-950 text-amber-300 font-bold' : ''}`}
              >
                Gallery
              </button>
            </li>

            <li>
              <button
                onClick={() => handleNav('complain')}
                className={`px-4 py-3 transition hover:bg-red-800 cursor-pointer ${activeView === 'complain' ? 'bg-red-950 text-amber-300 font-bold' : ''}`}
              >
                Complain
              </button>
            </li>

            <li>
              <button
                onClick={() => handleNav('contact')}
                className={`px-4 py-3 transition hover:bg-red-800 cursor-pointer ${activeView === 'contact' ? 'bg-red-950 text-amber-300 font-bold' : ''}`}
              >
                Contact Us
              </button>
            </li>
          </ul>

          {/* Right side Portal Link */}
          <div className="hidden lg:flex items-center space-x-2 text-xs py-2">
            <button
              onClick={() => {
                setCurrentRole('STUDENT');
                handleNav('student-portal');
              }}
              className="px-3.5 py-1.5 rounded-lg bg-red-950 hover:bg-black/50 text-amber-200 font-semibold border border-red-800/80 flex items-center gap-1.5 transition active:scale-95 cursor-pointer shadow-xs"
            >
              <UserCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Student / Parent Portal</span>
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#800000] text-white px-4 py-4 space-y-2 border-t border-red-800 animate-in fade-in">
            <button
              onClick={() => handleNav('home')}
              className="w-full text-left py-2 px-3 rounded hover:bg-red-900 font-semibold text-sm"
            >
              Home
            </button>
            <button
              onClick={() => handleNav('about')}
              className="w-full text-left py-2 px-3 rounded hover:bg-red-900 font-semibold text-sm"
            >
              About Us
            </button>
            <button
              onClick={() => handleNav('courses')}
              className="w-full text-left py-2 px-3 rounded hover:bg-red-900 font-semibold text-sm"
            >
              Courses (Sainik / Military / CBSE)
            </button>
            <button
              onClick={() => handleNav('admissions')}
              className="w-full text-left py-2 px-3 rounded hover:bg-red-900 font-semibold text-sm flex items-center justify-between"
            >
              <span>Admission (2026-27)</span>
              <span className="text-[10px] bg-amber-400 text-slate-900 px-2 py-0.5 rounded font-bold">Open</span>
            </button>
            <button
              onClick={() => handleNav('results')}
              className="w-full text-left py-2 px-3 rounded hover:bg-red-900 font-semibold text-sm flex items-center justify-between"
            >
              <span>Entrance Exam Result 2026</span>
              <span className="text-[10px] bg-white text-red-800 px-2 py-0.5 rounded font-bold">New</span>
            </button>
            <button
              onClick={() => handleNav('downloads')}
              className="w-full text-left py-2 px-3 rounded hover:bg-red-900 font-semibold text-sm"
            >
              Downloads (Syllabus & Forms)
            </button>
            <button
              onClick={() => handleNav('notices')}
              className="w-full text-left py-2 px-3 rounded hover:bg-red-900 font-semibold text-sm"
            >
              Notice Board
            </button>
            <button
              onClick={() => handleNav('gallery')}
              className="w-full text-left py-2 px-3 rounded hover:bg-red-900 font-semibold text-sm"
            >
              Photo Gallery
            </button>
            <button
              onClick={() => handleNav('complain')}
              className="w-full text-left py-2 px-3 rounded hover:bg-red-900 font-semibold text-sm"
            >
              Complain / Grievance Redressal
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="w-full text-left py-2 px-3 rounded hover:bg-red-900 font-semibold text-sm"
            >
              Contact Us
            </button>
            <div className="pt-2 border-t border-red-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setCurrentRole('STUDENT');
                  handleNav('student-portal');
                }}
                className="w-full py-2 bg-amber-400 text-slate-950 font-bold rounded text-xs text-center"
              >
                Student / Parent Login
              </button>
              <button
                onClick={() => handleNav('quick-fee')}
                className="w-full py-2 bg-white text-red-900 font-bold rounded text-xs text-center"
              >
                Online Fee Payment
              </button>
            </div>
          </div>
        )}

      </nav>

      {/* TIER 4: HOT ANNOUNCEMENT Ticker Ribbon (Full Width) */}
      <div className="w-full bg-gradient-to-r from-[#990000] via-[#800000] to-[#660000] text-white py-2.5 px-4 sm:px-8 lg:px-12 text-center shadow-inner border-t border-red-800/40">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-2 text-left">
            <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-black text-[11px] uppercase tracking-wider animate-pulse shrink-0">
              HOT ANNOUNCEMENT
            </span>
            <span className="text-xs sm:text-sm font-black tracking-wide font-['Outfit'] text-amber-200">
              {SCHOOL_INFO.tagline}
            </span>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <span className="text-slate-200">Reg: <b className="text-white">{SCHOOL_INFO.registrationNo}</b></span>
            <span className="text-amber-400">•</span>
            <span className="text-slate-200">UDISE: <b className="text-white">{SCHOOL_INFO.udiseCode}</b></span>
          </div>
        </div>
      </div>

    </header>
  );
};
