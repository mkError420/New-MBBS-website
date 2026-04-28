export interface LibraryItem {
  id: string;
  title: string;
  author: string;
  section: string;
  code: string;
  type: 'Physical' | 'Electronic';
  cover?: string;
  description?: string;
}

export const LIBRARY_DATA: LibraryItem[] = [
  { 
    id: 'b1', 
    title: 'Guyton & Hall: Textbook of Physiology', 
    author: 'John E. Hall', 
    section: 'Physiology', 
    code: '612.01 CAL', 
    type: 'Physical',
    description: 'The world\'s foremost medical physiology textbook.'
  },
  { 
    id: 'b2', 
    title: 'Gray\'s Anatomy', 
    author: 'Henry Gray', 
    section: 'Anatomy', 
    code: '611 GRA', 
    type: 'Electronic',
    description: 'The classic guide to human anatomy.'
  },
  { 
    id: 'b3', 
    title: 'Harrisons Principles of Internal Medicine', 
    author: 'Harrison', 
    section: 'Medicine', 
    code: '616 HAR', 
    type: 'Physical',
    description: 'A comprehensive guide to internal medicine.'
  },
  { 
    id: 'b4', 
    title: 'Bailey & Love\'s Short Practice of Surgery', 
    author: 'Bailey', 
    section: 'Surgery', 
    code: '617 BAI', 
    type: 'Physical',
    description: 'A essential book for surgical practice.'
  },
  { 
    id: 'b5', 
    title: 'Robbins Basic Pathology', 
    author: 'Robbins', 
    section: 'Pathology', 
    code: '616.07 ROB', 
    type: 'Electronic',
    description: 'Fundamental principles of pathology.'
  },
  { 
    id: 'b6', 
    title: 'The ECG Made Easy', 
    author: 'John Hampton', 
    section: 'Cardiology', 
    code: 'E-RESOURCES', 
    type: 'Electronic',
    description: 'A simple guide to reading ECGs.'
  },
  {
    id: 'b7',
    title: 'Nelson Textbook of Pediatrics',
    author: 'Robert M. Kliegman',
    section: 'Pediatrics',
    code: '618.92 NEL',
    type: 'Physical',
    description: 'The standard reference in pediatrics.'
  },
  {
    id: 'b8',
    title: 'Ganong\'s Review of Medical Physiology',
    author: 'Kim E. Barrett',
    section: 'Physiology',
    code: '612 GAN',
    type: 'Electronic',
    description: 'Concise review of physiology for students.'
  },
  {
    id: 'b9',
    title: 'Davidson\'s Principles and Practice of Medicine',
    author: 'Stuart H. Ralston',
    section: 'Medicine',
    code: '616 DAV',
    type: 'Physical',
    description: 'Trusted clinical companion for medical students.'
  }
];
