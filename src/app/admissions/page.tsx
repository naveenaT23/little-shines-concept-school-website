"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import { motion } from "framer-motion";
import { 
  ClipboardCheck, 
  UserPlus, 
  Phone,
  CheckCircle2,
  FileText,
  Clock,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const admissionSteps = [
  { 
    title: "Enquiry", 
    desc: "Submit an online enquiry or visit the campus to learn more about our philosophy.",
    icon: Phone,
    color: "bg-blue-500",
    step: "01"
  },
  { 
    title: "Interaction", 
    desc: "A friendly interaction with the child and a conversation with the parents.",
    icon: UserPlus,
    color: "bg-purple-500",
    step: "02"
  },
  { 
    title: "Registration", 
    desc: "Complete the registration form and submit the required documentation.",
    icon: ClipboardCheck,
    color: "bg-amber-500",
    step: "03"
  },
  { 
    title: "Confirmation", 
    desc: "Once documents are verified, admission is confirmed upon fee payment.",
    icon: CheckCircle2,
    color: "bg-emerald-500",
    step: "04"
  },
];

export default function AdmissionsPage() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const childName = formData.get("childName");
    const parentName = formData.get("parentName");
    const applyingClass = formData.get("class");
    const email = formData.get("email");
    const phone = formData.get("phone");
    
    const text = `Hello Little Shines Team,\n\nI am looking for admission for my child:\nChild's Name: ${childName}\nApplying for Class: ${applyingClass}\n\nParent Details:\nName: ${parentName}\nPhone: ${phone}\nEmail: ${email}`;
    const whatsappNum = "919052053818";

    // Blast of celebration papers
    import("canvas-confetti").then((module) => {
      const confetti = module.default;
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#a855f7', '#ec4899', '#14b8a6', '#f59e0b']
      });
    });

    setTimeout(() => {
      window.open(`https://wa.me/${whatsappNum}?text=${encodeURIComponent(text)}`, "_blank");
      setIsSent(true);
    }, 500);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="Admissions 2024-25" 
        subtitle="Start your child's journey toward excellence. Our process is designed to be simple, transparent, and welcoming."
        gradient="bg-gradient-to-r from-emerald-900 to-primary"
        backgroundImage="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920"
      />

      {/* Admission Process */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Four Simple Steps</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              We guide you through every stage of the admission process to ensure a 
              smooth transition for your child.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {admissionSteps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(99,102,241,0.15)" }}
                className="relative p-7 sm:p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm text-center group transition-all cursor-default"
              >
                <span className="absolute top-6 right-7 text-4xl font-black text-slate-100 group-hover:text-primary/10 transition-colors select-none">
                  {step.step}
                </span>
                <div className={cn("w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform duration-300", step.color)}>
                  <step.icon size={30} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-5 -translate-y-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shadow-sm">
                      <ArrowRight size={16} className="text-slate-300" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Eligibility & Form */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-6 sm:space-y-8"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Eligibility &amp; <br />
              <span className="text-primary italic">Required Documents</span>
            </motion.h2>
            <motion.div variants={stagger} className="space-y-4">
              {[
                { title: "Age Criteria", desc: "Play Group: 2.5+ Years | Nursery: 3.5+ Years | Grade 1: 5.5+ Years", icon: Clock },
                { title: "Birth Certificate", desc: "Original or attested copy of the child's birth certificate.", icon: FileText },
                { title: "Photographs", desc: "Recent passport size photos of the child and both parents.", icon: ClipboardCheck },
                { title: "Past Records", desc: "Transfer certificate and report card from the previous school.", icon: CheckCircle2 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ x: 6 }}
                  className="flex gap-4 p-5 sm:p-6 rounded-2xl border border-slate-100 hover:bg-slate-50 hover:border-primary/20 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Admission Form */}
            <div className="p-8 sm:p-10 rounded-[3rem] bg-white border border-slate-200 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              {isSent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-100/50">
                    <CheckCircle2 size={40} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Enquiry Sent!</h3>
                    <p className="text-slate-500 max-w-sm mx-auto">
                      Thank you for your interest in Little Shines. Your enquiry has been sent via WhatsApp and our admissions team will contact you shortly.
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSent(false)}
                    className="px-8 py-3 rounded-xl bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 transition-colors"
                  >
                    Send Another Enquiry
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">Online Enquiry Form</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-600">Child's Full Name</label>
                      <input name="childName" required type="text" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all bg-slate-50 focus:bg-white text-sm" placeholder="Enter name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-600">Applying for Class</label>
                      <select name="class" required className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all bg-slate-50 focus:bg-white text-sm">
                        <option>Play Group</option>
                        <option>Nursery</option>
                        <option>LKG</option>
                        <option>UKG</option>
                        <option>Grade 1</option>
                        <option>Grade 2</option>
                        <option>Grade 3</option>
                        <option>Grade 4</option>
                        <option>Grade 5</option>
                        <option>Grade 6</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-600">Parent/Guardian Name</label>
                    <input name="parentName" required type="text" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all bg-slate-50 focus:bg-white text-sm" placeholder="Enter parent name" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-600">Email Address</label>
                      <input name="email" required type="email" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all bg-slate-50 focus:bg-white text-sm" placeholder="email@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-600">Phone Number</label>
                      <input name="phone" required type="tel" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all bg-slate-50 focus:bg-white text-sm" placeholder="+91 00000 00000" />
                    </div>
                  </div>
                  <motion.button 
                    type="submit" 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 sm:py-5 rounded-2xl bg-primary text-white font-bold text-base sm:text-lg shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-3 mt-2"
                  >
                    Send to WhatsApp
                  </motion.button>
                </form>
              )}
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
