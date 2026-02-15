import { Calendar, Bell, BookOpen, Moon, FileText, Clock } from "lucide-react";
import ramadanImage from "@/assets/ramadan.jpg"; // Import your local Ramadan image

const news = [
  // Latest News - Ramadan 2026 with Image
  {
    icon: Moon,
    date: "February 15, 2026",
    title: "Ramadan 1447 AH - School Hours Announcement",
    excerpt: "In observance of the holy month of Ramadan, school hours will be adjusted from 8:00 AM to 1:00 PM effective March 1st, 2026. Taraweeh prayers will be organized at the school mosque.",
    category: "Ramadan Announcement",
    isNew: true,
    image: ramadanImage,
    imageCaption: "Ramadan at AL-IHSAN SCHOOLS - Special prayers and activities"
  },
  {
    icon: Calendar,
    date: "February 12, 2026",
    title: "Midterm Examinations Schedule Released",
    excerpt: "Midterm exams for Term 1 will commence on March 15th, 2026. Download the complete examination timetable from the portal. All students must be present.",
    category: "Academic",
    isNew: true,
  },
  {
    icon: FileText,
    date: "February 10, 2026",
    title: "Second Batch Admissions Now Open",
    excerpt: "Due to high demand, AL-IHSAN SCHOOLS is opening a second batch of admissions for the 2026 academic year. Limited seats available in Grades 1, 4, and 7. Apply before February 28th.",
    category: "Admissions",
    isNew: true,
  },
  {
    icon: Clock,
    date: "February 8, 2026",
    title: "Term 1 Midterm Break - Important Dates",
    excerpt: "The midterm break will begin on April 3rd, 2026. School will resume on April 14th, 2026. Parents are advised to collect progress reports on April 2nd.",
    category: "Announcement",
    isNew: true,
  },
  {
    icon: Moon,
    date: "February 5, 2026",
    title: "Ramadan Quran Completion Program",
    excerpt: "Join our special Ramadan Quran completion program. Students will aim to complete the entire Quran during the holy month. Registration closes February 25th.",
    category: "Ramadan Event",
    isNew: true,
    image: ramadanImage,
    imageCaption: "Quran recitation during Ramadan"
  },
  {
    icon: Bell,
    date: "February 1, 2026",
    title: "End of Term 1 Dates Announced",
    excerpt: "Term 1 will conclude on April 25th, 2026. The closing ceremony and awards day will be held on April 24th. Term 2 begins on May 6th, 2026.",
    category: "Announcement",
    isNew: true,
  },
  
  // Previous News (keeping for archive)
  {
    icon: BookOpen,
    date: "January 28, 2026",
    title: "Quran Memorization Competition Results",
    excerpt: "Congratulations to all participants in our annual Hifdh competition. The winners demonstrated exceptional dedication.",
    category: "Islamic Event",
  },
  {
    icon: Calendar,
    date: "January 15, 2026",
    title: "Annual Academic Awards Ceremony",
    excerpt: "We celebrated outstanding academic achievement at our annual awards ceremony. Parents and community leaders joined.",
    category: "Academic Event",
  },
  {
    icon: Bell,
    date: "December 20, 2025",
    title: "Admissions Open for 2026",
    excerpt: "Applications for the 2026 academic year are now open. Visit the admissions page to apply online or download the form.",
    category: "Announcement",
  },
];

const NewsPage = () => {
  // Get Ramadan news items that have images
  const ramadanNews = news.filter(item => item.image);
  // Get other latest news
  const otherLatestNews = news.filter(item => item.isNew && !item.image);
  // Get archive news
  const archiveNews = news.filter(item => !item.isNew);

  return (
    <div>
      {/* Hero Section */}
      <section className="green-gradient section-padding text-primary-foreground text-center">
        <div className="container mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">News & Events</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Stay updated with the latest happenings at AL-IHSAN SCHOOLS.
          </p>
        </div>
      </section>

      {/* Featured Ramadan Image Section - FIXED IMAGE FITTING */}
      {ramadanNews.length > 0 && (
        <section className="pt-12 bg-background">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8 aspect-[21/9]">
              <img 
                src={ramadanImage} 
                alt="Ramadan at AL-IHSAN SCHOOLS" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Moon className="w-5 h-5 text-gold-light" />
                  <span className="text-xs md:text-sm font-medium bg-primary/80 px-3 py-1 rounded-full">
                    Ramadan 1447 AH
                  </span>
                </div>
                <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                  Welcoming the Holy Month of Ramadan
                </h2>
                <p className="text-sm md:text-base text-white/90 max-w-2xl">
                  Join us for special prayers, Quran recitation, and community iftar at AL-IHSAN SCHOOLS
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Latest News Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Latest Updates</h2>
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">New</span>
          </div>
          
          {/* Grid for latest news */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First, show Ramadan news with images - FIXED IMAGE FITTING */}
            {ramadanNews.map((item, i) => (
              <article
                key={`ramadan-${i}`}
                className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-gold-dark animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {item.image && (
                  <div className="w-full h-48 overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 flex-1">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-gold/20 text-gold-dark font-medium">
                          {item.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{item.date}</span>
                      </div>
                      <h3 className="font-heading text-base font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                      <div className="mt-3 flex items-center gap-2 text-xs text-gold-dark">
                        <Moon className="w-3 h-3" />
                        <span>Ramadan 1447 AH</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
            
            {/* Then show other latest news */}
            {otherLatestNews.slice(0, 4 - ramadanNews.length).map((item, i) => (
              <article
                key={`latest-${i}`}
                className="bg-card rounded-xl p-6 shadow-md border-l-4 border-primary hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${(i + ramadanNews.length) * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg green-gradient flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                    <h3 className="font-heading text-base font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                    
                    {/* Additional context for specific news types */}
                    {item.title.includes("Admissions") && (
                      <div className="mt-3 flex items-center gap-4 text-xs">
                        <span className="text-primary">📅 Deadline: March, 2026</span>
                      </div>
                    )}
                    {item.title.includes("Midterm") && (
                      <div className="mt-3 flex items-center gap-4 text-xs">
                        <span className="text-primary">📝 Exams start: February 25, 2026</span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All News Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">All News & Events</h2>
          
          <div className="space-y-4">
            {news.map((item, i) => (
              <article
                key={i}
                className={`bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all animate-fade-in-up ${
                  item.isNew ? 'bg-primary/5 border-primary/20' : ''
                }`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    item.category.includes('Ramadan') ? 'gold-gradient' : 'green-gradient'
                  }`}>
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        item.category.includes('Ramadan') 
                          ? 'bg-gold/20 text-gold-dark' 
                          : item.category === 'Admissions'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-accent text-accent-foreground'
                      }`}>
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                      {item.isNew && (
                        <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                          New
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                    
                    {/* Show thumbnail for Ramadan news in the list - FIXED IMAGE FITTING */}
                    {item.image && (
                      <div className="mt-3 flex items-center gap-3">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs text-gold-dark">{item.imageCaption}</span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="pb-12 bg-background">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl">
              <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                <Moon className="w-4 h-4" />
                Ramadan 1447 AH
              </h4>
              <p className="text-xs text-amber-600">March 1 - March 30, 2026</p>
              <p className="text-xs text-amber-600 mt-1">School hours: 8:00 AM - 1:00 PM</p>
              <p className="text-xs text-amber-600 mt-1">Daily Taraweeh prayers</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
              <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Admissions 2026
              </h4>
              <p className="text-xs text-blue-600">Second batch now open</p>
              <p className="text-xs text-blue-600 mt-1">Deadline: February 28, 2026</p>
              <p className="text-xs text-blue-600 mt-1">Limited seats: Grades 1, 4, 7 and 9</p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 rounded-xl">
              <h4 className="font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Term Dates
              </h4>
              <p className="text-xs text-emerald-600">Midterm break: April 3-13</p>
              <p className="text-xs text-emerald-600 mt-1">Term 1 ends: April 25, 2026</p>
              <p className="text-xs text-emerald-600 mt-1">Term 2 begins: May 6, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Animation styles */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default NewsPage;