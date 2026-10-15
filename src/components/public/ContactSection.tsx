import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Send, 
  CheckCircle2, 
  MessageCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { SCHOOL_INFO, getReceptionistWhatsappUrl } from '../../data/mockData';

export const ContactSection: React.FC = () => {
  const { showToast } = useApp();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    showToast('Your message has been sent to Lal Classes Administration!');
    setTimeout(() => {
      setIsSent(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 4000);
  };

  const handleSendViaWhatsapp = () => {
    const text = `Hello Receptionist (Lal Classes),
My Name: ${formData.fullName || 'Parent/Student'}
Phone: ${formData.phone || 'N/A'}
Email: ${formData.email || 'N/A'}
Subject: ${formData.subject || 'General Inquiry'}
Message: ${formData.message || 'I want more information about Lal Classes Concept School.'}`;
    window.open(getReceptionistWhatsappUrl(text), '_blank');
  };

  return (
    <div className="bg-slate-50 py-10 lg:py-14">
      <div className="w-[94%] lg:w-[85%] mx-auto px-2 sm:px-4 lg:px-6 space-y-10">
        
        {/* Header matching Contact.aspx */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 font-bold text-xs uppercase tracking-wider">
            Campus Communication Desk
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 font-['Outfit']">
            Contact <span className="text-[#990000]">Us</span>
          </h1>
          <p className="text-sm text-slate-600">
            Reach out to Lal Classes Concept School administrative office in Bihar Sharif for admission inquiries, batch timings, and guidance.
          </p>
        </div>

        {/* Main Grid: Left Information & Map, Right Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Authentic Information from Contact.aspx */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
              <h2 className="text-xl font-black text-slate-900 font-['Outfit'] border-b border-slate-200 pb-3">
                Official Information
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-red-100 text-red-800 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-bold uppercase block">Phone / Helpline</span>
                    <a href={`tel:${SCHOOL_INFO.phone}`} className="font-bold text-slate-900 hover:text-red-700 text-base">
                      {SCHOOL_INFO.phone}
                    </a>
                    <p className="text-[11px] text-slate-500">Available: Mon - Sat (07:00 AM - 04:00 PM)</p>
                  </div>
                </div>

                {/* Receptionist Desk */}
                <div className="flex items-start gap-3.5 bg-emerald-50/60 p-3 rounded-xl border border-emerald-200">
                  <div className="p-2.5 rounded-xl bg-[#25D366] text-white shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-800 font-bold uppercase block">Receptionist WhatsApp Desk</span>
                    <a href={getReceptionistWhatsappUrl()} target="_blank" rel="noreferrer" className="font-black text-emerald-950 hover:text-emerald-700 text-base">
                      +91 8969940709
                    </a>
                    <p className="text-[11px] text-emerald-700 font-medium">Quick WhatsApp Replies • Daily Support</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-bold uppercase block">Campus Address</span>
                    <p className="font-semibold text-slate-800 leading-relaxed">
                      {SCHOOL_INFO.address}
                    </p>
                    <p className="text-[11px] text-slate-500">Near Sharm Kalyan Maidan, Nalanda District</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-100 text-blue-800 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-bold uppercase block">Email Addresses</span>
                    <a href={`mailto:${SCHOOL_INFO.email}`} className="font-semibold text-blue-700 block hover:underline">
                      {SCHOOL_INFO.email}
                    </a>
                    <a href={`mailto:${SCHOOL_INFO.officialEmail}`} className="text-xs text-slate-600 hover:underline">
                      {SCHOOL_INFO.officialEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-bold uppercase block">Public Relations & Website</span>
                    <a href={SCHOOL_INFO.website} target="_blank" rel="noreferrer" className="font-semibold text-emerald-700 hover:underline">
                      www.lalclasses.com
                    </a>
                    <p className="text-[11px] text-slate-500">Official Web Portal</p>
                  </div>
                </div>

              </div>

              {/* Instant WhatsApp Action Button to Receptionist */}
              <div className="pt-2">
                <a
                  href={getReceptionistWhatsappUrl('Hello Receptionist (Lal Classes), I would like to inquire about admissions, courses and school timings.')}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat with Receptionist on WhatsApp (8969940709)</span>
                </a>
              </div>
            </div>

            {/* Google Maps Location Preview */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <div className="p-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700">
                <span>Campus Location Map</span>
                <span>Bihar Sharif (Nalanda)</span>
              </div>
              <div className="h-56 w-full bg-slate-200 relative">
                <iframe
                  title="Lal Classes Concept School Map"
                  src="https://maps.google.com/maps?q=Bihar%20Sharif%20Chhoti%20Pahari&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form matching Contact.aspx */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <span className="text-xs font-bold text-red-700 uppercase tracking-widest">
                Direct Inquiry
              </span>
              <h2 className="text-2xl font-black text-slate-900 font-['Outfit'] mt-1">
                Send Us a Message
              </h2>
              <p className="text-xs text-slate-500">
                Have a question regarding Sainik School, Military School prep, or CBSE enrollment? Fill out the form below.
              </p>
            </div>

            {isSent ? (
              <div className="p-8 text-center rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3 animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-black text-slate-900 font-['Outfit']">Thank You!</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Your message has reached our Bihar Sharif administrative office. We will call you back shortly on your provided phone number.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name: *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Sunil Kumar"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number: *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9304222662"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 bg-slate-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      E-mail address:
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. parent@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Subject: *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Admission for Class V Target batch"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 bg-slate-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your message: *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your query or message here..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 bg-slate-50"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsapp}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                    title="Send query directly to Receptionist 8969940709 on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp to Reception (8969940709)</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
