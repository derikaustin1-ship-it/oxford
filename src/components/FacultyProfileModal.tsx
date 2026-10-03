import React from 'react';
import { X, Award, Briefcase, BookOpen, User } from 'lucide-react';
import type { FacultyMember } from '../data/facultyData';

interface FacultyProfileModalProps {
  faculty: FacultyMember | null;
  onClose: () => void;
  onOpenEnquiry?: () => void;
}

export const FacultyProfileModal: React.FC<FacultyProfileModalProps> = ({
  faculty,
  onClose,
  onOpenEnquiry
}) => {
  if (!faculty) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-oxford-dark/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]">
        
        {/* Header bar */}
        <div className="bg-oxford-blue text-white px-6 py-3.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
              Faculty Profile • {faculty.department}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors"
            aria-label="Close profile modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Portrait & Core Bio Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-amber-400/50">
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-2xl text-slate-900 leading-tight">
                {faculty.name}
              </h3>
              <p className="text-amber-700 font-medium text-sm">
                {faculty.designation}
              </p>
              <div className="inline-block bg-slate-100 px-3 py-1 rounded-full text-xs font-semibold text-slate-700 mt-1">
                {faculty.department}
              </div>
            </div>
          </div>

          {/* Highlights Info Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Qualifications
                </span>
                <span className="text-xs font-semibold text-slate-800">
                  {faculty.qualifications}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <Briefcase className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Experience
                </span>
                <span className="text-xs font-semibold text-slate-800">
                  {faculty.experience}
                </span>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-amber-600" /> Professional Background
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed bg-slate-50/70 p-4 rounded-xl border border-slate-100">
              {faculty.bio}
            </p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          {onOpenEnquiry ? (
            <button
              onClick={() => {
                onClose();
                onOpenEnquiry();
              }}
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-oxford-dark font-semibold px-4 py-2 rounded-lg text-xs transition-colors"
            >
              Enquire Admissions
            </button>
          ) : (
            <div></div>
          )}
          <button
            onClick={onClose}
            className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-medium px-5 py-2 rounded-lg text-xs transition-colors"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
};
