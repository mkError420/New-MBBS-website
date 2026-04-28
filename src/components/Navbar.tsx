import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, User, GraduationCap, Map, Newspaper, BookOpen, Search, LogIn, Globe, Bell, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, profile } = useAuth();
  const location = useLocation();

  const navItems = [
    { id: 'home', name: t('nav.home'), path: '/', icon: GraduationCap },
    { id: 'faculty', name: t('nav.faculty'), path: '/faculty', icon: User },
    { id: 'departments', name: t('nav.departments'), path: '/departments', icon: BookOpen },
    { id: 'research', name: t('nav.research'), path: '/research', icon: Search },
    { id: 'journal', name: t('nav.journal'), path: '/journal', icon: BookOpen },
    { id: 'library', name: t('nav.library'), path: '/library', icon: Layers },
    { id: 'news', name: t('nav.news'), path: '/news', icon: Newspaper },
    { id: 'notice', name: t('nav.notice'), path: '/notice', icon: Bell },
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              G
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900 hidden sm:block">
              Global Medical College
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-indigo-600",
                  location.pathname === item.path && item.id !== 'notice' ? "text-indigo-600 bg-indigo-50/50" : "text-gray-600"
                )}
              >
                {item.name}
              </Link>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="p-2 text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-1"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">{i18n.language}</span>
            </button>

            {user ? (
              <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold border border-indigo-200">
                {profile?.displayName?.[0] || user.email?.[0]?.toUpperCase()}
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-700 transition-colors shadow-sm"
              >
                {t('nav.login')}
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
               onClick={toggleLanguage}
               className="p-2 text-gray-600"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              {!user && (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-3 py-3 rounded-md text-base font-bold text-indigo-600 bg-indigo-50"
                >
                  <LogIn className="w-5 h-5" />
                  <span>{t('nav.login')}</span>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
