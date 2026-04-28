import React, { useState } from 'react';
import { 
  Newspaper, Bell, Clock, ArrowRight, Search, 
  Filter, Calendar, Bookmark, Share2, MessageSquare,
  Activity, GraduationCap, Microscope, MapPin, Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { NEWS } from '../data/news';

export default function News() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Events', 'Academic', 'Campus', 'Research'];

  const news = NEWS;

  const filteredNews = news.filter(item => {
    const matchesTab = activeTab === 'All' || item.category === activeTab;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="bg-[#fbfcff] min-h-screen">
      <div className="max-w-screen-2xl mx-auto border-x border-gray-100 min-h-screen">
        
        {/* Hero Section */}
        <header className="p-8 md:p-16 space-y-12 bg-white">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 w-fit">
                <Layers className="w-3 h-3" />
                <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Global News Feed</span>
              </div>
              <h1 className="text-6xl font-black tracking-tighter text-gray-900 uppercase leading-[0.8]">CAMPUS <span className="text-indigo-600">VOICE</span></h1>
              <p className="text-gray-400 font-medium max-w-xl">
                Stay updated with the latest clinical breakthroughs, campus events, and academic milestones from Global Medical College.
              </p>
            </div>
            
            <div className="relative group w-full md:w-96">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-indigo-600 transition-colors" />
              <input 
                type="text" 
                placeholder="Search stories..."
                className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-indigo-600 focus:ring-0 transition-all text-sm font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all",
                  activeTab === cat
                    ? "bg-slate-900 text-white shadow-xl shadow-indigo-100"
                    : "bg-gray-50 text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <main className="p-8 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main News Stream */}
          <div className="lg:col-span-8 space-y-12">
            <AnimatePresence mode="popLayout">
              {filteredNews.length > 0 ? (
                filteredNews.map((item, i) => (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ delay: i * 0.05 }}
                    className="group bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-72 h-64 md:h-auto overflow-hidden relative">
                         <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                          referrerPolicy="no-referrer"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                         <div className="absolute top-6 left-6">
                            <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black text-indigo-600 uppercase tracking-widest border border-white">
                              {item.category}
                            </span>
                         </div>
                      </div>
                      
                      <div className="flex-grow p-10 flex flex-col justify-between">
                         <div className="space-y-4">
                            <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">
                               <div className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {item.date}</div>
                               <div className="w-1 h-1 rounded-full bg-gray-200" />
                               <div className="flex items-center gap-1.5">{item.readTime} Read</div>
                            </div>
                            <h2 className="text-3xl font-black text-gray-900 group-hover:text-indigo-600 transition-colors tracking-tighter leading-none">
                              {item.title}
                            </h2>
                            <p className="text-gray-400 font-light leading-relaxed line-clamp-3 text-sm">
                              {item.excerpt}
                            </p>
                         </div>

                         <div className="flex items-center justify-between pt-8 border-t border-gray-50">
                            <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                                  <GraduationCap className="w-4 h-4" />
                               </div>
                               <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item.author}</span>
                            </div>
                            <button className="flex items-center gap-2 text-xs font-black text-slate-900 uppercase tracking-widest group/btn">
                               Read Article 
                               <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                         </div>
                      </div>
                    </div>
                  </motion.article>
                ))
              ) : (
                <div className="py-32 text-center bg-white rounded-[3rem] border border-dashed border-gray-200">
                   <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 mx-auto mb-6">
                      <Search className="w-8 h-8" />
                   </div>
                   <h3 className="text-2xl font-black text-gray-900 tracking-tighter uppercase">No stories found</h3>
                   <p className="text-gray-400 font-light mt-2">Try adjusting your filters or search terms.</p>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            {/* Quick Briefs */}
            <section className="bg-slate-900 rounded-[2.5rem] p-10 text-white space-y-8 shadow-2xl shadow-slate-200">
               <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <h3 className="text-xl font-bold tracking-tight uppercase">Quick Updates</h3>
                  <Bell className="w-5 h-5 text-indigo-400" />
               </div>
               <div className="space-y-8">
                  {[
                    { title: 'Library maintenance scheduled for Sunday.', time: '2h ago', tag: 'Service' },
                    { title: 'Call for Annual Research Grant 2024 is now active.', time: '5h ago', tag: 'Research' },
                    { title: 'Emergency Dept expansion phase 1 completed.', time: '1d ago', tag: 'Campus' },
                    { title: 'New journals added to the digital repository.', time: '2d ago', tag: 'Academic' }
                  ].map((update, idx) => (
                    <div key={idx} className="space-y-2 group cursor-pointer">
                       <div className="text-[9px] font-black text-indigo-400 uppercase tracking-widest">{update.tag}</div>
                       <p className="text-sm font-light text-slate-300 group-hover:text-white transition-colors leading-relaxed">
                         {update.title}
                       </p>
                       <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">{update.time}</span>
                    </div>
                  ))}
               </div>
               <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                  View All Briefs
               </button>
            </section>

            {/* Newsletter */}
            <section className="bg-indigo-600 rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
               <div className="relative z-10 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black tracking-tighter uppercase leading-none">Journal <br/>Insights</h3>
                    <p className="text-indigo-100 text-xs font-light leading-relaxed">
                      Weekly briefing on medical trends and GMC publications.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl outline-none focus:bg-white/20 transition-all text-sm placeholder:text-indigo-200"
                    />
                    <button className="w-full bg-white text-indigo-600 py-4 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-indigo-700/20 hover:scale-105 transition-transform">
                       Subscribe
                    </button>
                  </div>
               </div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-1000" />
               <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />
            </section>

            {/* Social Connect */}
            <section className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 space-y-6">
               <div className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">Social Media</div>
               <div className="flex gap-4">
                  {[Share2, MessageSquare, Activity, MapPin].map((Icon, i) => (
                    <button key={i} className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all shadow-sm">
                       <Icon className="w-5 h-5" />
                    </button>
                  ))}
               </div>
            </section>
          </aside>
        </main>

        <footer className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border-t border-gray-100">
           {[
             { label: 'Archive', value: '2010 - 2024' },
             { label: 'Avg Frequency', value: '4 Stories/Day' },
             { label: 'Total Posts', value: '3,450 Articles' },
             { label: 'Content Type', value: 'Medical / Life' }
           ].map(item => (
             <div key={item.label} className="bg-white p-8">
                <div className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-2">{item.label}</div>
                <div className="text-sm font-mono font-bold text-gray-900 uppercase tracking-tighter">{item.value}</div>
             </div>
           ))}
        </footer>
      </div>
    </div>
  );
}
