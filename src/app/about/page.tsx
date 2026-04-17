"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";
import confetti from 'canvas-confetti';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function AboutPage() {
  const triggerBlast = () => {
    // A single powerful burst of "papers"
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4f46e5', '#f43f5e', '#ffffff', '#fbbf24'],
      shapes: ['square', 'circle'],
      scalar: 1.2,
      drift: 0,
      gravity: 0.8,
      ticks: 300
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="Our Story & Vision" 
        subtitle="Nurturing the next generation of leaders with compassion, innovation, and academic excellence."
        gradient="bg-gradient-to-r from-indigo-900 to-primary"
        backgroundImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920"
      />

      {/* Vision & Mission */}
      <section className="py-20 px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div variants={fadeUp} className="p-8 sm:p-10 rounded-[2.5rem] bg-indigo-50 border border-indigo-100 flex gap-5 items-start hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-lg">
              <Eye size={28} />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed italic">
                "To be a beacon of excellence in early childhood and primary education, 
                where every child is empowered to reach their full potential in a 
                dynamic and supportive environment."
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="p-8 sm:p-10 rounded-[2.5rem] bg-rose-50 border border-rose-100 flex gap-5 items-start hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-lg">
              <Target size={28} />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                We are committed to providing a holistic CBSE curriculum that balances 
                academic rigor with creative exploration, emotional intelligence, 
                and ethical values.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Principal Message */}
      <section className="py-20 bg-slate-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            onViewportEnter={() => triggerBlast()}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative max-w-sm mx-auto lg:max-w-none"
          >
            <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white bg-white">
              <img 
                src="/principal-neelima.jpg" 
                alt="Principal Mrs. Veerla Neelima" 
                className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-secondary/10 rounded-full blur-2xl -z-10" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-6"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20">
              <Heart size={16} fill="currentColor" />
              <span>A Warm Welcome</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              A Message from our <span className="text-primary italic">Principal</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                "Welcome to Little Shines Concept School. We believe that every child 
                is a unique universe of potential. Our role is not just to teach, 
                but to ignite the spark of curiosity that leads to a lifetime of discovery."
              </p>
              <p>
                As a CBSE English medium school, we focus on a balanced approach—where 
                technology meets tradition, and competition meets collaboration. 
                Our dedicated faculty works tirelessly to ensure that our students 
                become not just academic achievers, but responsible global citizens.
              </p>
              <div className="pt-4 border-t border-slate-200">
                <p className="text-slate-900 font-bold text-2xl sm:text-3xl">Mrs. Veerla Neelima</p>
                <p className="text-primary font-medium text-base sm:text-lg">Principal & Director</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These principles guide everything we do, from the classroom to the playground.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Integrity", desc: "Honesty and ethical behavior in every action.", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
              { title: "Inclusion", desc: "Celebrating diversity and welcoming every child.", color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100" },
              { title: "Innovation", desc: "Always seeking better ways to learn and grow.", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className={`p-8 rounded-[2.5rem] ${item.bg} border ${item.border} shadow-sm hover:shadow-xl transition-all text-center`}
              >
                <CheckCircle2 className={`mx-auto ${item.color} mb-5`} size={44} />
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
