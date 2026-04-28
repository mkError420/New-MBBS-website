import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            faculty: 'Faculty',
            departments: 'Departments',
            admissions: 'Admissions',
            research: 'Research',
            news: 'News',
            notice: 'Notice',
            portal: 'Student Portal',
            login: 'Staff Login'
          },
          home: {
            welcome: 'Welcome to Global Medical College',
            description: 'Shaping the future of medicine with excellence in education and research.',
            explore: 'Explore Departments',
            tour: 'Virtual Campus Tour'
          },
          portal: {
            announcements: 'Important Announcements',
            events: 'Upcoming Events',
            chat: 'Community Chat'
          }
        }
      },
      es: {
        translation: {
          nav: {
            home: 'Inicio',
            faculty: 'Facultad',
            departments: 'Departamentos',
            admissions: 'Admisiones',
            research: 'Investigación',
            news: 'Noticias',
            notice: 'Aviso',
            portal: 'Portal del Estudiante',
            login: 'Acceso Personal'
          },
          home: {
            welcome: 'Bienvenido al Colegio Médico Global',
            description: 'Forjando el futuro de la medicina con excelencia en educación e investigación.',
            explore: 'Explorar Departamentos',
            tour: 'Recorrido Virtual por el Campus'
          }
        }
      }
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
