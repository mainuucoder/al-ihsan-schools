import { Link } from "react-router-dom";
import { BookOpen, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="green-gradient text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="font-heading text-xl font-bold">AL-IHSAN SCHOOLS</span>
            </div>
            <p className="text-sm italic text-primary-foreground/80 mb-4">
              "THE HARDER WE WORK THE SMARTER WE GET"
            </p>
            <p className="text-sm text-primary-foreground/70">
              Nurturing Excellence in Academic and Islamic Education since establishment in Garissa, Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/about", label: "About Us" },
                { to: "/academics", label: "Academics" },
                { to: "/islamic-education", label: "Islamic Education" },
                { to: "/admissions", label: "Admissions" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Pre-primary school</li>
              <li>Primary School</li>
              <li>Junior Secondary School</li>
              <li>Quran & Islamic Studies</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Garissa, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+254 721903982</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>Alihsanschools2022@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          © 2026 AL-IHSAN SCHOOLS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
