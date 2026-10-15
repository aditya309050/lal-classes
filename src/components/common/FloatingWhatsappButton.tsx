import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, PhoneCall, CheckCircle } from 'lucide-react';
import { SCHOOL_INFO, getReceptionistWhatsappUrl } from '../../data/mockData';

export const FloatingWhatsappButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickTopics = [
    { label: 'Admission 2026-27 Enquiry', msg: 'Hello Reception, I want to inquire about Admission for Session 2026-27 at Lal Classes Concept School.' },
    { label: 'Sainik / RMS Entrance Batch', msg: 'Hello Reception, please share details and timings for the Sainik School / Military School entrance course.' },
    { label: 'Fee Structure & Payment', msg: 'Hello Reception, I need information regarding school fee payment and admission charges.' },
    { label: 'Hostel & Transport Facility', msg: 'Hello Reception, please share information about hostel facilities and bus routes.' }
  ];

  const handleOpenWhatsapp = (msg?: string) => {
    const textToSend = msg || customMsg || 'Hello Reception, I have an inquiry about Lal Classes Concept School.';
    window.open(getReceptionistWhatsappUrl(textToSend), '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end select-none">
      
      {/* Quick Chat Popup Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Card Header (WhatsApp Green Theme) */}
          <div className="bg-[#075E54] text-white p-4 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3.5 right-3.5 p-1 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-emerald-50 border-2 border-emerald-300 flex items-center justify-center text-emerald-800 font-black shadow-md overflow-hidden">
                  <img 
                    src="/live-assets/logo.png" 
                    alt="Lal Classes" 
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <span className="text-sm font-black">LC</span>
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full"></span>
              </div>

              <div>
                <h4 className="font-bold text-sm text-white font-['Outfit'] flex items-center gap-1.5">
                  <span>School Reception Desk</span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-300" />
                </h4>
                <p className="text-[11px] text-emerald-100 font-medium">
                  Lal Classes Concept School
                </p>
                <p className="text-[11px] text-amber-200 font-bold">
                  WhatsApp: +91 8969940709
                </p>
              </div>
            </div>

            <p className="text-[11px] text-emerald-100/90 mt-2 bg-emerald-900/40 px-2.5 py-1 rounded">
              ⚡ Typically replies in minutes • 07:00 AM - 08:00 PM
            </p>
          </div>

          {/* Quick Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <p className="text-xs font-semibold text-slate-700">
              Select an inquiry topic or type below to connect with our Receptionist:
            </p>

            <div className="space-y-1.5">
              {quickTopics.map((topic, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOpenWhatsapp(topic.msg)}
                  className="w-full text-left px-3 py-2 rounded-xl bg-white hover:bg-emerald-50 hover:border-emerald-300 border border-slate-200 text-xs font-medium text-slate-800 hover:text-emerald-900 transition flex items-center justify-between group shadow-2xs cursor-pointer"
                >
                  <span className="line-clamp-1">{topic.label}</span>
                  <Send className="w-3 h-3 text-slate-400 group-hover:text-emerald-600 shrink-0 ml-2" />
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="pt-2">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type your question..."
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleOpenWhatsapp();
                  }}
                  className="flex-1 bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
                <button
                  onClick={() => handleOpenWhatsapp()}
                  className="px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-md transition flex items-center gap-1 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Footer Ribbon */}
          <div className="px-4 py-2 bg-slate-100 border-t border-slate-200 text-center">
            <span className="text-[10px] text-slate-500 font-medium">
              Direct Reception Number: <b className="text-slate-800">+91 8969940709</b>
            </span>
          </div>

        </div>
      )}

      {/* Floating Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border-2 border-white"
        aria-label="Chat on WhatsApp with Receptionist"
        title="Chat with Receptionist (+91 8969940709)"
      >
        {/* Pulsing ping badge */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white"></span>
        </span>

        {/* WhatsApp Icon */}
        <svg 
          className="w-6 h-6 fill-current text-white shrink-0" 
          viewBox="0 0 24 24"
        >
          <path d="M12.031 2C6.495 2 2 6.494 2 12.029c0 1.942.555 3.754 1.517 5.292L2 22l4.821-1.479a9.98 9.98 0 005.21 1.487h.004c5.534 0 10.029-4.495 10.029-10.03 0-2.678-1.042-5.198-2.936-7.091A9.97 9.97 0 0012.031 2zm0 18.256c-1.636 0-3.238-.439-4.633-1.272l-.332-.198-3.447 1.057 1.077-3.359-.217-.346a8.212 8.212 0 01-1.264-4.409c0-4.549 3.702-8.251 8.255-8.251 2.203 0 4.275.859 5.834 2.417a8.204 8.204 0 012.416 5.833c0 4.551-3.703 8.254-8.255 8.254zm4.529-6.182c-.248-.124-1.469-.725-1.696-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.186-.538.062-.248-.124-1.048-.387-1.996-1.233-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.016-.382.108-.506.112-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.35-.767-1.847-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.248-.871.851-.871 2.074 0 1.224.891 2.406 1.015 2.572.124.166 1.754 2.678 4.25 3.754.594.256 1.058.41 1.42.525.597.19 1.14.163 1.569.099.478-.072 1.469-.601 1.676-1.182.207-.581.207-1.078.145-1.182-.062-.104-.228-.166-.476-.29z" />
        </svg>

        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase font-black tracking-wider text-emerald-100 leading-none">
            Reception Desk
          </span>
          <span className="text-xs font-black tracking-tight leading-none mt-0.5">
            WhatsApp Help
          </span>
        </div>
      </button>

    </div>
  );
};
