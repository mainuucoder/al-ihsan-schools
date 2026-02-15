import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Users, ShieldCheck, Quote, Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-school.jpg";
import schoolLogo from "@/assets/logo.jpg"; // Add your logo here
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const highlights = [
  { icon: GraduationCap, title: "Academic Excellence", desc: "Top-tier curriculum with outstanding results across all levels." },
  { icon: BookOpen, title: "Islamic Education", desc: "Quran, Islamic Studies, Tajweed, and moral training integrated into learning." },
  { icon: Users, title: "Qualified Teachers", desc: "Dedicated and experienced educators committed to every student's growth." },
  { icon: ShieldCheck, title: "Safe Environment", desc: "A supportive and secure campus where students thrive." },
];

function AnimatedSection({ children, className = "", animation = "animate-fade-in-up" }: {
  children: React.ReactNode;
  className?: string;
  animation?: string;
}) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`${className} ${isVisible ? animation : "opacity-0"}`}>
      {children}
    </div>
  );
}


const HomePage = () => {
  return (
    
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[100vh] sm:min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="AL-IHSAN Schools campus with students" className="w-full h-full object-cover animate-[zoom-in_1.2s_ease-out_forwards]" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-dark/90 via-primary/80 to-primary/60" />
        </div>
        <div className="relative container mx-auto px-4 py-12 sm:py-20 md:py-32 text-primary-foreground">
          {/* Logo Section - Mobile Optimized */}
          <div className="mb-6 sm:mb-8 animate-fade-in-up">
            <div className="flex flex-col items-center sm:flex-row sm:items-center gap-3 sm:gap-4">
              {/* School Logo */}
              <div className="relative group flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-sm border-2 border-gold-light/30 flex items-center justify-center overflow-hidden shadow-xl hover:scale-110 transition-transform duration-300">
                  <img 
                    src={schoolLogo} 
                    alt="AL-IHSAN SCHOOLS Logo" 
                    className="w-full h-full object-contain p-1.5 sm:p-2"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement('div');
                        fallback.className = 'text-2xl sm:text-3xl font-bold text-gold-light';
                        fallback.textContent = 'AIS';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gold-light/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
              
              {/* School Name - Centered on mobile */}
              <div className="text-center sm:text-left animate-slide-in-right">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-3xl font-bold text-primary-foreground leading-tight">
                  AL-IHSAN SCHOOLS TOWNSHIP
                </h2>
                <p className="text-xs sm:text-sm text-primary-foreground/70">
                  Garissa, Kenya
                </p>
              </div>
            </div>
          </div>

          {/* Animated Motto - Mobile text size adjusted */}
          <div className="relative mb-3 sm:mb-4 overflow-hidden">
            <p className="text-xs sm:text-sm md:text-base font-medium tracking-widest uppercase text-gold-light text-center sm:text-left">
              <span className="inline-block animate-[slide-in-left_0.8s_ease-out_forwards] opacity-0 [animation-fill-mode:forwards]">
                The
              </span>{" "}
              <span className="inline-block animate-[slide-in-right_0.8s_ease-out_0.1s_forwards] opacity-0 [animation-fill-mode:forwards] relative group">
                Harder
                <span className="absolute inset-0 text-gold-light opacity-0 group-hover:animate-[shake_0.3s_ease-in-out]">Harder</span>
              </span>{" "}
              <span className="inline-block animate-[slide-in-left_0.8s_ease-out_0.2s_forwards] opacity-0 [animation-fill-mode:forwards]">
                We
              </span>{" "}
              <span className="inline-block animate-[slide-in-right_0.8s_ease-out_0.3s_forwards] opacity-0 [animation-fill-mode:forwards]">
                Work
              </span>{" "}
              <span className="inline-block animate-[slide-in-left_0.8s_ease-out_0.4s_forwards] opacity-0 [animation-fill-mode:forwards]">
                The
              </span>{" "}
              <span className="inline-block animate-[slide-in-right_0.8s_ease-out_0.5s_forwards] opacity-0 [animation-fill-mode:forwards] relative group">
                Smarter
                <span className="absolute inset-0 text-gold-light opacity-0 group-hover:animate-[shake_0.3s_ease-in-out]">Smarter</span>
              </span>{" "}
              <span className="inline-block animate-[slide-in-left_0.8s_ease-out_0.6s_forwards] opacity-0 [animation-fill-mode:forwards]">
                We
              </span>{" "}
              <span className="inline-block animate-[slide-in-right_0.8s_ease-out_0.7s_forwards] opacity-0 [animation-fill-mode:forwards] relative group">
                Get
                <span className="absolute inset-0 text-gold-light opacity-0 group-hover:animate-[shake_0.3s_ease-in-out]">Get</span>
              </span>
            </p>
          </div>

          {/* Animated Title - Mobile Optimized */}
          <div className="mb-4 sm:mb-6 overflow-hidden">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center sm:text-left">
              <span className="inline-block animate-[slide-in-left_0.8s_ease-out_0.8s_forwards] opacity-0 [animation-fill-mode:forwards]">
                Welcome to
              </span>
              <br />
              <span className="relative inline-block mt-1 sm:mt-2 overflow-hidden">
                <span className="text-gradient-gold inline-block animate-[slide-in-right_0.8s_ease-out_1s_forwards,horizontal-shake_4s_ease-in-out_1.5s_infinite] opacity-0 [animation-fill-mode:forwards] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  AL-IHSAN SCHOOLS TOWNSHIP
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[horizontal-shine_3s_ease-in-out_1.5s_infinite] pointer-events-none" />
                <span className="absolute -top-2 -right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-light/50 rounded-full animate-[horizontal-float_3s_ease-in-out_infinite]" />
                <span className="absolute -bottom-1 -left-1 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary-foreground/50 rounded-full animate-[horizontal-float_4s_ease-in-out_0.5s_infinite]" />
              </span>
            </h1>
          </div>

          {/* Description - Mobile Optimized */}
          <p className="max-w-xl text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-6 sm:mb-8 text-center sm:text-left">
            <span className="inline-block animate-[fade-in-left_0.8s_ease-out_1.2s_forwards] opacity-0 [animation-fill-mode:forwards]">
              Nurturing Excellence in Academic and Islamic Education
            </span>{" "}
            <span className="inline-block animate-[fade-in-right_0.8s_ease-out_1.4s_forwards] opacity-0 [animation-fill-mode:forwards] text-gold-light font-semibold">
              in Garissa, Kenya.
            </span>
          </p>

          {/* Buttons - Stack on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start">
            <Link 
              to="/admissions" 
              className="w-full sm:w-auto group inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg gold-gradient text-foreground font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300 animate-[fade-in-left_0.8s_ease-out_1.6s_forwards] opacity-0 [animation-fill-mode:forwards] text-sm sm:text-base"
            >
              Apply Now <ArrowRight className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg border-2 border-primary-foreground/40 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all hover:scale-105 duration-300 animate-[fade-in-right_0.8s_ease-out_1.8s_forwards] opacity-0 [animation-fill-mode:forwards] text-sm sm:text-base"
            >
              Contact Us
            </Link>
            <Link 
              to="/about" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all hover:scale-105 duration-300 animate-[fade-in-up_0.8s_ease-out_2s_forwards] opacity-0 [animation-fill-mode:forwards] text-sm sm:text-base"
            >
              Learn More →
            </Link>
          </div>
        </div>

        {/* Animated scroll indicator - Hidden on very small screens */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden xs:block">
          <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1 sm:p-1.5">
            <div className="w-1 h-2 sm:w-1.5 sm:h-3 rounded-full bg-primary-foreground/60 animate-[horizontal-pulse_1s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* Logo Feature Section - Mobile Optimized */}
      <section className="py-8 sm:py-12 md:section-padding bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-6 sm:gap-8">
            {/* Logo with details - Centered on mobile */}
            <AnimatedSection className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6" animation="animate-fade-in-left">
              <div className="relative group flex-shrink-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl green-gradient flex items-center justify-center overflow-hidden shadow-xl">
                  <img 
                    src={schoolLogo} 
                    alt="AL-IHSAN SCHOOLS Logo" 
                    className="w-full h-full object-contain p-3 sm:p-4"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement('div');
                        fallback.className = 'text-3xl sm:text-4xl font-bold text-primary-foreground';
                        fallback.textContent = 'AIS';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-gold rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 -z-10" />
              </div>
              
              <div className="text-center sm:text-left">
                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                  AL-IHSAN SCHOOLS TOWNSHIP
                </h3>
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Accredited by Ministry of Education</span>
                  </div>
                  <span className="hidden sm:inline text-muted-foreground/50">•</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">Garissa, Kenya</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Add these keyframe animations to your global CSS file */}
      <style>{`
        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-left {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes shake {
          0% {
            transform: translateX(0);
            opacity: 0.8;
          }
          25% {
            transform: translateX(-5px);
            opacity: 0.9;
          }
          50% {
            transform: translateX(5px);
            opacity: 0.8;
          }
          75% {
            transform: translateX(-3px);
            opacity: 0.9;
          }
          100% {
            transform: translateX(0);
            opacity: 0;
          }
        }

        @keyframes horizontal-shake {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-3px);
          }
          75% {
            transform: translateX(3px);
          }
        }

        @keyframes horizontal-shine {
          0% {
            transform: translateX(-100%);
          }
          20%, 100% {
            transform: translateX(100%);
          }
        }

        @keyframes horizontal-float {
          0%, 100% {
            transform: translateX(0) scale(1);
            opacity: 0.5;
          }
          25% {
            transform: translateX(10px) scale(1.2);
            opacity: 0.8;
          }
          50% {
            transform: translateX(-5px) scale(1);
            opacity: 0.5;
          }
          75% {
            transform: translateX(8px) scale(0.8);
            opacity: 0.3;
          }
        }

        @keyframes horizontal-pulse {
          0% {
            transform: translateX(0);
            opacity: 0.2;
          }
          25% {
            transform: translateX(-3px);
            opacity: 0.8;
          }
          75% {
            transform: translateX(3px);
            opacity: 0.8;
          }
          100% {
            transform: translateX(0);
            opacity: 0.2;
          }
        }

        @keyframes zoom-in {
          0% {
            opacity: 0;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Extra small screen breakpoint */
        @media (min-width: 480px) {
          .xs\\:block {
            display: block;
          }
        }

        .text-gradient-gold {
          background: linear-gradient(45deg, #FFD700, #FFA500, #FFD700, #FFA500);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>

      {/* Intro - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:section-padding bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Shaping Tomorrow's Leaders
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed px-2 sm:px-0">
              AL-IHSAN SCHOOLS TOWNSHIP is a premier educational institution in Garissa, Kenya, offering a harmonious
              blend of formal academic education and comprehensive Islamic studies. We believe in nurturing
              well-rounded students who excel academically while grounded in strong moral and Islamic values.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Highlights - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:section-padding bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-8 sm:mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Why Choose AL-IHSAN?
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {highlights.map((item, i) => (
              <AnimatedSection
                key={item.title}
                animation="animate-fade-in-up"
              >
                <div
                  className="bg-card rounded-xl p-5 sm:p-6 shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg green-gradient flex items-center justify-center mb-3 sm:mb-4 hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Director's Message - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:section-padding bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-5 gap-6 sm:gap-8 md:gap-12 items-center">
            <AnimatedSection className="md:col-span-2" animation="animate-fade-in-left">
              <div className="relative max-w-xs mx-auto md:mx-0">
                <div className="w-full aspect-[3/4] rounded-2xl green-gradient flex items-center justify-center overflow-hidden shadow-xl">
                  <div className="text-center text-primary-foreground p-4 sm:p-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <span className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold">MD</span>
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold">Managing Director</h3>
                    <p className="text-primary-foreground/80 text-xs sm:text-sm mt-1">AL-IHSAN Schools Township</p>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 gold-gradient rounded-xl flex items-center justify-center shadow-lg">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-foreground" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="md:col-span-3" animation="animate-fade-in-right">
              <div className="text-center md:text-left">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-gold mx-auto md:mx-0 mb-3 sm:mb-4" />
                <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                  Message from the Director
                </h2>
                <blockquote className="text-muted-foreground leading-relaxed text-base sm:text-lg italic mb-4 sm:mb-6 px-2 sm:px-0">
                  "At AL-IHSAN SCHOOLS, we believe every child has the potential to achieve greatness.
                  Our role is to provide the knowledge, discipline, and moral guidance that will help them
                  unlock that potential. We are committed to nurturing well-rounded individuals who will
                  be leaders in their communities and ambassadors of excellence and faith."
                </blockquote>
                <div className="border-l-4 border-primary pl-3 sm:pl-4 text-left">
                  <p className="font-semibold text-foreground text-base sm:text-lg">The Managing Director</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">AL-IHSAN Schools Township, Garissa</p>
                  <p className="text-xs sm:text-sm text-muted-foreground font-semibold">MR. ABDIRIZAK HAWADLE</p>
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center mt-4 sm:mt-6 text-primary font-semibold hover:underline group text-sm sm:text-base"
                >
                  Read more about us <ArrowRight className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA - Mobile Optimized */}
      <AnimatedSection animation="animate-zoom-in">
        <section className="green-gradient py-10 sm:py-12 md:section-padding">
          <div className="container mx-auto px-4 text-center text-primary-foreground">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Enroll Your Child Today
            </h2>
            <p className="text-primary-foreground/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto px-2">
              Give your child the best of both worlds — academic excellence and strong Islamic foundations.
            </p>
            <Link 
              to="/admissions" 
              className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg gold-gradient text-foreground font-semibold text-base sm:text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300"
            >
              Start Application <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default HomePage;