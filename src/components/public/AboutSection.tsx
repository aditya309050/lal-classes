import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Award, 
  ShieldCheck, 
  Target, 
  Eye, 
  BookOpen, 
  CheckCircle, 
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Users,
  Compass
} from 'lucide-react';
import { SCHOOL_INFO } from '../../data/mockData';

interface AboutSectionProps {
  isHome?: boolean;
}

export const AboutSection: React.FC = () => {
  const { setActiveView, setIsAdmissionModalOpen } = useApp();

  return (
    <div id="about-section" className="bg-slate-50 py-10 lg:py-14 scroll-mt-16">
      <div className="w-[94%] lg:w-[85%] mx-auto px-2 sm:px-4 lg:px-6 space-y-10">
        
        {/* Top Header Card with Real Campus Banner */}
        <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          <div className="relative h-48 sm:h-72 w-full bg-slate-900 overflow-hidden">
            <img 
              src="/live-assets/about-lalclasses-img.jpg" 
              alt="Lal Classes Concept School Banner"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/live-assets/lalclasses.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 sm:p-8">
              <div>
                <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider">
                  INSTITUTIONAL PROFILE
                </span>
                <h1 className="text-2xl sm:text-4xl font-black text-white font-['Outfit'] mt-2">
                  About Lal Classes Concept School
                </h1>
                <p className="text-sm text-amber-200 font-semibold mt-1">
                  A Centre of Results Makers......! IIT/PMT Foundation School • Bihar Sharif (Nalanda)
                </p>
              </div>
            </div>
          </div>

          {/* Statutory Credentials Banner */}
          <div className="p-4 sm:p-6 bg-gradient-to-r from-red-50 to-amber-50 border-t border-slate-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <div>
                <span className="text-xs font-bold text-red-800 uppercase tracking-wider">
                  State Recognition & Affiliation
                </span>
                <h3 className="text-base sm:text-lg font-black text-slate-900 font-['Outfit']">
                  Affiliated to Education Department of Bihar for Class I – VIII
                </h3>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
                <div className="bg-white px-3 py-1.5 rounded-lg border border-red-200 shadow-2xs font-semibold text-slate-800">
                  Registration No: <b className="text-red-700">{SCHOOL_INFO.registrationNo}</b>
                </div>
                <div className="bg-white px-3 py-1.5 rounded-lg border border-amber-200 shadow-2xs font-semibold text-slate-800">
                  UDISE Code: <b className="text-amber-800">{SCHOOL_INFO.udiseCode}</b>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message from Principal & Director Devendra Prasad (Devi Lal) */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Director Photo */}
            <div className="md:col-span-4 text-center space-y-3">
              <div className="relative inline-block">
                <img 
                  src="/live-assets/dir-photo.png" 
                  alt="Devendra Prasad (Devi Lal)" 
                  className="w-48 sm:w-56 h-64 object-cover object-top rounded-2xl mx-auto shadow-md border-4 border-red-900/10"
                />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#990000] text-white text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow">
                  Director & Principal
                </div>
              </div>
              <div className="pt-2">
                <h3 className="text-lg font-black text-slate-900 font-['Outfit']">
                  Devendra Prasad (Devi Lal)
                </h3>
                <p className="text-xs font-bold text-amber-800">
                  Principal & Director, Lal Classes
                </p>
                <p className="text-[11px] text-slate-500">
                  Founder, Devi Lal Educational & Welfare Trust
                </p>
              </div>
            </div>

            {/* Message Text */}
            <div className="md:col-span-8 space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold text-red-700 uppercase tracking-widest">
                  Leadership Desk
                </span>
                <h2 className="text-2xl font-black text-slate-900 font-['Outfit'] mt-1">
                  Message from the Principal & Director
                </h2>
              </div>

              <div className="text-sm text-slate-700 leading-relaxed space-y-3 text-justify">
                <p className="font-semibold text-slate-900">
                  Dear Parents and Prospective students,
                </p>
                <p>
                  Welcome you all in this educational establishment, where each and every child gets ample space for his/her intellectual and psychological development. It was my dream from the inception of this school that children get a compact guideline and proper monitoring to nurture their intrinsic qualities and give them a suitable platform to develop in right direction.
                </p>
                <p>
                  We strive hard to setup all the facilities and provisions to make them better. Children here get all around development to crack various eminent national level Institution entrance tests (Sainik Schools, Rashtriya Military Schools, Ramakrishna Mission, Vanasthali Vidyapith, and Birla Vidyamandir).
                </p>
                <p>
                  Our focus is not only preparing them for such competitions but in the broad prospective make them quiet bold to take the next level of education easily. I want each student to make a commitment to be an active participant in learning and acting responsibly within our learning community.
                </p>
                <p className="italic text-slate-600 font-medium">
                  "Through our compact guideline we always encourage our students to move on higher platforms of more excellence. Lal Classes Concept School in real sense believes in giving the best."
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Our Vision */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#FDECEB] flex items-center justify-center text-[#990000] border border-red-100/60 shadow-2xs">
                <Eye className="w-6 h-6 stroke-[2.2]" />
              </div>
              
              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit'] mt-6 mb-3 group-hover:text-red-900 transition-colors">
                Our Vision
              </h3>
              
              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                Building a learning environment where every child can grow, achieve and excel.
              </p>
            </div>

            {/* Bottom Action Link */}
            <div className="pt-6 mt-4">
              <button
                onClick={() => {
                  setActiveView('admissions');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#990000] hover:text-red-800 transition-colors cursor-pointer group/link"
              >
                <span>Our future</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Our Mission */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#FEF6E0] flex items-center justify-center text-[#92400e] border border-amber-200/60 shadow-2xs">
                <Target className="w-6 h-6 stroke-[2.2]" />
              </div>
              
              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit'] mt-6 mb-3 group-hover:text-amber-900 transition-colors">
                Our Mission
              </h3>
              
              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                Developing confident, responsible students with strong concepts and critical-thinking skills.
              </p>
            </div>

            {/* Bottom Action Link */}
            <div className="pt-6 mt-4">
              <button
                onClick={() => {
                  setActiveView('courses');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#92400e] hover:text-amber-800 transition-colors cursor-pointer group/link"
              >
                <span>Our purpose</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Unique Pedagogy & Methodology */}
        <div className="bg-gradient-to-br from-[#990000] to-[#660000] rounded-2xl p-6 sm:p-10 text-white shadow-xl">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 rounded-full bg-white/20 text-amber-300 font-bold text-xs uppercase">
                The Lal Classes Advantage
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-['Outfit']">
                Innovative Teaching Methodology & Conceptual Shortcut Tricks
              </h3>
              <p className="text-xs sm:text-sm text-amber-100">
                Why students at Lal Classes consistently crack Sainik School, Military School, and R.K. Mission entrance tests:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
              
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                <BookOpen className="w-5 h-5 text-amber-300 mb-2" />
                <h4 className="font-bold text-sm">Conceptual Shortcut Tricks</h4>
                <p className="text-xs text-slate-200 mt-1">
                  Lucid methods that enable scholars to solve maximum questions in minimum possible time with zero confusion.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                <Users className="w-5 h-5 text-amber-300 mb-2" />
                <h4 className="font-bold text-sm">Dedicated Subject Experts</h4>
                <p className="text-xs text-slate-200 mt-1">
                  Each student of our institution is handled directly by experienced mentors specializing in Arithmetic, Reasoning, EVS, and Languages.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                <Award className="w-5 h-5 text-amber-300 mb-2" />
                <h4 className="font-bold text-sm">Concept Building Sessions</h4>
                <p className="text-xs text-slate-200 mt-1">
                  All doubts are cleared actively during daily concept building sessions before introducing advanced problem sets.
                </p>
              </div>

            </div>

            <div className="pt-4 text-center flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setIsAdmissionModalOpen(true)}
                className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow transition"
              >
                Enroll in Session 2026-27 Batches
              </button>
              <button
                onClick={() => setActiveView('courses')}
                className="px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs border border-white/30 transition"
              >
                Explore Courses & Batch Timings
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
