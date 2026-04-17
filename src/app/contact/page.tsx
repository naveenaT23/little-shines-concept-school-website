"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe, CheckCircle2 } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

export default function ContactPage() {
  const [isSent, setIsSent] = useState(false);

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const phone = "919052053818";
    
    const text = `Hello Little Shines Team,\n\nI have a new enquiry:\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    
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
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
      setIsSent(true);
    }, 500);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <PageHero 
        title="Contact Us" 
        subtitle="We're here to answer your questions and welcome you to our community. Reach out to us anytime."
        gradient="bg-gradient-to-r from-blue-900 to-indigo-900"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920"
      />

      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          
          {/* Contact Details */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="lg:col-span-1 space-y-6"
          >
            <motion.div variants={fadeUp} className="p-8 sm:p-10 rounded-[3rem] bg-white border border-slate-200 shadow-sm space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Globe size={20} />
                  </div>
                  Visit Us
                </h3>
                <div className="space-y-5">
                  <motion.div variants={fadeUp} className="flex gap-4 group cursor-default">
                    <MapPin className="text-primary shrink-0 group-hover:scale-110 transition-transform" size={22} />
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      78/9 pedagadi, rampuram,<br />
                      pendurthi mandal visakhapatnam<br />
                      531173, andhra pradesh, india.
                    </p>
                  </motion.div>
                  <motion.a
                    variants={fadeUp}
                    href="tel:+919052053818"
                    className="flex gap-4 group hover:text-primary transition-colors"
                  >
                    <Phone className="text-primary shrink-0 group-hover:scale-110 transition-transform" size={22} />
                    <div>
                      <p className="font-bold text-slate-900 group-hover:text-primary transition-colors text-sm sm:text-base">+91 90520 53818</p>
                      <p className="text-xs text-slate-400 italic">Pre-admission Enquiries</p>
                    </div>
                  </motion.a>
                  <motion.a
                    variants={fadeUp}
                    href="mailto:info@littleshines.edu.in"
                    className="flex gap-4 group hover:text-primary transition-colors"
                  >
                    <Mail className="text-primary shrink-0 group-hover:scale-110 transition-transform" size={22} />
                    <p className="text-slate-600 font-medium group-hover:text-primary transition-colors text-sm sm:text-base">info@littleshines.edu.in</p>
                  </motion.a>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Clock size={20} />
                  </div>
                  Office Hours
                </h3>
                <div className="space-y-3 text-slate-600 text-sm sm:text-base">
                  {[
                    { day: "Mon - Fri:", time: "8:00 AM - 4:00 PM", highlight: false },
                    { day: "Saturday:", time: "9:00 AM - 1:00 PM", highlight: false },
                    { day: "Sunday:", time: "Closed", highlight: true },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                      <span className="text-slate-500">{row.day}</span>
                      <span className={row.highlight ? "text-rose-500 font-bold" : "font-bold text-slate-900"}>{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="p-8 sm:p-12 lg:p-16 rounded-[3.5rem] bg-white border border-slate-200 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Send a Message</h2>
                <p className="text-slate-500 mb-8 text-base sm:text-lg">
                  Have a specific question? Fill out the form below and we'll get back to you 
                  as soon as possible.
                </p>

                {isSent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-100/50">
                      <CheckCircle2 size={40} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Message Sent!</h3>
                      <p className="text-slate-500 max-w-sm mx-auto">
                        Thank you for reaching out. We have received your enquiry via WhatsApp and will get back to you shortly.
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsSent(false)}
                      className="px-8 py-3 rounded-xl bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 transition-colors"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Your Name</label>
                        <input name="name" required type="text" className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:border-primary/40 focus:bg-white focus:outline-none transition-all text-sm" placeholder="Enter full name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                        <input name="email" required type="email" className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:border-primary/40 focus:bg-white focus:outline-none transition-all text-sm" placeholder="email@address.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Subject</label>
                      <select name="subject" className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:border-primary/40 focus:bg-white focus:outline-none transition-all appearance-none cursor-pointer text-sm">
                        <option>General Enquiry</option>
                        <option>Admission Related</option>
                        <option>Campus Visit</option>
                        <option>Feedback</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Your Message</label>
                      <textarea name="message" required rows={5} className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:border-primary/40 focus:bg-white focus:outline-none transition-all resize-none text-sm" placeholder="How can we help you?"></textarea>
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-5 rounded-2xl bg-slate-900 text-white font-bold text-lg shadow-2xl hover:bg-primary transition-all flex items-center justify-center gap-4"
                    >
                      <MessageSquare size={22} />
                      Send via WhatsApp
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="h-[400px] sm:h-[500px] w-full bg-slate-200 overflow-hidden"
      >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252.05711602258998!2d83.17838894619979!3d17.799612006759983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3967a180a56577%3A0x87d1876577b38a3e!2sLittle%20shines%20concept%20English%20medium%20school!5e1!3m2!1sen!2sin!4v1776401586345!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        />
      </motion.section>

      <Footer />
    </main>
  );
}
