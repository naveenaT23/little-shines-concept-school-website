"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import ClassDetailModal from "@/components/shared/ClassDetailModal";
import { 
  BookOpen, 
  Lightbulb, 
  Award, 
  Puzzle, 
  Users, 
  BrainCircuit,
  ChevronRight,
  Baby,
  ToyBrick,
  Palette,
  GraduationCap
} from "lucide-react";

const curriculumHighlights = [
  { 
    title: "CBSE Syllabus", 
    desc: "Following the National Curriculum Framework (NCF) with modern adaptations.",
    icon: BookOpen 
  },
  { 
    title: "Activity-Based Learning", 
    desc: "Hands-on projects and experiments to make concepts concrete.",
    icon: Puzzle 
  },
  { 
    title: "Continuous Assessment", 
    desc: "Regular feedback loops and holistic growth monitoring.",
    icon: Award 
  },
  { 
    title: "Tech Integration", 
    desc: "Digital literecy and smart classroom tools for 21st-century skills.",
    icon: BrainCircuit 
  },
];

const stages = [
  { 
    title: "Foundation Stage", 
    classes: "Play Group & Nursery", 
    age: "2 - 4 Years",
    desc: "Social skills, sensory play, and basic motor development.",
    longDesc: "The foundation stage is critical for a child's early development. We combine Play Group and Nursery to provide a seamless transition from home to school, focusing on emotional safety, sensory exploration, and building initial social bonds.",
    icon: Baby,
    color: "bg-pink-500",
    lightColor: "bg-pink-50",
    borderColor: "border-pink-200",
    curriculum: ["Sensory play & exploration", "Basic social skills", "Gross motor activities", "Language through rhymes", "Potty training support"]
  },
  { 
    title: "Preparatory Stage", 
    classes: "LKG & UKG", 
    age: "4 - 6 Years",
    desc: "Literacy, numeracy, phonics, and creative expression.",
    longDesc: "This stage focuses on formalizing the learning process while keeping it fun and interactive. We prepare children for primary school by strengthening their literacy and numeracy foundations through phonics and storytelling.",
    icon: ToyBrick,
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    borderColor: "border-blue-200",
    curriculum: ["Advanced Phonics", "Sentence formation", "Basic arithmetic", "Environmental awareness", "Public speaking basics"]
  },
  { 
    title: "Primary Stage I", 
    classes: "Grade 1 - 3", 
    age: "6 - 8 Years",
    desc: "Environmental studies, languages, and mathematical foundations.",
    longDesc: "Grade 1 to 3 marks the beginning of formal academic exploration. We follow the CBSE curriculum with a heavy focus on conceptual understanding, linguistic proficiency, and developing a love for reading.",
    icon: Palette,
    color: "bg-amber-500",
    lightColor: "bg-amber-50",
    borderColor: "border-amber-200",
    curriculum: ["Core CBSE subjects", "Conceptual Mathematics", "Environmental Science", "Computer literacy", "Creative Arts integration"]
  },
  { 
    title: "Primary Stage II", 
    classes: "Grade 4 - 6", 
    age: "9 - 11 Years",
    desc: "Advanced science, analytical thinking, and leadership projects.",
    longDesc: "For our senior-most students, we offer a rigorous yet balanced syllabus that encourages independent thinking, research-based projects, and leadership qualities. We focus on preparing them for the academic challenges of middle school.",
    icon: GraduationCap,
    color: "bg-primary",
    lightColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    curriculum: ["Analytical Problem Solving", "Advanced Scientific Study", "Leadership Workshops", "Digital Citizenship", "Competitive Exam Foundation"]
  },
];

export default function AcademicsPage() {
  const [selectedStage, setSelectedStage] = useState<null | typeof stages[0]>(null);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="Academics" 
        subtitle="A future-ready curriculum designed to foster critical thinking, creativity, and a lifelong love for learning."
        gradient="bg-gradient-to-r from-emerald-900 to-primary"
        backgroundImage="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1920"
      />

      {/* Class Structure */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Class Structure</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our academic journey is divided into four key stages to ensure age-appropriate development.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="space-y-12"
          >
            {stages.map((item, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                onClick={() => setSelectedStage(item)}
                className="group relative cursor-pointer p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col md:flex-row gap-8 items-center hover:bg-white hover:shadow-xl transition-all"
              >
                <div className={`w-20 h-20 rounded-2xl ${item.color} text-white flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-6 transition-transform text-2xl font-bold`}>
                  <item.icon size={32} />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-primary font-bold mb-3">{item.classes}</p>
                  <p className="text-slate-600 leading-relaxed max-w-2xl">{item.desc}</p>
                </div>
                <div className="hidden lg:flex items-center gap-2 text-primary font-bold">
                  View Details <ChevronRight size={20} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Curriculum Highlights Grid */}
      <section className="py-24 bg-slate-900 text-white px-6 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
           <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
           <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Teaching <span className="text-emerald-400">Methodology</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We go beyond textbooks to ensure that every student truly understands 
              the "why" and "how" behind every concept.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculumHighlights.map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                <item.icon className="text-emerald-400 mb-6" size={40} />
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Based Learning */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              Learning Through <span className="text-primary italic">Doing</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At Little Shines, we believe that children learn best when they are 
              actively engaged. Our classrooms are hubs of collaboration where 
              experiments, role-plays, and creative projects are part of the 
              daily routine.
            </p>
            <ul className="space-y-4">
              {[
                "Thematic learning units",
                "Regular field trips and outdoor exploration",
                "Hands-on science and math labs",
                "Collaborative group projects"
              ].map((text, i) => (
                <li key={i} className="flex gap-3 items-center text-slate-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <ChevronRight size={14} />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
               <div className="h-64 rounded-3xl bg-blue-100 overflow-hidden relative">
                 <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400" className="object-cover w-full h-full" alt="learning" />
               </div>
               <div className="h-48 rounded-3xl bg-pink-100 overflow-hidden relative">
                 <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400" className="object-cover w-full h-full" alt="lab" />
               </div>
            </div>
            <div className="space-y-4">
               <div className="h-48 rounded-3xl bg-amber-100 overflow-hidden relative">
                 <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=400" className="object-cover w-full h-full" alt="library" />
               </div>
               <div className="h-64 rounded-3xl bg-emerald-100 overflow-hidden relative">
                 <img src="https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=400" className="object-cover w-full h-full" alt="art" />
               </div>
            </div>
          </div>
        </div>
      </section>

      <ClassDetailModal 
        isOpen={!!selectedStage} 
        onClose={() => setSelectedStage(null)} 
        data={selectedStage ? {
          ...selectedStage,
          // Map stage fields to modal fields if needed (current structure matches)
        } : null} 
      />

      <Footer />
    </main>
  );
}

