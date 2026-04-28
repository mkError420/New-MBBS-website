import React, { useState, useEffect } from 'react';
import { collection, query, onSnapshot, addDoc, serverTimestamp, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { FacultyMember } from '../types';
import { useAuth } from '../context/AuthContext';
import { handleFirestoreError, OperationType } from '../lib/firestore-errors';
import { 
  User, Stethoscope, Search, Mail, Linkedin, GraduationCap, 
  MapPin, Phone, Award, BookOpen, ChevronRight, X, Image as ImageIcon, Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface ExtendedFacultyMember extends FacultyMember {
  email: string;
  phone: string;
  education: string[];
  publicationsCount: number;
  bio: string;
}

export default function Faculty() {
  const { profile } = useAuth();
  const isAdmin = profile?.role === 'admin' || profile?.role === 'staff' || profile?.email === 'mk.rabbani.cse@gmail.com';
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDept, setActiveDept] = useState('All');
  const [selectedMember, setSelectedMember] = useState<ExtendedFacultyMember | null>(null);
  const [faculty, setFaculty] = useState<ExtendedFacultyMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMember, setNewMember] = useState({
    name: '',
    department: 'Anatomy',
    designation: '',
    specialization: '',
    bio: '',
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600',
    email: '',
    phone: '',
    education: '',
    publicationsCount: '0'
  });

  const departments = ['All', 'Cardiology', 'Neurology', 'Pediatrics', 'Surgery', 'Anatomy', 'Physiology', 'Pharmacology', 'Biochemistry'];

  useEffect(() => {
    const q = query(collection(db, 'faculty'));
    const unsub = onSnapshot(q, (snap) => {
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as ExtendedFacultyMember));
      setFaculty(data);
      setLoading(false);
    }, (err) => {
      handleFirestoreError(err, OperationType.LIST, 'faculty');
      setLoading(false);
    });
    return unsub;
  }, []);

  const handleDeleteMember = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!window.confirm('Are you sure you want to delete this faculty profile?')) return;
    try {
      await deleteDoc(doc(db, 'faculty', id));
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, 'faculty/' + id);
    }
  };

  const handleAddMember = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'faculty'), {
        ...newMember,
        education: newMember.education.split(',').map(e => e.trim()),
        publicationsCount: parseInt(newMember.publicationsCount) || 0,
        createdAt: serverTimestamp()
      });
      setShowAddForm(false);
      setNewMember({
        name: '',
        department: 'Anatomy',
        designation: '',
        specialization: '',
        bio: '',
        imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600',
        email: '',
        phone: '',
        education: '',
        publicationsCount: '0'
      });
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, 'faculty');
    }
  };

  const gallery = [
    { title: "Neuroscience Seminar", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" },
    { title: "Clinical Workshop", image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" },
    { title: "Research Excellence", image: "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&q=80&w=800" },
    { title: "Graduation Faculty", image: "https://images.unsplash.com/photo-1523050335392-93851179ae22?auto=format&fit=crop&q=80&w=800" }
  ];

  const filteredFaculty = faculty.filter(f => 
    (activeDept === 'All' || f.department === activeDept) &&
    (f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     f.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
     f.specialization.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header & Filters */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Our Faculty</h1>
            <p className="text-gray-500 text-lg font-light">Meet the world-class educators and practitioners shaping the future of medicine.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search faculty..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {isAdmin && (
               <button 
                onClick={() => setShowAddForm(true)}
                className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 whitespace-nowrap"
              >
                <Plus className="w-4 h-4" /> Add Profile
              </button>
            )}
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
          {departments.map(dept => (
            <button
              key={dept}
              onClick={() => setActiveDept(dept)}
              className={cn(
                "px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap",
                activeDept === dept 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" 
                  : "bg-white text-gray-500 border border-gray-100 hover:bg-gray-50"
              )}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showAddForm && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="p-8 bg-gray-50 border border-indigo-100 rounded-[2.5rem] relative overflow-hidden"
          >
             <button onClick={() => setShowAddForm(false)} className="absolute top-6 right-6 p-2 rounded-xl bg-white border border-gray-100 text-gray-400 hover:text-red-500 transition-colors">
               <X className="w-5 h-5" />
             </button>
             
             <form onSubmit={handleAddMember} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
                <div className="md:col-span-2 space-y-1">
                   <h2 className="text-xl font-bold text-gray-900">Add Faculty Member</h2>
                   <p className="text-gray-400 text-xs">Create a new professional profile for the directory.</p>
                </div>
                
                <div className="space-y-1">
                   <label className="text-[10px] font-bold text-indigo-400 uppercase ml-1">Full Name</label>
                   <input required className="w-full bg-white border border-gray-100 rounded-xl px-4 py-2.5 text-sm" placeholder="Dr. Jane Smith" value={newMember.name} onChange={e => setNewMember({...newMember, name: e.target.value})} />
                </div>
                
                <div className="space-y-1">
                   <label className="text-[10px] font-bold text-indigo-400 uppercase ml-1">Department</label>
                   <select className="w-full bg-white border border-gray-100 rounded-xl px-4 py-2.5 text-sm" value={newMember.department} onChange={e => setNewMember({...newMember, department: e.target.value})}>
                      {departments.filter(d => d !== 'All').map(d => <option key={d} value={d}>{d}</option>)}
                   </select>
                </div>

                <div className="space-y-1">
                   <label className="text-[10px] font-bold text-indigo-400 uppercase ml-1">Designation</label>
                   <input required className="w-full bg-white border border-gray-100 rounded-xl px-4 py-2.5 text-sm" placeholder="Professor / Head" value={newMember.designation} onChange={e => setNewMember({...newMember, designation: e.target.value})} />
                </div>

                <div className="space-y-1">
                   <label className="text-[10px] font-bold text-indigo-400 uppercase ml-1">Specialization</label>
                   <input required className="w-full bg-white border border-gray-100 rounded-xl px-4 py-2.5 text-sm" placeholder="Neuro-surgery" value={newMember.specialization} onChange={e => setNewMember({...newMember, specialization: e.target.value})} />
                </div>

                <div className="space-y-1">
                   <label className="text-[10px] font-bold text-indigo-400 uppercase ml-1">Institutional Email</label>
                   <input required type="email" className="w-full bg-white border border-gray-100 rounded-xl px-4 py-2.5 text-sm" placeholder="jsmith@gmc.edu" value={newMember.email} onChange={e => setNewMember({...newMember, email: e.target.value})} />
                </div>

                <div className="space-y-1">
                   <label className="text-[10px] font-bold text-indigo-400 uppercase ml-1">Contact Number</label>
                   <input required className="w-full bg-white border border-gray-100 rounded-xl px-4 py-2.5 text-sm" placeholder="+1 555-000-0000" value={newMember.phone} onChange={e => setNewMember({...newMember, phone: e.target.value})} />
                </div>

                <div className="md:col-span-2 space-y-1">
                   <label className="text-[10px] font-bold text-indigo-400 uppercase ml-1">Biography</label>
                   <textarea required className="w-full bg-white border border-gray-100 rounded-xl px-4 py-2.5 text-sm min-h-[100px]" placeholder="Brief professional background..." value={newMember.bio} onChange={e => setNewMember({...newMember, bio: e.target.value})} />
                </div>

                <div className="space-y-1">
                   <label className="text-[10px] font-bold text-indigo-400 uppercase ml-1">Education (Comma separated)</label>
                   <input required className="w-full bg-white border border-gray-100 rounded-xl px-4 py-2.5 text-sm" placeholder="MD - Harvard, PhD - Stanford" value={newMember.education} onChange={e => setNewMember({...newMember, education: e.target.value})} />
                </div>

                <div className="space-y-1 text-right pt-6">
                   <button type="submit" className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
                      Create Profile
                   </button>
                </div>
             </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Faculty Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredFaculty.map((member, i) => (
            <motion.div
              key={member.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                 <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {isAdmin && (
                  <button 
                    onClick={(e) => handleDeleteMember(e, member.id)}
                    className="absolute top-4 right-4 p-2.5 rounded-xl bg-white/20 backdrop-blur-md text-white hover:bg-red-500 transition-all border border-white/20 shadow-xl opacity-0 group-hover:opacity-100"
                    title="Delete Profile"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur shadow-sm text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
                  {member.department}
                </div>
              </div>
              
              <div className="p-6 space-y-4 flex-grow">
                <div className="space-y-1">
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{member.name}</h3>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{member.designation}</p>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <span className="truncate italic font-light">{member.specialization}</span>
                </div>

                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                  {member.bio}
                </p>

                <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex gap-2">
                    <Mail className="w-4 h-4 text-gray-300 hover:text-indigo-400" />
                    <Linkedin className="w-4 h-4 text-gray-300 hover:text-indigo-400" />
                  </div>
                  <button className="flex items-center gap-1 text-[10px] font-bold text-indigo-600 uppercase tracking-widest hover:gap-2 transition-all">
                    Full Profile <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {loading && faculty.length === 0 && (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1,2,3,4,5,6].map(n => (
               <div key={n} className="h-96 bg-gray-50 rounded-3xl animate-pulse border border-gray-100" />
            ))}
         </div>
      )}

      {/* Faculty Activity Gallery */}
      <section className="space-y-8 pt-12 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
            <ImageIcon className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Activity Gallery</h2>
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Life Beyond the Classroom</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-bold text-sm tracking-tight">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 p-3 rounded-2xl bg-white/50 backdrop-blur hover:bg-red-50 text-slate-500 hover:text-red-600 transition-all z-20 shadow-sm border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="md:w-2/5 relative">
                <img src={selectedMember.imageUrl} alt={selectedMember.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="md:w-3/5 p-8 md:p-12 overflow-y-auto space-y-8 no-scrollbar bg-white">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-widest">
                    <GraduationCap className="w-3.5 h-3.5" />
                    {selectedMember.department} 
                  </div>
                  <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase">{selectedMember.name}</h2>
                  <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.2em]">{selectedMember.designation}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-3xl bg-gray-50 border border-gray-100">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Publications</div>
                    <div className="text-2xl font-black text-gray-900">{selectedMember.publicationsCount}+</div>
                  </div>
                  <div className="p-5 rounded-3xl bg-gray-50 border border-gray-100">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Specialization</div>
                    <div className="text-sm font-bold text-gray-900 truncate">{selectedMember.specialization}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-500 font-light leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 text-xs uppercase tracking-widest border-b border-gray-50 pb-2">Academic Background</h4>
                  <ul className="space-y-3">
                    {selectedMember.education.map((edu, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full border-2 border-indigo-500" />
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 grid gap-4">
                   <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <Mail className="w-5 h-5 text-indigo-600" />
                      <span className="text-xs font-bold text-gray-900 tracking-wider h-auto break-all">{selectedMember.email}</span>
                   </div>
                   <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <Phone className="w-5 h-5 text-indigo-600" />
                      <span className="text-xs font-bold text-gray-900 tracking-wider leading-none">{selectedMember.phone}</span>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

