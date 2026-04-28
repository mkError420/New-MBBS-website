import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-500 rounded flex items-center justify-center text-white font-bold text-lg">G</div>
            <span className="font-bold text-xl text-white tracking-tight">Global Medical College</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Dedicated to excellence in medical education and pioneering research for a healthier world.
          </p>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-indigo-400 transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-indigo-400 transition-colors" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-indigo-400 transition-colors" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-indigo-400 transition-colors" />
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-indigo-400 cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Admissions</li>
            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Courses</li>
            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Portal</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Portals</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Student Login</li>
            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Faculty Login</li>
            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Alumni Network</li>
            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Library Access</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Contact Us</h3>
          <div className="flex items-start space-x-3 text-sm">
            <MapPin className="w-5 h-5 text-indigo-400 shrink-0" />
            <span>123 Medical Drive, Health City, NY 10001</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <Phone className="w-5 h-5 text-indigo-400 shrink-0" />
            <span>+1 (555) 012-3456</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
            <span>contact@globalmedcollege.edu</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Global Medical College. All rights reserved.
      </div>
    </footer>
  );
}
