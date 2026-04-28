import React from 'react';
import { Calendar, Users, BookOpen, GraduationCap, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Courses() {
  const departments = [
    {
      name: 'Pre-Clinical',
      courses: [
        { id: 'AN101', title: 'Human Anatomy', duration: '1 Year', status: 'Core' },
        { id: 'PH101', title: 'Medical Physiology', duration: '1 Year', status: 'Core' },
        { id: 'BC101', title: 'Biochemistry', duration: '1 Year', status: 'Core' },
      ]
    },
    {
      name: 'Para-Clinical',
      courses: [
        { id: 'PA201', title: 'Pathology', duration: '1.5 Years', status: 'Core' },
        { id: 'MI201', title: 'Microbiology', duration: '1.5 Years', status: 'Core' },
        { id: 'PM201', title: 'Pharmacology', duration: '1.5 Years', status: 'Core' },
      ]
    },
    {
      name: 'Clinical',
      courses: [
        { id: 'SU301', title: 'General Surgery', duration: '1.5 Years', status: 'Rotational' },
        { id: 'MD301', title: 'Internal Medicine', duration: '1.5 Years', status: 'Rotational' },
        { id: 'OB301', title: 'Obstetrics & Gynecology', duration: '1.5 Years', status: 'Rotational' },
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Academic Curriculum</h1>
        <p className="text-gray-500">Comprehensive course structure designed to meet international medical standards.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {departments.map((dept, idx) => (
          <div key={dept.name} className="space-y-6">
            <h2 className="text-xl font-bold text-indigo-600 border-b-2 border-indigo-100 pb-2 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 text-sm">{idx + 1}</span>
              {dept.name}
            </h2>
            <div className="space-y-4">
              {dept.courses.map((course, cIdx) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: cIdx * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-indigo-200 transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-bold text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded tracking-widest">{course.id}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{course.title}</h3>
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-400 font-medium">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <GraduationCap className="w-3 h-3" />
                      {course.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="bg-indigo-600 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight">Apply for Admission 2024-25</h2>
            <p className="text-indigo-100 text-lg leading-relaxed font-light">
              Applications are now open for the next academic year. GMC offers a world-class environment for aspiring medical professionals.
            </p>
            <button className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold hover:bg-indigo-50 transition-colors shadow-lg shadow-black/10">
              Download Prospectus
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
              <Calendar className="w-8 h-8 mb-4" />
              <div className="text-sm font-bold opacity-60 uppercase mb-1">Deadline</div>
              <div className="text-xl font-bold">Aug 15, 2024</div>
            </div>
             <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
              <Users className="w-8 h-8 mb-4" />
              <div className="text-sm font-bold opacity-60 uppercase mb-1">Seats</div>
              <div className="text-xl font-bold">150 Total</div>
            </div>
          </div>
        </div>
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-50" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-700 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-50" />
      </section>
    </div>
  );
}
