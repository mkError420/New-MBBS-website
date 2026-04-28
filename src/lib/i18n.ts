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
            journal: 'Journal',
            library: 'Library',
            news: 'News',
            notice: 'Notice',
            portal: 'Student Portal',
            login: 'Staff Login',
            collegeName: 'Global Medical College'
          },
          home: {
            welcome: 'Welcome to Global Medical College',
            description: 'Shaping the future of medicine with excellence in education and research.',
            explore: 'Explore Departments',
            tour: 'Virtual Campus Tour',
            stats: {
              founded: 'Founded',
              faculty: 'Faculty Members',
              research: 'Research Papers',
              ranking: 'Global Rank'
            },
            sections: {
              news: 'Latest News',
              notices: 'Notice Board',
              academic: 'Academic Programs',
              admission: 'Admission Open',
              campus: 'Campus Experience',
              who: 'Who we are?',
              what: 'What we provide?',
              why: 'Why Choose US?',
              voices: 'Student Voices',
              campusLife: 'Campus Life',
              questions: 'Common Questions',
              viewAllNotices: 'View All Notices',
              heads: 'Institutional Heads',
              visit: 'Visit Us',
              location: 'Campus Location',
              emergency: 'Emergency Contact',
              inquiries: 'General Inquiries',
              findMap: 'Find us on map',
              readBio: 'Read Full Bio',
              messagePrefix: "'s Message"
            }
          },
          portal: {
            announcements: 'Important Announcements',
            events: 'Upcoming Events',
            chat: 'Community Chat'
          },
          library: {
            title: 'Medical Library',
            description: 'Access our centralized medical repository featuring over 30,000 physical and digital scholarly assets.',
            search: 'Reference code, Title or Scholar name...',
            all: 'All',
            physical: 'Physical',
            electronic: 'Electronic',
            open: 'Open Resource',
            request: 'Log Request',
            requestLogged: 'Request logged for',
            repositorySearch: 'Global Repository Search',
            repositoryDesc: 'Instantly locate specialized clinical texts using the shelf-sync algorithm.',
            noResults: 'No matches found for your search criteria.',
            clearFilters: 'Clear all filters',
            by: 'By',
            libTerminal: 'Resource Terminal',
            serviceHours: 'Service Hours',
            standardOps: 'Standard Ops',
            clinicalReserve: 'Clinical Reserve',
            stats: 'Real-time Stats',
            volumes: 'VOLUMES',
            journals: 'E-JOURNALS',
            support: 'Library Support',
            exchange: 'Inter-Library Exchange',
            startSession: 'Start Session',
            digitalOps: '24/7 Digital'
          },
          notice: {
            title: 'Official Notice Board',
            description: 'Stay updated with the latest circulars, academic schedules, and institutional announcements.',
            search: 'Search notices...',
            categories: {
              all: 'All',
              admission: 'Admission',
              academic: 'Academic',
              exam: 'Exam',
              event: 'Event',
              campus: 'Campus'
            },
            download: 'Download PDF Document',
            noNotices: 'No notices found',
            adjustSearch: 'Try adjusting your search or filters.',
            subscribeTitle: 'Subscribe for Alerts',
            subscribeDesc: 'Get instant notifications on your mobile device for critical academic circulars and emergency updates.',
            subscribePlaceholder: 'Your Phone Number',
            subscribeBtn: 'Subscribe SMS'
          }
        }
      },
      ne: {
        translation: {
          nav: {
            home: 'गृहपृष्ठ',
            faculty: 'संकाय',
            departments: 'विभागहरू',
            admissions: 'भर्ना',
            research: 'अनुसन्धान',
            journal: 'जर्नल',
            library: 'पुस्तकालय',
            news: 'समाचार',
            notice: 'सूचना',
            portal: 'विद्यार्थी पोर्टल',
            login: 'कर्मचारी लगइन',
            collegeName: 'ग्लोबल मेडिकल कलेज'
          },
          home: {
            welcome: 'ग्लोबल मेडिकल कलेजमा स्वागत छ',
            description: 'शिक्षा, अनुसन्धान, र क्लिनिकल हेरचाहमा उत्कृष्टता मार्फत चिकित्साको भविष्यलाई आकार दिँदै।',
            explore: 'विभागहरू अन्वेषण गर्नुहोस्',
            tour: 'भर्चुअल क्याम्पस भ्रमण',
            stats: {
              founded: 'स्थापना',
              faculty: 'संकाय सदस्यहरू',
              research: 'अनुसन्धान पत्रहरू',
              ranking: 'वैश्विक श्रेणी'
            },
            sections: {
              news: 'ताजा समाचार',
              notices: 'सूचना बोर्ड',
              academic: 'शैक्षिक कार्यक्रमहरू',
              admission: 'भर्ना खुला',
              campus: 'क्याम्पस अनुभव',
              who: 'हामी को हौं?',
              what: 'हामी के प्रदान गर्छौं?',
              why: 'हामीलाई किन रोज्ने?',
              voices: 'विद्यार्थीका आवाजहरू',
              campusLife: 'क्याम्पस जीवन',
              questions: 'साझा प्रश्नहरू',
              viewAllNotices: 'सबै सूचनाहरू हेर्नुहोस्',
              heads: 'संस्थागत प्रमुखहरू',
              visit: 'हामीलाई भेट्नुहोस्',
              location: 'क्याम्पस स्थान',
              emergency: 'आपतकालीन सम्पर्क',
              inquiries: 'सामान्य सोधपुछ',
              findMap: 'नक्सामा फेला पार्नुहोस्',
              readBio: 'पूरा विवरण पढ्नुहोस्',
              messagePrefix: 'को सन्देश'
            }
          },
          library: {
            title: 'मेडिकल पुस्तकालय',
            description: '३०,००० भन्दा बढी भौतिक र डिजिटल शैक्षिक सम्पत्तिहरू समावेश गरी हाम्रो केन्द्रीकृत चिकित्सा भण्डारमा पहुँच गर्नुहोस्।',
            search: 'शीर्षक, लेखक वा कोड द्वारा खोज्नुहोस्...',
            all: 'सबै',
            physical: 'भौतिक',
            electronic: 'इलेक्ट्रोनिक',
            open: 'स्रोत खोल्नुहोस्',
            request: 'अनुरोध दर्ता गर्नुहोस्',
            requestLogged: 'अनुरोध दर्ता भयो',
            repositorySearch: 'ग्लोबल रिपोजिटरी खोज',
            repositoryDesc: 'शेल्फ-सिंक एल्गोरिदम प्रयोग गरेर विशेष क्लिनिकल पाठहरू तुरुन्तै पत्ता लगाउनुहोस्।',
            noResults: 'तपाईंको खोज मापदण्डको लागि कुनै परिणाम भेटिएन।',
            clearFilters: 'सबै फिल्टरहरू हटाउनुहोस्',
            by: 'द्वारा',
            libTerminal: 'रिसोर्स टर्मिनल',
            serviceHours: 'सेवा समय',
            standardOps: 'मानक सञ्चालन',
            clinicalReserve: 'क्लिनिकल रिजर्भ',
            stats: 'रियल-टाइम तथ्याङ्क',
            volumes: 'पुस्तकहरू',
            journals: 'ई-जर्नलहरू',
            support: 'पुस्तकालय सहयोग',
            exchange: 'अन्तर-पुस्तकालय विनिमय',
            startSession: 'सत्र सुरु गर्नुहोस्',
            digitalOps: '२४/७ डिजिटल'
          },
          notice: {
            title: 'आधिकारिक सूचना बोर्ड',
            description: 'भर्खरका सर्कुलरहरू, शैक्षिक तालिकाहरू, र संस्थागत घोषणाहरूको साथ अपडेट रहनुहोस्।',
            search: 'सूचनाहरू खोज्नुहोस्...',
            categories: {
              all: 'सबै',
              admission: 'भर्ना',
              academic: 'शैक्षिक',
              exam: 'परीक्षा',
              event: 'कार्यक्रम',
              campus: 'क्याम्पस'
            },
            download: 'PDF कागजात डाउनलोड गर्नुहोस्',
            noNotices: 'कुनै सूचना भेटिएन',
            adjustSearch: 'तपाईंको खोज वा फिल्टरहरू मिलाउने प्रयास गर्नुहोस्।',
            subscribeTitle: 'अलर्टका लागि सदस्यता लिनुहोस्',
            subscribeDesc: 'महत्त्वपूर्ण शैक्षिक परिपत्र र आपतकालीन अपडेटहरूको लागि तपाईंको मोबाइलमा तत्काल सूचना प्राप्त गर्नुहोस्।',
            subscribePlaceholder: 'तपाईंको फोन नम्बर',
            subscribeBtn: 'एसएमएस सदस्यता'
          }
        }
      },
      dz: {
        translation: {
          nav: {
            home: 'ཁྱིམ།',
            faculty: 'སློབ་དཔོན།',
            departments: 'ལས་ཁུངས།',
            admissions: 'སློབ་འཇུག།',
            research: 'ཉམས་ཞིབ།',
            journal: 'གསར་དེབ།',
            library: 'དཔེ་མཛོད།',
            news: 'གནས་ཚུལ།',
            notice: 'བརྡ་ཐོ།',
            portal: 'སློབ་ཕྲུག་འཇུག་སྒོ།',
            login: 'ལས་བྱེད་ནང་བསྐྱོད།',
            collegeName: 'འཛམ་གླིང་སྨན་རིག་སློབ་གྲྭ།'
          },
          home: {
            welcome: 'འཛམ་གླིང་སྨན་རིག་སློབ་གྲྭ་ནང་བྱོན་པ་ལེགས་སོ།',
            description: 'ཤེས་ཡོན་དང་ཉམས་ཞིབ་ནང་དྲག་ཤོས་ཐོག་ནས་སྨན་རིག་གི་མ་འོངས་པ་བཟོ་བཀོད་འབད་དོ།',
            explore: 'ལས་ཁུངས་ཚུ་བལྟ།',
            tour: 'སློབ་གྲྭ་བལྟ་བཤལ།',
            stats: {
              founded: 'གཞི་བཙུགས།',
              faculty: 'སློབ་དཔོན་ཚུ།',
              research: 'ཉམས་ཞིབ་ཡིག་ཆ།',
              ranking: 'འཛམ་གླིང་གནས་རིམ།'
            },
            sections: {
              news: 'གནས་ཚུལ་གསར་པ།',
              notices: 'བརྡ་ཐོ་པང་།',
              academic: 'ཤེས་ཡོན་ལས་རིམ།',
              admission: 'སློབ་འཇུག་འགོ་བཙུགས།',
              campus: 'སློབ་གྲྭའི་ཉམས་མྱོང་',
              who: 'ང་བཅས་ག་སྨོ?།',
              what: 'ང་བཅས་ཀྱིས་ག་ཅི་བྱིནམ་སྨོ?།',
              why: 'ང་བཅས་ག་ཅི་འབད་གདམ་ཁ་རྐྱབ་ནི་སྨོ?།',
              voices: 'སློབ་ཕྲུག་གི་གསུང་སྐད།',
              campusLife: 'སློབ་གྲྭའི་འཚོ་བ།',
              questions: 'དྲི་བ་དྲིས་ལན།',
              viewAllNotices: 'བརྡ་ཐོ་ཆ་མཉམ་བལྟ།',
              heads: 'སློབ་གྲྭའི་འགོ་ཁྲིད།',
              visit: 'ང་བཅས་ལུ་བལྟ་བཤལ་བྱོན།',
              location: 'སློབ་གྲྭའི་ས་གནས།',
              emergency: 'ཛ་དྲག་འབྲེལ་བ།',
              inquiries: 'སྤྱིར་བཏང་འབྲེལ་བ།',
              findMap: 'ས་ཁྲ་ནང་འཚོལ།',
              readBio: 'ལོ་རྒྱུས་ཆ་མཉམ་བལྟ།',
              messagePrefix: 'གི་འཕྲིན་དོན།'
            }
          },
          library: {
            title: 'སྨན་རིག་དཔེ་མཛོད།',
            description: 'དཔེ་དེབ་དང་གློག་རིག་ཐོག་གི་སློབ་སྦྱོང་ཅ་ཆས་ ༣༠,༠༠༠ ལྷག་ཡོད་མི་ ང་བཅས་ཀྱི་དཔེ་མཛོད་ནང་འཛུལ་སྤྱོད་འབད།',
            search: 'འཚོལ་ཞིབ་འབད...',
            all: 'ཆ་མཉམ།',
            physical: 'དངོས་སུ།',
            electronic: 'གློག་རིག།',
            open: 'འབྱུང་ཁུངས་ཁ།',
            request: 'ཞུ་བ་འབད།',
            requestLogged: 'ཞུ་བ་འབྱོར་ཡོད།',
            repositorySearch: 'འཛམ་གླིང་མཛོད་ཁང་འཚོལ་ཞིབ།',
            repositoryDesc: 'སྨན་རིག་ཡིག་ཆ་ཚུ་ མགྱོགས་པར་འཚོལ་ཞིབ་འབད།',
            noResults: 'འཚོལ་མ་ཐོབ།',
            clearFilters: 'ཆ་མཉམ་བཏོན་གཏང་།',
            by: 'གིས།',
            libTerminal: 'དཔེ་མཛོད་འཇུག་སྒོ།',
            serviceHours: 'ཞབས་ཏོག་དུས་ཚོད།',
            standardOps: 'སྤྱིར་བཏང་ལཱ་འགན།',
            clinicalReserve: 'སྨན་རིག་མཛོད།',
            stats: 'དངོས་ཡོད་གནས་སྟངས།',
            volumes: 'དཔེ་དེབ་ཁ་གྲངས།',
            journals: 'གློག་རིག་གསར་དེབ།',
            support: 'དཔེ་མཛོད་རྒྱབ་སྐྱོར།',
            exchange: 'དཔེ་མཛོད་བརྗེ་སོར།',
            startSession: 'འགོ་བཙུགས།',
            digitalOps: '༢༤/༧ གློག་རིག།'
          },
          notice: {
            title: 'གཞུང་འབྲེལ་བརྡ་ཐོ་པང་།',
            description: 'གསར་པའི་ཡིག་ཆ་དང་ ཤེས་ཡོན་ལས་རིམ་ཚུ་གི་སྐོར་ལས་ གནས་ཚུལ་དུས་མཐུན་བཟོ་ནི།',
            search: 'བརྡ་ཐོ་འཚོལ་ཞིབ་འབད...',
            categories: {
              all: 'ཆ་མཉམ།',
              admission: 'སློབ་འཇུག།',
              academic: 'ཤེས་ཡོན།',
              exam: 'རྒྱུགས་སྤྲོད།',
              event: 'ལས་རིམ།',
              campus: 'སློབ་གྲྭ།'
            },
            download: 'ཡིག་ཆ་ཕབ་ལེན།',
            noNotices: 'བརྡ་ཐོ་མ་ཐོབ།',
            adjustSearch: 'འཚོལ་ཞིབ་སྒྱུར་བཅོས་འབད།',
            subscribeTitle: 'བརྡ་གསལ་ནང་བཞུགས།',
            subscribeDesc: 'ཛ་དྲག་གནས་ཚུལ་ཚུ་ འཕྲལ་ལས་ཐོབ།',
            subscribePlaceholder: 'ཁ་པར་ཨང་།',
            subscribeBtn: 'མིང་བཀོད་འབད།'
          }
        }
      },
      hi: {
        translation: {
          nav: {
            home: 'मुख्य पृष्ठ',
            faculty: 'संकाय',
            departments: 'विभाग',
            admissions: 'प्रवेश',
            research: 'अनुसंधान',
            journal: 'जर्नल',
            library: 'पुस्तकालय',
            news: 'समाचार',
            notice: 'सूचना',
            portal: 'छात्र पोर्टल',
            login: 'स्टाफ लॉगिन',
            collegeName: 'ग्लोबल मेडिकल कॉलेज'
          },
          home: {
            welcome: 'ग्लोबल मेडिकल कॉलेज में आपका स्वागत है',
            description: 'शिक्षा, अनुसंधान और नैदानिक देखभाल में उत्कृष्टता के माध्यम से चिकित्सा के भविष्य को आकार देना।',
            explore: 'विभागों का अन्वेषण करें',
            tour: 'आभासी परिसर भ्रमण',
            stats: {
              founded: 'स्थापना',
              faculty: 'संकाय सदस्य',
              research: 'शोध पत्र',
              ranking: 'वैश्विक रैंक'
            },
            sections: {
              news: 'नवीनतम समाचार',
              notices: 'सूचना पट्ट',
              academic: 'शैक्षिक कार्यक्रम',
              admission: 'प्रवेश खुला',
              campus: 'परिसर अनुभव',
              who: 'हम कौन हैं?',
              what: 'हम क्या प्रदान करते हैं?',
              why: 'हमें क्यों चुनें?',
              voices: 'छात्रों की आवाज',
              campusLife: 'कैंपस लाइफ',
              questions: 'सामान्य प्रश्न',
              viewAllNotices: 'सभी सूचनाएं देखें',
              heads: 'संस्थागत प्रमुख',
              visit: 'हमसे मिलें',
              location: 'कैंपस स्थान',
              emergency: 'आपातकालीन संपर्क',
              inquiries: 'सामान्य पूछताछ',
              findMap: 'नक्शे पर हमें खोजें',
              readBio: 'पूर्ण जीवनी पढ़ें',
              messagePrefix: ' का संदेश'
            }
          },
          library: {
            title: 'मेडिकल लाइब्रेरी',
            description: '30,000 से अधिक भौतिक और डिजिटल विद्वानों की संपत्ति वाले हमारे केंद्रीकृत चिकित्सा भंडार तक पहुँचें।',
            search: 'शीर्षक, लेखक या कोड द्वारा खोजें...',
            all: 'सभी',
            physical: 'भौतिक',
            electronic: 'इलेक्ट्रॉनिक',
            open: 'संसाधन खोलें',
            request: 'अनुरोध दर्ज करें',
            requestLogged: 'अनुरोध दर्ज किया गया',
            repositorySearch: 'ग्लोबल रिपोजिटरी सर्च',
            repositoryDesc: 'शेल्फ-सिंक एल्गोरिदम का उपयोग करके विशिष्ट नैदानिक पाठों का तुरंत पता लगाएं।',
            noResults: 'आपके खोज मानदंडों के लिए कोई परिणाम नहीं मिला।',
            clearFilters: 'सभी फ़िल्टर हटाएँ',
            by: 'द्वारा',
            libTerminal: 'रिसोर्स टर्मिनल',
            serviceHours: 'सेवा घंटे',
            standardOps: 'मानक संचालन',
            clinicalReserve: 'नैदानिक रिजर्व',
            stats: 'रियल-टाइम आंकड़े',
            volumes: 'किताबें',
            journals: 'ई-जर्नल',
            support: 'पुस्तकालय सहायता',
            exchange: 'अंतर-पुस्तकालय विनिमय',
            startSession: 'सत्र शुरू करें',
            digitalOps: '24/7 डिजिटल'
          },
          notice: {
            title: 'आधिकारिक सूचना बोर्ड',
            description: 'नवीनतम परिपत्रों, शैक्षणिक कार्यक्रमों और संस्थागत घोषणाओं के साथ अपडेट रहें।',
            search: 'सूचनाएं खोजें...',
            categories: {
              all: 'सभी',
              admission: 'प्रवेश',
              academic: 'शैक्षणिक',
              exam: 'परीक्षा',
              event: 'कार्यक्रम',
              campus: 'परिसर'
            },
            download: 'पीडीएफ दस्तावेज़ डाउनलोड करें',
            noNotices: 'कोई सूचना नहीं मिली',
            adjustSearch: 'अपनी खोज या फ़िल्टर समायोजित करने का प्रयास करें।',
            subscribeTitle: 'अलर्ट के लिए सदस्यता लें',
            subscribeDesc: 'महत्वपूर्ण शैक्षणिक परिपत्रों और आपातकालीन अपडेट के लिए अपने मोबाइल पर तुरंत सूचनाएं प्राप्त करें।',
            subscribePlaceholder: 'आपका फ़ोन नंबर',
            subscribeBtn: 'एसएमएस सदस्यता'
          }
        }
      },
      bn: {
        translation: {
          nav: {
            home: 'হোম',
            faculty: 'অনুষদ',
            departments: 'বিভাগসমূহ',
            admissions: 'ভর্তি',
            research: 'গবেষণা',
            journal: 'জার্নাল',
            library: 'লাইব্রেরি',
            news: 'খবর',
            notice: 'বিজ্ঞপ্তি',
            portal: 'স্টুডেন্ট পোর্টাল',
            login: 'স্টাফ লগইন',
            collegeName: 'গ্লোবাল মেডিকেল কলেজ'
          },
          home: {
            welcome: 'গ্লোবাল মেডিকেল কলেজে স্বাগতম',
            description: 'শিক্ষা, গবেষণা এবং ক্লিনিকাল যত্নে শ্রেষ্ঠত্বের মাধ্যমে চিকিৎসার ভবিষ্যৎ গঠন করা।',
            explore: 'বিভাগগুলো দেখুন',
            tour: 'ভার্চুয়াল ক্যাম্পাস ট্যুর',
            stats: {
              founded: 'প্রতিষ্ঠিত',
              faculty: 'শিক্ষকবৃন্দ',
              research: 'গবেষণাপত্র',
              ranking: 'গ্লোবাল র্যাঙ্ক'
            },
            sections: {
              news: 'সর্বশেষ সংবাদ',
              notices: 'নোটিশ বোর্ড',
              academic: 'একাডেমিক প্রোগ্রাম',
              admission: 'ভর্তি চলছে',
              campus: 'ক্যাম্পাস অভিজ্ঞতা',
              who: 'আমরা কে?',
              what: 'আমরা কী প্রদান করি?',
              why: 'কেন আমাদের পছন্দ করবেন?',
              voices: 'শিক্ষার্থীদের কথা',
              campusLife: 'ক্যাম্পাস জীবন',
              questions: 'সাধারণ প্রশ্নাবলী',
              viewAllNotices: 'সব নোটিশ দেখুন',
              heads: 'প্রাতিষ্ঠানিক প্রধানগণ',
              visit: 'আমাদের সাথে যোগাযোগ করুন',
              location: 'ক্যাম্পাস অবস্থান',
              emergency: 'জরুরি যোগাযোগ',
              inquiries: 'সাধারণ অনুসন্ধান',
              findMap: 'ম্যাপে আমাদের খুঁজুন',
              readBio: 'বিস্তারিত পড়ুন',
              messagePrefix: '-এর বাণী'
            }
          },
          library: {
            title: 'মেডিকেল লাইব্রেরি',
            description: '৩০,০০০-এর বেশি ভৌত এবং ডিজিটাল তাত্ত্বিক সম্পদ সমন্বিত আমাদের কেন্দ্রীয় চিকিৎসা ভাণ্ডারে প্রবেশ করুন।',
            search: 'শিরোনাম, লেখক বা কোড দিয়ে খুঁজুন...',
            all: 'সব',
            physical: 'ভৌত',
            electronic: 'ইলেকট্রনিক',
            open: 'রিসোর্স খুলুন',
            request: 'অনুরোধ জানান',
            requestLogged: 'অনুরোধ গ্রহণ করা হয়েছে',
            repositorySearch: 'গ্লোবাল রিপোজিটরি অনুসন্ধান',
            repositoryDesc: 'শেল্ফ-সিঙ্ক অ্যালগরিদম ব্যবহার করে বিশেষায়িত ক্লিনিকাল টেক্সটগুলো তাৎক্ষণিকভাবে খুঁজুন।',
            noResults: 'আপনার অনুসন্ধানের সাথে মেলে এমন কিছু পাওয়া যায়নি।',
            clearFilters: 'সব ফিল্টার মুছুন',
            by: 'দ্বারা',
            libTerminal: 'রিসোর্স টার্মিনাল',
            serviceHours: 'সেবা সময়',
            standardOps: 'স্ট্যান্ডার্ড অপারেশন',
            clinicalReserve: 'ক্লিনিকাল রিজার্ভ',
            stats: 'রিয়েল-টাইম পরিসংখ্যান',
            volumes: 'ভলিউম',
            journals: 'ই-জার্নাল',
            support: 'লাইব্রেরি সাপোর্ট',
            exchange: 'আন্তঃ-লাইব্রেরি বিনিময়',
            startSession: 'সেশন শুরু করুন',
            digitalOps: '২৪/৭ ডিজিটাল'
          },
          notice: {
            title: 'অফিসিয়াল নোটিশ বোর্ড',
            description: 'সর্বশেষ সার্কুলার, একাডেমিক সময়সূচী এবং প্রাতিষ্ঠানিক ঘোষণার সাথে আপডেট থাকুন।',
            search: 'নোটিশ খুঁজুন...',
            categories: {
              all: 'সব',
              admission: 'ভর্তি',
              academic: 'একাডেমিক',
              exam: 'পরীক্ষা',
              event: 'ইভেন্ট',
              campus: 'ক্যাম্পাস'
            },
            download: 'পিডিএফ ডকুমেন্ট ডাউনলোড করুন',
            noNotices: 'কোনো বিজ্ঞপ্তি পাওয়া যায়নি',
            adjustSearch: 'আপনার অনুসন্ধান বা ফিল্টার পরিবর্তন করার চেষ্টা করুন।',
            subscribeTitle: 'সতর্কবার্তার জন্য সাবস্ক্রাইব করুন',
            subscribeDesc: 'গুরুত্বপূর্ণ একাডেমিক বিজ্ঞপ্তি এবং জরুরি আপডেটের জন্য আপনার মোবাইলে তাত্ক্ষণিক বিজ্ঞপ্তি পান।',
            subscribePlaceholder: 'আপনার ফোন নম্বর',
            subscribeBtn: 'এসএমএস সাবস্ক্রাইব'
          }
        }
      },
      dv: {
        translation: {
          nav: {
            home: 'މައި ސަފްހާ',
            faculty: 'ފެކަލްޓީ',
            departments: 'ޑިޕާޓްމަންޓްތައް',
            admissions: 'އެޑްމިޝަން',
            research: 'ރިސާޗް',
            journal: 'ޖާނަލް',
            library: 'ލައިބްރަރީ',
            news: 'ޚަބަރު',
            notice: 'ނޯޓިސް',
            portal: 'ދަރިވަރުންގެ ޕޯޓަލް',
            login: 'މުވައްޒަފުންގެ ލޮގިން',
            collegeName: 'ގްލޯބަލް މެޑިކަލް ކޮލެޖް'
          },
          home: {
            welcome: 'ގްލޯބަލް މެޑިކަލް ކޮލެޖަށް މަރުހަބާ',
            description: 'ތައުލީމާއި ރިސާޗްގެ ދާއިރާއިން މެޑިސިންގެ ކުރިމަގު ބައްޓަންކުރުން.',
            explore: 'ޑިޕާޓްމަންޓްތައް ބަލާލުމަށް',
            tour: 'ވާޗުއަލް ކެމްޕަސް ޓުއާ',
            stats: {
              founded: 'ގާއިމްކުރެވުނީ',
              faculty: 'މުވައްޒަފުން',
              research: 'ދާއިރާތައް',
              ranking: 'ގްލޯބަލް ރޭންކް'
            },
            sections: {
              news: 'ފަހުގެ ޚަބަރު',
              notices: 'ނޯޓިސް ބޯޑު',
              academic: 'އެކަޑެމިކް ޕްރޮގްރާމްތައް',
              admission: 'އެޑްމިޝަން ހުޅުވާލެވިފައި',
              campus: 'ކެމްޕަސް ތަޖުރިބާ',
              who: 'އަހަރެމެންނަކީ ކޮބާ؟',
              what: 'އަހަރެމެން ފޯރުކޮށްދެނީ ކޮން އެއްޗެއް؟',
              why: 'އަހަރެމެން އިޚްތިޔާރުކުރަންވީ ކީއްވެ؟',
              voices: 'ދަރިވަރުންގެ ބަސް',
              campusLife: 'ކެމްޕަސް ދިރިއުޅުން',
              questions: 'އާންމު ସުވާލުތައް',
              viewAllNotices: 'ހުރިހާ ނޯޓިހެއް ބަލާލުމަށް',
              heads: 'މުއައްސަސާގެ އިސްވެރިން',
              visit: 'ޒިޔާރަތް ކުރައްވާ',
              location: 'ކެމްޕަސް ހުރި ތަން',
              emergency: 'ކުއްލި ހާލަތްތަކުގައި ގުޅާނެ ނަންบަރު',
              inquiries: 'އާންމު މައުލޫމާތު',
              findMap: 'މެޕުން ބަލާލުމަށް',
              readBio: 'ފުރިހަމަ މައުލޫމާތު',
              messagePrefix: 'ގެ މެސެޖު'
            }
          },
          library: {
            title: 'މެޑިކަލް ލައިބްރަރީ',
            description: '30،000 އަށްވުރެ ގިނަ ފިޒިކަލް އަދި ޑިޖިޓަލް ވަސީލަތްތައް ހިމެނޭ މަރުކަޒީ ރިޕޮސިޓަރީ.',
            search: 'ހޯއްދަވާ...',
            all: 'ހުރިހާ',
            physical: 'ފިޒިކަލ्',
            electronic: 'އިލެކްޓްރޯނިކް',
            open: 'ހުޅުވާލުމަށް',
            request: 'އެދުމަށް',
            requestLogged: 'އެދުން ރަޖިސްޓްރީ ކުރެވިއްޖެ',
            repositorySearch: 'ގްލޯބަލް ރިޕޮސިޓަރީ ސާޗް',
            repositoryDesc: 'ފަސޭހަކަމާއެކު ވަސީލަތްތައް ހޯއްދަވާ.',
            noResults: 'އެއްވެސް ނަތީޖާއެއް ނުފެނުނު.',
            clearFilters: 'ފިލްޓަރުތައް ފޮހެލުމަށް',
            by: 'ބައި',
            libTerminal: 'ރިސޯސް ޓާމިނަލް',
            serviceHours: 'ޚިދުމަތްދޭ ގަޑިތައް',
            standardOps: 'އާންމު ގަޑިތައް',
            clinicalReserve: 'ޚާއްސަ ވަސީލަތްތައް',
            stats: 'ތަފާސްހިސާބު',
            volumes: 'ފޮތްތައް',
            journals: 'އީ-ޖާނަލް',
            support: 'ލައިބްރަރީ އެހީތެރިކަން',
            exchange: 'އިންޓަ-ލައިބްރަރީ އެކްސްޗޭންޖް',
            startSession: 'ފެއްޓެވުމަށް',
            digitalOps: '24/7 ޑިޖިޓަލް'
          },
          notice: {
            title: 'ނޯޓިސް ބޯޑު',
            description: 'އެންމެ ފަހުގެ ނޯޓިސްތަކާއި އިއުލާންތައް.',
            search: 'ހޯއްދަވާ...',
            categories: {
              all: 'ހުރިހާ',
              admission: 'އެޑްމިޝަން',
              academic: 'އެކަޑެމިކް',
              exam: 'އިމްތިހާން',
              event: 'ހަރަކާތްތައް',
              campus: 'ކެމްޕަސް'
            },
            download: 'ޕީޑީއެފް ލިޔުން ބޭލުމަށް',
            noNotices: 'އެއްވެސް ނޯޓިހެއް ނުފެނުނު',
            adjustSearch: 'ހޯއްދަވާ ތަކެތި ނުވަތަ ފިލްޓަރުތައް ބަދަލުކޮށްލައްވާ.',
            subscribeTitle: 'އެލާޓްތަކަށް ސަބްސްކްރައިބް ކުރައްވާ',
            subscribeDesc: 'މުހިންމު އެކަޑެމިކް ނޯޓިސްތަކާއި ކުއްލި އަޕްޑޭޓްތަކުގެ ނޮޓިފިކޭޝަން ވަގުތުން ހޯއްދަވާ.',
            subscribePlaceholder: 'ފޯނު ނަންބަރު',
            subscribeBtn: 'ސަބްސްކްރައިބް އެސްއެމްއެސް'
          }
        }
      }
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
