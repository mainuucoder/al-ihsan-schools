import { BookOpen, Star, Heart, Users, Award, Bookmark } from "lucide-react";

// Islamic image from Unsplash - using a more reliable, high-quality image
const islamicImage = "https://images.unsplash.com/photo-1728484703425-0fbe2a32e41f?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const programs = [
  { icon: BookOpen, title: "Quran Studies", desc: "Comprehensive Quran recitation and understanding, building a lifelong connection with the Holy Book." },
  { icon: Star, title: "Tajweed", desc: "Proper Quran recitation with correct pronunciation and articulation rules taught by expert teachers." },
  { icon: Bookmark, title: "Islamic Studies", desc: "In-depth study of Islamic history, jurisprudence (Fiqh), and principles of the faith." },
  { icon: Award, title: "Memorization (Hifdh)", desc: "Dedicated Quran memorization program with structured tracking and supportive environment." },
  { icon: Heart, title: "Moral & Character Development", desc: "Building strong moral character based on Islamic values of honesty, compassion, and service." },
  { icon: Users, title: "Qualified Islamic Teachers", desc: "Our Islamic educators are certified scholars with deep knowledge and pedagogical expertise." },
];

const IslamicEducationPage = () => {
  return (
    <div>
      {/* Simple Hero Section with Green Background */}
      <section className="green-gradient section-padding text-primary-foreground text-center">
        <div className="container mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Islamic Education</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            A comprehensive Islamic curriculum nurturing faith, knowledge, and character in every student.
          </p>
        </div>
      </section>

      {/* Featured Image Section - ISLAMIC IMAGE HERE */}
      <section className="py-12 bg-background">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={islamicImage} 
              alt="Students learning Quran with Tajweed" 
              className="w-full h-auto object-cover"
              style={{ maxHeight: "500px", width: "100%" }}
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-3">
            Students engaged in Quranic recitation with proper Tajweed
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Islamic Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive Islamic education designed to nurture faith and knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((item, i) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg gold-gradient flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrating Faith Section */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 text-center">
              Integrating Faith and Learning
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              At AL-IHSAN SCHOOLS, Islamic education is not separate from academic learning — it is woven
              into every aspect of our students' experience. From daily Quran recitation to weekly Islamic
              assemblies, we create an environment where students grow spiritually alongside their academic development.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm text-foreground">Daily Quran Recitation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold"></div>
                <span className="text-sm text-foreground">Weekly Assemblies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm text-foreground">Islamic Values Integration</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IslamicEducationPage;