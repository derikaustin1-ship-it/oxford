import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { FacultyPage } from './pages/FacultyPage';
import { AdmissionModal } from './components/AdmissionModal';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  const handleOpenEnquiry = () => {
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-white">
        <Header onOpenEnquiry={handleOpenEnquiry} />
        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/faculty" element={<FacultyPage onOpenEnquiry={handleOpenEnquiry} />} />
            {/* Fallback to Home */}
            <Route path="*" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
          </Routes>
        </div>

        <Footer onOpenEnquiry={handleOpenEnquiry} />

        <AdmissionModal
          isOpen={isEnquiryModalOpen}
          onClose={handleCloseEnquiry}
        />
      </div>
    </Router>
  );
}

export default App;
