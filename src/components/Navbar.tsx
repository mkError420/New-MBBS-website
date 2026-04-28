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

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ne', name: 'नेपाली' },
    { code: 'dz', name: 'རྫོང་ཁ་' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'dv', name: 'ދިވެހި' }
  ];

  const [showLangDropdown, setShowLangDropdown] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              G
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900 hidden sm:block">
              {t('nav.collegeName')}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={cn(
                  "px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-indigo-600 whitespace-nowrap",
                  location.pathname === item.path && item.id !== 'notice' ? "text-indigo-600 bg-indigo-50/50" : "text-gray-600"
                )}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="p-2 text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-1 border border-gray-100 rounded-lg bg-gray-50/50"
              >
                <Globe className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase">{i18n.language}</span>
              </button>

              <AnimatePresence>
                {showLangDropdown && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setShowLangDropdown(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-20 py-1"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            i18n.changeLanguage(lang.code);
                            setShowLangDropdown(false);
                          }}
                          className={cn(
                            "w-full text-left px-4 py-2 text-xs font-bold transition-colors hover:bg-indigo-50",
                            i18n.language === lang.code ? "text-indigo-600 bg-indigo-50/50" : "text-gray-600"
                          )}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {user && user.email === 'mk.rabbani.cse@gmail.com' && (
              <div className="flex items-center gap-3">
                <Link 
                  to="/portal" 
                  className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100"
                >
                  Portal
                </Link>
                <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold border border-indigo-200">
                  {user.email?.[0]?.toUpperCase()}
                </div>
              </div>
            )}
            {user && user.email !== 'mk.rabbani.cse@gmail.com' && (
              <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold border border-indigo-200">
                {user.email?.[0]?.toUpperCase()}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="p-2 text-gray-600"
              >
                <Globe className="w-5 h-5" />
              </button>
              
              <AnimatePresence>
                {showLangDropdown && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setShowLangDropdown(false)} />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-2xl border border-gray-100 z-20 py-1"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            i18n.changeLanguage(lang.code);
                            setShowLangDropdown(false);
                          }}
                          className={cn(
                            "w-full text-left px-4 py-2 text-xs font-bold",
                            i18n.language === lang.code ? "text-indigo-600" : "text-gray-600"
                          )}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
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
            className="lg:hidden bg-white border-b border-gray-100"
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
              {user && user.email === 'mk.rabbani.cse@gmail.com' ? (
                <Link
                  to="/portal"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-3 py-3 rounded-md text-base font-bold text-indigo-600 hover:bg-indigo-50"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>Admin Portal</span>
                </Link>
              ) : !user && (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-3 py-3 rounded-md text-base font-bold text-indigo-600 hover:bg-indigo-50"
                >
                  <LogIn className="w-5 h-5" />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
