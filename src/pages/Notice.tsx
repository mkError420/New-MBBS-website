import React, { useState, useEffect } from 'react';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Announcement } from '../types';
import { useAuth } from '../context/AuthContext';
import { handleFirestoreError, OperationType } from '../lib/firestore-errors';
import { Bell, Search, Calendar, FileText, ChevronRight, Pin, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { cn } from '../lib/utils';
import { useNavigate } from 'react-router-dom';

export default function Notice() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const isAdmin = user?.email === 'mk.rabbani.cse@gmail.com';
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [notices, setNotices] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'announcements'), orderBy('date', 'desc'));
    const unsub = onSnapshot(q, (snap) => {
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Announcement));
      setNotices(data);
      setLoading(false);
    }, (err) => {
      handleFirestoreError(err, OperationType.LIST, 'announcements');
      setLoading(false);
    });
    return unsub;
  }, []);

  const categories = [
    { id: 'All', label: t('notice.categories.all') },
    { id: 'notice', label: 'Notice' },
    { id: 'deadline', label: 'Deadline' },
    { id: 'event', label: 'Event' },
  ];

  const filteredNotices = notices.filter(n => {
    const matchesSearch = n.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         n.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || n.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
            <Bell className="w-10 h-10 text-indigo-600" />
            {t('notice.title')}
          </h1>
          <p className="text-gray-500 text-lg font-light max-w-2xl">
            {t('notice.description')}
          </p>
        </div>
        {isAdmin && (
          <button 
            onClick={() => navigate('/portal')}
            className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
          >
            <Plus className="w-4 h-4" /> Manage Notices
          </button>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-6 py-6 border-b border-gray-100">
        <div className="relative flex-grow">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={t('notice.search')}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={cn(
                "px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap",
                activeFilter === cat.id 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" 
                  : "bg-white text-gray-500 border border-gray-100 hover:bg-gray-50"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredNotices.map((notice, i) => {
            const dateObj = notice.date?.toDate ? new Date(notice.date.toDate()) : new Date();
            const day = dateObj.getDate();
            const month = dateObj.toLocaleString('en-US', { month: 'long' });
            const year = dateObj.getFullYear();
            const formattedDate = dateObj.toLocaleDateString();

            return (
              <motion.div
                key={notice.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 group hover:shadow-xl hover:border-indigo-100 transition-all relative overflow-hidden"
              >
                {/* ... existing pinned logic ... */}
                
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="shrink-0 space-y-2 text-center md:border-r border-gray-100 md:pr-8 md:min-w-[120px]">
                    <div className="text-3xl font-black text-indigo-600 leading-none">
                      {day}
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                      {month} {year}
                    </div>
                  </div>

                  <div className="flex-grow space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest">
                        {notice.type}
                      </span>
                      <div className="flex items-center gap-1.5 text-gray-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-bold uppercase">{formattedDate}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors">
                      {notice.title}
                    </h3>
                    
                    <p className="text-gray-500 font-light leading-relaxed">
                      {notice.content}
                    </p>

                    <div className="pt-4 flex items-center justify-between border-t border-gray-50">
                      <button className="flex items-center gap-2 text-indigo-600 font-bold text-xs hover:gap-3 transition-all">
                        <FileText className="w-4 h-4" />
                        {t('notice.download')}
                      </button>
                      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-indigo-600 transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
        
        {filteredNotices.length === 0 && (
          <div className="text-center py-24 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
            <Search className="w-16 h-16 text-gray-200 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-400">{t('notice.noNotices')}</h3>
            <p className="text-gray-400 font-light">{t('notice.adjustSearch')}</p>
          </div>
        )}
      </div>

      <div className="bg-indigo-600 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl font-bold">{t('notice.subscribeTitle')}</h2>
          <p className="text-indigo-100 max-w-lg font-light leading-relaxed">
            {t('notice.subscribeDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md">
            <input 
              type="text" 
              placeholder={t('notice.subscribePlaceholder')} 
              className="bg-white/10 border border-white/20 px-6 py-4 rounded-2xl outline-none focus:bg-white/20 transition-all font-bold text-sm"
            />
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-colors shadow-lg">
              {t('notice.subscribeBtn')}
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <Bell className="absolute bottom-10 right-10 w-32 h-32 text-white/5 -rotate-12" />
      </div>
    </div>
  );
}
