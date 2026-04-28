export interface NoticeItem {
  id: string;
  title: string;
  category: string;
  date: string;
  isPinned: boolean;
  content: string;
}

export const NOTICES: NoticeItem[] = [
  {
    id: 'nt1',
    title: 'MBBS Admission 2024-25: First Merit List Announcement',
    category: 'Admission',
    date: 'Apr 28, 2024',
    isPinned: true,
    content: 'The first merit list for MBBS admission for the academic year 2024-25 has been published. Selected candidates are requested to complete the registration process by May 10, 2024.'
  },
  {
    id: 'nt2',
    title: 'Summer Vacation Schedule for Students',
    category: 'Academic',
    date: 'Apr 25, 2024',
    isPinned: false,
    content: 'The college will remain closed for summer vacation from June 1st to June 15th, 2024. Regular classes will resume from June 16th.'
  },
  {
    id: 'nt3',
    title: 'Examination Schedule: 2nd Professional MBBS',
    category: 'Exam',
    date: 'Apr 22, 2024',
    isPinned: true,
    content: 'The detailed schedule for the 2nd Professional MBBS examinations (Supplementary) has been released. Please check the departmental notice boards for room assignments.'
  },
  {
    id: 'nt4',
    title: 'Blood Donation Camp on Campus',
    category: 'Event',
    date: 'Apr 20, 2024',
    isPinned: false,
    content: 'GMC is organizing a voluntary blood donation camp in association with the Central Blood Bank on May 5th at the Auditorium.'
  },
  {
    id: 'nt5',
    title: 'New Library Timing During Exams',
    category: 'Campus',
    date: 'Apr 18, 2024',
    isPinned: false,
    content: 'To support student preparation, the central library will remain open 24/7 from April 20th until the end of the semester examinations.'
  }
];
