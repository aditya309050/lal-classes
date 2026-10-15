import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  BookOpen, 
  Clock, 
  Sun, 
  Award, 
  CheckCircle2, 
  Download, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Target
} from 'lucide-react';
import { COURSES_DATA, getReceptionistWhatsappUrl } from '../../data/mockData';

export const CoursesSection: React.FC = () => {
  const { setActiveView, setIsAdmissionModalOpen, openLightbox } = useApp();
  const [selectedCourse, setSelectedCourse] = useState(COURSES_DATA[3]); // Default to Sainik School

  return (
    <div id="courses-section" className="bg-slate-50 py-10 lg:py-14 scroll-mt-16">
      <div className="w-[94%] lg:w-[85%] mx-auto px-2 sm:px-4 lg:px-6 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 font-bold text-xs uppercase tracking-wider">
            Academic & Entrance Wings
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 font-['Outfit']">
            Courses & <span className="text-[#990000]">Foundations</span>
          </h1>
          <p className="text-sm text-slate-600">
            Intensive day schooling from 07:00 AM to 02:30 PM tailored for CBSE excellence and premier national school entrance examinations.
          </p>
        </div>

        {/* The Exact Table from Course.aspx */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 sm:p-5 bg-gradient-to-r from-[#990000] to-[#770000] text-white flex items-center justify-between">
            <h2 className="font-bold text-base sm:text-lg font-['Outfit'] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-300" />
              <span>Official Course Schedule & Timings Table</span>
            </h2>
            <span className="text-xs bg-white/20 px-2.5 py-1 rounded font-semibold">
              Daily Day Classes
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-xs font-black text-slate-700 uppercase">
                  <th className="py-3.5 px-4">Nr.</th>
                  <th className="py-3.5 px-4">Courses Name</th>
                  <th className="py-3.5 px-4">Courses Type</th>
                  <th className="py-3.5 px-4">Time</th>
                  <th className="py-3.5 px-4">Class</th>
                  <th className="py-3.5 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {COURSES_DATA.map((course) => (
                  <tr 
                    key={course.id}
                    className={`hover:bg-red-50/60 transition ${selectedCourse.id === course.id ? 'bg-red-50/80 font-semibold' : ''}`}
                  >
                    <td className="py-4 px-4 font-bold text-red-700">{course.nr}.</td>
                    <td className="py-4 px-4 font-black text-slate-900">
                      {course.name}
                    </td>
                    <td className="py-4 px-4 text-slate-700">
                      <span className="bg-slate-100 px-2 py-0.5 rounded font-bold text-xs text-slate-800">
                        {course.type}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-slate-700 flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{course.timing}</span>
                    </td>
                    <td className="py-4 px-4 text-slate-700">
                      <span className="bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded text-xs">
                        {course.classType}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={() => setSelectedCourse(course)}
                        className="px-3 py-1.5 rounded-lg bg-red-700 hover:bg-red-800 text-white font-bold text-xs transition"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Selected Course Spotlight Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-red-900/10 shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-red-700 uppercase bg-red-50 px-2.5 py-0.5 rounded">
                  Program Focus #{selectedCourse.nr}
                </span>
                <span className="text-xs font-bold text-emerald-700 uppercase bg-emerald-50 px-2.5 py-0.5 rounded">
                  {selectedCourse.type}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit'] mt-1">
                {selectedCourse.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Target: {selectedCourse.targetExam} • {selectedCourse.eligibility}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => setIsAdmissionModalOpen(true)}
                className="px-5 py-3 rounded-xl bg-[#990000] hover:bg-red-800 text-white font-bold text-xs shadow transition flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Apply for this Course</span>
              </button>
              <a
                href={getReceptionistWhatsappUrl(`Hello Reception, I want admission info and batch timings for: ${selectedCourse.name}`)}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow transition flex items-center gap-1.5 cursor-pointer"
                title="Chat with Receptionist on WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.495 2 2 6.494 2 12.029c0 1.942.555 3.754 1.517 5.292L2 22l4.821-1.479a9.98 9.98 0 005.21 1.487h.004c5.534 0 10.029-4.495 10.029-10.03 0-2.678-1.042-5.198-2.936-7.091A9.97 9.97 0 0012.031 2zm0 18.256c-1.636 0-3.238-.439-4.633-1.272l-.332-.198-3.447 1.057 1.077-3.359-.217-.346a8.212 8.212 0 01-1.264-4.409c0-4.549 3.702-8.251 8.255-8.251 2.203 0 4.275.859 5.834 2.417a8.204 8.204 0 012.416 5.833c0 4.551-3.703 8.254-8.255 8.254zm4.529-6.182c-.248-.124-1.469-.725-1.696-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.186-.538.062-.248-.124-1.048-.387-1.996-1.233-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.016-.382.108-.506.112-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.35-.767-1.847-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.248-.871.851-.871 2.074 0 1.224.891 2.406 1.015 2.572.124.166 1.754 2.678 4.25 3.754.594.256 1.058.41 1.42.525.597.19 1.14.163 1.569.099.478-.072 1.469-.601 1.676-1.182.207-.581.207-1.078.145-1.182-.062-.104-.228-.166-.476-.29z" />
                </svg>
                <span>WhatsApp Inquiry (8969940709)</span>
              </a>
              <button
                onClick={() => openLightbox('/live-assets/AdmissionNotice_2026.jpg', 'Admission Notification Notice 2026')}
                className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-300 transition cursor-pointer"
              >
                View Notice
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6">
            <div className="md:col-span-7 space-y-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Course Description & Pedagogy</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                  {selectedCourse.description}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">Key Highlights & Preparation Modules:</h4>
                <ul className="space-y-2">
                  {selectedCourse.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:col-span-5 bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-4">
              <h4 className="text-sm font-bold text-slate-900 font-['Outfit'] border-b border-slate-200 pb-2">
                Daily Batch Routine (07:00 AM - 02:30 PM)
              </h4>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-600">07:00 AM - 07:15 AM</span>
                  <span className="font-bold text-slate-800">Assembly & Daily Speed Math Drill</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-600">07:15 AM - 09:30 AM</span>
                  <span className="font-bold text-slate-800">Conceptual Mathematics Session</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-600">09:30 AM - 10:00 AM</span>
                  <span className="font-bold text-slate-800">Breakfast & Refreshment Break</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-600">10:00 AM - 12:00 PM</span>
                  <span className="font-bold text-slate-800">Reasoning & Intelligence Test Practice</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-600">12:00 PM - 01:30 PM</span>
                  <span className="font-bold text-slate-800">General Science / EVS & Language</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-semibold text-slate-600">01:30 PM - 02:30 PM</span>
                  <span className="font-bold text-slate-800">Doubt Clearing & OMR Test Series</span>
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-[11px] text-amber-900">
                💡 <b>Subject Experts:</b> Mentored by experienced faculty supervised directly by Principal Devendra Prasad (Devi Lal).
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
