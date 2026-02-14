import { Target, Eye, Heart } from "lucide-react";
import schoolLogo from "@/assets/logo.jpg"; // Add your logo here

const values = ["Excellence", "Discipline", "Integrity", "Respect", "Faith", "Hard Work"];

const AboutPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="green-gradient py-12 sm:py-16 md:section-padding text-primary-foreground text-center relative overflow-hidden">
        {/* Background decoration - adjusted for mobile */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-gold-light rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Logo in Hero - mobile optimized */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="relative group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-white/10 backdrop-blur-sm border-2 sm:border-4 border-gold-light/30 flex items-center justify-center overflow-hidden shadow-2xl hover:scale-110 transition-transform duration-300 mx-auto">
                <img 
                  src={schoolLogo} 
                  alt="AL-IHSAN SCHOOLS Logo" 
                  className="w-full h-full object-contain p-2 sm:p-3"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'text-2xl sm:text-3xl md:text-4xl font-bold text-gold-light';
                      fallback.textContent = 'AIS';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gold-light/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          </div>
          
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
            About AL-IHSAN Schools
          </h1>
          <p className="text-primary-foreground/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Building a legacy of knowledge, discipline, and faith in Garissa, Kenya.
          </p>
        </div>
      </section>

      {/* Logo Feature Section - mobile optimized */}
      <section className="py-8 sm:py-12 bg-background border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
            {/* Large Logo - mobile optimized */}
            <div className="md:w-1/3 flex justify-center">
              <div className="relative group">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-2xl sm:rounded-3xl green-gradient flex items-center justify-center overflow-hidden shadow-xl transform group-hover:rotate-3 transition-transform duration-300">
                  <img 
                    src={schoolLogo} 
                    alt="AL-IHSAN SCHOOLS Logo" 
                    className="w-full h-full object-contain p-3 sm:p-4 md:p-5 lg:p-6"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement('div');
                        fallback.className = 'text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground';
                        fallback.textContent = 'AIS';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
                {/* Decorative rings - hidden on mobile */}
                <div className="hidden sm:block absolute -inset-3 border-2 border-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="hidden sm:block absolute -inset-5 border-2 border-gold/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
              </div>
            </div>
            
            {/* School Info - mobile optimized */}
            <div className="md:w-2/3 text-center md:text-left">
              {/* <div className="inline-block px-3 sm:px-4 py-1 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Established 2008
              </div> */}
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4">
                AL-IHSAN SCHOOLS
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-3 sm:mb-4">
                Garissa, Kenya
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-50 text-green-700 rounded-full text-xs sm:text-sm font-medium">
                  Accredited
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gold-50 text-gold-700 rounded-full text-xs sm:text-sm font-medium">
                  Islamic Curriculum
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
                  Pre-primary to Senior
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History - mobile optimized */}
      <section className="py-10 sm:py-12 md:section-padding bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6 text-center md:text-left">
            Our Story
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
            AL-IHSAN SCHOOLS was established with the vision of providing quality education that combines
            the best of modern academics with the richness of Islamic teachings. Located in the heart of
            Garissa, Kenya, our institution has grown to become one of the most trusted schools in the region.
          </p>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            From humble beginnings, we have expanded our programs to cover Pre-primary through Senior School,
            alongside a comprehensive Islamic education curriculum. Our commitment to excellence continues to
            guide us as we prepare students for success in this life and the hereafter.
          </p>
        </div>
      </section>

      {/* Mission & Vision - mobile optimized */}
      <section className="py-10 sm:py-12 md:section-padding bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-card rounded-xl p-5 sm:p-6 md:p-8 shadow-sm border border-border hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg green-gradient flex items-center justify-center mb-3 sm:mb-4">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                To provide quality academic and Islamic education that develops knowledgeable, disciplined,
                and morally upright individuals who contribute positively to society.
              </p>
            </div>
            <div className="bg-card rounded-xl p-5 sm:p-6 md:p-8 shadow-sm border border-border hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg gold-gradient flex items-center justify-center mb-3 sm:mb-4">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">Our Vision</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                To develop knowledgeable, disciplined, and morally upright students who are equipped with both
                academic competence and strong Islamic values, ready to lead and serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - mobile optimized */}
      <section className="py-10 sm:py-12 md:section-padding bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center">
            Core Values
          </h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {values.map((val) => (
              <span
                key={val}
                className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full border-2 border-primary text-primary font-semibold text-xs sm:text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {val}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MD Message - mobile optimized */}
      <section className="py-10 sm:py-12 md:section-padding bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-card rounded-xl p-5 sm:p-8 md:p-12 shadow-sm border border-border text-center relative overflow-hidden">
            {/* Decorative elements - adjusted for mobile */}
            <div className="absolute top-0 left-0 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-primary/5 rounded-full -translate-x-8 sm:-translate-x-12 md:-translate-x-16 -translate-y-8 sm:-translate-y-12 md:-translate-y-16" />
            <div className="absolute bottom-0 right-0 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-gold/5 rounded-full translate-x-8 sm:translate-x-12 md:translate-x-16 translate-y-8 sm:translate-y-12 md:translate-y-16" />
            
            <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-secondary mx-auto mb-3 sm:mb-4 relative z-10" />
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 relative z-10">
              Message from the Managing Director
            </h2>
            <blockquote className="text-muted-foreground italic text-sm sm:text-base leading-relaxed relative z-10 px-2 sm:px-4">
              "At AL-IHSAN SCHOOLS, we believe every child has the potential to achieve greatness.
              Our role is to provide the knowledge, discipline, and moral guidance that will help them
              unlock that potential. We are committed to nurturing well-rounded individuals who will
              be leaders in their communities and ambassadors of excellence and faith."
            </blockquote>
            
            <div className="mt-4 sm:mt-6 relative z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full green-gradient flex items-center justify-center mx-auto mb-2 sm:mb-3 border-2 sm:border-4 border-white shadow-lg">
                <span className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-primary-foreground">AH</span>
              </div>
              <p className="font-semibold text-foreground text-base sm:text-lg">MR. ABDIRIZAK HAWADLE</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Managing Director, AL-IHSAN SCHOOLS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Add responsive styles */}
      <style>{`
        @media (max-width: 640px) {
          .section-padding {
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;