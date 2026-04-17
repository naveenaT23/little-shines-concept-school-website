"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Baby, ToyBrick, Pencil, BookOpen, GraduationCap, Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import ClassDetailModal from "@/components/shared/ClassDetailModal";

const classes = [
  {
    title: "Play Group",
    age: "2 - 3 Years",
    desc: "Early social skills and play-based learning in a nurturing environment.",
    longDesc: "Our Play Group program focuses on transitioning children from home to school through a secure and stimulating environment. We emphasize social-emotional development and sensory experiences that lay the foundation for future learning.",
    icon: Baby,
    color: "bg-pink-500",
    lightColor: "bg-pink-50",
    borderColor: "border-pink-200",
    curriculum: ["Sensory play & exploration", "Basic social skills", "Gross motor activities", "Language through rhymes", "Potty training support"]
  },
  {
    title: "Nursery",
    age: "3 - 4 Years",
    desc: "Building a foundation for literacy and numeracy through creative activities.",
    longDesc: "The Nursery curriculum is designed to spark curiosity and build a foundation for lifelong learning. We introduce structured play and early academic concepts through a blend of physical activities and creative expression.",
    icon: ToyBrick,
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    borderColor: "border-blue-200",
    curriculum: ["Beginner Phonics", "Number recognition 1-20", "Color & Shape discovery", "Creative arts & crafts", "Confidence building"]
  },
  {
    title: "LKG",
    age: "4 - 5 Years",
    desc: "Developing pre-writing and communication skills with interactive tools.",
    longDesc: "Lower Kindergarten focuses on developing literacy and numeracy skills in a fun, interactive way. Children start forming sentences, understanding basic math concepts, and exploring the world around them.",
    icon: Pencil,
    color: "bg-amber-500",
    lightColor: "bg-amber-50",
    borderColor: "border-amber-200",
    curriculum: ["Advanced Phonics", "Simple sentence formation", "Basic arithmetic concepts", "Environmental awareness", "Public speaking skills"]
  },
  {
    title: "UKG",
    age: "5 - 6 Years",
    desc: "Preparing for primary school with advanced phonics and math concepts.",
    longDesc: "Upper Kindergarten prepares children for the transition to primary school. The curriculum becomes more academic while maintaining an activity-based approach that ensures comprehension and engagement.",
    icon: BookOpen,
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    curriculum: ["Reading & Storytelling", "Spelling & Dictation", "Addition & Subtraction", "Social studies foundation", "Independent project work"]
  },
  {
    title: "Grade 1 - 3",
    age: "6 - 8 Years",
    desc: "Core CBSE subjects with focus on understanding and application.",
    longDesc: "Primary Stage I emphasizes the core subjects of the CBSE curriculum. We focus on conceptual understanding and developing critical thinking skills through hands-on experiments and collaborative projects.",
    icon: Palette,
    color: "bg-purple-500",
    lightColor: "bg-purple-50",
    borderColor: "border-purple-200",
    curriculum: ["Linguistic proficiency", "Mathematics in daily life", "Science exploration", "Computers & Coding basics", "Co-curricular integration"]
  },
  {
    title: "Grade 4 - 6",
    age: "9 - 11 Years",
    desc: "Enhanced syllabus with extracurricular projects and leadership skills.",
    longDesc: "Primary Stage II challenges students with a more rigorous academic schedule while fostering leadership, independent research skills, and a deeper understanding of complex scientific and mathematical concepts.",
    icon: GraduationCap,
    color: "bg-rose-500",
    lightColor: "bg-rose-50",
    borderColor: "border-rose-200",
    curriculum: ["Analytical Scientific study", "Complex Problem Solving", "Advanced Language Labs", "Leadership workshops", "Competitive exam foundation"]
  },
];

export default function CurriculumSection() {
  const [selectedClass, setSelectedClass] = useState<null | typeof classes[0]>(null);

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-5"
          >
            Nurturing Excellence Across All <span className="text-primary italic">Grade Levels</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-slate-600"
          >
            Our CBSE-based curriculum is carefully crafted to evolve with your child, 
            ensuring they are always challenged, engaged, and supported.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {classes.map((cls, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedClass(cls)}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 25 }}
              className={cn(
                "p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border-2 transition-all shadow-sm cursor-pointer group flex flex-col",
                cls.lightColor,
                cls.borderColor,
                "hover:shadow-2xl hover:shadow-primary/5"
              )}
            >
              <div className={cn("w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white mb-5 sm:mb-6 shadow-md transition-transform group-hover:scale-110 group-hover:rotate-6", cls.color)}>
                <cls.icon size={26} />
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{cls.age}</p>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">{cls.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6 flex-1">
                {cls.desc}
              </p>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedClass(cls);
                }}
                className={cn("font-bold text-sm flex items-center gap-2 transition-colors mt-auto", `text-${cls.color.split('-')[1]}-600`)}
              >
                Learn More
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:translate-x-1 transition-transform">
                  <span className="text-xs font-black">→</span>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <ClassDetailModal 
        isOpen={!!selectedClass} 
        onClose={() => setSelectedClass(null)} 
        data={selectedClass} 
      />
    </section>
  );
}
