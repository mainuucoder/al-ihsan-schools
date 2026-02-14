import { GraduationCap, BookOpen, Users, Award } from "lucide-react";

const programs = [
  {
    icon: Users,
    title: "Kindergarten",
    description: "A nurturing environment for early learners with play-based and structured activities.",
    subjects: ["Literacy", "Numeracy", "Creative Arts", "Social Skills", "Basic Islamic Studies"],
  },
  {
    icon: BookOpen,
    title: "Primary School",
    description: "A strong foundation in core subjects aligned with the Kenyan CBC curriculum.",
    subjects: ["Mathematics", "English", "Kiswahili", "Science & Technology", "Social Studies", "Religious Education", "Creative Arts"],
  },
  {
    icon: GraduationCap,
    title: "Junior Secondary School",
    description: "Preparing students for advanced learning with a competency-based approach.",
    subjects: ["Mathematics", "English", "Kiswahili", "Integrated Science", "Social Studies", "Pre-Technical Studies", "Agriculture", "Islamic Studies"],
  },
  {
    icon: Award,
    title: "Secondary School",
    description: "Comprehensive secondary education with a focus on academic excellence and character.",
    subjects: ["Mathematics", "Sciences", "Languages", "Humanities", "Business Studies", "Islamic Studies", "Computer Studies"],
  },
];

const AcademicsPage = () => {
  return (
    <div>
      <section className="green-gradient section-padding text-primary-foreground text-center">
        <div className="container mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Academics</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Comprehensive programs from Kindergarten to Secondary School following the Kenyan curriculum.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-8">
            {programs.map((prog, i) => (
              <div
                key={prog.title}
                className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg green-gradient flex items-center justify-center shrink-0">
                    <prog.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{prog.title}</h3>
                    <p className="text-muted-foreground mb-4">{prog.description}</p>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Subjects Offered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {prog.subjects.map((subj) => (
                          <span key={subj} className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground">
                            {subj}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Our Curriculum</h2>
          <p className="text-muted-foreground leading-relaxed">
            AL-IHSAN SCHOOLS follows the Kenyan Competency-Based Curriculum (CBC) for primary and junior secondary,
            and the national secondary curriculum. Our academic programs are enriched with Islamic education,
            ensuring a holistic approach to learning that develops both the mind and character.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;
