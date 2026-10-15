import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  UserRole, 
  ActiveView, 
  Student, 
  Teacher, 
  FeeItem, 
  PaymentTransaction, 
  Notice, 
  AdmissionApplication, 
  GrievanceRecord,
  EntranceResultRecord
} from '../types';
import { 
  INITIAL_STUDENTS, 
  INITIAL_TEACHERS, 
  INITIAL_FEES, 
  INITIAL_TRANSACTIONS, 
  INITIAL_NOTICES, 
  INITIAL_ADMISSIONS, 
  INITIAL_GRIEVANCES,
  ENTRANCE_RESULTS_2026 
} from '../data/mockData';
import confetti from 'canvas-confetti';

interface LightboxState {
  url: string;
  title: string;
  caption?: string;
}

interface AppContextType {
  // Navigation & Role
  currentRole: UserRole;
  setCurrentRole: (role: UserRole) => void;
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  
  // Student Portal
  activeStudent: Student;
  setActiveStudent: (student: Student) => void;
  allStudents: Student[];
  allTeachers: Teacher[];
  
  // Fees & Payment
  fees: FeeItem[];
  transactions: PaymentTransaction[];
  initiatePayment: (fee: FeeItem, method?: string) => Promise<PaymentTransaction>;
  selectedFeeForPay: FeeItem | null;
  setSelectedFeeForPay: (fee: FeeItem | null) => void;
  isPaymentModalOpen: boolean;
  setIsPaymentModalOpen: (open: boolean) => void;
  latestReceipt: PaymentTransaction | null;
  setLatestReceipt: (receipt: PaymentTransaction | null) => void;
  
  // Admissions
  admissions: AdmissionApplication[];
  submitAdmission: (data: Omit<AdmissionApplication, 'id' | 'applicationId' | 'appliedDate' | 'status'>) => AdmissionApplication;
  isAdmissionModalOpen: boolean;
  setIsAdmissionModalOpen: (open: boolean) => void;
  
  // Results
  entranceResults: EntranceResultRecord[];
  
  // Grievance / Complain
  grievances: GrievanceRecord[];
  submitGrievance: (data: Omit<GrievanceRecord, 'id' | 'ticketNo' | 'submittedAt' | 'status' | 'resolutionNotes'>) => GrievanceRecord;
  
  // Notices
  notices: Notice[];
  selectedNotice: Notice | null;
  setSelectedNotice: (notice: Notice | null) => void;
  
  // Image Lightbox
  lightbox: LightboxState | null;
  openLightbox: (url: string, title: string, caption?: string) => void;
  closeLightbox: () => void;
  
  // Toast
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRole, setCurrentRole] = useState<UserRole>('PUBLIC');
  const [activeView, setActiveView] = useState<ActiveView>('home');
  
  const [allStudents, setAllStudents] = useState<Student[]>(() => {
    const saved = localStorage.getItem('lccs_students');
    return saved ? JSON.parse(saved) : INITIAL_STUDENTS;
  });
  
  const [activeStudent, setActiveStudent] = useState<Student>(allStudents[0]);
  const [allTeachers] = useState<Teacher[]>(INITIAL_TEACHERS);
  
  const [fees, setFees] = useState<FeeItem[]>(() => {
    const saved = localStorage.getItem('lccs_fees');
    return saved ? JSON.parse(saved) : INITIAL_FEES;
  });
  
  const [transactions, setTransactions] = useState<PaymentTransaction[]>(() => {
    const saved = localStorage.getItem('lccs_transactions');
    return saved ? JSON.parse(saved) : INITIAL_TRANSACTIONS;
  });
  
  const [selectedFeeForPay, setSelectedFeeForPay] = useState<FeeItem | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [latestReceipt, setLatestReceipt] = useState<PaymentTransaction | null>(null);
  
  const [admissions, setAdmissions] = useState<AdmissionApplication[]>(() => {
    const saved = localStorage.getItem('lccs_admissions');
    return saved ? JSON.parse(saved) : INITIAL_ADMISSIONS;
  });
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  
  const [grievances, setGrievances] = useState<GrievanceRecord[]>(() => {
    const saved = localStorage.getItem('lccs_grievances');
    return saved ? JSON.parse(saved) : INITIAL_GRIEVANCES;
  });
  
  const [notices] = useState<Notice[]>(INITIAL_NOTICES);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [entranceResults] = useState<EntranceResultRecord[]>(ENTRANCE_RESULTS_2026);
  
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('lccs_students', JSON.stringify(allStudents));
  }, [allStudents]);

  useEffect(() => {
    localStorage.setItem('lccs_fees', JSON.stringify(fees));
  }, [fees]);

  useEffect(() => {
    localStorage.setItem('lccs_transactions', JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem('lccs_admissions', JSON.stringify(admissions));
  }, [admissions]);

  useEffect(() => {
    localStorage.setItem('lccs_grievances', JSON.stringify(grievances));
  }, [grievances]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const openLightbox = (url: string, title: string, caption?: string) => {
    setLightbox({ url, title, caption });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  const initiatePayment = async (fee: FeeItem, method: string = 'UPI'): Promise<PaymentTransaction> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const orderId = `ORD_LCCS_${Math.floor(100000 + Math.random() * 900000)}`;
        const paymentId = `pay_lccs_${Math.random().toString(36).substring(2, 10)}`;
        const receiptNo = `LCCS-RCP-2026-${Math.floor(1000 + Math.random() * 9000)}`;

        const newTx: PaymentTransaction = {
          id: `tx-${Date.now()}`,
          receiptNo,
          orderId,
          paymentId,
          studentId: fee.studentId,
          studentName: fee.studentName,
          admissionNo: fee.admissionNo,
          grade: fee.grade,
          amount: fee.amount,
          paymentMethod: method as any,
          date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          status: 'SUCCESS',
          feeTitle: fee.title
        };

        setFees(prev => prev.map(f => f.id === fee.id ? { 
          ...f, 
          status: 'PAID', 
          paidDate: new Date().toISOString().split('T')[0],
          receiptNo
        } : f));

        setAllStudents(prev => prev.map(s => {
          if (s.id === fee.studentId) {
            return {
              ...s,
              feePaid: s.feePaid + fee.amount,
              feeDue: Math.max(0, s.feeDue - fee.amount)
            };
          }
          return s;
        }));

        setTransactions(prev => [newTx, ...prev]);
        setLatestReceipt(newTx);

        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (e) {
          console.error(e);
        }

        showToast(`Fee Payment of ₹${fee.amount.toLocaleString('en-IN')} Received Successfully!`);
        resolve(newTx);
      }, 1200);
    });
  };

  const submitAdmission = (data: Omit<AdmissionApplication, 'id' | 'applicationId' | 'appliedDate' | 'status'>) => {
    const applicationId = `LCCS-ADM-2026-${Math.floor(100 + Math.random() * 900)}`;
    const newApp: AdmissionApplication = {
      ...data,
      id: `app-${Date.now()}`,
      applicationId,
      appliedDate: new Date().toISOString().split('T')[0],
      status: 'SUBMITTED'
    };

    setAdmissions(prev => [newApp, ...prev]);
    showToast(`Application ${applicationId} Submitted Successfully!`);
    
    try {
      confetti({ particleCount: 70, spread: 60 });
    } catch {}

    return newApp;
  };

  const submitGrievance = (data: Omit<GrievanceRecord, 'id' | 'ticketNo' | 'submittedAt' | 'status' | 'resolutionNotes'>) => {
    const ticketNo = `LCCS-GRV-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newGrv: GrievanceRecord = {
      ...data,
      id: `grv-${Date.now()}`,
      ticketNo,
      submittedAt: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'SUBMITTED'
    };

    setGrievances(prev => [newGrv, ...prev]);
    showToast(`Complain registered. Your Tracking Ticket ID is ${ticketNo}`);
    return newGrv;
  };

  return (
    <AppContext.Provider
      value={{
        currentRole,
        setCurrentRole,
        activeView,
        setActiveView,
        activeStudent,
        setActiveStudent,
        allStudents,
        allTeachers,
        fees,
        transactions,
        initiatePayment,
        selectedFeeForPay,
        setSelectedFeeForPay,
        isPaymentModalOpen,
        setIsPaymentModalOpen,
        latestReceipt,
        setLatestReceipt,
        admissions,
        submitAdmission,
        isAdmissionModalOpen,
        setIsAdmissionModalOpen,
        entranceResults,
        grievances,
        submitGrievance,
        notices,
        selectedNotice,
        setSelectedNotice,
        lightbox,
        openLightbox,
        closeLightbox,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
