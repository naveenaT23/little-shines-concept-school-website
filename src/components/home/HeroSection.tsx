"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Star, X, Sparkles } from "lucide-react";
import FloatingElements from "../three/FloatingElements";

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 3D Background */}
      <FloatingElements />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8 will-change-transform"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20">
            <Star size={16} className="fill-current" />
            <span>Admissions Open</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1]">
            Where Little <span className="text-primary italic">Shines</span> Become <br />
            <span className="relative">
              Big Stars
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9C118.5 2.5 239.5 2.5 355 9" stroke="#6366f1" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
            Experience a world-class CBSE curriculum designed to nurture curiosity, 
            creativity, and confidence in children from Play Group to 6th Class.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/admissions"
              className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-primary/25 hover:bg-primary/90 hover:-translate-y-1 transition-all flex items-center gap-2 group text-lg"
            >
              Enroll Your Child
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-slate-700 hover:bg-slate-100 transition-all text-lg group"
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Play size={20} fill="currentColor" />
              </div>
              Watch Film
            </button>
          </div>

          <div className="flex items-center gap-6 pt-10 border-t border-slate-100 italic">
             <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="parent" />
                 </div>
               ))}
             </div>
             <p className="text-sm text-slate-500">
               Trusted by <span className="text-slate-900 font-bold">500+ Parents</span> in the community
             </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative will-change-transform"
        >
          {/* Main Image Container */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white/50 aspect-[4/5] md:aspect-[5/6]">
            <Image
              src="/hero-kids.png"
              alt="Happy Kids at Little Shines"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Decorative Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass p-6 rounded-2xl shadow-xl flex items-center gap-4 border-2 border-primary/20"
          >
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-white shadow-lg">
              <Star size={24} fill="currentColor" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-tight">Curriculum</p>
              <p className="text-lg font-bold text-slate-900 leading-tight">CBSE Standard</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-10 -left-6 glass p-6 rounded-2xl shadow-xl flex items-center gap-4 border-2 border-secondary/20 backdrop-blur-md"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-white shadow-lg">
              <Sparkles size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-tight">Classes</p>
              <p className="text-lg font-bold text-slate-900 leading-tight">PG to 6th Grade</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120H0V92.23C51.27,104.28,150,111.45,217.47,103.11,273.69,96.17,314.17,66.82,321.39,56.44Z"></path>
        </svg>
      </div>
      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden aspect-video bg-black shadow-2xl border border-white/10">
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-110"
              >
                <X size={24} />
              </button>
              <video 
                src="/WhatsApp Video 2026-04-16 at 4.08.32 PM.mp4" 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

