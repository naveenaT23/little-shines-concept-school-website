"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

const activityCategories = ["All", "Sports", "Arts", "Cultural", "Science"];

const activities = [
  { title: "Annual Sports Meet", category: "Sports", image: "/activity_sports_1776351397044.png" },
  { title: "Pottery Workshop", category: "Arts", image: "/activity_arts_1776351417145.png" },
  { title: "Diwali Celebrations", category: "Cultural", image: "/activity_cultural_1776351436907.png" },
  { title: "Robotics Club", category: "Science", image: "/activity_science_1776351453382.png" },
  { title: "Classical Dance", category: "Cultural", image: "/activity_cultural_dance_1776351649510.png" },
  { title: "Mixed Media Art", category: "Arts", image: "/activity_arts_mixed_1776351669539.png" },
  { title: "Chess Tournament", category: "Sports", image: "/activity_sports_chess_1776351687919.png" },
  { title: "Science Fair", category: "Science", image: "/activity_science_fair_1776351705927.png" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function ActivitiesPage() {
  const [filter, setFilter] = useState("All");

  const filteredActivities = filter === "All" 
    ? activities 
    : activities.filter(a => a.category === filter);

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <PageHero 
        title="Student Activities" 
        subtitle="Unlocking hidden talents through a rich array of extracurricular programs that inspire passion and creativity."
        gradient="bg-gradient-to-r from-rose-900 to-orange-900"
        backgroundImage="/activity_general_1776351469489.png"
      />

      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tabs */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-14"
          >
            {activityCategories.map((cat) => (
              <motion.button
                key={cat}
                variants={fadeUp}
                onClick={() => setFilter(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={clsx(
                  "px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold transition-all border-2 text-sm sm:text-base",
                  filter === cat 
                    ? "bg-rose-500 text-white border-rose-500 shadow-lg shadow-rose-200" 
                    : "bg-white text-slate-500 border-slate-200 hover:border-rose-300 hover:text-rose-500"
                )}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Activity Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredActivities.map((item, i) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group relative h-64 sm:h-72 lg:h-80 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all cursor-pointer"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 p-5 sm:p-6">
                    <p className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-1">{item.category}</p>
                    <h4 className="text-base sm:text-xl font-bold text-white leading-tight">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Why Activities Matter */}
      <section className="py-20 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-3xl bg-slate-100 overflow-hidden mt-8 sm:mt-12">
                <img src="/activity_arts_1776351417145.png" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="activity" />
              </div>
              <div className="aspect-[3/4] rounded-3xl bg-slate-100 overflow-hidden">
                <img src="/activity_science_1776351453382.png" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="activity" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="order-1 lg:order-2 space-y-6 sm:space-y-8"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Beyond Academic <br /><span className="text-rose-500 italic">Excellence</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Co-curricular activities are not just "extras" at Little Shines. They are 
              integral to our educational philosophy, helping children build confidence, 
              resilience, and teamwork skills that textbooks alone cannot provide.
            </motion.p>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-5 sm:gap-8 text-center pt-4">
              <motion.div whileHover={{ scale: 1.04 }} className="p-5 sm:p-6 rounded-2xl bg-rose-50 border border-rose-100">
                <p className="text-3xl sm:text-4xl font-bold text-rose-500">20+</p>
                <p className="text-sm font-medium text-slate-600 mt-1">Active Clubs</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} className="p-5 sm:p-6 rounded-2xl bg-blue-50 border border-blue-100">
                <p className="text-3xl sm:text-4xl font-bold text-blue-500">5+</p>
                <p className="text-sm font-medium text-slate-600 mt-1">Annual Events</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
