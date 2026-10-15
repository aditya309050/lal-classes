import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Download, 
  Printer, 
  FileText,
  User,
  Calendar,
  Phone
} from 'lucide-react';
import { SCHOOL_INFO } from '../../data/mockData';

export const AdmissionFormModal: React.FC = () => {
  const { isAdmissionModalOpen, setIsAdmissionModalOpen, submitAdmission } = useApp();
  
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    gender: 'Male',
    gradeApplying: 'Class V (Target Batch)',
    targetCourse: 'SAINIK SCHOOL Entrance Preparation',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    previousSchool: '',
    address: ''
  });

  const [generatedApp, setGeneratedApp] = useState<{ applicationId: string; studentName: string } | null>(null);

  if (!isAdmissionModalOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleNext = () => {
    if (step === 1 && (!formData.studentName || !formData.dob || !formData.parentName)) {
      alert('Please fill in candidate name, date of birth, and parent name.');
      return;
    }
    if (step === 2 && (!formData.parentPhone || !formData.address)) {
      alert('Please fill in parent phone number and residential address.');
      return;
    }
    setStep(prev => prev + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const app = submitAdmission(formData);
    setGeneratedApp({ applicationId: app.applicationId, studentName: app.studentName });
  };

  const handleClose = () => {
    setIsAdmissionModalOpen(false);
    setGeneratedApp(null);
    setStep(1);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#990000] to-[#770000] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="p-2 rounded-xl bg-white/10 text-amber-300">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-black text-lg sm:text-xl font-['Outfit']">
                Online Admission Registration (Session 2026-27)
              </h3>
              <p className="text-xs text-amber-200">
                Lal Classes Concept School • Bihar Sharif (Nalanda)
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1">
          
          {generatedApp ? (
            /* Submission Success & Registration Slip */
            <div className="space-y-6 text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase">
                  Application Registered Successfully
                </span>
                <h4 className="text-2xl font-black text-slate-900 font-['Outfit'] mt-2">
                  Welcome, {generatedApp.studentName}!
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Your admission registration has been recorded at our administrative office.
                </p>
              </div>

              {/* Printable Slip Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border-2 border-dashed border-red-200 text-left space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Application Slip No:</span>
                  <b className="text-red-700 text-sm">{generatedApp.applicationId}</b>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Candidate Name:</span>
                  <b className="text-slate-800">{formData.studentName}</b>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Applied Grade & Batch:</span>
                  <b className="text-slate-800">{formData.gradeApplying}</b>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Preparation:</span>
                  <b className="text-slate-800">{formData.targetCourse}</b>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Test Performance Date:</span>
                  <b className="text-red-700">8th February 2026 (09:30 AM)</b>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Venue:</span>
                  <b className="text-slate-800">Campus Complex, Musadpur, Bihar Sharif</b>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => window.print()}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center gap-1.5 transition"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Slip</span>
                </button>

                <a
                  href={`https://wa.me/918969940709?text=${encodeURIComponent(
                    `Hello Receptionist, I have submitted an online admission registration:
Application ID: ${generatedApp.applicationId}
Student: ${generatedApp.studentName}
Grade: ${formData.gradeApplying}
Course: ${formData.targetCourse}
Parent: ${formData.parentName} (${formData.parentPhone})`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-sm"
                  title="Forward application to receptionist on WhatsApp"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 2C6.495 2 2 6.494 2 12.029c0 1.942.555 3.754 1.517 5.292L2 22l4.821-1.479a9.98 9.98 0 005.21 1.487h.004c5.534 0 10.029-4.495 10.029-10.03 0-2.678-1.042-5.198-2.936-7.091A9.97 9.97 0 0012.031 2zm0 18.256c-1.636 0-3.238-.439-4.633-1.272l-.332-.198-3.447 1.057 1.077-3.359-.217-.346a8.212 8.212 0 01-1.264-4.409c0-4.549 3.702-8.251 8.255-8.251 2.203 0 4.275.859 5.834 2.417a8.204 8.204 0 012.416 5.833c0 4.551-3.703 8.254-8.255 8.254zm4.529-6.182c-.248-.124-1.469-.725-1.696-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.186-.538.062-.248-.124-1.048-.387-1.996-1.233-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.016-.382.108-.506.112-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.35-.767-1.847-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.248-.871.851-.871 2.074 0 1.224.891 2.406 1.015 2.572.124.166 1.754 2.678 4.25 3.754.594.256 1.058.41 1.42.525.597.19 1.14.163 1.569.099.478-.072 1.469-.601 1.676-1.182.207-.581.207-1.078.145-1.182-.062-.104-.228-.166-.476-.29z" />
                  </svg>
                  <span>WhatsApp Slip to Reception (8969940709)</span>
                </a>

                <a
                  href="/live-assets/Admission_Form.pdf"
                  download
                  className="px-5 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold text-xs flex items-center gap-1.5 transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Official PDF Form</span>
                </a>

                <button
                  onClick={handleClose}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Multi-step Form Wizard */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Stepper Indicator */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 text-xs font-bold">
                <span className={step >= 1 ? 'text-red-700' : 'text-slate-400'}>
                  1. Candidate Profile
                </span>
                <span className="text-slate-300">→</span>
                <span className={step >= 2 ? 'text-red-700' : 'text-slate-400'}>
                  2. Parent & Contact
                </span>
                <span className="text-slate-300">→</span>
                <span className={step >= 3 ? 'text-red-700' : 'text-slate-400'}>
                  3. Course & Review
                </span>
              </div>

              {/* STEP 1: Student Details */}
              {step === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <h4 className="text-sm font-bold text-slate-900">Step 1: Student Information</h4>
                  
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      required
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="e.g. Adarsh Raj"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-red-600 bg-slate-50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        name="dob"
                        required
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-red-600 bg-slate-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Gender *
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-red-600 bg-slate-50"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Father's / Guardian's Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="e.g. Sunil Kumar"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-red-600 bg-slate-50"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: Parent & Address */}
              {step === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <h4 className="text-sm font-bold text-slate-900">Step 2: Parent Contact & Residence</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Parent Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="parentPhone"
                        required
                        value={formData.parentPhone}
                        onChange={handleChange}
                        placeholder="e.g. 9304222662"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-red-600 bg-slate-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="parentEmail"
                        value={formData.parentEmail}
                        onChange={handleChange}
                        placeholder="e.g. parent@gmail.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-red-600 bg-slate-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Current School & Class
                    </label>
                    <input
                      type="text"
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleChange}
                      placeholder="e.g. St. Joseph, Bihar Sharif"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-red-600 bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Permanent Residential Address *
                    </label>
                    <textarea
                      name="address"
                      required
                      rows={2}
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="e.g. Musadpur, Chhoti Pahari, Bihar Sharif, Nalanda"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-red-600 bg-slate-50"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: Course Selection */}
              {step === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <h4 className="text-sm font-bold text-slate-900">Step 3: Target Class & Examination Program</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Class Applying For: *
                      </label>
                      <select
                        name="gradeApplying"
                        value={formData.gradeApplying}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-red-600 bg-slate-50 font-semibold"
                      >
                        <option value="Class III (Learner Batch)">Class III (Learner Batch)</option>
                        <option value="Class IV (Junior Foundation)">Class IV (Junior Foundation)</option>
                        <option value="Class V (Target Batch)">Class V (Target Batch)</option>
                        <option value="Class VI (CBSE & Foundation)">Class VI (CBSE & Foundation)</option>
                        <option value="Class VII (CBSE & Foundation)">Class VII (CBSE & Foundation)</option>
                        <option value="Class VIII (CBSE & Foundation)">Class VIII (CBSE & Foundation)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Target Preparation Course: *
                      </label>
                      <select
                        name="targetCourse"
                        value={formData.targetCourse}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-red-600 bg-slate-50 font-semibold"
                      >
                        <option value="SAINIK SCHOOL Entrance Preparation">SAINIK SCHOOL Entrance Preparation</option>
                        <option value="MILITARY SCHOOL (RMS) Entrance">MILITARY SCHOOL (RMS) Entrance</option>
                        <option value="R.K. MISSION Entrance Preparation">R.K. MISSION Entrance Preparation</option>
                        <option value="C.B.S.E Day Schooling (07:00 AM - 02:30 PM)">C.B.S.E Day Schooling (07:00 AM - 02:30 PM)</option>
                        <option value="VANASTHALI / Prestigious Schools">VANASTHALI / Prestigious Schools</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                    <p className="font-bold">Important Notice for Entrance Test:</p>
                    <p>• Entrance Test Date: <b>8th February 2026</b> at School Campus, Bihar Sharif</p>
                    <p>• Syllabus: Mathematics, Mental Ability, Science/EVS, English/Hindi</p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                ) : <div></div>}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold text-xs flex items-center gap-1.5 shadow"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-7 py-3 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-bold text-xs flex items-center gap-2 shadow-md"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Submit Application & Generate Slip</span>
                  </button>
                )}
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
