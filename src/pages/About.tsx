import { Target, Eye, Heart } from "lucide-react";

const values = ["Excellence", "Discipline", "Integrity", "Respect", "Faith", "Hard Work"];

const AboutPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="green-gradient section-padding text-primary-foreground text-center">
        <div className="container mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">About AL-IHSAN Schools</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Building a legacy of knowledge, discipline, and faith in Garissa, Kenya.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            AL-IHSAN SCHOOLS was established with the vision of providing quality education that combines
            the best of modern academics with the richness of Islamic teachings. Located in the heart of
            Garissa, Kenya, our institution has grown to become one of the most trusted schools in the region.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From humble beginnings, we have expanded our programs to cover Kindergarten through Secondary School,
            alongside a comprehensive Islamic education curriculum. Our commitment to excellence continues to
            guide us as we prepare students for success in this life and the hereafter.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto max-w-4xl grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="w-12 h-12 rounded-lg green-gradient flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground">
              To provide quality academic and Islamic education that develops knowledgeable, disciplined,
              and morally upright individuals who contribute positively to society.
            </p>
          </div>
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground">
              To develop knowledgeable, disciplined, and morally upright students who are equipped with both
              academic competence and strong Islamic values, ready to lead and serve.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Core Values</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((val) => (
              <span
                key={val}
                className="px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {val}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MD Message */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-sm border border-border text-center">
            <Heart className="w-10 h-10 text-secondary mx-auto mb-4" />
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              Message from the Managing Director
            </h2>
            <blockquote className="text-muted-foreground italic leading-relaxed">
              "At AL-IHSAN SCHOOLS, we believe every child has the potential to achieve greatness.
              Our role is to provide the knowledge, discipline, and moral guidance that will help them
              unlock that potential. We are committed to nurturing well-rounded individuals who will
              be leaders in their communities and ambassadors of excellence and faith."
            </blockquote>
            <p className="mt-4 font-semibold text-foreground">— The Managing Director, AL-IHSAN SCHOOLS</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
