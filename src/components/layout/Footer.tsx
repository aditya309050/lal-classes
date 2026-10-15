import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  ShieldCheck, 
  FileText, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { ActiveView } from '../../types';
import { SCHOOL_INFO } from '../../data/mockData';

export const Footer: React.FC = () => {
  const { setActiveView, setIsAdmissionModalOpen } = useApp();

  const handleNav = (view: ActiveView) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111827] text-slate-300 text-xs border-t-4 border-[#990000]">
      
      {/* Top Credentials Ribbon */}
      <div className="bg-[#0f172a] border-b border-slate-800 px-4 sm:px-8 lg:px-12 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-red-950 text-red-400 border border-red-800/60">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Govt. Affiliated</p>
              <p className="text-[11px] text-slate-400">Bihar Education Dept. (Class I-VIII)</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-amber-950 text-amber-400 border border-amber-800/60">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Official UDISE Code</p>
              <p className="text-[11px] text-slate-400">{SCHOOL_INFO.udiseCode}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-blue-950 text-blue-400 border border-blue-800/60">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Govt. Registration No.</p>
              <p className="text-[11px] text-slate-400">{SCHOOL_INFO.registrationNo}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/60">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Devi Lal Educational Trust</p>
              <p className="text-[11px] text-slate-400">Bihar Sharif (Nalanda)</p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="px-4 sm:px-8 lg:px-12 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Col 1: School Profile */}
        <div className="space-y-3.5">
          <div className="flex items-center space-x-2.5">
            <img 
              src="/live-assets/logo.png" 
              alt="Lal Classes Concept School" 
              className="h-10 w-10 object-contain rounded"
            />
            <div>
              <h4 className="text-sm font-black text-white font-['Outfit']">LAL CLASSES CONCEPT SCHOOL</h4>
              <p className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">A Centre of Results Makers</p>
            </div>
          </div>

          <p className="text-slate-400 text-xs leading-relaxed text-justify">
            Lal Classes Concept School is an initiative of young and innovative educationists who have a rich experience of competitive entrance exam preparation. Our aim is to make entrance exam a cakewalk for the students who are deprived of it. Constantly delivering premier selections for Sainik Schools, Rashtriya Military Schools (RMS), R.K. Mission, and Vanasthali.
          </p>

          <p className="text-[11px] text-slate-400">
            Running under: <b className="text-slate-200">"{SCHOOL_INFO.trust}"</b>
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-sm font-bold text-white mb-3 font-['Outfit'] border-b border-slate-700 pb-1.5 flex items-center justify-between">
            <span>Navigation Links</span>
            <span className="h-1.5 w-6 bg-[#990000] rounded"></span>
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-300">
            <li>
              <button onClick={() => handleNav('home')} className="hover:text-amber-400 transition flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-red-500" /> Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('about')} className="hover:text-amber-400 transition flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-red-500" /> About Us & Director's Message
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('courses')} className="hover:text-amber-400 transition flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-red-500" /> Courses (Sainik, RMS, CBSE)
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('admissions')} className="hover:text-amber-400 transition flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-red-500" /> Admission Notice 2026-27
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('results')} className="hover:text-amber-400 transition flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-red-500" /> Entrance Exam Result 2026
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('downloads')} className="hover:text-amber-400 transition flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-red-500" /> Syllabus & Forms Download
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('gallery')} className="hover:text-amber-400 transition flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-red-500" /> Cultural & Campus Gallery
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('complain')} className="hover:text-amber-400 transition flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-red-500" /> Online Grievance Redressal
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Key Programs */}
        <div>
          <h4 className="text-sm font-bold text-white mb-3 font-['Outfit'] border-b border-slate-700 pb-1.5 flex items-center justify-between">
            <span>Specialized Wings</span>
            <span className="h-1.5 w-6 bg-amber-500 rounded"></span>
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="p-2 rounded bg-slate-800/60 border border-slate-700/60">
              <b className="text-white">SAINIK SCHOOL PREP</b>
              <p className="text-[11px] text-slate-400">Class IV & V Special Target Group (AISSEE)</p>
            </li>
            <li className="p-2 rounded bg-slate-800/60 border border-slate-700/60">
              <b className="text-white">MILITARY SCHOOL (RMS)</b>
              <p className="text-[11px] text-slate-400">Chail, Ajmer, Belgaum, Bengaluru, Dholpur</p>
            </li>
            <li className="p-2 rounded bg-slate-800/60 border border-slate-700/60">
              <b className="text-white">R.K. MISSION FOUNDATION</b>
              <p className="text-[11px] text-slate-400">Deoghar, Purulia, Narendrapur batches</p>
            </li>
            <li className="p-2 rounded bg-slate-800/60 border border-slate-700/60">
              <b className="text-white">C.B.S.E (Class III - VIII)</b>
              <p className="text-[11px] text-slate-400">Full time day classes 07:00 AM - 02:30 PM</p>
            </li>
          </ul>
        </div>

        {/* Col 4: Campus Address & Contact */}
        <div>
          <h4 className="text-sm font-bold text-white mb-3 font-['Outfit'] border-b border-slate-700 pb-1.5 flex items-center justify-between">
            <span>Campus Location</span>
            <span className="h-1.5 w-6 bg-blue-500 rounded"></span>
          </h4>
          
          <div className="space-y-3 text-xs text-slate-300">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>
                {SCHOOL_INFO.address}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-amber-400 font-bold text-white">
                  {SCHOOL_INFO.phone}
                </a>
              </div>
            </div>

            {/* Receptionist WhatsApp Desk */}
            <div className="flex items-center gap-2.5 bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-800/60">
              <svg className="w-4 h-4 fill-current text-[#25D366] shrink-0" viewBox="0 0 24 24">
                <path d="M12.031 2C6.495 2 2 6.494 2 12.029c0 1.942.555 3.754 1.517 5.292L2 22l4.821-1.479a9.98 9.98 0 005.21 1.487h.004c5.534 0 10.029-4.495 10.029-10.03 0-2.678-1.042-5.198-2.936-7.091A9.97 9.97 0 0012.031 2zm0 18.256c-1.636 0-3.238-.439-4.633-1.272l-.332-.198-3.447 1.057 1.077-3.359-.217-.346a8.212 8.212 0 01-1.264-4.409c0-4.549 3.702-8.251 8.255-8.251 2.203 0 4.275.859 5.834 2.417a8.204 8.204 0 012.416 5.833c0 4.551-3.703 8.254-8.255 8.254zm4.529-6.182c-.248-.124-1.469-.725-1.696-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.186-.538.062-.248-.124-1.048-.387-1.996-1.233-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.016-.382.108-.506.112-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.35-.767-1.847-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.248-.871.851-.871 2.074 0 1.224.891 2.406 1.015 2.572.124.166 1.754 2.678 4.25 3.754.594.256 1.058.41 1.42.525.597.19 1.14.163 1.569.099.478-.072 1.469-.601 1.676-1.182.207-.581.207-1.078.145-1.182-.062-.104-.228-.166-.476-.29z" />
              </svg>
              <div>
                <span className="text-[10px] text-emerald-400 font-bold block uppercase tracking-wider">Reception Desk WhatsApp</span>
                <a 
                  href="https://wa.me/918969940709?text=Hello%20Lal%20Classes%20Reception%2C%20I%20have%20an%20inquiry%20regarding%20school%20admissions." 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-emerald-300 font-bold text-white text-xs flex items-center gap-1"
                >
                  +91 8969940709
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-blue-300 text-slate-300">
                {SCHOOL_INFO.email}
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setIsAdmissionModalOpen(true)}
                className="w-full py-2 bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-bold rounded shadow transition text-center"
              >
                Apply for Session 2026-27
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Ribbon */}
      <div className="bg-[#0a0f1d] border-t border-slate-800 px-4 sm:px-8 lg:px-12 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} <b className="text-slate-200">Lal Classes Concept School</b>. All rights reserved.
          </div>
          <div className="flex items-center space-x-3">
            <span>UDISE: {SCHOOL_INFO.udiseCode}</span>
            <span>•</span>
            <a href="http://www.lalclasses.com" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">
              Official Site: www.lalclasses.com
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};
