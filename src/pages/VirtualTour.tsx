import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Map, Box, Camera, Info } from 'lucide-react';

export default function VirtualTour() {
  const { t } = useTranslation();

  const areas = [
    { name: 'Main Campus', image: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1200', desc: 'The heart of GMC with modern architecture and green spaces.' },
    { name: 'Medical Lab', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1200', desc: 'Advanced diagnostics and research facility.' },
    { name: 'Anatomy Hall', image: 'https://images.unsplash.com/photo-1532187875605-2fe358a71424?auto=format&fit=crop&q=80&w=1200', desc: 'State-of-the-art anatomy learning center.' },
    { name: 'Student Lounge', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200', desc: 'Collaborative space for rest and study.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight flex items-center justify-center gap-3">
          <Map className="w-10 h-10 text-indigo-600" />
          Virtual Campus Tour
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">Experience our world-class facilities from anywhere in the world. Click on an area to explore in 360°.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {areas.map((area, i) => (
          <motion.div
            key={area.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group relative h-96 rounded-[2rem] overflow-hidden shadow-xl cursor-pointer"
          >
            <img 
              src={area.image} 
              alt={area.name} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
              <div className="flex items-center gap-2 text-indigo-400 mb-2">
                <Box className="w-5 h-5 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest">Interactive 360°</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{area.name}</h3>
              <p className="text-sm text-gray-300 font-light max-w-md">{area.desc}</p>
            </div>
            <div className="absolute top-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
               <Camera className="w-6 h-6 text-white" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 text-white overflow-hidden relative">
         <div className="shrink-0">
           <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/20">
             <Info className="w-12 h-12" />
           </div>
         </div>
         <div className="space-y-4">
           <h2 className="text-3xl font-bold">Planned Expansion 2026</h2>
           <p className="text-slate-400 font-light leading-relaxed max-w-xl">
             We are currently constructing a new Oncology Center and a 500-seat digital auditorium to further enhance our campus capabilities.
           </p>
         </div>
         <div className="absolute top-0 left-1/2 w-full h-full bg-indigo-600/10 -translate-x-1/2 blur-[80px]" />
      </div>
    </div>
  );
}
