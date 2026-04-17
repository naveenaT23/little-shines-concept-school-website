"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import { motion, Variants } from "framer-motion";
import { 
  Wifi, 
  Shield, 
  Bus, 
  Book, 
  Monitor, 
  Utensils,
  Dribbble,
  ChevronRight
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const facilities = [
  {
    title: "Eco-Friendly Classrooms",
    desc: "Spacious, naturally lit, and well-ventilated rooms designed to create a calm and focused learning atmosphere.",
    icon: Monitor,
    image: "/classroom_kids_1776350581411.png",
  },
  {
    title: "Digital Class Room",
    desc: "High-speed internet and latest software for coding, research, and digital literacy from an early age.",
    icon: Wifi,
    image: "/digital_classroom_1776350656380.png",
  },
  {
    title: "Adventure Play Area",
    desc: "Safe, child-friendly equipment where students develop motor skills and social bonds through active play.",
    icon: Dribbble,
    image: "/playground_kids_1776350638404.png",
  },
  {
    title: "Safe Transport Fleet",
    desc: "GPS-monitored buses with dedicated staff ensuring a safe and stress-free journey to and from school.",
    icon: Bus,
    image: "/school_bus_kids_1776350602787.png",
  },
  {
    title: "Hygienic Dining Area",
    desc: "Clean and supervised dining spaces where children are encouraged to practice healthy eating habits.",
    icon: Utensils,
    image: "/school_cafeteria_1776350621042.png",
  },
];

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="Our Facilities" 
        subtitle="Exploring the state-of-the-art infrastructure that makes Little Shines a home away from home."
        gradient="bg-gradient-to-r from-blue-900 to-indigo-900"
        backgroundImage="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1920"
      />

      {/* Main Facilities */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32">
          {facilities.map((f, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="flex-1 space-y-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-lg border border-blue-100">
                  <f.icon size={30} />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                  {f.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {f.desc}
                </p>
                <ul className="space-y-3">
                  {["Premium Standards", "Child-Safe Design", "Modern Equipment"].map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-500 font-medium text-sm sm:text-base">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center shrink-0">
                        <ChevronRight size={14} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: i % 2 === 0 ? 50 : -50 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="flex-1 w-full"
              >
                <div className="relative aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-50 group">
                  <img 
                    src={f.image} 
                    alt={f.title} 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Safety Banner */}
      <section className="py-20 bg-blue-600 text-white text-center px-4 sm:px-6 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Shield size={64} className="mx-auto mb-8 text-blue-200" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Your Child's Safety is Our <span className="text-blue-200 italic">Top Priority</span>
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            From certified staff to 24/7 CCTV surveillance and secure entry protocols, we leave 
            no stone unturned in ensuring a protected and nurturing environment.
          </p>
        </motion.div>
        <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px]" />
      </section>

      <Footer />
    </main>
  );
}
