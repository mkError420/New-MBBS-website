import React, { useState } from 'react';
import { 
  BookText, Search, ArrowUpRight, TrendingUp, 
  Calendar, User, Clock, FileText, ChevronRight,
  Download, Share2, Bookmark, Flame
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Journal() {
  const [activeTab, setActiveTab] = useState('Current Issue');

  const issues = [
    {
      id: 'art1',
      title: 'Neurological Pathways in Regenerative Neurosurgery',
      author: 'Dr. Arthur Vance, et al.',
      category: 'Original Research',
      date: 'April 2024',
      doi: '10.1016/j.gmc.2024.04.001',
      abstract: 'This study explores the metabolic markers associated with post-operative recovery periods in patients undergoing minimally invasive neuro-oncology procedures...',
      trending: true
    },
    {
      id: 'art2',
      title: 'Case Report: Rare Variations in Coronary Artery Branching',
      author: 'Dr. Elizabeth Hartman',
      category: 'Clinical Case',
      date: 'March 2024',
      doi: '10.1016/j.gmc.2024.03.012',
      abstract: 'A singular case of an anomalous left circumflex coronary artery originating from the right sinus of Valsalva is discussed with clinical significance for intervention.',
      trending: false
    },
    {
      id: 'art3',
      title: 'Ethics of AI Integration in Modern Medical Pedagogy',
      author: 'MEU Committee',
      category: 'Editorial',
      date: 'March 2024',
      doi: '10.1016/j.gmc.2024.03.005',
      abstract: 'An editorial overview of the challenges and opportunities presented by generative AI models in student assessment and critical thinking frameworks.',
      trending: true
    }
  ];

  return (
    <div className="bg-[#fbfcff] min-h-screen text-gray-900 selection:bg-indigo-500 selection:text-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-16 py-12 flex flex-col md:flex-row gap-16">
        
        {/* Left Side: Editorial Navigation & Info */}
        <aside className="w-full md:w-80 shrink-0 space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
               <div className="w-1 h-1 rounded-full bg-indigo-500 animate-pulse" />
               <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Vol. 12 • Issue 04</span>
            </div>
            <h1 className="text-6xl font-black tracking-tighter leading-[0.8] italic uppercase">
              The <span className="text-indigo-600 block not-italic">Journal</span> 
              <span className="text-3xl block mt-2 text-gray-400 tracking-normal font-light italic capitalize">of Medicine</span>
            </h1>
          </div>

          <div className="space-y-2">
            {['Current Issue', 'Archive', 'Ahead of Print', 'Submit Manuscript'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={cn(
                  "w-full text-left px-4 py-4 rounded-xl flex items-center justify-between group transition-all",
                  activeTab === item 
                    ? "bg-slate-900 text-white shadow-2xl shadow-indigo-200" 
                    : "text-gray-400 hover:bg-white hover:text-indigo-600 border border-transparent hover:border-indigo-100"
                )}
              >
                <span className="text-sm font-bold tracking-tight">{item}</span>
                <ArrowUpRight className={cn("w-4 h-4 transition-transform", activeTab === item ? "rotate-0 text-indigo-400" : "rotate-45 text-gray-200 group-hover:rotate-0 group-hover:text-indigo-600")} />
              </button>
            ))}
          </div>

          <div className="pt-12 space-y-8">
             <div className="p-6 rounded-3xl bg-indigo-600 space-y-4 shadow-xl shadow-indigo-100">
                <h3 className="text-lg font-black tracking-tight leading-tight text-white">Peer Review Tracking</h3>
                <p className="text-xs text-indigo-100 font-light leading-relaxed">Check the real-time status of your submitted manuscript through our digital portal.</p>
                <button className="w-full bg-white text-indigo-600 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-xl">Track Status</button>
             </div>
             
             <div className="space-y-4">
                <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Impact Analytics</div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                      <div className="text-[10px] text-gray-400 mb-1">Impact Factor</div>
                      <div className="text-2xl font-black text-indigo-600">4.82</div>
                   </div>
                   <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                      <div className="text-[10px] text-gray-400 mb-1">h-index</div>
                      <div className="text-2xl font-black text-indigo-600">32</div>
                   </div>
                </div>
             </div>
          </div>
        </aside>

        {/* Right Side: Main Content */}
        <main className="flex-grow space-y-16">
          <section className="space-y-8">
             <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-gray-300">Featured Publications</h2>
                <div className="flex items-center gap-4">
                   <Bookmark className="w-4 h-4 text-gray-300 cursor-pointer hover:text-indigo-600 transition-colors" />
                   <Share2 className="w-4 h-4 text-gray-300 cursor-pointer hover:text-indigo-600 transition-colors" />
                </div>
             </div>

             <div className="grid gap-12">
                {issues.map((article) => (
                  <motion.article 
                    key={article.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="group flex flex-col md:flex-row gap-10 cursor-pointer bg-white p-8 rounded-[2.5rem] border border-transparent hover:border-indigo-50 hover:shadow-2xl transition-all"
                  >
                    <div className="md:w-32 shrink-0 space-y-4 flex flex-col justify-between md:border-r border-gray-50 pr-4">
                       <div className="space-y-1">
                          <div className={cn(
                             "text-[10px] font-black uppercase tracking-widest",
                             article.trending ? "text-amber-500" : "text-indigo-600"
                          )}>
                            {article.trending ? 'Trending' : article.category}
                          </div>
                          <div className="text-[10px] font-bold text-gray-300 font-mono tracking-tighter uppercase">{article.date}</div>
                       </div>
                       {article.trending && <Flame className="w-5 h-5 text-amber-500" />}
                    </div>

                    <div className="flex-grow space-y-4">
                       <h3 className="text-4xl font-black tracking-tighter text-gray-900 group-hover:text-indigo-600 transition-all leading-[0.95] max-w-2xl">
                         {article.title}
                       </h3>
                       <p className="text-gray-400 text-sm italic font-light">By {article.author}</p>
                       <p className="text-gray-500 font-light leading-relaxed max-w-3xl line-clamp-3">
                         {article.abstract}
                       </p>
                       
                       <div className="flex items-center gap-8 pt-4">
                          <div className="flex items-center gap-2 group-hover:text-indigo-600 transition-colors">
                             <FileText className="w-4 h-4 text-gray-300" />
                             <span className="text-[10px] font-mono font-bold uppercase tracking-tight text-gray-400">DOI: {article.doi}</span>
                          </div>
                          <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-indigo-600 hover:text-indigo-500">
                             Download PDF <Download className="w-3 h-3" />
                          </button>
                       </div>
                    </div>
                  </motion.article>
                ))}
             </div>
          </section>

          {/* Quick Access Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
             <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-indigo-100 group transition-all duration-500">
                <BookText className="w-12 h-12 text-indigo-600 mb-8" />
                <div className="space-y-4">
                   <h3 className="text-3xl font-black tracking-tighter uppercase text-gray-900">Author Guidelines</h3>
                   <p className="text-gray-400 text-sm font-light leading-relaxed">Complete technical and stylistic requirements for manuscript submission to GMC Journal.</p>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-50 flex justify-end">
                   <ChevronRight className="w-6 h-6 text-gray-200 group-hover:text-indigo-600 transition-colors" />
                </div>
             </div>
             <div className="bg-slate-900 p-12 rounded-[3rem] text-white shadow-2xl shadow-indigo-100 group transition-all duration-500">
                <Clock className="w-12 h-12 text-indigo-500 mb-8" />
                <div className="space-y-4">
                   <h3 className="text-3xl font-black tracking-tighter uppercase">Review Timeline</h3>
                   <p className="text-slate-400 text-sm font-light leading-relaxed">Detailed transparent view of our average peer review and ethical clearance lifecycle timings.</p>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 flex justify-end">
                   <ChevronRight className="w-6 h-6 text-slate-700 group-hover:text-indigo-400 transition-colors" />
                </div>
             </div>
          </section>
        </main>
      </div>

      {/* Decorative Technical Layer */}
      <footer className="max-w-screen-2xl mx-auto px-8 md:px-16 py-12 flex items-center justify-between border-t border-gray-100 text-[10px] font-mono font-bold tracking-[0.2em] text-gray-300">
         <div>© 2024 GMC ACADEMIC PRESS</div>
         <div className="flex gap-8">
            <span>ISSN-L: 2024-1010</span>
            <span>INDEXED: MEDLINE/PUBMED</span>
         </div>
      </footer>
    </div>
  );
}
