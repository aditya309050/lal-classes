import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  Printer, 
  Download, 
  CheckCircle, 
  ShieldCheck 
} from 'lucide-react';
import { SCHOOL_INFO } from '../../data/mockData';

export const ReceiptModal: React.FC = () => {
  const { latestReceipt, setLatestReceipt } = useApp();

  if (!latestReceipt) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        
        {/* Modal Top Bar (Hidden on print) */}
        <div className="no-print bg-slate-900 text-white px-6 py-3.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold text-sm">Payment Confirmed & Verified</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <a
              href={`https://wa.me/918969940709?text=${encodeURIComponent(
                `Hello Receptionist, here is my school fee payment confirmation:
Receipt No: ${latestReceipt.receiptNo}
Student: ${latestReceipt.studentName} (${latestReceipt.admissionNo})
Class: ${latestReceipt.grade}
Fee Head: ${latestReceipt.feeTitle}
Amount Paid: Rs. ${latestReceipt.amount.toLocaleString()}
Payment ID: ${latestReceipt.paymentId}
Date: ${latestReceipt.date}`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold shadow transition cursor-pointer"
              title="Share receipt with receptionist on WhatsApp"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 2C6.495 2 2 6.494 2 12.029c0 1.942.555 3.754 1.517 5.292L2 22l4.821-1.479a9.98 9.98 0 005.21 1.487h.004c5.534 0 10.029-4.495 10.029-10.03 0-2.678-1.042-5.198-2.936-7.091A9.97 9.97 0 0012.031 2zm0 18.256c-1.636 0-3.238-.439-4.633-1.272l-.332-.198-3.447 1.057 1.077-3.359-.217-.346a8.212 8.212 0 01-1.264-4.409c0-4.549 3.702-8.251 8.255-8.251 2.203 0 4.275.859 5.834 2.417a8.204 8.204 0 012.416 5.833c0 4.551-3.703 8.254-8.255 8.254zm4.529-6.182c-.248-.124-1.469-.725-1.696-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.186-.538.062-.248-.124-1.048-.387-1.996-1.233-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.016-.382.108-.506.112-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.35-.767-1.847-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.248-.871.851-.871 2.074 0 1.224.891 2.406 1.015 2.572.124.166 1.754 2.678 4.25 3.754.594.256 1.058.41 1.42.525.597.19 1.14.163 1.569.099.478-.072 1.469-.601 1.676-1.182.207-.581.207-1.078.145-1.182-.062-.104-.228-.166-.476-.29z" />
              </svg>
              <span>WhatsApp to Reception (8969940709)</span>
            </a>

            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-red-700 hover:bg-red-600 text-white text-xs font-semibold shadow transition cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Official Receipt</span>
            </button>
            <button
              onClick={() => setLatestReceipt(null)}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Official Printable Receipt Document */}
        <div className="receipt-container p-8 overflow-y-auto space-y-6 bg-white font-sans text-slate-800">
          
          {/* Header */}
          <div className="border-b-2 border-red-900 pb-5">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-4">
                <img 
                  src="/live-assets/logo.png" 
                  alt="Lal Classes Concept School" 
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h1 className="text-xl font-black text-[#990000] tracking-tight font-['Outfit']">
                    LAL CLASSES CONCEPT SCHOOL
                  </h1>
                  <p className="text-xs text-amber-800 font-bold">
                    A CENTRE OF RESULTS MAKERS......! IIT/PMT FOUNDATION SCHOOL
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Run by: {SCHOOL_INFO.trust} • Bihar Sharif (Nalanda)
                  </p>
                  <p className="text-[10px] text-slate-400">
                    Reg No: {SCHOOL_INFO.registrationNo} | UDISE Code: {SCHOOL_INFO.udiseCode}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="inline-block px-3 py-1 rounded bg-emerald-100 text-emerald-800 text-[11px] font-black uppercase tracking-wider border border-emerald-300">
                  ORIGINAL RECEIPT
                </span>
                <p className="text-xs font-mono font-bold text-slate-800 mt-2">
                  No: {latestReceipt.receiptNo}
                </p>
                <p className="text-[11px] text-slate-500">
                  Date: {latestReceipt.date}
                </p>
              </div>
            </div>
          </div>

          {/* Student & Invoice Meta Grid */}
          <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
            <div>
              <span className="text-slate-500 block">Student Name:</span>
              <span className="font-bold text-slate-900 text-sm">{latestReceipt.studentName}</span>
            </div>

            <div>
              <span className="text-slate-500 block">Admission Number:</span>
              <span className="font-mono font-bold text-slate-900">{latestReceipt.admissionNo}</span>
            </div>

            <div>
              <span className="text-slate-500 block">Class & Academic Batch:</span>
              <span className="font-semibold text-slate-800">{latestReceipt.grade}</span>
            </div>

            <div>
              <span className="text-slate-500 block">Payment Method:</span>
              <span className="font-semibold text-slate-800">{latestReceipt.paymentMethod} (Ref: {latestReceipt.paymentId})</span>
            </div>
          </div>

          {/* Fee Item Table */}
          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <table className="w-full text-xs">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 uppercase">
                <tr>
                  <th className="py-2.5 px-4 text-left">Fee Head / Description</th>
                  <th className="py-2.5 px-4 text-center">Academic Session</th>
                  <th className="py-2.5 px-4 text-right">Amount Paid</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                <tr>
                  <td className="py-3 px-4">
                    <b className="text-slate-900 block">{latestReceipt.feeTitle}</b>
                    <span className="text-[11px] text-slate-500">Includes Tuition, Study Materials, & Test Series</span>
                  </td>
                  <td className="py-3 px-4 text-center text-slate-600">Session 2026-27</td>
                  <td className="py-3 px-4 text-right font-bold text-slate-900">
                    ₹{latestReceipt.amount.toLocaleString('en-IN')}
                  </td>
                </tr>
              </tbody>
              <tfoot className="bg-red-50/50 font-bold border-t border-slate-200 text-xs text-slate-900">
                <tr>
                  <td colSpan={2} className="py-3 px-4 text-right uppercase">Total Amount Received:</td>
                  <td className="py-3 px-4 text-right text-base text-red-800 font-black">
                    ₹{latestReceipt.amount.toLocaleString('en-IN')}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Signatures & Seal */}
          <div className="pt-6 flex justify-between items-end border-t border-slate-200 text-xs">
            <div className="space-y-1">
              <p className="text-[11px] text-slate-500">
                Campus: Musadpur, Chhoti Pahari Road, Behind Sharm Kalyan Maidan, Bihar Sharif (Nalanda)
              </p>
              <p className="text-[11px] text-slate-500">
                Helpline: +91-9304222662 • lalclassesbs@gmail.com
              </p>
              <div className="flex items-center gap-1 text-emerald-700 font-semibold text-[11px] pt-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Computerized Verified Transaction • No Physical Signature Required</span>
              </div>
            </div>

            <div className="text-center space-y-1">
              <div className="w-32 border-b border-slate-400 pb-1 font-bold text-slate-800 text-[11px]">
                Accounts Department
              </div>
              <span className="text-[10px] text-slate-500 block">Lal Classes Concept School</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
