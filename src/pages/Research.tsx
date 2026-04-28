import React, { useState, useEffect } from 'react';
import { collection, query, onSnapshot, orderBy, addDoc, serverTimestamp, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { ResearchPaper } from '../types';
import { useAuth } from '../context/AuthContext';
import { handleFirestoreError, OperationType } from '../lib/firestore-errors';
import { 
  Search, FileText, Calendar, Tag, Filter,
  Users, Activity, ClipboardList, BookOpen, Layers,
  ChevronRight, Award, Microscope, Plus, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

type ActiveView = 'repository' | 'meu' | 'rmc';

export default function Research() {
  const { profile } = useAuth();
  const isAdmin = profile?.role === 'admin' || profile?.role === 'staff' || profile?.email === 'mk.rabbani.cse@gmail.com';
  const [activeView, setActiveView] = useState<ActiveView>('repository');
  const [papers, setPapers] = useState<ResearchPaper[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newPaper, setNewPaper] = useState({
    title: '',
    authors: '',
    abstract: '',
    journal: '',
    tags: '',
    publishedDate: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    const q = query(collection(db, 'research'), orderBy('publishedDate', 'desc'));
    const unsub = onSnapshot(q, (snap) => {
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as ResearchPaper));
      if (data.length > 0) {
        setPapers(data);
      } else {
        setPapers(mockPapers);
      }
      setLoading(false);
    }, (err) => {
      handleFirestoreError(err, OperationType.LIST, 'research');
      setLoading(false);
    });
    return unsub;
  }, []);

  const handleDeletePaper = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this publication?')) return;
    try {
      await deleteDoc(doc(db, 'research', id));
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, 'research/' + id);
    }
  };

  const handleAddPaper = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'research'), {
        ...newPaper,
        authors: newPaper.authors.split(',').map(a => a.trim()),
        tags: newPaper.tags.split(',').map(t => t.trim()),
        createdAt: serverTimestamp()
      });
      setShowAddForm(false);
      setNewPaper({
        title: '',
        authors: '',
        abstract: '',
        journal: '',
        tags: '',
        publishedDate: new Date().toISOString().split('T')[0]
      });
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, 'research');
    }
  };

  // MEU Data
  const meuData = {
    committee: [
      { name: 'Dr. Sarah Jenkins', role: 'Director', specialty: 'Medical Education Specialist', img: 'https://images.unsplash.com/photo-1559839734-2b71f1e59816?auto=format&fit=crop&q=80&w=150' },
      { name: 'Dr. Michael Wright', role: 'Member Secretary', specialty: 'Physiology', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150' },
      { name: 'Dr. Linda Carter', role: 'Executive Member', specialty: 'Biochemistry', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=150' },
      { name: 'Dr. Robert Miller', role: 'Executive Member', specialty: 'Clinical Medicine', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=150' }
    ],
    activities: [
      { title: 'Curriculum Development Workshop', date: 'April 15, 2024', status: 'Completed', type: 'Workshop' },
      { title: 'Integrated Teaching Methodology Seminar', date: 'May 02, 2024', status: 'Upcoming', type: 'Seminar' },
      { title: 'Assessment & Evaluation Training', date: 'June 10, 2024', status: 'Scheduled', type: 'Training' }
    ]
  };

  // RMC Data
  const rmcData = {
    committee: [
      { name: 'Dr. Emily Watson', role: 'Chairman', specialty: 'Clinical Research', img: 'https://images.unsplash.com/photo-1559839734-2b71f1e59816?auto=format&fit=crop&q=80&w=150' },
      { name: 'Dr. Kevin Tran', role: 'Coordinator', specialty: 'Microbiology', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150' },
      { name: 'Dr. Arthur Vance', role: 'Expert Member', specialty: 'Public Health', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150' }
    ],
    activities: [
      { title: 'Annual Research Grant Call 2024', date: 'March 2024', status: 'Active', type: 'Grant' },
      { title: 'Ethical Approval Committee Meeting', date: 'Monthly', status: 'Recurring', type: 'Meeting' },
      { title: 'Research Methodology Course', date: 'July 2024', status: 'Planned', type: 'Course' }
    ]
  };

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


  const filteredPapers = papers.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.authors.some(a => a.toLowerCase().includes(searchTerm.toLowerCase())) ||
    p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 py-12 border-b border-gray-100">
        <div className="space-y-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 w-fit">
            <Layers className="w-3 h-3" />
            <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Academic Research Hub</span>
          </div>
          <h1 className="text-5xl font-black text-gray-900 tracking-tighter uppercase leading-[0.8]">
            {activeView === 'repository' ? 'Publications' : activeView === 'meu' ? 'MEU Unit' : 'RMC Cell'}
          </h1>
          <p className="text-gray-400 font-medium max-w-xl">
            {activeView === 'repository' && 'Access our peer-reviewed publications and groundbreaking clinical trials.'}
            {activeView === 'meu' && 'Advancing excellence in medical pedagogy and faculty development.'}
            {activeView === 'rmc' && 'Strategic oversight and support for clinical and experimental research.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex bg-gray-50 p-1.5 rounded-2xl border border-gray-100">
            {[
              { id: 'repository', label: 'Repository', icon: BookOpen },
              { id: 'meu', label: 'MEU', icon: Users },
              { id: 'rmc', label: 'RMC', icon: Microscope }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveView(tab.id as ActiveView)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all",
                  activeView === tab.id 
                    ? "bg-white text-indigo-600 shadow-xl shadow-indigo-500/5" 
                    : "text-gray-400 hover:text-gray-600 hover:bg-white/50"
                )}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
          
          {isAdmin && activeView === 'repository' && (
             <button 
               onClick={() => setShowAddForm(true)}
               className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
             >
               <Plus className="w-4 h-4" /> Add Paper
             </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showAddForm && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-8 bg-gray-50 border border-indigo-100 rounded-[2.5rem] relative overflow-hidden"
          >
             <button onClick={() => setShowAddForm(false)} className="absolute top-6 right-6 p-2 rounded-xl bg-white border border-gray-100 text-gray-400 hover:text-red-500 transition-colors">
               <X className="w-5 h-5" />
             </button>
             
             <form onSubmit={handleAddPaper} className="space-y-6 max-w-4xl">
                <div className="space-y-2">
                   <h2 className="text-2xl font-black text-gray-900 tracking-tight">New Publication Entry</h2>
                   <p className="text-gray-400 text-sm">Add a peer-reviewed research paper to the institutional repository.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-indigo-400 uppercase ml-1">Research Title</label>
                      <input 
                        required
                        className="w-full bg-white border border-gray-100 rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-indigo-200 outline-none"
                        placeholder="Advancements in Medical AI..."
                        value={newPaper.title}
                        onChange={e => setNewPaper({...newPaper, title: e.target.value})}
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-indigo-400 uppercase ml-1">Authors (Comma separated)</label>
                      <input 
                        required
                        className="w-full bg-white border border-gray-100 rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-indigo-200 outline-none"
                        placeholder="Dr. Sarah, Dr. John..."
                        value={newPaper.authors}
                        onChange={e => setNewPaper({...newPaper, authors: e.target.value})}
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-indigo-400 uppercase ml-1">Journal Name</label>
                      <input 
                        required
                        className="w-full bg-white border border-gray-100 rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-indigo-200 outline-none"
                        placeholder="International Journal of Medicine"
                        value={newPaper.journal}
                        onChange={e => setNewPaper({...newPaper, journal: e.target.value})}
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-indigo-400 uppercase ml-1">Publication Date</label>
                      <input 
                        type="date"
                        required
                        className="w-full bg-white border border-gray-100 rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-indigo-200 outline-none"
                        value={newPaper.publishedDate}
                        onChange={e => setNewPaper({...newPaper, publishedDate: e.target.value})}
                      />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-bold text-indigo-400 uppercase ml-1">Abstract Summary</label>
                   <textarea 
                     required
                     className="w-full bg-white border border-gray-100 rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-indigo-200 outline-none min-h-[120px]"
                     placeholder="A brief summary of the research methodology and findings..."
                     value={newPaper.abstract}
                     onChange={e => setNewPaper({...newPaper, abstract: e.target.value})}
                   />
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-bold text-indigo-400 uppercase ml-1">Tags (Comma separated)</label>
                   <input 
                     className="w-full bg-white border border-gray-100 rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-indigo-200 outline-none"
                     placeholder="Genetics, AI, clinical trial..."
                     value={newPaper.tags}
                     onChange={e => setNewPaper({...newPaper, tags: e.target.value})}
                   />
                </div>

                <div className="flex justify-end pt-4">
                   <button type="submit" className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200">
                     Publish Research
                   </button>
                </div>
             </form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {activeView === 'repository' ? (
          <motion.div
            key="repository"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-10 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Find papers by title, author, or research field..."
                className="block w-full pl-20 pr-10 py-10 bg-white border border-gray-100 rounded-[3rem] focus:border-indigo-500 focus:ring-0 text-gray-900 transition-all shadow-lg shadow-gray-100/50 text-xl font-light placeholder:text-gray-300"
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
                      className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group"
                    >
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
                        <div className="space-y-4 flex-grow">
                          <div className="flex items-center gap-3">
                            <div className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest border border-indigo-100">
                              {p.journal}
                            </div>
                            <div className="text-xs font-bold text-gray-300 font-mono tracking-tighter">REF: {p.publishedDate.replace(/-/g, '')}</div>
                          </div>
                          <h3 className="text-3xl font-black text-gray-900 group-hover:text-indigo-600 transition-colors tracking-tighter leading-tight">
                            {p.title}
                          </h3>
                          <p className="text-gray-400 line-clamp-2 text-sm leading-relaxed font-light">
                            {p.abstract}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-4">
                             {p.tags.map(tag => (
                               <span key={tag} className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gray-50 text-gray-500 text-[10px] font-bold border border-gray-100 group-hover:bg-indigo-50 group-hover:text-indigo-500 group-hover:border-indigo-100 transition-colors">
                                 <Tag className="w-3 h-3" />
                                 {tag}
                               </span>
                             ))}
                          </div>
                        </div>
                        
                        <div className="shrink-0 flex md:flex-col md:items-end justify-between items-center gap-6 text-sm text-gray-500 md:border-l border-gray-50 md:pl-10 h-full">
                          <div className="space-y-1 md:text-right">
                             <div className="text-[10px] uppercase tracking-widest font-black text-gray-300">Published Date</div>
                             <div className="text-gray-900 font-bold font-mono tracking-tighter">{p.publishedDate}</div>
                          </div>
                          <div className="space-y-1 md:text-right">
                             <div className="text-[10px] uppercase tracking-widest font-black text-gray-300">Principal Authors</div>
                             <div className="text-gray-900 font-black">{p.authors.join(' • ')}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <button className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold text-xs hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200">
                              View Publication
                            </button>
                            {isAdmin && (
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeletePaper(p.id);
                                }}
                                className="p-3 rounded-2xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm border border-red-100"
                                title="Delete Publication"
                              >
                                <X className="w-5 h-5" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>
          </motion.div>
        ) : activeView === 'meu' ? (
          <motion.div
            key="meu"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-16"
          >
            {/* MEU Committee */}
            <section className="space-y-10">
               <div className="flex items-center gap-4 border-l-4 border-indigo-600 pl-6">
                 <h2 className="text-4xl font-black tracking-tighter text-gray-900 uppercase">MEU Committee</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {meuData.committee.map((member) => (
                    <div key={member.name} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-indigo-100 transition-all group">
                       <div className="w-24 h-24 rounded-[2rem] overflow-hidden mb-6 border-2 border-white shadow-xl ring-1 ring-black/5 mx-auto">
                         <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                       </div>
                       <div className="text-center space-y-2">
                          <div className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]">{member.role}</div>
                          <h3 className="text-xl font-black text-gray-900 tracking-tighter group-hover:text-indigo-600 transition-colors">{member.name}</h3>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{member.specialty}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </section>

            {/* MEU Activities */}
            <section className="space-y-10">
               <div className="flex items-center gap-4 border-l-4 border-indigo-600 pl-6">
                 <h2 className="text-4xl font-black tracking-tighter text-gray-900 uppercase">MEU Activities</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {meuData.activities.map((activity) => (
                    <div key={activity.title} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl transition-all relative overflow-hidden group">
                       <div className="absolute top-0 right-0 p-6">
                          <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-200 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                             <Activity className="w-6 h-6" />
                          </div>
                       </div>
                       <div className="space-y-6">
                          <div className="space-y-2">
                             <div className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">{activity.type}</div>
                             <h3 className="text-2xl font-black text-gray-900 tracking-tighter leading-none">{activity.title}</h3>
                          </div>
                          <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                             <div className="space-y-1">
                                <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Date</div>
                                <div className="text-xs font-bold text-gray-900">{activity.date}</div>
                             </div>
                             <div className="space-y-1 text-right">
                                <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Status</div>
                                <div className="text-xs font-bold text-indigo-600">{activity.status}</div>
                             </div>
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="rmc"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-16"
          >
            {/* RMC Committee */}
            <section className="space-y-10">
               <div className="flex items-center gap-4 border-l-4 border-indigo-600 pl-6">
                 <h2 className="text-4xl font-black tracking-tighter text-gray-900 uppercase">RMC Committee</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {rmcData.committee.map((member) => (
                    <div key={member.name} className="flex items-center gap-8 bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-indigo-100 transition-all group">
                       <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-4 border-gray-50 group-hover:border-indigo-50 transition-colors">
                         <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                       </div>
                       <div className="space-y-2">
                          <div className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]">{member.role}</div>
                          <h3 className="text-2xl font-black text-gray-900 tracking-tighter transition-colors">{member.name}</h3>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{member.specialty}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </section>

            {/* RMC Activities */}
            <section className="space-y-10">
               <div className="flex items-center gap-4 border-l-4 border-indigo-600 pl-6">
                 <h2 className="text-4xl font-black tracking-tighter text-gray-900 uppercase">RMC Activities</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {rmcData.activities.map((activity) => (
                    <div key={activity.title} className="bg-slate-900 p-10 rounded-[2.5rem] text-white group hover:bg-slate-800 transition-all">
                       <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center mb-10 shadow-xl shadow-indigo-600/30">
                          <ClipboardList className="w-7 h-7" />
                       </div>
                       <div className="space-y-6">
                          <div className="space-y-2">
                             <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">{activity.type}</div>
                             <h3 className="text-2xl font-black tracking-tighter leading-tight">{activity.title}</h3>
                          </div>
                          <div className="flex items-center justify-between pt-8 border-t border-white/10">
                             <div className="space-y-1">
                                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Timeline</span>
                                <div className="text-xs font-bold">{activity.date}</div>
                             </div>
                             <div className="space-y-1 text-right">
                                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Registry</span>
                                <div className="text-xs font-bold text-indigo-400">{activity.status}</div>
                             </div>
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

