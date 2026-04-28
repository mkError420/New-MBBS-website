export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  author: string;
  readTime: string;
}

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Global Medical Excellence: GMC Ranked Top Tier in Clinical Care',
    category: 'Campus',
    date: 'April 24, 2024',
    excerpt: 'The World Health Ranking Association has officially recognized Global Medical College Hospital for its exceptional standards in patient care and clinical outcome safety metrics.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    author: 'Admin Office',
    readTime: '5 min'
  },
  {
    id: 'n2',
    title: 'Implementation of AI-Driven Robotic Surgical Systems',
    category: 'Research',
    date: 'April 20, 2024',
    excerpt: 'Our surgical department has successfully integrated the latest Gen-4 robotic systems for minimally invasive thoracic procedures, marking a new era in surgical precision.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
    author: 'Dept. of Surgery',
    readTime: '8 min'
  },
  {
    id: 'n3',
    title: 'International Medical Symposium: Future of Pediatrics',
    category: 'Events',
    date: 'May 15, 2024',
    excerpt: 'Registration is now open for our annual symposium. This year we host 15 global experts to discuss neonatal care breakthrough technologies and psychological integration.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    author: 'Events Committee',
    readTime: '3 min'
  },
  {
    id: 'n4',
    title: 'Integrated Curriculum Update for Phase-II Students',
    category: 'Academic',
    date: 'April 12, 2024',
    excerpt: 'The Academic Council has approved the new modular curriculum for Phase-II, focusing more on community correlation and clinical reasoning from day one.',
    image: 'https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&q=80&w=800',
    author: 'Academic Dean',
    readTime: '12 min'
  },
  {
    id: 'n5',
    title: 'New Student Wellness Center Inauguration',
    category: 'Campus',
    date: 'April 05, 2024',
    excerpt: 'A dedicated facility for student health and psychological counseling is now fully operational at the South Wing, featuring private consultation suites and meditation zones.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
    author: 'Student Affairs',
    readTime: '4 min'
  },
  {
    id: 'n6',
    title: 'Stem Cell Breakthrough: First Successful Lab Model',
    category: 'Research',
    date: 'March 28, 2024',
    excerpt: 'Our regenerative medicine team has published a groundbreaking paper on cardiac stem cell differentiation in the Journal of International Cardiology.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    author: 'Microbiology Cell',
    readTime: '15 min'
  }
];
