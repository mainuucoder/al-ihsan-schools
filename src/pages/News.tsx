import { Calendar, Bell, BookOpen } from "lucide-react";

const news = [
  {
    icon: Bell,
    date: "February 10, 2026",
    title: "Term 1 Begins — Welcome Back!",
    excerpt: "We are excited to welcome all students and parents for the new academic term. Classes begin on February 10th.",
    category: "Announcement",
  },
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
  {
    icon: Calendar,
    date: "December 5, 2025",
    title: "Inter-School Sports Competition",
    excerpt: "Our students excelled in the regional sports competition, bringing home medals in athletics and football.",
    category: "Academic Event",
  },
  {
    icon: BookOpen,
    date: "November 20, 2025",
    title: "Mawlid Celebration",
    excerpt: "Students and staff came together to celebrate Mawlid an-Nabi with recitations, nasheeds, and reflections.",
    category: "Islamic Event",
  },
];

const NewsPage = () => {
  return (
    <div>
      <section className="green-gradient section-padding text-primary-foreground text-center">
        <div className="container mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">News & Events</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Stay updated with the latest happenings at AL-IHSAN SCHOOLS.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {news.map((item, i) => (
              <article
                key={i}
                className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg green-gradient flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground font-medium">
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
