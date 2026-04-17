"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Arjun Sharma",
    role: "Parent of UKG Student",
    quote: "The 3D learning approach at Little Shines has transformed how my son understands concepts. He’s more curious and engaged than ever before!",
    rating: 5,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    name: "Priya Reddy",
    role: "Parent of 1st Grade Student",
    quote: "The holistic focus on both academics and character development is what sets this school apart. The teachers are incredibly supportive and professional.",
    rating: 5,
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    name: "Vikram Verma",
    role: "Parent of Play Group Student",
    quote: "Transitions can be tough, but the teachers here made my daughter feel at home from day one. Her social skills and confidence have improved significantly.",
    rating: 5,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    name: "Saritha K.",
    role: "Parent of 4th Grade Student",
    quote: "The facilities are world-class, but it's the personalized attention each child receives that truly matters. It's a second home for my daughter.",
    rating: 5,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    name: "Rohan Das",
    role: "Parent of Nursery Student",
    quote: "We were looking for a school that values creativity as much as curriculum. Little Shines has exceeded all our expectations in every way.",
    rating: 5,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    name: "Meera Iyer",
    role: "Parent of 5th Grade Student",
    quote: "The integration of technology and traditional values is perfect here. My son is learning future-ready skills in a very grounded environment.",
    rating: 5,
    color: "text-primary",
    bg: "bg-primary/5",
  },
];

// Duplicate for seamless loop
const allTestimonials = [...testimonials, ...testimonials];

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-10 w-48 sm:w-64 h-48 sm:h-64 border-2 border-primary rounded-full" />
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 border-2 border-secondary rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-12 sm:mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-5"
          >
            <Star size={16} fill="currentColor" />
            <span>Success Stories</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-5"
          >
            What Our <span className="text-primary italic">Parents Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 px-4"
          >
            Discover why families trust Little Shines Concept School for their 
            children's foundational years and academic journey.
          </motion.p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Fading Edges */}
        <div className="absolute left-0 top-0 w-12 sm:w-24 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 w-12 sm:w-24 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        {/* Marquee Content */}
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] py-4">
          {allTestimonials.map((t, i) => (
            <div
              key={i}
              className="w-[300px] sm:w-[350px] md:w-[450px] shrink-0 p-3 sm:p-4"
            >
              <div className="h-full p-6 sm:p-8 rounded-[2rem] bg-slate-50 border border-slate-100 relative group hover:bg-white hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-300">
                <div className={cn("absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12", t.bg, t.color)}>
                  <Quote size={20} fill="currentColor" className="opacity-20 hidden sm:block" />
                  <Quote size={16} fill="currentColor" className="opacity-20 sm:hidden" />
                </div>
                
                <div className="flex gap-1 mb-5 sm:mb-6">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} size={14} fill="#F59E0B" className="text-amber-500 hidden sm:block" />
                  ))}
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={`m-${idx}`} size={12} fill="#F59E0B" className="text-amber-500 sm:hidden" />
                  ))}
                </div>

                <p className="text-slate-600 leading-relaxed mb-6 sm:mb-8 italic text-sm sm:text-base md:text-lg text-balance">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3 sm:gap-4 border-t border-slate-100 pt-5 sm:pt-6 mt-auto">
                  <div className={cn("w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-base sm:text-lg shrink-0", t.bg, t.color)}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base line-clamp-1">{t.name}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50%)); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  );
}
