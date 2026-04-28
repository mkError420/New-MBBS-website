import React from 'react';
import { Newspaper, Bell, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function News() {
  const news = [
    {
      id: 'n1',
      title: 'GMC Hospital Ranked #1 for Patient Care',
      category: 'Achievement',
      date: 'Apr 24, 2024',
      excerpt: 'The national medical council has ranked Global Medical College Hospital as the lead provider for patient satisfaction...',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'n2',
      title: 'New Robotic Surgery Unit Launched',
      category: 'Campus Update',
      date: 'Apr 20, 2024',
      excerpt: 'Inaugurating our state-of-the-art robotic suite, allowing for more precise and minimally invasive procedures...',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'n3',
      title: 'Annual Medical Symposium 2024 Call for Papers',
      category: 'Events',
      date: 'Apr 18, 2024',
      excerpt: 'Join global leaders in medicine as we discuss the future of healthcare technology and ethics...',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="flex items-center justify-between border-b pb-8">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
          <Newspaper className="w-10 h-10 text-indigo-600" />
          Campus News
        </h1>
        <div className="hidden md:flex gap-4">
           {['All', 'Events', 'Academic', 'Campus', 'Research'].map(cat => (
             <button key={cat} className="px-4 py-2 rounded-full text-xs font-bold text-gray-500 hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-all uppercase tracking-widest">
               {cat}
             </button>
           ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           {news.map((item, i) => (
             <motion.div
               key={item.id}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="group flex flex-col md:flex-row gap-8 bg-white p-6 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-500"
             >
               <div className="md:w-64 h-48 rounded-2xl overflow-hidden shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
               </div>
               <div className="flex flex-col justify-between py-2">
                 <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-indigo-600">
                      <span className="bg-indigo-50 px-2 py-0.5 rounded">{item.category}</span>
                      <span className="text-gray-400 flex items-center gap-1 font-medium"><Clock className="w-3 h-3" /> {item.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors">{item.title}</h2>
                    <p className="text-gray-500 leading-relaxed font-light line-clamp-3">{item.excerpt}</p>
                 </div>
                 <button className="flex items-center gap-2 text-indigo-600 font-bold text-sm mt-4 group/btn">
                   Read Full Story
                   <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                 </button>
               </div>
             </motion.div>
           ))}
        </div>

        <aside className="space-y-8">
          <div className="bg-slate-900 rounded-3xl p-8 text-white space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Bell className="w-6 h-6 text-indigo-400" />
              <h3 className="font-bold text-xl">Quick Updates</h3>
            </div>
            <div className="space-y-6">
              {[
                { title: 'Library maintenance scheduled for Sunday.', time: '2 hours ago' },
                { title: 'New journals added to digital repository.', time: '5 hours ago' },
                { title: 'Faculty meeting at Auditorium A.', time: '1 day ago' },
                { title: 'COVID-19 booster drive results.', time: '2 days ago' }
              ].map((update, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-sm border-l-2 border-indigo-500 pl-4">{update.title}</p>
                  <span className="text-[10px] text-slate-500 uppercase font-bold pl-4">{update.time}</span>
                </div>
              ))}
            </div>
            <button className="w-full bg-white/10 hover:bg-white/20 py-3 rounded-xl text-sm font-bold transition-all">
              View All Updates
            </button>
          </div>

          <div className="bg-indigo-50 rounded-3xl p-8 space-y-4">
            <h3 className="text-indigo-900 font-bold text-lg">Newsletter</h3>
            <p className="text-sm text-indigo-700 font-light">Get the latest campus updates delivered to your inbox.</p>
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="w-full px-4 py-3 bg-white border border-indigo-100 rounded-xl outline-none focus:ring-2 focus:ring-indigo-300 text-sm"
            />
            <button className="w-full bg-indigo-600 text-white py-3 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-colors">
              Subscribe
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
