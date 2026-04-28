import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, BookOpen, GraduationCap, Microscope, Award, 
  Bell, MapPin, Phone, Mail, ExternalLink, Quote,
  ChevronDown, ChevronUp, MessageCircle, Image as ImageIcon,
  HeartPulse, Library, Stethoscope, Globe, CheckCircle, Target, TrendingUp, Zap, HelpCircle, Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { NOTICES } from '../data/notices';
import NewsTicker from '../components/NewsTicker';

export default function Home() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const [currentHeroSlide, setCurrentHeroSlide] = React.useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000"
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: 'Founded', value: '1985', icon: GraduationCap },
    { label: 'Faculty Members', value: '250+', icon: BookOpen },
    { label: 'Research Papers', value: '1,200+', icon: Microscope },
    { label: 'Global Rank', value: '#12', icon: Award },
  ];

  const leadership = [
    { 
      role: 'Chairman', 
      name: 'Dr. Samuel Higgins', 
      image: 'https://images.unsplash.com/photo-1559839734-2b71f1e59816?auto=format&fit=crop&q=80&w=400',
      speech: 'At Global Medical College, our vision is to create a community of healers who are not only technically proficient but also deeply compassionate. We believe in pushing the boundaries of medical science through innovation and dedicated research.'
    },
    { 
      role: 'Managing Director', 
      name: 'Dr. Rebecca Sterling', 
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
      speech: 'Practical excellence is the hallmark of our institution. We ensure that our students have access to the latest clinical tools and are mentored by world-class specialists in various medical disciplines.'
    },
    { 
      role: 'Principal', 
      name: 'Dr. Arthur Vance', 
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
      speech: 'Our academic curriculum is rigorously designed to prepare students for the complexities of modern medicine. We focus on ethical practice, clinical reasoning, and lifelong learning.'
    }
  ];

  const testimonials = [
    {
      name: "Aisha Sharma",
      role: "Final Year Student",
      text: "GMC has provided me with opportunities I never thought possible. The clinical exposure at the on-campus hospital is second to none.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "Marcus Thorne",
      role: "Alumni / Neurosurgeon",
      text: "The foundation I received at GMC was instrumental in my success during my residency in the US. A truly world-class education.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    }
  ];

  const faqs = [
    { q: "What are the eligibility criteria for MBBS?", a: "Candidates must have completed 10+2 with Physics, Chemistry, and Biology, achieving a minimum aggregate of 50%." },
    { q: "Does GMC offer scholarships?", a: "Yes, we offer merit-based scholarships and financial aid for deserving students from underprivileged backgrounds." },
    { q: "Is the degree recognized internationally?", a: "Our MBBS degree is recognized by the WHO, ECFMG (USA), and medical councils across Europe and Asia." },
    { q: "What is the student-to-faculty ratio?", a: "We maintain a healthy 10:1 ratio to ensure personalized attention and mentorship for every student." }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&q=80&w=800"
  ];

  const notices = NOTICES.slice(0, 4);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section - Banner Carousel */}
      <section className="relative h-[60vh] md:h-[85vh] overflow-hidden bg-slate-900 border-b border-white/5">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-black/20 z-10" />
            <img 
              src={heroImages[currentHeroSlide]} 
              alt={`GMC Excellence ${currentHeroSlide + 1}`} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3 px-6 py-3 bg-black/20 backdrop-blur-xl rounded-full border border-white/10">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroSlide(idx)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                currentHeroSlide === idx ? "w-12 bg-indigo-500" : "w-3 bg-white/20 hover:bg-white/40"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      <NewsTicker />

      {/* Main Content Layout with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Area */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Stats Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={stat.label} className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
                  <stat.icon className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                  <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Speeches Sections */}
            <div className="space-y-12">
              {leadership.map((leader, i) => (
                <motion.section 
                  key={leader.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className={i % 2 === 0 ? "flex flex-col md:flex-row gap-8" : "flex flex-col md:flex-row-reverse gap-8"}
                >
                  <div className="w-full md:w-1/3 shrink-0">
                    <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                      <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                  <div className="flex-grow space-y-4 pt-4">
                    <div className="space-y-1">
                      <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest">{leader.role}'s Message</span>
                      <h2 className="text-3xl font-bold text-gray-900">{leader.name}</h2>
                    </div>
                    <div className="relative">
                      <Quote className="absolute -top-4 -left-4 w-12 h-12 text-indigo-50 opacity-10" />
                      <p className="text-gray-600 leading-relaxed font-light text-lg italic pl-4 border-l-4 border-indigo-100">
                        "{leader.speech}"
                      </p>
                    </div>
                    <button className="text-indigo-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all shrink-0">
                      Read Full Bio <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.section>
              ))}
            </div>

            {/* Who we are section */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Who we are?</h2>
              </div>
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden group">
                <div className="relative z-10 space-y-4">
                  <p className="text-gray-600 leading-relaxed font-light text-lg">
                    Global Medical College (GMC) is a premier institution dedicated to excellence in healthcare education. Established with a vision to redefine medical pedagogy, we merge traditional healing principles with cutting-edge technology.
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    Our campus is a melting pot of cultures, bringing together students and faculty from over 30 countries to create a truly global learning environment. We don't just teach medicine; we cultivate the next generation of global health leaders.
                  </p>
                  <div className="pt-4 flex flex-wrap gap-3">
                    {['Established 1985', 'WHO Recognized', 'Global Network', 'Research Focused'].map(tag => (
                      <span key={tag} className="px-4 py-2 bg-gray-50 rounded-xl text-xs font-bold text-gray-500 border border-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-50 rounded-full blur-[80px] group-hover:bg-indigo-100 transition-colors" />
              </div>
            </section>

            {/* What we provide section */}
            <section className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Zap className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">What we provide?</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Clinical Simulation Labs', desc: 'State-of-the-art robotic patients and surgery simulators.', icon: HeartPulse, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                  { title: 'Digital Library', desc: 'Access to 100,000+ medical journals and research databases.', icon: Library, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                  { title: 'Multispecialty Hospital', icon: Stethoscope, desc: '600-bed on-campus teaching hospital for hands-on experience.', color: 'text-amber-600', bg: 'bg-amber-50' },
                  { title: 'Global Exchange', icon: Globe, desc: 'Semester-long rotations in partner universities in EU and US.', color: 'text-rose-600', bg: 'bg-rose-50' }
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-3xl bg-white border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all group"
                  >
                    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110", item.bg)}>
                      <item.icon className={cn("w-6 h-6", item.color)} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Why Choose US section */}
            <section className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
                  <Award className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Why Choose US?</h2>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'International Accreditation', desc: 'Our degrees are recognized globally by WHO, ECFMG, and major medical councils.', icon: CheckCircle },
                  { title: 'Expert Faculty', desc: 'Learn from professors who are actively leading breakthrough medical research.', icon: Target },
                  { title: 'Career Trajectory', desc: '98% of our graduates secure residency placements within 6 months.', icon: TrendingUp }
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 p-6 rounded-3xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="shrink-0">
                      <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                        <item.icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Student Testimonials */}
            <section className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Student Voices</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-4"
                  >
                    <Quote className="w-8 h-8 text-indigo-100" />
                    <p className="text-gray-600 italic font-light">"{t.text}"</p>
                    <div className="flex items-center gap-3 pt-2">
                      <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                      <div>
                        <div className="text-sm font-bold text-gray-900">{t.name}</div>
                        <div className="text-xs text-indigo-600 font-medium">{t.role}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Feature Image Section */}
            <section className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl group">
               <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" 
                alt="Medical Lab" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-12 text-white">
                <div className="max-w-lg">
                  <p className="font-bold text-3xl italic font-serif mb-2">"Empowering the next generation of healers."</p>
                  <p className="text-slate-300 font-light">Committed to clinical excellence since 1985.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Quick Actions */}
            <div className="grid grid-cols-1 gap-4">
              <Link 
                to="/departments"
                className="bg-indigo-600 text-white p-6 rounded-3xl font-bold hover:bg-indigo-700 transition-all flex flex-col gap-4 shadow-xl shadow-indigo-500/20 group relative overflow-hidden"
              >
                <div className="flex justify-between items-center relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="relative z-10">
                   <div className="text-xs opacity-60 uppercase tracking-widest mb-1 font-black">Academic</div>
                   <div className="text-xl tracking-tight">Explore Departments</div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl" />
              </Link>
              
              <Link 
                to="/tour"
                className="bg-slate-900 border border-slate-800 text-white p-6 rounded-3xl font-bold hover:bg-slate-800 transition-all flex flex-col gap-4 shadow-xl shadow-slate-900/10 group relative overflow-hidden"
              >
                <div className="flex justify-between items-center relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <ImageIcon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white/50" />
                </div>
                <div className="relative z-10">
                   <div className="text-xs opacity-40 uppercase tracking-widest mb-1 font-black">Interactive</div>
                   <div className="text-xl tracking-tight">Virtual Campus Tour</div>
                </div>
                 <div className="absolute bottom-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full translate-x-1/3 translate-y-1/3 blur-xl" />
              </Link>
            </div>
            
            {/* Notice Board */}
            <div className="bg-slate-900 rounded-3xl p-6 text-white overflow-hidden relative group">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-white animate-ring" />
                </div>
                <h3 className="font-bold text-xl tracking-tight">Notice Board</h3>
              </div>
              <div className="space-y-4 relative z-10">
                {notices.map((notice, idx) => {
                  const [month, day] = notice.date.split(' ');
                  return (
                    <Link key={idx} to="/notice" className="group/notice cursor-pointer block">
                      <div className="flex gap-4 items-start">
                        <div className="shrink-0 w-12 text-center bg-white/5 rounded-lg py-1 border border-white/10 group-hover/notice:bg-indigo-600 group-hover/notice:border-indigo-500 transition-all">
                          <div className="text-[10px] uppercase font-bold opacity-50 tracking-tighter">{month}</div>
                          <div className="text-sm font-bold">{day.replace(',', '')}</div>
                        </div>
                        <p className="text-sm text-slate-300 group-hover/notice:text-white transition-colors py-1">
                          {notice.title}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <Link to="/notice" className="mt-8 block text-center py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-indigo-600 transition-all relative z-10">
                View All Notices
              </Link>
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Leadership Portraits Widgets */}
            <div className="bg-white rounded-3xl border border-gray-100 p-6 space-y-6 shadow-sm">
               <h3 className="font-bold text-gray-900 uppercase tracking-widest text-[10px] border-l-4 border-indigo-600 pl-3">
                 Institutional Heads
               </h3>
               <div className="space-y-4">
                 {leadership.map(leader => (
                   <div key={leader.role} className="flex items-center gap-4 p-2 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer group">
                      <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-gray-100 shadow-sm">
                        <img src={leader.image} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[9px] font-bold text-indigo-600 uppercase tracking-widest leading-none mb-1">{leader.role}</div>
                        <div className="text-sm font-bold text-gray-900 truncate">{leader.name}</div>
                      </div>
                   </div>
                 ))}
               </div>
            </div>

            {/* Contact & Map Widget */}
            <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="p-6 space-y-6">
                <h3 className="font-bold text-gray-900 uppercase tracking-widest text-[10px] border-l-4 border-indigo-600 pl-3">
                  Visit Us
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-indigo-600 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase mb-1">Campus Location</div>
                      <p className="text-sm text-gray-700 leading-relaxed font-medium">123 Medical Drive, Health City, NY 10001, USA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-indigo-600 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase">Emergency Contact</div>
                      <p className="text-sm text-gray-900 font-bold">+1 (555) 911-0000</p>
                    </div>
                  </div>
                   <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-indigo-600 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase">General Inquiries</div>
                      <p className="text-sm text-gray-900 font-bold">info@globalmed.edu</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="aspect-square bg-slate-100 relative group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600" 
                  alt="Location Map" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl shadow-black/20">
                    <MapPin className="w-6 h-6 text-indigo-600" />
                  </div>
                  <span className="mt-3 text-white font-bold text-xs uppercase tracking-widest shadow-sm">Find us on map</span>
                  <ExternalLink className="absolute top-4 right-4 w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </div>
            </div>

          </aside>
        </div>
      </div>

      {/* Campus Life Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Campus Life</h2>
          <p className="text-gray-500">Glimpses of vibrancy and excellence at Global Medical College.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-lg"
            >
              <img src={img} alt="Gallery" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Common Questions</h2>
          <p className="text-gray-500">Everything you need to know about joining GMC.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900 text-sm">{faq.q}</span>
                {openFaq === i ? <ChevronUp className="w-4 h-4 text-indigo-600" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-sm text-gray-500 font-light leading-relaxed border-t border-gray-50 pt-3">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Global Partners */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-4">Our Global Partners & Recognition</div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all">
            {['WHO', 'ECFMG', 'UNESCO', 'GMC-CERTIFIED', 'HEALTH-PLUS'].map(p => (
              <span key={p} className="text-2xl font-black text-gray-400 font-serif italic tracking-tighter">{p}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
