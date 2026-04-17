"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16 relative z-10"
      >
        {/* School Info */}
        <motion.div variants={fadeUp} className="space-y-5 sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-3 group w-fit">
            <div className="relative w-12 h-12 transition-transform group-hover:scale-105">
              <img 
                src="/logo.jpg" 
                alt="Little Shines Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white leading-none">
                LITTLE SHINES
              </span>
              <span className="text-[10px] font-semibold text-primary uppercase tracking-widest leading-none mt-1">
                Concept School
              </span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
            Empowering young minds with a foundation of excellence and a passion for learning. Our CBSE curriculum ensures holistic development for every child.
          </p>
          <div className="flex gap-3">
            {[
              { icon: Facebook, href: "#", label: "Facebook" },
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Youtube, href: "#", label: "YouTube" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeUp}>
          <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: "About Us", href: "/about" },
              { label: "Admission Process", href: "/admissions" },
              { label: "Our Facilities", href: "/facilities" },
              { label: "Student Activities", href: "/activities" },
              { label: "Media Gallery", href: "/gallery" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-primary group-hover:scale-150 transition-all" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Academics */}
        <motion.div variants={fadeUp}>
          <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Academics</h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: "Play Group & Nursery", href: "/academics" },
              { label: "LKG & UKG", href: "/academics" },
              { label: "Primary (Grade 1-6)", href: "/academics" },
              { label: "CBSE Curriculum", href: "/academics" },
              { label: "Teaching Methodology", href: "/academics" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-primary group-hover:scale-150 transition-all" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact info */}
        <motion.div variants={fadeUp} className="space-y-5">
          <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-start">
              <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
              <span className="text-slate-400 leading-relaxed max-w-xs">78/9 pedagadi, rampuram,<br />pendurthi mandal visakhapatnam<br />531173, andhra pradesh, india.</span>
            </li>
            <li>
              <a href="tel:+919052053818" className="flex gap-3 font-medium italic text-white hover:text-primary transition-colors">
                <Phone size={18} className="text-primary shrink-0" />
                +91 90520 53818
              </a>
            </li>
            <li>
              <a href="mailto:info@littleshinesconceptschool.com" className="flex gap-3 hover:text-primary transition-colors break-all">
                <Mail size={18} className="text-primary shrink-0 mt-0.5" />
                <span>info@littleshinesconceptschool.com</span>
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto pt-6 sm:pt-8 border-t border-slate-800 text-center text-xs text-slate-500 relative z-10">
        <p>&copy; {new Date().getFullYear()} Little Shines Concept School. All rights reserved. Designed with ❤️ for future leaders.</p>
      </div>
    </footer>
  );
}
