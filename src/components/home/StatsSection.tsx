"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, Trophy, Apple } from "lucide-react";

const stats = [
  { label: "Students Enrolled", value: "500+", icon: Users, color: "bg-blue-500", glow: "shadow-blue-200" },
  { label: "Expert Teachers", value: "40+", icon: GraduationCap, color: "bg-rose-500", glow: "shadow-rose-200" },
  { label: "Years Excellence", value: "15+", icon: Trophy, color: "bg-amber-500", glow: "shadow-amber-200" },
  { label: "Curriculum", value: "CBSE", icon: Apple, color: "bg-green-500", glow: "shadow-green-200" },
];

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center group cursor-default"
            >
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${stat.color} flex items-center justify-center text-white mb-4 sm:mb-6 shadow-lg ${stat.glow}`}
              >
                <stat.icon size={28} />
              </motion.div>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">{stat.value}</h3>
              <p className="text-slate-500 font-medium text-xs sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
