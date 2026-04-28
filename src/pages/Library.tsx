import React, { useState } from 'react';
import { 
  Library as LibraryIcon, Search, SearchCode, Database, 
  Map, Clock, Globe, BookOpen, ChevronRight, Hash, 
  LayoutGrid, List, FileSearch, Pin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Library() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const books = [
    { id: 'b1', title: 'Guyton & Hall: Textbook of Physiology', author: 'Guyton', section: 'Physiology', code: '612.01 CAL', type: 'Physical' },
    { id: 'b2', title: 'Gray\'s Anatomy', author: 'Henry Gray', section: 'Anatomy', code: '611 GRA', type: 'Electronic' },
    { id: 'b3', title: 'Harrisons Principles of Internal Medicine', author: 'Harrison', section: 'Medicine', code: '616 HAR', type: 'Physical' },
    { id: 'b4', title: 'Bailey & Love\'s Short Practice of Surgery', author: 'Bailey', section: 'Surgery', code: '617 BAI', type: 'Physical' },
    { id: 'b5', title: 'Robbins Basic Pathology', author: 'Robbins', section: 'Pathology', code: '616.07 ROB', type: 'Electronic' },
    { id: 'b6', title: 'The ECG Made Easy', author: 'John Hampton', section: 'Cardiology', code: 'E-RESOURCES', type: 'Electronic' }
  ];

  return (
    <div className="bg-[#fbfcff] min-h-screen text-gray-900">
      <div className="max-w-screen-2xl mx-auto border-x border-gray-100 flex flex-col md:flex-row min-h-screen">
        
        {/* Navigation Rail */}
        <nav className="w-full md:w-28 bg-white border-r border-gray-100 flex md:flex-col items-center py-12 gap-12 sticky top-0 md:h-screen overflow-x-auto md:overflow-x-visible no-scrollbar px-4 md:px-0">
           <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-2xl shadow-indigo-200 shrink-0">
              <LibraryIcon className="w-7 h-7" />
           </div>
           
           <div className="flex md:flex-col gap-10">
              {[SearchCode, Database, Map, Clock, Globe].map((Icon, idx) => (
                <button key={idx} className="w-12 h-12 rounded-2xl flex items-center justify-center text-gray-300 hover:bg-indigo-50 hover:text-indigo-600 transition-all shrink-0">
                   <Icon className="w-6 h-6" />
                </button>
              ))}
           </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-grow p-8 md:p-16 space-y-16">
          
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-gray-100">
             <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
                   <Database className="w-3 h-3" />
                   <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Resource Terminal: GMC-LIB-04</span>
                </div>
                <h1 className="text-6xl font-black tracking-tighter text-gray-900 uppercase leading-[0.8]">Digital <span className="text-indigo-600">Library</span></h1>
                <p className="text-gray-400 font-medium max-w-xl">Access our centralized medical repository featuring over 30,000 physical and digital scholarly assets.</p>
             </div>

             <div className="flex bg-gray-50 rounded-2xl border border-gray-100 p-1.5 shadow-sm">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={cn("p-3 rounded-xl transition-all", viewMode === 'grid' ? "bg-white text-indigo-600 shadow-xl shadow-indigo-500/5 ring-1 ring-black/5" : "text-gray-400")}
                >
                  <LayoutGrid className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={cn("p-3 rounded-xl transition-all", viewMode === 'list' ? "bg-white text-indigo-600 shadow-xl shadow-indigo-500/5 ring-1 ring-black/5" : "text-gray-400")}
                >
                  <List className="w-5 h-5" />
                </button>
             </div>
          </header>

          <section className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative shadow-2xl shadow-indigo-100">
             <div className="relative z-10 space-y-12">
                <div className="max-w-xl space-y-4">
                   <h2 className="text-5xl font-black tracking-tighter leading-[0.9] uppercase">Global Repository <span className="text-indigo-400">Search</span></h2>
                   <p className="text-slate-400 text-lg font-light leading-relaxed">Instantly locate specialized clinical texts using the shelf-sync algorithm.</p>
                </div>
                
                <div className="relative max-w-4xl group">
                   <Search className="absolute left-8 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                   <input 
                    type="text" 
                    placeholder="Reference code, Title or Scholar name..." 
                    className="w-full pl-20 pr-10 py-10 bg-white/5 border border-white/10 rounded-[3rem] outline-none text-2xl font-light focus:bg-white/10 focus:border-white/20 transition-all backdrop-blur-md"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                   />
                </div>
             </div>
             <BookOpen className="absolute bottom-0 right-0 w-96 h-96 text-white/5 -rotate-12 translate-y-1/4 translate-x-1/4" />
          </section>

          <section className={cn(
            "grid gap-8",
            viewMode === 'grid' ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
          )}>
             <AnimatePresence mode="popLayout">
                {books.filter(b => b.title.toLowerCase().includes(searchQuery.toLowerCase())).map((book, i) => (
                  <motion.div 
                    key={book.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "bg-white rounded-[2.5rem] border border-gray-100 transition-all flex flex-col justify-between group overflow-hidden",
                      viewMode === 'grid' ? "p-10 hover:shadow-2xl hover:border-indigo-100" : "flex-row items-center p-8 hover:bg-gray-50"
                    )}
                  >
                    <div className={cn("space-y-8", viewMode === 'list' && "flex items-center gap-10 space-y-0 flex-grow")}>
                       <div className="flex items-start justify-between">
                          <div className={cn(
                             "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest",
                             book.type === 'Electronic' ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-indigo-50 text-indigo-600 border border-indigo-100"
                          )}>
                             {book.type}
                          </div>
                          <Pin className="w-5 h-5 text-gray-50 group-hover:text-indigo-200 transition-colors" />
                       </div>
                       
                       <div className="space-y-3">
                          <h3 className={cn(
                            "font-black tracking-tighter text-gray-900 leading-none group-hover:text-indigo-600 transition-colors",
                            viewMode === 'grid' ? "text-2xl" : "text-xl"
                          )}>
                            {book.title}
                          </h3>
                          <div className="flex items-center gap-2 text-xs font-medium text-gray-400 italic">By {book.author}</div>
                       </div>

                       <div className="flex flex-wrap gap-2">
                          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl text-[10px] font-bold text-gray-400 border border-gray-100">
                             <Hash className="w-3 h-3" /> {book.code}
                          </div>
                          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl text-[10px] font-bold text-gray-400 border border-gray-100">
                             <Map className="w-3 h-3" /> {book.section}
                          </div>
                       </div>
                    </div>

                    <div className={cn(
                      "border-gray-50 flex items-center justify-between",
                      viewMode === 'grid' ? "pt-10 mt-10 border-t" : "pl-10"
                    )}>
                       <button className="text-indigo-600 font-black text-[10px] uppercase tracking-widest flex items-center gap-3 group/btn">
                          {book.type === 'Electronic' ? 'Open Resource' : 'Log Request'}
                          <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                       </button>
                    </div>
                  </motion.div>
                ))}
             </AnimatePresence>
          </section>

          <footer className="pt-20 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-12">
             <div className="space-y-6">
                <div className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">Service Hours</div>
                <div className="space-y-4">
                   <div className="flex justify-between items-end border-b border-gray-50 pb-2">
                      <span className="text-xs text-gray-400 font-medium">Standard Ops</span>
                      <span className="text-sm font-black text-gray-900 font-mono tracking-tighter">08:00 - 22:00</span>
                   </div>
                   <div className="flex justify-between items-end border-b border-gray-50 pb-2">
                      <span className="text-xs text-gray-400 font-medium">Clinical Reserve</span>
                      <span className="text-sm font-black text-gray-900 font-mono tracking-tighter">24/7 Digital</span>
                   </div>
                </div>
             </div>
             <div className="space-y-6">
                <div className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">Real-time Stats</div>
                <div className="space-y-3">
                   <div className="text-sm font-black text-gray-900 truncate tracking-tight">32,450 VOLUMES</div>
                   <div className="text-sm font-black text-indigo-600 truncate tracking-tight">4,500 E-JOURNALS</div>
                </div>
             </div>
             <div className="col-span-2 bg-[#fbfcff] border border-gray-100 p-10 rounded-[2.5rem] flex items-center justify-between shadow-sm">
                <div className="space-y-2">
                   <div className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Library Support</div>
                   <div className="text-xl font-black text-gray-900 tracking-tighter">Inter-Library Exchange</div>
                </div>
                <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest shadow-2xl shadow-indigo-100 hover:bg-indigo-600 transition-colors">Start Session</button>
             </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
