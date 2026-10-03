import React from 'react';
import { X, Calendar, Tag } from 'lucide-react';
import type { SchoolUpdate } from '../data/updatesData';

interface UpdateModalProps {
  update: SchoolUpdate | null;
  onClose: () => void;
}

export const UpdateModal: React.FC<UpdateModalProps> = ({ update, onClose }) => {
  if (!update) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-oxford-dark/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-100">
        <div className="bg-oxford-blue text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              {update.category} Announcement
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span>{update.date}</span>
          </div>

          <h3 className="font-serif font-bold text-xl text-slate-900 leading-snug">
            {update.title}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
            {update.fullContent}
          </p>

          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-5 py-2 rounded-lg text-sm transition-colors"
            >
              Close Announcement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
