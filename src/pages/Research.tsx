import React, { useState, useEffect } from 'react';
import { collection, query, getDocs, where, limit } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { ResearchPaper } from '../types';
import { Search, FileText, Calendar, Tag, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Research() {
  const [papers, setPapers] = useState<ResearchPaper[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Mock data for initial view if DB is empty
  const mockPapers: ResearchPaper[] = [
    {
      id: '1',
      title: 'Advancements in CRPS Gene Therapy',
      authors: ['Dr. Sarah Chen', 'Dr. Michael Roberts'],
      abstract: 'This paper explores the latest methodologies in CRISPR-based gene editing for complex regional pain syndrome models...',
      publishedDate: '2024-03-15',
      journal: 'International Journal of Genetics',
      tags: ['Genetics', 'Pain Management', 'CRISPR']
    },
    {
      id: '2',
      title: 'Machine Learning in Early Diagnosis of Glaucoma',
      authors: ['Dr. James Wilson', 'Amit Patel'],
      abstract: 'A longitudinal study investigating the efficacy of convolutional neural networks in analyzing retinal scans...',
      publishedDate: '2024-02-10',
      journal: 'Digital Health Tomorrow',
      tags: ['AI', 'Ophthalmology', 'Imaging']
    },
    {
      id: '3',
      title: 'Sustainable Medical Waste Management in Urban Hospitals',
      authors: ['Dr. Elena Rodriguez'],
      abstract: 'Assessing the environmental impact and cost-effectiveness of decentralized autoclave systems in metropolitan hospital networks...',
      publishedDate: '2023-11-22',
      journal: 'Hospital Admin Monthly',
      tags: ['Public Health', 'Sustainability']
    }
  ];

  useEffect(() => {
    // In a real app, we would fetch from Firestore here
    // For now, using mock data for demo
    setTimeout(() => {
      setPapers(mockPapers);
      setLoading(false);
    }, 500);
  }, []);

  const filteredPapers = papers.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.authors.some(a => a.toLowerCase().includes(searchTerm.toLowerCase())) ||
    p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Research Repository</h1>
        <p className="text-gray-500 text-lg">Search through our extensive database of peer-reviewed publications and clinical trials.</p>
      </div>

      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
        </div>
        <input
          type="text"
          placeholder="Search by title, author, or keywords..."
          className="block w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-2xl focus:border-indigo-500 focus:ring-0 text-gray-900 transition-all shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid gap-6">
        {loading ? (
          <div className="animate-pulse space-y-4">
            {[1,2,3].map(i => <div key={i} className="h-48 bg-gray-100 rounded-3xl" />)}
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            {filteredPapers.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase tracking-widest">
                      <FileText className="w-4 h-4" />
                      {p.journal}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2 font-light italic">
                      {p.abstract}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                       {p.tags.map(tag => (
                         <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 text-gray-500 text-xs font-bold border border-gray-100">
                           <Tag className="w-3 h-3" />
                           {tag}
                         </span>
                       ))}
                    </div>
                  </div>
                  
                  <div className="shrink-0 flex md:flex-col md:items-end justify-between items-center gap-4 text-sm text-gray-500 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      {p.publishedDate}
                    </div>
                    <div className="font-bold text-gray-900">
                      {p.authors.join(', ')}
                    </div>
                    <button className="text-indigo-600 font-bold hover:underline text-xs">
                      View Full Paper
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}

        {!loading && filteredPapers.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 font-medium">No results found for "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
