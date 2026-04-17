"use client";

import { motion } from "framer-motion";
import { 
  Monitor, 
  Book, 
  Palmtree, 
  ShieldCheck, 
  Bus, 
  Mic2,
  Lightbulb
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Smart Classrooms",
    desc: "Equipped with interactive digital boards and modern teaching aids for an immersive learning experience.",
    icon: Monitor,
    color: "text-blue-600",
    bg: "bg-blue-100",
    border: "border-blue-100",
  },
  {
    title: "Well-stocked Library",
    desc: "A vast collection of books and digital resources to foster a love for reading and exploration.",
    icon: Book,
    color: "text-purple-600",
    bg: "bg-purple-100",
    border: "border-purple-100",
  },
  {
    title: "Modern Play Area",
    desc: "Safe and engaging outdoor play zones designed to promote physical activity and social interaction.",
    icon: Palmtree,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
    border: "border-emerald-100",
  },
  {
    title: "Safe & Secure",
    desc: "24/7 CCTV surveillance and verified staff to ensure the highest standards of safety for every child.",
    icon: ShieldCheck,
    color: "text-rose-600",
    bg: "bg-rose-100",
    border: "border-rose-100",
  },
  {
    title: "Reliable Transport",
    desc: "GPS-enabled bus fleet with trained attendants for a comfortable and safe commute.",
    icon: Bus,
    color: "text-amber-600",
    bg: "bg-amber-100",
    border: "border-amber-100",
  },
  {
    title: "Co-curricular Hub",
    desc: "Dedicated spaces for art, music, dance, and public speaking to discover hidden talents.",
    icon: Mic2,
    color: "text-indigo-600",
    bg: "bg-indigo-100",
    border: "border-indigo-100",
  },
];

const statBadges = [
  { value: "100%", label: "Digital Campus", bg: "bg-amber-50", border: "border-amber-100" },
  { value: "Safe", label: "Environment", bg: "bg-indigo-50", border: "border-indigo-100", offset: true },
  { value: "Elite", label: "Faculty", bg: "bg-emerald-50", border: "border-emerald-100" },
  { value: "Top", label: "Sports Gear", bg: "bg-rose-50", border: "border-rose-100", offset: true },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20 mb-5"
            >
              <Lightbulb size={16} />
              <span>Modern Infrastructure</span>
            </motion.div>
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-5"
            >
              Facilities Designed for{" "}
              <span className="text-primary italic">Limitless Growth</span>
            </motion.h2>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6"
            >
              We believe that the environment plays a crucial role in learning. 
              Our campus is equipped with state-of-the-art facilities that encourage 
              every student to explore, innovate, and excel.
            </motion.p>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
              <Link
                href="/facilities"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 hover:-translate-y-1 transition-all"
              >
                Explore Facilities
              </Link>
            </motion.div>
          </motion.div>

          {/* Stat badges */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[
              [statBadges[0], statBadges[1]],
              [statBadges[2], statBadges[3]],
            ].map((col, ci) => (
              <div key={ci} className={`space-y-4 sm:space-y-6 ${ci === 1 ? "pt-8 sm:pt-12" : ""}`}>
                {col.map((badge, bi) => (
                  <motion.div
                    key={bi}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (ci * 2 + bi) * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.04 }}
                    className={`p-6 sm:p-8 rounded-[2rem] ${badge.bg} border ${badge.border} ${badge.offset ? "translate-x-4 sm:translate-x-6" : ""}`}
                  >
                    <h4 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">{badge.value}</h4>
                    <p className="text-slate-600 font-medium text-sm">{badge.label}</p>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className={`group p-7 sm:p-8 rounded-[2.5rem] bg-white border-2 ${feature.border} hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300`}
            >
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-5`}
              >
                <feature.icon size={27} />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
