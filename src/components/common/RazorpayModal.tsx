import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  ShieldCheck, 
  QrCode, 
  CreditCard, 
  Building2, 
  Smartphone, 
  Lock, 
  Loader2 
} from 'lucide-react';

export const RazorpayModal: React.FC = () => {
  const { 
    selectedFeeForPay, 
    setSelectedFeeForPay, 
    isPaymentModalOpen, 
    setIsPaymentModalOpen, 
    initiatePayment 
  } = useApp();

  const [paymentTab, setPaymentTab] = useState<'upi' | 'card' | 'netbanking' | 'wallet'>('upi');
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8921');
  const [cardExpiry, setCardExpiry] = useState('08/28');
  const [cardCvv, setCardCvv] = useState('•••');
  const [cardName, setCardName] = useState('VIKRAM SHARMA');
  const [selectedBank, setSelectedBank] = useState('HDFC Bank');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState<string>('');

  if (!isPaymentModalOpen || !selectedFeeForPay) return null;

  const handlePay = async () => {
    setIsProcessing(true);
    setProcessingStep('Connecting to Razorpay Gateway...');
    
    setTimeout(() => {
      setProcessingStep('Authorizing transaction with bank...');
    }, 500);

    setTimeout(() => {
      setProcessingStep('Verifying backend webhook signature & generating GST invoice...');
    }, 1000);

    try {
      const methodLabel = paymentTab === 'upi' ? 'UPI' : paymentTab === 'card' ? 'Credit Card' : paymentTab === 'netbanking' ? 'Net Banking' : 'Wallet';
      await initiatePayment(selectedFeeForPay, methodLabel);
      setIsProcessing(false);
      setIsPaymentModalOpen(false);
      setSelectedFeeForPay(null);
    } catch (err) {
      setIsProcessing(false);
    }
  };

  const banks = [
    { name: 'HDFC Bank', code: 'HDFC' },
    { name: 'State Bank of India', code: 'SBI' },
    { name: 'ICICI Bank', code: 'ICICI' },
    { name: 'Axis Bank', code: 'AXIS' },
    { name: 'Kotak Mahindra', code: 'KOTAK' },
    { name: 'Punjab National Bank', code: 'PNB' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden text-slate-900 flex flex-col max-h-[92vh]">
        
        {/* Razorpay Brand Header */}
        <div className="bg-[#0c2340] px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 p-1 flex items-center justify-center shadow-xs">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold tracking-tight text-white font-['Outfit'] text-base">Razorpay</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-400/30 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Verified Merchant
                </span>
              </div>
              <p className="text-xs text-slate-300">LAL Academy Educational Trust</p>
            </div>
          </div>
          
          <button 
            disabled={isProcessing}
            onClick={() => setIsPaymentModalOpen(false)}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Order Summary Ribbon */}
        <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-slate-500 font-medium">Payment For:</span>
            <p className="text-sm font-bold text-slate-900">{selectedFeeForPay.title}</p>
            <span className="text-xs text-slate-600">{selectedFeeForPay.studentName} ({selectedFeeForPay.admissionNo})</span>
          </div>
          <div className="text-right">
            <span className="text-[11px] text-slate-500 font-medium">Total Payable</span>
            <p className="text-xl font-bold text-emerald-700 font-['Outfit']">₹{selectedFeeForPay.amount.toLocaleString('en-IN')}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Payment Method Tabs */}
          <div className="grid grid-cols-4 gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setPaymentTab('upi')}
              className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg text-xs font-bold transition ${
                paymentTab === 'upi' ? 'bg-[#0c2340] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-4 h-4 mb-1" />
              UPI / QR
            </button>
            <button
              onClick={() => setPaymentTab('card')}
              className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg text-xs font-bold transition ${
                paymentTab === 'card' ? 'bg-[#0c2340] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <CreditCard className="w-4 h-4 mb-1" />
              Cards
            </button>
            <button
              onClick={() => setPaymentTab('netbanking')}
              className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg text-xs font-bold transition ${
                paymentTab === 'netbanking' ? 'bg-[#0c2340] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-4 h-4 mb-1" />
              NetBanking
            </button>
            <button
              onClick={() => setPaymentTab('wallet')}
              className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg text-xs font-bold transition ${
                paymentTab === 'wallet' ? 'bg-[#0c2340] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <QrCode className="w-4 h-4 mb-1" />
              Wallets
            </button>
          </div>

          {/* UPI Method */}
          {paymentTab === 'upi' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="p-3 bg-white rounded-xl shadow-xs border border-slate-200 flex flex-col items-center">
                  <div className="w-28 h-28 bg-white rounded-lg flex items-center justify-center p-1 border border-slate-300">
                    <QrCode className="w-24 h-24 text-slate-800" />
                  </div>
                  <span className="text-[10px] text-slate-700 font-bold mt-1">Scan with any UPI App</span>
                </div>

                <div className="flex-1 space-y-3 w-full">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Fast UPI Apps</span>
                  <div className="grid grid-cols-3 gap-2">
                    {['Google Pay', 'PhonePe', 'Paytm', 'BHIM UPI', 'Cred', 'Amazon Pay'].map(app => (
                      <div 
                        key={app} 
                        onClick={handlePay}
                        className="p-2 text-center rounded-lg bg-white hover:bg-blue-50 border border-slate-300 hover:border-blue-700 cursor-pointer transition text-xs font-bold text-slate-800 shadow-xs"
                      >
                        {app}
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <label className="text-xs text-slate-600 block mb-1 font-semibold">Or enter UPI VPA</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="mobile@upi"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        className="flex-1 px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700"
                      />
                      <button
                        onClick={handlePay}
                        disabled={isProcessing}
                        className="px-4 py-2 bg-[#0c2340] hover:bg-blue-900 text-white rounded-lg text-xs font-bold transition"
                      >
                        Verify & Pay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Cards Method */}
          {paymentTab === 'card' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div>
                  <label className="text-xs text-slate-700 font-semibold block mb-1">Card Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 font-mono focus:outline-none focus:border-blue-700"
                    />
                    <CreditCard className="w-5 h-5 text-slate-400 absolute left-3 top-2.5" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-700 font-semibold block mb-1">Expiry (MM/YY)</label>
                    <input
                      type="text"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 font-mono focus:outline-none focus:border-blue-700"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-700 font-semibold block mb-1">CVV</label>
                    <input
                      type="password"
                      maxLength={4}
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 font-mono focus:outline-none focus:border-blue-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-700 font-semibold block mb-1">Cardholder Name</label>
                  <input
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 uppercase focus:outline-none focus:border-blue-700"
                  />
                </div>
              </div>
            </div>
          )}

          {/* NetBanking Method */}
          {paymentTab === 'netbanking' && (
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-700">Select Your Bank</span>
              <div className="grid grid-cols-2 gap-2">
                {banks.map(bank => (
                  <div
                    key={bank.code}
                    onClick={() => setSelectedBank(bank.name)}
                    className={`p-3 rounded-xl border flex items-center space-x-3 cursor-pointer transition ${
                      selectedBank === bank.name 
                        ? 'bg-blue-50 border-blue-700 text-blue-950 font-bold' 
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Building2 className="w-4 h-4 text-blue-700" />
                    <span className="text-xs font-semibold">{bank.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Wallets */}
          {paymentTab === 'wallet' && (
            <div className="grid grid-cols-2 gap-3">
              {['Paytm Wallet', 'Amazon Pay Wallet', 'Mobikwik', 'Freecharge'].map(w => (
                <div
                  key={w}
                  onClick={handlePay}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-700 cursor-pointer transition flex items-center space-x-3 shadow-xs"
                >
                  <Smartphone className="w-5 h-5 text-emerald-600" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">{w}</p>
                    <p className="text-[10px] text-slate-500">1-Click Fast Checkout</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Fee Summary */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5 text-xs text-slate-600">
            <div className="flex justify-between">
              <span>Fee Description:</span>
              <span className="font-bold text-slate-900">{selectedFeeForPay.title}</span>
            </div>
            <div className="flex justify-between">
              <span>Academic Session:</span>
              <span className="font-bold text-slate-900">{selectedFeeForPay.term}</span>
            </div>
            <div className="flex justify-between">
              <span>Institution:</span>
              <span className="font-bold text-slate-900">Lal Classes Concept School</span>
            </div>
            <div className="flex justify-between">
              <span>Due Date:</span>
              <span className="font-bold text-slate-900">{selectedFeeForPay.dueDate}</span>
            </div>
          </div>
        </div>

        {/* Processing Overlay */}
        {isProcessing && (
          <div className="absolute inset-0 bg-white/95 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center space-y-4 z-20 animate-fadeIn">
            <div className="relative">
              <Loader2 className="w-10 h-10 text-blue-700 animate-spin" />
            </div>
            <h4 className="text-base font-bold text-slate-900 font-['Outfit']">Securing Transaction</h4>
            <p className="text-xs text-slate-600 max-w-sm">{processingStep}</p>
            <div className="text-[11px] text-slate-600 flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
              <Lock className="w-3.5 h-3.5 text-emerald-600" /> 256-bit Bank-Grade SSL & Webhook Verification
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-[11px] text-slate-500">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>PCI-DSS Level 1 Certified</span>
          </div>

          <button
            disabled={isProcessing}
            onClick={handlePay}
            className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-xs transition flex items-center space-x-2 active:scale-95"
          >
            <span>Pay ₹{selectedFeeForPay.amount.toLocaleString('en-IN')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
