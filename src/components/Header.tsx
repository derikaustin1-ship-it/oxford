import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GraduationCap, Menu, X, ChevronRight } from 'lucide-react';

interface HeaderProps {
  onOpenEnquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-oxford-blue/95 backdrop-blur-md shadow-lg py-3 text-white'
          : 'bg-oxford-blue text-white py-4 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Emblem */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-oxford-blue shadow-md group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-none tracking-wide text-white group-hover:text-amber-300 transition-colors">
                OXFORD
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-amber-400 uppercase">
                International School
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors py-1 cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors py-1 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('academics')}
              className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors py-1 cursor-pointer"
            >
              Academics
            </button>
            <button
              onClick={() => handleNavClick('admissions')}
              className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors py-1 cursor-pointer"
            >
              Admissions
            </button>
            <button
              onClick={() => handleNavClick('principal')}
              className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors py-1 cursor-pointer"
            >
              Principal
            </button>
            <Link
              to="/faculty"
              className={`text-sm font-medium transition-colors py-1 ${
                location.pathname === '/faculty'
                  ? 'text-amber-400 font-semibold border-b-2 border-amber-400'
                  : 'text-slate-200 hover:text-amber-400'
              }`}
            >
              Faculty
            </Link>
          </nav>

          {/* Desktop Enquire Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenEnquiry}
              className="bg-amber-500 hover:bg-amber-400 text-oxford-dark font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all text-sm flex items-center gap-1.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Enquire Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenEnquiry}
              className="bg-amber-500 hover:bg-amber-400 text-oxford-dark font-bold text-xs px-3 py-1.5 rounded-md shadow"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-700/80 pb-3 flex flex-col gap-2 animate-fadeIn">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-left px-3 py-2 rounded-md text-base font-medium text-slate-100 hover:bg-slate-800 hover:text-amber-400"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left px-3 py-2 rounded-md text-base font-medium text-slate-100 hover:bg-slate-800 hover:text-amber-400"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('academics')}
              className="text-left px-3 py-2 rounded-md text-base font-medium text-slate-100 hover:bg-slate-800 hover:text-amber-400"
            >
              Academics
            </button>
            <button
              onClick={() => handleNavClick('admissions')}
              className="text-left px-3 py-2 rounded-md text-base font-medium text-slate-100 hover:bg-slate-800 hover:text-amber-400"
            >
              Admissions
            </button>
            <button
              onClick={() => handleNavClick('principal')}
              className="text-left px-3 py-2 rounded-md text-base font-medium text-slate-100 hover:bg-slate-800 hover:text-amber-400"
            >
              Principal
            </button>
            <Link
              to="/faculty"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-left px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/faculty'
                  ? 'bg-amber-500/20 text-amber-400 font-semibold'
                  : 'text-slate-100 hover:bg-slate-800 hover:text-amber-400'
              }`}
            >
              Faculty Profiles
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
