import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { db } from '../lib/firebase';
import { collection, query, onSnapshot, orderBy, limit, addDoc, serverTimestamp } from 'firebase/firestore';
import { ChatMessage, Announcement } from '../types';
import { handleFirestoreError, OperationType } from '../lib/firestore-errors';
import { 
  BarChart3, MessageSquare, Bell, Calendar, User, Settings, LogOut, 
  Send, Plus, Clock, ExternalLink, ChevronRight, GraduationCap, BookOpen, Database, FilePlus, Users2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Portal() {
  const { user, profile, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'chat' | 'announcements' | 'content'>('dashboard');
  const [isAddingAnn, setIsAddingAnn] = useState(false);
  const [annForm, setAnnForm] = useState({ title: '', content: '', type: 'notice' as Announcement['type'] });

  const createAnnouncement = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!annForm.title || !annForm.content) return;
    try {
      await addDoc(collection(db, 'announcements'), {
        ...annForm,
        date: serverTimestamp()
      });
      setAnnForm({ title: '', content: '', type: 'notice' });
      setIsAddingAnn(false);
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, 'announcements');
    }
  };

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
    }
  }, [user, authLoading, navigate]);

  // Redirect if not admin/staff/guest (Full function admin portal)
  useEffect(() => {
    if (!authLoading && profile) {
      const allowedRoles = ['admin', 'staff', 'guest'];
      if (!allowedRoles.includes(profile.role) && user?.email !== 'mk.rabbani.cse@gmail.com') {
        navigate('/');
      }
    }
  }, [profile, authLoading, user, navigate]);

  useEffect(() => {
    if (!user) return;

    // Real-time chat listener
    const chatQuery = query(
      collection(db, 'chats', 'general', 'messages'),
      orderBy('timestamp', 'desc'),
      limit(20)
    );

    const unsubChat = onSnapshot(chatQuery, (snap) => {
      const msgs = snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as ChatMessage)).reverse();
      setMessages(msgs);
    }, (error) => handleFirestoreError(error, OperationType.LIST, 'chats/general/messages'));

    // Announcements listener
    const annQuery = query(
      collection(db, 'announcements'),
      orderBy('date', 'desc'),
      limit(5)
    );

    const unsubAnn = onSnapshot(annQuery, (snap) => {
      const anns = snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Announcement));
      setAnnouncements(anns);
    }, (error) => handleFirestoreError(error, OperationType.LIST, 'announcements'));

    // Faculty count listener
    const unsubFaculty = onSnapshot(collection(db, 'faculty'), (snap) => {
      setFacultyCount(snap.size);
    }, (error) => handleFirestoreError(error, OperationType.LIST, 'faculty'));

    // Research count listener
    const unsubResearch = onSnapshot(collection(db, 'research'), (snap) => {
      setResearchCount(snap.size);
    }, (error) => handleFirestoreError(error, OperationType.LIST, 'research'));

    return () => {
      unsubChat();
      unsubAnn();
      unsubFaculty();
      unsubResearch();
    };
  }, [user]);

  const [facultyCount, setFacultyCount] = useState(0);
  const [researchCount, setResearchCount] = useState(0);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !user) return;

    try {
      const path = 'chats/general/messages';
      await addDoc(collection(db, 'chats', 'general', 'messages'), {
        senderId: user.uid,
        senderName: profile?.displayName || user.email?.split('@')[0],
        text: newMessage,
        timestamp: serverTimestamp(),
        room: 'general'
      });
      setNewMessage('');
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, 'chats/general/messages');
    }
  };

  if (authLoading) return <div className="h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="flex h-[calc(100vh-64px)] bg-[#f8f9fc] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-400 p-6 flex flex-col justify-between hidden md:flex">
        <div className="space-y-8">
          <div className="flex items-center gap-3 px-2">
             <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
               <GraduationCap className="w-5 h-5 text-indigo-400" />
             </div>
             <span className="text-white font-bold tracking-tight">Portal Console</span>
          </div>

          <nav className="space-y-1">
            {[
              { id: 'dashboard', icon: BarChart3, label: 'Analytics' },
              { id: 'content', icon: Database, label: 'Content Manager' },
              { id: 'announcements', icon: Bell, label: 'Notice Board' },
              { id: 'chat', icon: MessageSquare, label: 'Staff Hub' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all group",
                  activeTab === item.id ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" : "hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className={cn("w-4 h-4", activeTab === item.id ? "text-white" : "text-slate-500 group-hover:text-indigo-400")} />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="pt-8">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 px-3 mb-4">Account</h4>
            <nav className="space-y-1">
               <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium hover:bg-white/5 hover:text-white transition-all">
                 <User className="w-4 h-4 text-slate-500" />
                 Profile
               </button>
               <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium hover:bg-white/5 hover:text-white transition-all text-red-400">
                 <LogOut className="w-4 h-4" />
                 Logout
               </button>
            </nav>
          </div>
        </div>

        <div className="bg-indigo-600/10 rounded-2xl p-4 border border-indigo-500/20">
           <div className="text-xs font-bold text-indigo-400 mb-1">Access Level</div>
           <div className="text-sm text-white font-bold capitalize">{profile?.role === 'admin' || user?.email === 'mk.rabbani.cse@gmail.com' ? 'Super Admin' : profile?.role || 'Guest'}</div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col min-w-0 bg-white md:rounded-tl-3xl md:border-t md:border-l md:border-gray-100 shadow-2xl relative">
        <div className="p-6 md:p-8 flex-grow overflow-y-auto no-scrollbar">
          
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} key="dash" className="space-y-8">
                <header className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tighter">System Overview</h2>
                    <p className="text-gray-400 text-sm">Welcome to the Administration Hub. Monitoring live services.</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-indigo-700 transition-all">
                      <FilePlus className="w-4 h-4" /> Quick Publish
                    </button>
                  </div>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                   {[
                     { label: 'Published Research', value: researchCount, sub: 'Active in Repository', icon: BookOpen, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                     { label: 'Active Faculty', value: facultyCount, sub: 'Verified Members', icon: Users2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                     { label: 'System Notices', value: announcements.length, sub: 'Live Announcements', icon: Bell, color: 'text-amber-600', bg: 'bg-amber-50' },
                   ].map(stat => (
                     <div key={stat.label} className="p-6 rounded-3xl border border-gray-100 bg-white shadow-sm space-y-4 hover:shadow-md transition-shadow">
                        <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", stat.bg)}>
                          <stat.icon className={cn("w-6 h-6", stat.color)} />
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                          <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                          <p className="text-gray-500 text-[10px] italic mt-1 font-medium">{stat.sub}</p>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Latest Announcements Control */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-900">Notice Board Operations</h3>
                      <button onClick={() => setActiveTab('announcements')} className="text-indigo-600 text-xs font-bold hover:underline">Manage All</button>
                    </div>
                    <div className="space-y-3">
                      {announcements.length > 0 ? announcements.map(ann => (
                        <div key={ann.id} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-4">
                           <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shrink-0">
                             <Bell className="w-5 h-5 text-indigo-500" />
                           </div>
                           <div className="min-w-0 flex-grow">
                             <h4 className="font-bold text-sm text-gray-900 truncate">{ann.title}</h4>
                             <p className="text-xs text-gray-500 line-clamp-1">{ann.type} • {ann.date?.toDate ? new Date(ann.date.toDate()).toLocaleDateString() : 'Today'}</p>
                           </div>
                           <button className="text-[10px] font-black text-indigo-600 uppercase bg-white border border-gray-100 px-3 py-1 rounded-lg hover:bg-indigo-50 transition-colors">Edit</button>
                        </div>
                      )) : (
                        <div className="p-4 rounded-xl bg-gray-50 border border-dashed border-gray-200 text-center text-xs text-gray-400">
                           No active notices
                        </div>
                      )}
                    </div>
                  </div>

                  {/* System Health / Recent Activity */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-900">System Activity</h3>
                      <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-500 uppercase">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        { time: '2 mins ago', title: 'New Research Paper', desc: 'Added to Repository', icon: BookOpen, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                        { time: '1 hour ago', title: 'Faculty Profile Update', desc: 'Internal Medicine Dept', icon: Users2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                        { time: '3 hours ago', title: 'System Security Audit', desc: 'Rules deployed successfully', icon: Database, color: 'text-slate-600', bg: 'bg-slate-50' }
                      ].map(item => (
                        <div key={item.title} className="flex items-center gap-4 group">
                           <div className="text-[9px] font-bold text-gray-400 w-16 uppercase tracking-tighter">{item.time}</div>
                           <div className="flex-grow p-4 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-between group-hover:border-indigo-100 transition-all">
                              <div className="flex items-center gap-3">
                                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", item.bg)}>
                                  <item.icon className={cn("w-5 h-5", item.color)} />
                                </div>
                                <div className="space-y-0.5">
                                  <div className="text-sm font-bold text-gray-900">{item.title}</div>
                                  <div className="text-[10px] text-gray-500">{item.desc}</div>
                                </div>
                              </div>
                           </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'content' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} key="content" className="space-y-8">
                 <header className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Content Manager</h2>
                      <p className="text-gray-400 text-sm">Direct database access for institutional resources.</p>
                    </div>
                 </header>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { title: 'Research Repository', desc: 'Manage publications, trials and MEU/RMC activities.', count: `${researchCount} Records`, icon: BookOpen, action: '/research' },
                      { title: 'Faculty Directory', desc: 'Update staff profiles, departments and designations.', count: `${facultyCount} Profiles`, icon: Users2, action: '/faculty' },
                      { title: 'Notice Board', desc: 'Publish circulars, deadlines and event alerts.', count: `${announcements.length} Active`, icon: Bell, action: '#' },
                      { title: 'Department Hub', desc: 'Edit department overview, services and faculty list.', count: '12 Areas', icon: Database, action: '/departments' }
                    ].map(card => (
                      <div key={card.title} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all group flex flex-col justify-between">
                        <div className="space-y-6">
                           <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-inner">
                              <card.icon className="w-7 h-7" />
                           </div>
                           <div className="space-y-2">
                              <h3 className="text-2xl font-black text-gray-900 tracking-tighter">{card.title}</h3>
                              <p className="text-gray-500 font-light text-sm leading-relaxed">{card.desc}</p>
                           </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                           <div className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{card.count}</div>
                           <button onClick={() => card.action !== '#' && navigate(card.action)} className="flex items-center gap-2 text-indigo-600 font-bold text-xs group-hover:gap-3 transition-all">
                              Manage <ChevronRight className="w-4 h-4" />
                           </button>
                        </div>
                      </div>
                    ))}
                 </div>
              </motion.div>
            )}

            {activeTab === 'chat' && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} key="chat" className="h-full flex flex-col space-y-6">
                <header className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Community Chat</h2>
                    <p className="text-gray-400 text-sm">Real-time interaction with peers and faculty.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                       {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100" />)}
                       <div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-600 text-white text-[10px] flex items-center justify-center font-bold font-mono">+12</div>
                    </div>
                  </div>
                </header>

                <div className="flex-grow flex flex-col bg-gray-50 sm:rounded-3xl border border-gray-100 overflow-hidden relative shadow-inner">
                  <div className="flex-grow p-6 overflow-y-auto space-y-4 flex flex-col no-scrollbar">
                    {messages.map((msg, i) => {
                      const isMe = msg.senderId === user?.uid;
                      return (
                        <div key={msg.id} className={cn("flex flex-col max-w-[80%]", isMe ? "self-end items-end" : "self-start items-start")}>
                          <div className={cn(
                            "px-4 py-2 text-sm",
                            isMe ? "bg-indigo-600 text-white rounded-2xl rounded-tr-none" : "bg-white text-gray-900 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm"
                          )}>
                            <div className={cn("text-[9px] font-bold uppercase tracking-wider mb-1 opacity-60", isMe ? "text-indigo-200" : "text-indigo-600")}>
                              {msg.senderName}
                            </div>
                            {msg.text}
                          </div>
                          <div className="text-[8px] text-gray-400 mt-1 font-bold">
                             {msg.timestamp?.toDate ? new Date(msg.timestamp.toDate()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'just now'}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  
                  <div className="p-4 bg-white border-t border-gray-100">
                    <form onSubmit={sendMessage} className="flex gap-2">
                      <input 
                        type="text" 
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..." 
                        className="flex-grow bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm focus:ring-2 focus:ring-indigo-100 outline-none"
                      />
                      <button type="submit" className="bg-indigo-600 p-3 rounded-xl text-white hover:bg-indigo-700 transition-all shadow-md shadow-indigo-600/20">
                        <Send className="w-5 h-5" />
                      </button>
                    </form>
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeTab === 'announcements' && (
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} key="ann" className="space-y-8">
                  <header className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 balance-text">Official Board</h2>
                      <p className="text-gray-400 text-sm">Stay updated with critical circulars and news.</p>
                    </div>
                    <button 
                      onClick={() => setIsAddingAnn(true)}
                      className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-indigo-700 transition-all shadow-sm"
                    >
                      <Plus className="w-4 h-4" /> Create Circular
                    </button>
                  </header>
                  
                  <AnimatePresence>
                    {isAddingAnn && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-indigo-50 border border-indigo-100 rounded-3xl p-6 overflow-hidden"
                      >
                        <form onSubmit={createAnnouncement} className="space-y-4">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-1">
                                 <label className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest ml-1">Title</label>
                                 <input 
                                   required
                                   value={annForm.title}
                                   onChange={e => setAnnForm({...annForm, title: e.target.value})}
                                   className="w-full bg-white border border-indigo-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
                                   placeholder="Official Holiday Notice"
                                 />
                              </div>
                              <div className="space-y-1">
                                 <label className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest ml-1">Type</label>
                                 <select 
                                   value={annForm.type}
                                   onChange={e => setAnnForm({...annForm, type: e.target.value as any})}
                                   className="w-full bg-white border border-indigo-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
                                 >
                                    <option value="notice">Circular / Notice</option>
                                    <option value="deadline">Critical Deadline</option>
                                    <option value="event">Event Alert</option>
                                 </select>
                              </div>
                           </div>
                           <div className="space-y-1">
                              <label className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest ml-1">Content</label>
                              <textarea 
                                required
                                value={annForm.content}
                                onChange={e => setAnnForm({...annForm, content: e.target.value})}
                                className="w-full bg-white border border-indigo-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-200 min-h-[100px]"
                                placeholder="Enter disclosure text..."
                              />
                           </div>
                           <div className="flex justify-end gap-3">
                              <button type="button" onClick={() => setIsAddingAnn(false)} className="px-4 py-2 text-xs font-bold text-gray-400 hover:text-gray-600">Cancel</button>
                              <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-xl text-xs font-bold hover:bg-indigo-700 transition-all">Publish Now</button>
                           </div>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                 
                 <div className="space-y-4">
                   {announcements.map(ann => (
                     <div key={ann.id} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div className={cn("absolute left-0 top-0 bottom-0 w-1.5", ann.type === 'deadline' ? 'bg-red-500' : 'bg-indigo-500')} />
                        <div className="flex justify-between items-start gap-8">
                           <div className="space-y-2">
                              <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                <span className={cn("px-1.5 py-0.5 rounded", ann.type === 'deadline' ? 'bg-red-50 text-red-500' : 'bg-indigo-50 text-indigo-500')}>{ann.type}</span>
                                <span>•</span>
                                <span>Published {ann.date?.toDate ? new Date(ann.date.toDate()).toLocaleDateString() : 'Today'}</span>
                              </div>
                              <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{ann.title}</h3>
                              <p className="text-gray-500 font-light leading-relaxed text-sm">{ann.content}</p>
                           </div>
                           <button className="shrink-0 p-3 rounded-xl bg-gray-50 text-gray-400 hover:text-indigo-600 border border-gray-100 transition-all">
                             <ExternalLink className="w-5 h-5" />
                           </button>
                        </div>
                     </div>
                   ))}
                 </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
