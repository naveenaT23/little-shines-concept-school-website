"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  gradient: string;
  backgroundImage: string;
}

export default function PageHero({ title, subtitle, gradient, backgroundImage }: PageHeroProps) {
  return (
    <section className={`relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 overflow-hidden min-h-[350px] sm:min-h-[400px] flex items-center ${gradient}`}>
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <motion.div
           initial={{ scale: 1.1 }}
           animate={{ scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="w-full h-full bg-cover bg-center"
           style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
      </div>

      {/* Decorative Blob */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent z-10" />
      
      <div className="max-w-7xl mx-auto relative z-20 text-center w-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md px-2"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
