import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { NEWS } from '../data/news';
import { Newspaper } from 'lucide-react';

export default function NewsTicker() {
  // Triple the news to ensure seamless infinite scroll
  const tickerNews = [...NEWS, ...NEWS, ...NEWS];

  return (
    <div className="bg-slate-900 border-y border-white/5 py-4 overflow-hidden relative flex items-center">
      {/* Label */}
      <div className="absolute left-0 top-0 bottom-0 px-6 bg-indigo-600 flex items-center gap-2 z-20 shadow-[20px_0_40px_rgba(79,70,229,0.3)]">
        <Newspaper className="w-4 h-4 text-white" />
        <span className="text-[10px] font-black text-white uppercase tracking-widest whitespace-nowrap">Campus Live</span>
      </div>

      {/* Ticker Container */}
      <div className="flex-grow overflow-hidden">
        <motion.div 
          className="flex gap-16 items-center whitespace-nowrap pl-[160px]"
          animate={{ x: [0, -1500] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {tickerNews.map((item, idx) => (
            <Link 
              key={`${item.id}-${idx}`} 
              to="/news"
              className="group flex items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest bg-indigo-600/10 px-2 py-0.5 rounded border border-indigo-500/20">
                {item.category}
              </span>
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                {item.title}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Right Fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10" />
    </div>
  );
}
