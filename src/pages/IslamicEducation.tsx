import { BookOpen, Star, Heart, Users, Award, Bookmark } from "lucide-react";

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
      <section className="green-gradient section-padding text-primary-foreground text-center">
        <div className="container mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Islamic Education</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            A comprehensive Islamic curriculum nurturing faith, knowledge, and character in every student.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((item, i) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
            Integrating Faith and Learning
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            At AL-IHSAN SCHOOLS, Islamic education is not separate from academic learning — it is woven
            into every aspect of our students' experience. From daily Quran recitation to weekly Islamic
            assemblies, we create an environment where students grow spiritually alongside their academic development.
          </p>
        </div>
      </section>
    </div>
  );
};

export default IslamicEducationPage;
