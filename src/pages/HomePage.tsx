import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Calendar,
  Award,
  Users,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  Monitor,
  Trophy,
  HeartHandshake,
  Compass,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Layers,
  Sparkle
} from 'lucide-react';
import { schoolUpdates } from '../data/updatesData';
import type { SchoolUpdate } from '../data/updatesData';
import { UpdateModal } from '../components/UpdateModal';

interface HomePageProps {
  onOpenEnquiry: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenEnquiry }) => {
  const [selectedUpdate, setSelectedUpdate] = useState<SchoolUpdate | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const targetId = (location.state as any).scrollTo;
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="pt-16 sm:pt-20">
      {/* B. HERO SECTION */}
      <section
        id="hero"
        className="relative bg-gradient-to-b from-oxford-blue via-slate-900 to-oxford-dark text-white pt-6 pb-12 lg:py-14 overflow-hidden"
      >
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Hero Left Text Content */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-semibold text-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Admissions Open • 2026–27</span>
              </div>

              <h1 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight text-white">
                Empowering Young Minds for a <span className="text-amber-400">Brighter Tomorrow</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans">
                Oxford International School provides a nurturing environment where students learn with curiosity, grow with confidence, and prepare for a changing world.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-oxford-dark font-bold px-6 py-2.5 rounded-xl shadow-md transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply for Admission</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="w-full sm:w-auto bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold px-5 py-2.5 rounded-xl transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Our School</span>
                </button>
              </div>
            </div>

            {/* Hero Right Visual (Local Generated Image) */}
            <div className="lg:col-span-5 relative max-w-md mx-auto lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/15">
                <img
                  src="/images/hero.jpg"
                  alt="Oxford International School Campus"
                  className="w-full h-[240px] sm:h-[280px] lg:h-[320px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-oxford-dark/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/15 text-white flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider">
                      CBSE Affiliated Campus
                    </h2>
                    <p className="text-[11px] text-slate-300 font-sans">
                      Co-educational • Pre-Primary to Grade XII
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* C. QUICK SCHOOL INFORMATION */}
      <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md border border-slate-200/80 p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="space-y-0.5 p-1">
            <div className="flex items-center justify-center gap-1 text-amber-600">
              <Calendar className="w-3.5 h-3.5" />
              <span className="font-serif font-bold text-xl text-slate-900">2012</span>
            </div>
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Founded</p>
          </div>

          <div className="space-y-0.5 p-1 pt-2 md:pt-1">
            <div className="flex items-center justify-center gap-1 text-amber-600">
              <Award className="w-3.5 h-3.5" />
              <span className="font-serif font-bold text-xl text-slate-900">CBSE</span>
            </div>
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Affiliation</p>
          </div>

          <div className="space-y-0.5 p-1 pt-2 md:pt-1">
            <div className="flex items-center justify-center gap-1 text-amber-600">
              <BookOpen className="w-3.5 h-3.5" />
              <span className="font-serif font-bold text-lg sm:text-xl text-slate-900">Pre-Primary – XII</span>
            </div>
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Classes</p>
          </div>

          <div className="space-y-0.5 p-1 pt-2 md:pt-1">
            <div className="flex items-center justify-center gap-1 text-amber-600">
              <Users className="w-3.5 h-3.5" />
              <span className="font-serif font-bold text-xl text-slate-900">25:1</span>
            </div>
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Ratio</p>
          </div>
        </div>
      </section>

      {/* D. ABOUT OXFORD */}
      <section id="about" className="py-10 sm:py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-0.5 rounded-full border border-amber-200">
              <Sparkle className="w-3 h-3" />
              <span>Who We Are</span>
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900">
              About Oxford
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Oxford International School is a co-educational institution committed to providing a balanced education that combines academic excellence, creativity, character development, and real-world learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200/80 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-slate-900">Academic Excellence</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strong foundations in core subjects with a focus on understanding, application, and continuous improvement.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200/80 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-slate-900">Holistic Development</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Students are encouraged to participate in sports, arts, clubs, leadership activities, and community initiatives.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200/80 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-slate-900">Caring Environment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A safe, supportive school environment where every student is encouraged to discover their strengths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* E. PRINCIPAL'S MESSAGE (Local Portrait Image) */}
      <section id="principal" className="py-10 sm:py-12 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Principal Photo Column */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shadow-md border-2 border-amber-400/80 shrink-0">
                  <img
                    src="/images/principal.jpg"
                    alt="Dr. Ananya Sharma - Principal"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="mt-2 space-y-0.5">
                  <h3 className="font-serif font-bold text-base text-white">Dr. Ananya Sharma</h3>
                  <p className="text-amber-400 text-[11px] font-semibold uppercase">Principal</p>
                </div>
              </div>

              {/* Message Column */}
              <div className="lg:col-span-8 space-y-3 text-left">
                <h2 className="font-serif font-bold text-xl sm:text-2xl text-white">
                  From the Principal's Desk
                </h2>
                <blockquote className="text-slate-300 text-xs sm:text-sm leading-relaxed italic border-l-2 border-amber-400 pl-3 font-sans">
                  "At Oxford International School, we believe education is more than academic achievement. It is about helping young people become thoughtful, confident, responsible, and lifelong learners. Our teachers work closely with students to create an environment where curiosity is encouraged, individuality is respected, and every child is given the opportunity to grow."
                </blockquote>
                <div className="pt-1">
                  <span className="font-serif font-bold text-sm text-amber-300">Dr. Ananya Sharma</span>
                  <span className="text-[11px] text-slate-400 block">Principal • Oxford International School</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* F. ACADEMICS */}
      <section id="academics" className="py-10 sm:py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-0.5 rounded-full border border-amber-200">
              <Layers className="w-3 h-3" />
              <span>Curriculum & Learning</span>
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900">
              Learning That Builds Confidence
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Our academic programme combines strong fundamentals with opportunities for students to explore, question, create, and apply what they learn.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 space-y-1.5">
              <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded inline-block">Pre-Primary</span>
              <h3 className="font-serif font-bold text-base text-slate-900">Early Years</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Play-based learning, communication, creativity, and foundational skills.</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 space-y-1.5">
              <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded inline-block">Grades I – V</span>
              <h3 className="font-serif font-bold text-base text-slate-900">Primary School</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Strong foundations in languages, mathematics, science, and social learning.</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 space-y-1.5">
              <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded inline-block">Grades VI – VIII</span>
              <h3 className="font-serif font-bold text-base text-slate-900">Middle School</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Conceptual learning, practical activities, technology, and independent thinking.</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 space-y-1.5">
              <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded inline-block">Grades IX – XII</span>
              <h3 className="font-serif font-bold text-base text-slate-900">Senior School</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Focused academic preparation, career awareness, leadership, and higher-order thinking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* G. WHY CHOOSE OXFORD? */}
      <section className="py-10 sm:py-12 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto space-y-1.5 mb-8">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900">
              Why Families Choose Oxford
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-oxford-blue text-amber-400 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm text-slate-900">Experienced Faculty</h3>
                <p className="text-[11px] text-slate-600">Qualified & compassionate educators.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-oxford-blue text-amber-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm text-slate-900">Safe & Caring Campus</h3>
                <p className="text-[11px] text-slate-600">Secure, supportive learning environment.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-oxford-blue text-amber-400 flex items-center justify-center shrink-0">
                <Monitor className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm text-slate-900">Smart Classrooms</h3>
                <p className="text-[11px] text-slate-600">Digital tools & interactive learning.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-oxford-blue text-amber-400 flex items-center justify-center shrink-0">
                <Trophy className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm text-slate-900">Sports & Activities</h3>
                <p className="text-[11px] text-slate-600">Physical fitness & team athletics.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-oxford-blue text-amber-400 flex items-center justify-center shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm text-slate-900">Student-Centred Learning</h3>
                <p className="text-[11px] text-slate-600">Individualized attention & growth.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-oxford-blue text-amber-400 flex items-center justify-center shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm text-slate-900">Leadership Opportunities</h3>
                <p className="text-[11px] text-slate-600">Clubs, councils & public speaking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H. ADMISSIONS */}
      <section id="admissions" className="py-10 sm:py-12 bg-oxford-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
              Admissions 2026–27
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Applications are now open for selected classes. Our admissions team is available to guide families.
            </p>
            <p className="text-amber-300 font-semibold text-xs">
              Classes: Pre-Primary to Grade XII
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/70 space-y-1">
              <span className="font-serif font-bold text-amber-400 text-lg">01 Enquiry</span>
              <p className="text-[11px] text-slate-400">Submit an online enquiry or visit campus for prospectus details.</p>
            </div>
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/70 space-y-1">
              <span className="font-serif font-bold text-amber-400 text-lg">02 Interaction</span>
              <p className="text-[11px] text-slate-400">Brief interaction with student & parent to understand needs.</p>
            </div>
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/70 space-y-1">
              <span className="font-serif font-bold text-amber-400 text-lg">03 Confirmation</span>
              <p className="text-[11px] text-slate-400">Document submission and fee payment to confirm seat.</p>
            </div>
          </div>

          <div>
            <button
              onClick={onOpenEnquiry}
              className="bg-amber-500 hover:bg-amber-400 text-oxford-dark font-bold px-6 py-2.5 rounded-xl shadow transition-all text-xs sm:text-sm inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Start Admission Enquiry</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* I. SCHOOL LIFE */}
      <section className="py-10 sm:py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900">
              Life at Oxford
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-xl overflow-hidden bg-white shadow-sm border border-slate-200">
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=500" alt="Classrooms" className="w-full h-32 sm:h-40 object-cover" />
              <p className="p-2 text-center font-serif font-bold text-xs text-slate-900">Classrooms</p>
            </div>
            <div className="rounded-xl overflow-hidden bg-white shadow-sm border border-slate-200">
              <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=500" alt="Science Lab" className="w-full h-32 sm:h-40 object-cover" />
              <p className="p-2 text-center font-serif font-bold text-xs text-slate-900">Science Lab</p>
            </div>
            <div className="rounded-xl overflow-hidden bg-white shadow-sm border border-slate-200">
              <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=500" alt="Library" className="w-full h-32 sm:h-40 object-cover" />
              <p className="p-2 text-center font-serif font-bold text-xs text-slate-900">Library</p>
            </div>
            <div className="rounded-xl overflow-hidden bg-white shadow-sm border border-slate-200">
              <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=500" alt="Sports" className="w-full h-32 sm:h-40 object-cover" />
              <p className="p-2 text-center font-serif font-bold text-xs text-slate-900">Sports</p>
            </div>
            <div className="rounded-xl overflow-hidden bg-white shadow-sm border border-slate-200">
              <img src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&q=80&w=500" alt="Arts & Activities" className="w-full h-32 sm:h-40 object-cover" />
              <p className="p-2 text-center font-serif font-bold text-xs text-slate-900">Arts & Activities</p>
            </div>
            <div className="rounded-xl overflow-hidden bg-white shadow-sm border border-slate-200">
              <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=500" alt="School Events" className="w-full h-32 sm:h-40 object-cover" />
              <p className="p-2 text-center font-serif font-bold text-xs text-slate-900">School Events</p>
            </div>
          </div>
        </div>
      </section>

      {/* J. LATEST UPDATES */}
      <section className="py-10 sm:py-12 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900">
              Latest Updates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {schoolUpdates.map((upd) => (
              <div key={upd.id} className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 font-medium">{upd.date}</span>
                    <span className="font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">{upd.category}</span>
                  </div>
                  <h3 className="font-serif font-bold text-sm text-slate-900 leading-snug">{upd.title}</h3>
                  <p className="text-[11px] text-slate-600 line-clamp-2">{upd.summary}</p>
                </div>
                <button
                  onClick={() => setSelectedUpdate(upd)}
                  className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 cursor-pointer pt-1"
                >
                  <span>Read More</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* K. CALL TO ACTION */}
      <section className="py-10 bg-oxford-blue text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
            Give Your Child a Stronger Start
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            Discover an environment where learning, character, creativity, and confidence grow together.
          </p>
          <div className="flex flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="bg-amber-500 hover:bg-amber-400 text-oxford-dark font-bold px-6 py-2.5 rounded-xl shadow text-xs sm:text-sm cursor-pointer"
            >
              Enquire Now
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold px-6 py-2.5 rounded-xl text-xs sm:text-sm cursor-pointer"
            >
              Contact School
            </button>
          </div>
        </div>
      </section>

      {/* L. CONTACT SECTION */}
      <section id="contact" className="py-10 sm:py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900">
              Visit Oxford International School
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6 bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
              <div>
                <h3 className="font-serif font-bold text-xl text-oxford-blue">Oxford International School</h3>
                <p className="text-xs text-amber-600 font-semibold uppercase">Coimbatore, Tamil Nadu</p>
              </div>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Oxford Campus, Avinashi Road, Coimbatore, Tamil Nadu – 641014</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                  <a href="tel:+919876543210" className="hover:text-amber-600 font-semibold">+91 98765 43210</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                  <a href="mailto:admissions@oxfordinternationalschool.edu.in" className="hover:text-amber-600">admissions@oxfordinternationalschool.edu.in</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Monday – Friday: 8:00 AM – 4:00 PM</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100">
                <button
                  onClick={() => alert("Simulated: Opening Google Maps directions to Oxford International School, Coimbatore")}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2 rounded-lg text-[11px] flex items-center justify-center gap-1 cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>Directions</span>
                </button>
                <a
                  href="tel:+919876543210"
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2 rounded-lg text-[11px] flex items-center justify-center gap-1 text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>Call</span>
                </a>
                <button
                  onClick={onOpenEnquiry}
                  className="bg-amber-500 hover:bg-amber-400 text-oxford-dark font-semibold py-2 rounded-lg text-[11px] flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Enquire</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-6 shadow-sm border border-slate-800 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="bg-amber-500 text-oxford-dark font-bold text-[10px] px-2.5 py-0.5 rounded uppercase">Location Map</span>
                <h3 className="font-serif font-bold text-xl text-white">Coimbatore Campus</h3>
                <p className="text-xs text-slate-300">Conveniently accessible near Avinashi Road with bus routes across major sectors.</p>
              </div>

              <div className="pt-4">
                <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 flex items-center justify-between">
                  <span className="text-xs text-amber-300 font-semibold">11.0168° N, 76.9558° E</span>
                  <button
                    onClick={() => alert("Simulated: Opening Oxford International School interactive map location.")}
                    className="bg-amber-500 text-oxford-dark font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UpdateModal update={selectedUpdate} onClose={() => setSelectedUpdate(null)} />
    </main>
  );
};
