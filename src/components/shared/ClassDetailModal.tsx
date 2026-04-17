"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Calendar, Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ClassData {
  title: string;
  age: string;
  desc: string;
  longDesc: string;
  icon: LucideIcon;
  color: string;
  lightColor: string;
  borderColor: string;
  curriculum: string[];
}

interface ClassDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ClassData | null;
}

export default function ClassDetailModal({ isOpen, onClose, data }: ClassDetailModalProps) {
  if (!data) return null;

  const colorName = data.color.split('-')[1];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-slate-900 hover:bg-white/40 transition-colors flex items-center justify-center"
            >
              <X size={20} />
            </button>

            {/* Left/Top Panel - Visual Branding */}
            <div className={cn("md:w-2/5 p-10 flex flex-col justify-center items-center text-center text-white relative overflow-hidden", data.color)}>
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-black rounded-full blur-3xl" />
              </div>

              <div className="relative z-10">
                <div className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8 shadow-xl">
                  <data.icon size={48} className="text-white" />
                </div>
                <p className="text-white/80 font-bold uppercase tracking-widest text-sm mb-2">{data.age}</p>
                <h2 className="text-4xl font-bold mb-4">{data.title}</h2>
                <div className="w-16 h-1 bg-white/30 rounded-full mx-auto" />
              </div>
            </div>

            {/* Right/Bottom Panel - Details */}
            <div className="flex-1 p-8 md:p-12 overflow-y-auto custom-scrollbar">
              <div className="mb-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Program Overview</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {data.longDesc}
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <CheckCircle2 className={cn("text-", colorName, "-500")} size={24} />
                  Curriculum Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.curriculum.map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-slate-200 transition-colors">
                      <div className={cn("w-2 h-2 rounded-full mt-2 shrink-0", data.color)} />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                <div className="text-center">
                  <Calendar className="mx-auto mb-2 text-slate-400" size={20} />
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Duration</p>
                  <p className="text-sm font-bold text-slate-700">Annual</p>
                </div>
                <div className="text-center">
                  <Clock className="mx-auto mb-2 text-slate-400" size={20} />
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Timing</p>
                  <p className="text-sm font-bold text-slate-700">8:30 - 12:30</p>
                </div>
                <div className="text-center">
                   <Users className="mx-auto mb-2 text-slate-400" size={20} />
                   <p className="text-[10px] font-bold text-slate-400 uppercase">Ratio</p>
                   <p className="text-sm font-bold text-slate-700">1:15</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
