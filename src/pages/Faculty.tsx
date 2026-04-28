import React, { useState } from 'react';
import { FacultyMember } from '../types';
import { 
  User, Stethoscope, Search, Mail, Linkedin, GraduationCap, 
  MapPin, Phone, Award, BookOpen, ChevronRight, X, Image as ImageIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface ExtendedFacultyMember extends FacultyMember {
  email: string;
  phone: string;
  education: string[];
  publicationsCount: number;
}

export default function Faculty() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDept, setActiveDept] = useState('All');
  const [selectedMember, setSelectedMember] = useState<ExtendedFacultyMember | null>(null);

  const departments = ['All', 'Cardiology', 'Neurology', 'Pediatrics', 'Surgery', 'Anatomy', 'Physiology'];

  const faculty: ExtendedFacultyMember[] = [
    {
      id: 'f1',
      name: 'Dr. Elizabeth Hartman',
      department: 'Cardiology',
      designation: 'Professor & Head',
      specialization: 'Advanced Heart Failure, Interventional Cardiology',
      bio: 'Leading cardiologist with over 20 years of experience in cardiac research and clinical practice. Awarded the "Clinical Excellence" badge in 2022.',
      imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600',
      email: 'e.hartman@globalmed.edu',
      phone: '+1 555-101-2020',
      education: ['MD - Harvard Medical School', 'PhD - Johns Hopkins'],
      publicationsCount: 45
    },
    {
      id: 'f2',
      name: 'Dr. Alan Vance',
      department: 'Neurology',
      designation: 'Associate Professor',
      specialization: 'Neuro-oncology, Clinical Neurosurgery',
      bio: 'Specializing in minimally invasive brain surgery and neuro-rehabilitation. Dr. Vance leads the Digital Brain Mapping initiative at GMC.',
      imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600',
      email: 'a.vance@globalmed.edu',
      phone: '+1 555-101-2021',
      education: ['MBBS - GMC', 'MS - Stanford University'],
      publicationsCount: 32
    },
    {
      id: 'f3',
      name: 'Dr. Sophia Chen',
      department: 'Pediatrics',
      designation: 'Assistant Professor',
      specialization: 'Neonatology, Pediatric Immunology',
      bio: 'Researcher focused on neonatal healthcare and congenital immune system disorders. Passionate about pediatric preventive medicine.',
      imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71f1e59816?auto=format&fit=crop&q=80&w=600',
      email: 's.chen@globalmed.edu',
      phone: '+1 555-101-2022',
      education: ['MD - Oxford', 'Specialization - Mayo Clinic'],
      publicationsCount: 18
    },
    {
      id: 'f4',
      name: 'Dr. Robert Miller',
      department: 'Surgery',
      designation: 'Clinical Instructor',
      specialization: 'General Surgery, Trauma Care',
      bio: 'Trauma specialist with a passion for teaching surgical residents. Actively involved in rural healthcare missions.',
      imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600',
      email: 'r.miller@globalmed.edu',
      phone: '+1 555-101-2023',
      education: ['MBBS - Yale', 'Fellowship - Cleveland Clinic'],
      publicationsCount: 12
    },
    {
      id: 'f5',
      name: 'Dr. Sarah Jenkins',
      department: 'Anatomy',
      designation: 'Professor',
      specialization: 'Functional Neuroanatomy',
      bio: 'Authored multiple textbooks on gross anatomy and developmental biology used across various international universities.',
      imageUrl: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=600',
      email: 's.jenkins@globalmed.edu',
      phone: '+1 555-101-2024',
      education: ['MBBS - King\'s College', 'PhD - Cambridge'],
      publicationsCount: 50
    },
    {
      id: 'f6',
      name: 'Dr. Michael Wright',
      department: 'Physiology',
      designation: 'Senior Lecturer',
      specialization: 'Endocrinology',
      bio: 'Specialist in metabolic disorders and hormone regulation. Leads the diabetes research cell at GMC.',
      imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600',
      email: 'm.wright@globalmed.edu',
      phone: '+1 555-101-2025',
      education: ['MD - Toronto University'],
      publicationsCount: 22
    },
    {
      id: 'f7',
      name: 'Dr. Emily Watson',
      department: 'Surgery',
      designation: 'Professor',
      specialization: 'Orthopedic Surgery',
      bio: 'Expert in sports medicine and joint replacement surgery with over 15 years of surgical experience.',
      imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71f1e59816?auto=format&fit=crop&q=80&w=600',
      email: 'e.watson@globalmed.edu',
      phone: '+1 555-101-2026',
      education: ['MD - University of Michigan'],
      publicationsCount: 28
    },
    {
      id: 'f8',
      name: 'Dr. James Wilson',
      department: 'Anatomy',
      designation: 'Associate Professor',
      specialization: 'Forensic Anatomy',
      bio: 'Consultant for forensic investigations and lead researcher in skeletal biology.',
      imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600',
      email: 'j.wilson@globalmed.edu',
      phone: '+1 555-101-2027',
      education: ['MBBS - Edinburgh', 'PhD - Dundee'],
      publicationsCount: 35
    }
  ];

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
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search faculty..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
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

      {/* Faculty Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredFaculty.map((member, i) => (
            <motion.div
              key={member.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
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
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur shadow-sm text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
                  {member.department}
                </div>
              </div>
              
              <div className="p-6 space-y-4 flex-grow">
                <div className="space-y-1">
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-indigo-600 transition-colors">{member.name}</h3>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{member.designation}</p>
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

      {/* Faculty Activity Gallery */}
      <section className="space-y-8 pt-12 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
            <ImageIcon className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Faculty Activity Gallery</h2>
            <p className="text-gray-500 text-sm font-light uppercase tracking-widest">Life Beyond the Classroom</p>
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
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="md:w-2/5 relative">
                <img src={selectedMember.imageUrl} alt={selectedMember.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="md:w-3/5 p-8 md:p-12 overflow-y-auto space-y-8 no-scrollbar bg-white">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-widest">
                    <GraduationCap className="w-3 h-3" />
                    {selectedMember.department} Department
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{selectedMember.name}</h2>
                  <p className="text-gray-400 font-medium">{selectedMember.designation}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Publications</div>
                    <div className="text-xl font-black text-gray-900">{selectedMember.publicationsCount}+</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Experience</div>
                    <div className="text-xl font-black text-gray-900">15+ Yrs</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 flex items-center gap-2">
                    <Award className="w-5 h-5 text-indigo-600" />
                    Biography
                  </h4>
                  <p className="text-gray-500 font-light leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    Education
                  </h4>
                  <ul className="space-y-2">
                    {selectedMember.education.map((edu, i) => (
                      <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-gray-100 grid gap-4">
                   <div className="flex items-center gap-4 text-sm">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-indigo-600 shadow-sm"><Mail className="w-5 h-5" /></div>
                      <span className="text-gray-900 font-bold">{selectedMember.email}</span>
                   </div>
                   <div className="flex items-center gap-4 text-sm">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-indigo-600 shadow-sm"><Phone className="w-5 h-5" /></div>
                      <span className="text-gray-900 font-bold">{selectedMember.phone}</span>
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
