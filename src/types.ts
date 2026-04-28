export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  profileImageUrl?: string;
  department?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  department: string;
  designation: string;
  specialization: string;
  bio: string;
  imageUrl: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  publishedDate: string;
  journal: string;
  tags: string[];
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  text: string;
  timestamp: any;
  room: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  type: 'notice' | 'event' | 'deadline';
  date: any;
}
