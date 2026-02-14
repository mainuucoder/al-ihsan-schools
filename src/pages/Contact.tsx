import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="green-gradient section-padding text-primary-foreground text-center">
        <div className="container mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us today.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="font-heading text-2xl font-bold text-foreground">Get in Touch</h2>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Location", value: "Garissa, Kenya" },
                { icon: Phone, label: "Phone", value: "+254 700 000 000" },
                { icon: Mail, label: "Email", value: "info@alihsanschools.ac.ke" },
                { icon: Clock, label: "Office Hours", value: "Mon–Fri: 7:00 AM – 5:00 PM" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border h-48">
              <iframe
                title="AL-IHSAN Schools Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.4!2d39.6!3d-0.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17813d9e9c3e3b7d%3A0x2a8db7b8fa0a3f0!2sGarissa!5e0!3m2!1sen!2ske!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send a Message</h2>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. We'll respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        maxLength={100}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                      <input
                        type="email"
                        required
                        maxLength={255}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Subject</label>
                    <input
                      type="text"
                      required
                      maxLength={200}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                    <textarea
                      rows={5}
                      required
                      maxLength={1000}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg green-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
