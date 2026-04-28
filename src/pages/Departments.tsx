import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, ChevronRight, GraduationCap, Microscope, 
  Stethoscope, Heart, Brain, Bone, Activity, Baby, 
  Syringe, Eye, Thermometer, ShieldCheck, HeartPulse
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function Departments() {
  const [activePhase, setActivePhase] = useState('Phase-I');

  const phases = [
    {
      id: 'Phase-I',
      title: 'Phase-I',
      duration: '1.5 Years',
      icon: Microscope,
      subjects: [
        { 
          name: 'General Info for Phase-I', 
          code: 'PH-1/INFO',
          desc: 'Foundation course covering basic medical sciences and humanitarian aspects.',
          icon: BookOpen,
          head: { name: 'Dr. Sarah Jenkins', img: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=150' }
        },
        { 
          name: 'Anatomy', 
          code: 'PH-1/ANAT',
          desc: 'Study of human structure through dissection, histology, and embryology.',
          icon: Bone,
          head: { name: 'Dr. James Wilson', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=150' }
        },
        { 
          name: 'Physiology', 
          code: 'PH-1/PHYS',
          desc: 'Understanding the mechanical, physical, and biochemical functions of humans.',
          icon: Activity,
          head: { name: 'Dr. Michael Wright', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150' }
        },
        { 
          name: 'Biochemistry', 
          code: 'PH-1/BIOC',
          desc: 'Exploration of chemical processes within and relating to living organisms.',
          icon: Syringe,
          head: { name: 'Dr. Linda Carter', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=150' }
        }
      ]
    },
    {
      id: 'Phase-II',
      title: 'Phase-II',
      duration: '1 Year',
      icon: Microscope,
      subjects: [
        { name: 'General Info for Phase-II', code: 'PH-2/INFO', desc: 'Transitioning to clinical correlations and system-based learning.', icon: BookOpen, head: { name: 'Dr. Robert Miller', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=150' } },
        { name: 'Anatomy', code: 'PH-2/ANAT', desc: 'Advanced surgical anatomy and neuroanatomy focus.', icon: Bone, head: { name: 'Dr. James Wilson', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=150' } },
        { name: 'Physiology', code: 'PH-2/PHYS', desc: 'Systemic physiology and homeostatic mechanisms.', icon: Activity, head: { name: 'Dr. Michael Wright', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150' } },
        { name: 'Biochemistry', code: 'PH-2/BIOC', desc: 'Clinical biochemistry and metabolic disorders.', icon: Syringe, head: { name: 'Dr. Linda Carter', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=150' } }
      ]
    },
    {
      id: 'Phase-III',
      title: 'Phase-III',
      duration: '1 Year',
      icon: Microscope,
      subjects: [
        { name: 'General Info for Phase-III', code: 'PH-3/INFO', desc: 'Core clinical sciences and social medicine introduction.', icon: BookOpen, head: { name: 'Dr. Sophia Chen', img: 'https://images.unsplash.com/photo-1559839734-2b71f1e59816?auto=format&fit=crop&q=80&w=150' } },
        { name: 'Community Medicine & Public Health', code: 'PH-3/CMPH', desc: 'Population health, epidemiology, and health management.', icon: ShieldCheck, head: { name: 'Dr. Arthur Vance', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150' } },
        { name: 'Pathology', code: 'PH-3/PATH', desc: 'Diagnosis of disease through examination of organs and tissues.', icon: Microscope, head: { name: 'Dr. Emily Watson', img: 'https://images.unsplash.com/photo-1559839734-2b71f1e59816?auto=format&fit=crop&q=80&w=150' } },
        { name: 'Microbiology', code: 'PH-3/MICR', desc: 'Study of microorganisms, immunology, and infectious diseases.', icon: Microscope, head: { name: 'Dr. Kevin Tran', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150' } }
      ]
    },
    {
      id: 'Phase-IV',
      title: 'Phase-IV',
      duration: '1.5 Years',
      icon: Stethoscope,
      subjects: [
        { name: 'General Info for Phase-IV', code: 'PH-4/INFO', desc: 'Integrated clinical rotations and hospital-based practice.', icon: BookOpen, head: { name: 'Dr. Elizabeth Hartman', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=150' } },
        { name: 'Medicine', code: 'PH-4/MEDI', desc: 'Internal medicine diagnosis and non-surgical treatment.', icon: Stethoscope, head: { name: 'Dr. Elizabeth Hartman', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=150' } },
        { name: 'Paediatrics', code: 'PH-4/PAED', desc: 'Medical care of infants, children, and adolescents.', icon: Baby, head: { name: 'Dr. Sophia Chen', img: 'https://images.unsplash.com/photo-1559839734-2b71f1e59816?auto=format&fit=crop&q=80&w=150' } },
        { name: 'Surgery', code: 'PH-4/SURG', desc: 'Operative procedures and trauma management.', icon: Syringe, head: { name: 'Dr. Emily Watson', img: 'https://images.unsplash.com/photo-1559839734-2b71f1e59816?auto=format&fit=crop&q=80&w=150' } },
        { name: 'Cardiology', code: 'PH-4/CARD', desc: 'Advanced heart healthcare and interventional procedures.', icon: Heart, head: { name: 'Dr. Elizabeth Hartman', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=150' } },
        { name: 'Obstetrics & Gynaecology', code: 'PH-4/OBGY', desc: 'Women health, pregnancy, and childbirth management.', icon: Baby, head: { name: 'Dr. Sarah Jenkins', img: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=150' } }
      ]
    }
  ];

  const currentPhaseData = phases.find(p => p.id === activePhase);

  return (
    <div className="bg-[#fbfcff] min-h-screen">
      <div className="max-w-screen-2xl mx-auto border-x border-gray-100 min-h-screen flex flex-col md:flex-row">
        
        {/* Navigation Sidebar */}
        <aside className="w-full md:w-80 border-b md:border-b-0 md:border-r border-gray-100 p-8 flex flex-col justify-between sticky top-0 h-screen">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="w-12 h-1 bg-indigo-600 rounded-full" />
              <h1 className="text-4xl font-black tracking-tighter text-gray-900 leading-none">
                ACADEMIC <span className="text-indigo-600 block">UNITS</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Global Medical Center</p>
            </div>

            <nav className="space-y-2">
               <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-4">Phase Selection</div>
               {phases.map((phase) => (
                 <button
                    key={phase.id}
                    onClick={() => setActivePhase(phase.id)}
                    className={cn(
                      "w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between group",
                      activePhase === phase.id 
                        ? "bg-slate-900 text-white shadow-2xl shadow-indigo-200" 
                        : "text-gray-500 hover:bg-gray-50"
                    )}
                 >
                   <div className="flex items-center gap-3">
                     <span className={cn(
                       "font-mono text-xs font-bold",
                       activePhase === phase.id ? "text-indigo-400" : "text-gray-300"
                     )}>0{phases.indexOf(phase) + 1}</span>
                     <span className="font-bold tracking-tight">{phase.title}</span>
                   </div>
                   <div className={cn(
                     "w-1.5 h-1.5 rounded-full bg-indigo-500 transition-all",
                     activePhase === phase.id ? "scale-100" : "scale-0"
                   )} />
                 </button>
               ))}
            </nav>
          </div>

          <div className="space-y-6 pt-12">
            <div className="flex items-center gap-4 p-4 rounded-3xl bg-gray-50 border border-gray-100">
               <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center text-indigo-600">
                 <ShieldCheck className="w-5 h-5" />
               </div>
               <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Verification</div>
                  <div className="text-xs font-bold text-gray-900">MDR Standard 2026</div>
               </div>
            </div>
            <p className="text-[10px] text-gray-400 leading-relaxed px-2">
              All departmental data is synchronized with the central academic repository. Last sync: {new Date().toLocaleTimeString()}
            </p>
          </div>
        </aside>

        {/* Content Viewport */}
        <main className="flex-grow p-8 md:p-16 space-y-16">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-gray-100">
             <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
                   <Activity className="w-3 h-3" />
                   <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Status: Live Access</span>
                </div>
                <h2 className="text-6xl font-black tracking-tighter text-gray-900 uppercase leading-[0.8]">{activePhase}</h2>
             </div>
             <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden shrink-0">
               <div className="bg-white p-4 min-w-[120px]">
                  <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Duration</div>
                  <div className="text-xl font-mono font-bold tracking-tighter text-gray-900">{currentPhaseData?.duration}</div>
               </div>
               <div className="bg-white p-4 min-w-[120px]">
                  <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Resource Count</div>
                  <div className="text-xl font-mono font-bold tracking-tighter text-gray-900">{currentPhaseData?.subjects.length}</div>
               </div>
             </div>
          </header>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="grid grid-cols-1 xl:grid-cols-2 gap-8"
            >
              {currentPhaseData?.subjects.map((subject, i) => (
                <div 
                  key={subject.name}
                  className={cn(
                    "group relative p-1 transition-all rounded-[2.5rem]",
                    subject.name.includes('General Info') ? "xl:col-span-2" : ""
                  )}
                >
                  <div className={cn(
                    "relative z-10 p-10 rounded-[2.2rem] transition-all duration-500 h-full flex flex-col gap-10",
                    subject.name.includes('General Info')
                      ? "bg-indigo-600 text-white shadow-2xl shadow-indigo-200"
                      : "bg-white border border-gray-100 hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-500/5"
                  )}>
                    <div className="flex items-start justify-between">
                       <div className={cn(
                         "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-inner",
                         subject.name.includes('General Info') ? "bg-white/10" : "bg-gray-50 text-gray-400 group-hover:bg-indigo-600 group-hover:text-white"
                       )}>
                         <subject.icon className="w-8 h-8" />
                       </div>
                       <div className={cn(
                         "font-mono text-[10px] font-bold tracking-[0.3em] uppercase",
                         subject.name.includes('General Info') ? "text-indigo-200" : "text-gray-300"
                       )}>
                         {subject.code}
                       </div>
                    </div>

                    <div className="space-y-4 flex-grow">
                      <h3 className={cn(
                        "text-3xl font-black tracking-tighter leading-none transition-colors",
                        subject.name.includes('General Info') ? "text-4xl" : "text-gray-900 group-hover:text-indigo-600"
                      )}>
                        {subject.name}
                      </h3>
                      <p className={cn(
                        "text-sm font-light leading-relaxed max-w-lg",
                        subject.name.includes('General Info') ? "text-indigo-100" : "text-gray-400"
                      )}>
                        {subject.desc}
                      </p>
                    </div>

                    <div className={cn(
                      "pt-8 border-t flex items-center justify-between",
                      subject.name.includes('General Info') ? "border-white/10" : "border-gray-50"
                    )}>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-black/5">
                          <img src={subject.head.img} alt={subject.head.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-0.5">
                          <div className={cn("text-[10px] font-bold uppercase tracking-widest", subject.name.includes('General Info') ? "text-indigo-300" : "text-gray-400")}>Unit Director</div>
                          <div className="text-xs font-bold leading-none">{subject.head.name}</div>
                        </div>
                      </div>
                      <button className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                        subject.name.includes('General Info') ? "bg-white/10 hover:bg-white text-indigo-600" : "bg-gray-50 hover:bg-indigo-600 hover:text-white text-gray-400"
                      )}>
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Technical Footer Section */}
          <footer className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 border border-gray-100 rounded-3xl overflow-hidden mt-20 shadow-sm">
             {[
               { label: 'Network', value: 'Global Med Net' },
               { label: 'Protocols', value: 'Secure Clinical' },
               { label: 'Uptime', value: '99.98% Active' },
               { label: 'Engine', value: 'GMC Cloud V2' }
             ].map(item => (
               <div key={item.label} className="bg-white p-8">
                  <div className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-2">{item.label}</div>
                  <div className="text-sm font-mono font-bold text-gray-900 uppercase tracking-tighter">{item.value}</div>
               </div>
             ))}
          </footer>
        </main>
      </div>
    </div>
  );
}

