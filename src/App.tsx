import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/public/Hero';
import { AboutSection } from './components/public/AboutSection';
import { CoursesSection } from './components/public/CoursesSection';
import { AdmissionSection } from './components/public/AdmissionSection';
import { ResultsSection } from './components/public/ResultsSection';
import { DownloadsSection } from './components/public/DownloadsSection';
import { GallerySection } from './components/public/GallerySection';
import { NoticeSection } from './components/public/NoticeSection';
import { ComplainSection } from './components/public/ComplainSection';
import { ContactSection } from './components/public/ContactSection';
import { QuickFeePay } from './components/public/QuickFeePay';
import { StudentPortal } from './components/portal/StudentPortal';
import { AdmissionFormModal } from './components/public/AdmissionFormModal';
import { ImageLightboxModal } from './components/common/ImageLightboxModal';
import { RazorpayModal } from './components/common/RazorpayModal';
import { ReceiptModal } from './components/common/ReceiptModal';
import { FloatingWhatsappButton } from './components/common/FloatingWhatsappButton';
import { CheckCircle2 } from 'lucide-react';

const MainContent: React.FC = () => {
  const { activeView, toastMessage } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-red-700 selection:text-white">
      
      {/* Global Navigation matching lalclasses.com */}
      <Navbar />

      {/* Main View Router */}
      <main className="flex-1">
        {activeView === 'home' && (
          <>
            <Hero />
            <AboutSection />
            <CoursesSection />
            <AdmissionSection />
            <ResultsSection />
            <DownloadsSection />
            <GallerySection />
            <NoticeSection />
            <ContactSection />
          </>
        )}

        {activeView === 'about' && <AboutSection />}

        {activeView === 'courses' && <CoursesSection />}

        {activeView === 'admissions' && <AdmissionSection />}

        {activeView === 'results' && <ResultsSection />}

        {activeView === 'downloads' && <DownloadsSection />}

        {activeView === 'notices' && <NoticeSection />}

        {activeView === 'gallery' && <GallerySection />}

        {activeView === 'complain' && <ComplainSection />}

        {activeView === 'contact' && <ContactSection />}

        {activeView === 'quick-fee' && <QuickFeePay />}

        {activeView === 'student-portal' && <StudentPortal />}
      </main>

      {/* Global Modals */}
      <AdmissionFormModal />
      <ImageLightboxModal />
      <RazorpayModal />
      <ReceiptModal />

      {/* Floating Receptionist WhatsApp Action Button */}
      <FloatingWhatsappButton />

      {/* Floating Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-24 right-6 z-50 animate-bounce">
          <div className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-slate-900 text-white shadow-2xl text-xs font-bold border border-slate-700">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
