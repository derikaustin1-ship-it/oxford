import React, { useState, useMemo } from 'react';
import { Award, Briefcase, ChevronRight, Filter, Search, User } from 'lucide-react';
import { facultyMembers } from '../data/facultyData';
import type { FacultyMember } from '../data/facultyData';
import { FacultyProfileModal } from '../components/FacultyProfileModal';

interface FacultyPageProps {
  onOpenEnquiry: () => void;
}

const FILTER_CATEGORIES = [
  "All",
  "School Leadership",
  "Primary",
  "Mathematics",
  "Science",
  "Languages",
  "Social Science",
  "Computer Science",
  "Physical Education"
];

export const FacultyPage: React.FC<FacultyPageProps> = ({ onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);

  const filteredMembers = useMemo(() => {
    if (activeCategory === "All") return facultyMembers;
    return facultyMembers.filter(
      (m) => m.department.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  return (
    <main className="pt-20 sm:pt-24 pb-16 min-h-screen bg-slate-50">
      
      {/* Page Header Banner */}
      <section className="bg-oxford-blue text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1 rounded-full text-xs font-semibold text-amber-300 mb-4">
            <User className="w-3.5 h-3.5 text-amber-400" />
            <span>Academic Team & Mentors</span>
          </div>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Meet Our Faculty
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
            Dedicated educators who inspire curiosity, encourage growth, and help every student reach their potential.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200/80 p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-3 text-slate-700 font-semibold text-xs uppercase tracking-wider">
            <Filter className="w-4 h-4 text-amber-600" />
            <span>Filter By Department</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-oxford-blue text-amber-300 shadow-md font-semibold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {filteredMembers.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center text-slate-500 border border-slate-200">
            <Search className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <p className="font-medium text-base">No faculty members found in this category.</p>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-4 text-xs font-bold text-amber-600 hover:underline"
            >
              Show All Faculty
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedFaculty(member)}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400/60 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  {/* Department Tag */}
                  <div className="absolute top-3 left-3 bg-oxford-blue/90 backdrop-blur-md text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-md border border-amber-400/30">
                    {member.department}
                  </div>

                  {/* Name overlaid on image bottom */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-serif font-bold text-lg text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs text-slate-200 font-medium truncate">
                      {member.designation}
                    </p>
                  </div>
                </div>

                {/* Card Body Details */}
                <div className="p-4 space-y-3 bg-white flex-1 flex flex-col justify-between">
                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="font-medium text-slate-800 truncate">{member.qualifications}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="font-medium text-slate-700">{member.experience}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600 group-hover:text-amber-700">
                    <span>View Profile</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* FACULTY PAGE FOOTER CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-oxford-blue text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl border border-white/10">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
              Have Questions About Our School?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Speak with our admissions team to learn more about Oxford International School.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="bg-amber-500 hover:bg-amber-400 text-oxford-dark font-bold px-7 py-3 rounded-xl shadow-lg text-sm sm:text-base cursor-pointer transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Make an Enquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Detail Modal */}
      <FacultyProfileModal
        faculty={selectedFaculty}
        onClose={() => setSelectedFaculty(null)}
        onOpenEnquiry={onOpenEnquiry}
      />
    </main>
  );
};
