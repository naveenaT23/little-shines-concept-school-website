"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { id: 1, title: "Campus Highlight 1", image: "/download (1).jpg" },
  { id: 2, title: "Campus Highlight 2", image: "/download (2).jpg" },
  { id: 3, title: "Campus Highlight 3", image: "/download (3).jpg" },
  { id: 4, title: "Campus Highlight 4", image: "/download (4).jpg" },
  { id: 5, title: "Campus Highlight 5", image: "/download (5).jpg" },
  { id: 6, title: "Campus Highlight 6", image: "/download (6).jpg" },
  { id: 7, title: "Campus Highlight 7", image: "/download (7).jpg" },
  { id: 8, title: "Little Shines Memory 8", image: "/f1035684-df87-4567-9a96-621a32ad033e.jpg" },
  { id: 9, title: "Little Shines Memory 9", image: "/images.jpg" },
  { id: 10, title: "Student Activity 10", image: "/IMG-20241211-WA0019.jpg (1).jpeg" },
  { id: 11, title: "Student Activity 11", image: "/IMG-20241211-WA0026.jpg.jpeg" },
  { id: 12, title: "Student Activity 12", image: "/IMG-20241212-WA0009-2.jpg.jpeg" },
  { id: 13, title: "Student Activity 13", image: "/IMG-20241212-WA0009-3.jpg.jpeg" },
  { id: 14, title: "Student Activity 14", image: "/IMG-20241212-WA0009.jpg.jpeg" },
  { id: 15, title: "Student Activity 15", image: "/IMG-20241212-WA0016.jpg.jpeg" },
  { id: 16, title: "Student Activity 16", image: "/IMG-20241213-WA0002.jpg.jpeg" },
  { id: 17, title: "Student Activity 17", image: "/IMG-20250816-WA0025.jpg.jpeg" },
  { id: 18, title: "Student Activity 18", image: "/IMG-20251017-WA0011.jpg.jpeg" },
  { id: 19, title: "Student Activity 19", image: "/IMG-20251017-WA0013.jpg.jpeg" },
  { id: 20, title: "Student Activity 20", image: "/IMG-20251017-WA0016.jpg.jpeg" },
  { id: 21, title: "Student Activity 21", image: "/IMG-20251018-WA0022.jpg.jpeg" },
  { id: 22, title: "Student Activity 22", image: "/IMG-20251128-WA0008.jpg.jpeg" },
  { id: 23, title: "Student Activity 23", image: "/IMG-20251211-WA0008.jpg.jpeg" },
  { id: 24, title: "Student Activity 24", image: "/IMG-20260307-WA0000.jpg.jpeg" },
  { id: 25, title: "Student Activity 25", image: "/IMG-20260307-WA0001.jpg.jpeg" },
  { id: 26, title: "Student Activity 26", image: "/IMG-20260307-WA0002.jpg.jpeg" },
  { id: 27, title: "Student Activity 27", image: "/IMG20251224132453.jpg.jpeg" },
  { id: 28, title: "Student Activity 28", image: "/IMG20260110101624.jpg.jpeg" },
  { id: 29, title: "Student Activity 29", image: "/IMG20260110101957.jpg.jpeg" },
  { id: 30, title: "Student Activity 30", image: "/IMG20260110102034.jpg.jpeg" },
  { id: 31, title: "Student Activity 31", image: "/IMG20260110102046.jpg.jpeg" },
  { id: 32, title: "Student Activity 32", image: "/IMG20260110103057.jpg.jpeg" },
  { id: 33, title: "Student Activity 33", image: "/IMG20260110103854_01.jpg.jpeg" },
  { id: 34, title: "Student Activity 34", image: "/IMG20260110104400_01.jpg.jpeg" },
  { id: 35, title: "Student Activity 35", image: "/IMG20260110105408.jpg.jpeg" },
  { id: 36, title: "Student Activity 36", image: "/IMG20260110113105.jpg.jpeg" },
  { id: 37, title: "Student Activity 37", image: "/IMG20260110115954.jpg.jpeg" },
  { id: 38, title: "Student Activity 38", image: "/IMG20260123095922.jpg.jpeg" },
  { id: 39, title: "Student Activity 39", image: "/IMG20260123100754_BURST000_COVER.jpg.jpeg" },
  { id: 40, title: "Student Activity 40", image: "/IMG20260123100845.jpg.jpeg" },
  { id: 41, title: "Student Activity 41", image: "/IMG20260123100857.jpg.jpeg" },
  { id: 42, title: "Student Activity 42", image: "/IMG20260307112946_BURST012.jpg.jpeg" },

  { id: 46, title: "School Event Captured 46", image: "/WhatsApp Image 2026-04-14 at 3.54.10 PM.jpeg" },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);

  const selected = selectedIndex !== null ? photos[selectedIndex] : null;

  const goNext = () => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % photos.length);
  };

  const goPrev = () => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="School Gallery" 
        subtitle="Exploring the vibrant life and memorable moments of Little Shines Concept School."
        gradient="bg-gradient-to-r from-purple-900 to-primary"
        backgroundImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1920"
      />

      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.07 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                variants={{
                  hidden: { opacity: 0, scale: 0.92 },
                  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                whileHover={{ y: -4 }}
                className="relative cursor-pointer group rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all"
                onClick={() => setSelectedIndex(index)}
              >
                <img 
                  src={photo.image} 
                  alt={photo.title} 
                  className="w-full aspect-[4/3] object-cover object-top group-hover:scale-105 transition-transform duration-500 bg-purple-50/30"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white"
                  >
                    <Search size={22} />
                  </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-bold text-sm sm:text-base">{photo.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-12"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close */}
            <button 
              className="absolute top-5 right-5 sm:top-8 sm:right-8 text-white/70 hover:text-white transition-colors p-2 z-10"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={36} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-2 z-10"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
            >
              <ChevronLeft size={40} />
            </button>

            {/* Next */}
            <button
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-2 z-10"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
            >
              <ChevronRight size={40} />
            </button>

            <motion.div
              key={selected.id}
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className="max-w-5xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selected.image} 
                alt={selected.title} 
                className="w-full h-auto max-h-[75vh] object-contain rounded-xl shadow-2xl" 
              />
              <div className="mt-5 text-center">
                <h4 className="text-xl sm:text-2xl font-bold text-white">{selected.title}</h4>
                <p className="text-white/50 text-sm mt-1">{(selectedIndex ?? 0) + 1} / {photos.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
