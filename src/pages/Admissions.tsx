import { useState } from "react";
import { CheckCircle, Download, FileText } from "lucide-react";
import jsPDF from "jspdf";

const requirements = [
  "Completed application form",
  "Copy of birth certificate",
  "Recent passport-size photographs (2)",
  "Previous school reports (for transfers)",
  "Copy of parent/guardian ID",
];

const steps = [
  { step: "1", title: "Submit Application", desc: "Fill out the online or downloadable application form." },
  { step: "2", title: "Document Review", desc: "Our admissions team reviews your documents." },
  { step: "3", title: "Assessment", desc: "Student sits for an entry assessment (if applicable)." },
  { step: "4", title: "Admission Offer", desc: "Successful applicants receive an admission letter." },
];

const AdmissionsPage = () => {
  const [formData, setFormData] = useState({ studentName: "", parentName: "", email: "", phone: "", grade: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Function to download admission form as PDF
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const currentDate = new Date().toLocaleDateString();
    
    // Set font
    doc.setFont("helvetica");
    
    // School Header
    doc.setFontSize(22);
    doc.setTextColor(0, 100, 0); // Dark green
    doc.text("AL-IHSAN SCHOOLS", 105, 20, { align: "center" });
    
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text("Garissa, Kenya", 105, 28, { align: "center" });
    
    doc.setFontSize(11);
    doc.setTextColor(255, 191, 0); // Gold
    doc.text('"The Harder We Work The Smarter We Get"', 105, 36, { align: "center" });
    
    // Title
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0);
    doc.text("ADMISSION APPLICATION FORM", 105, 48, { align: "center" });
    
    // Date
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Date: ${currentDate}`, 20, 58);
    
    // Line
    doc.setLineWidth(0.5);
    doc.line(20, 62, 190, 62);
    
    // Dear Parent section
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text("Dear Prospective Parent/Guardian,", 20, 72);
    
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text("Thank you for your interest in AL-IHSAN SCHOOLS. Please complete this form and submit it", 20, 82);
    doc.text("along with the required documents.", 20, 89);
    
    // Requirements section
    doc.setFontSize(14);
    doc.setTextColor(0, 100, 0);
    doc.text("ADMISSION REQUIREMENTS:", 20, 105);
    
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    let yPos = 115;
    requirements.forEach((req, index) => {
      doc.text(`• ${req}`, 25, yPos);
      yPos += 7;
    });
    
    // Process section
    doc.setFontSize(14);
    doc.setTextColor(0, 100, 0);
    doc.text("ADMISSION PROCESS:", 20, yPos + 5);
    
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    yPos += 15;
    steps.forEach((step) => {
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      doc.text(`${step.step}. ${step.title}`, 25, yPos);
      
      doc.setFontSize(9);
      doc.setTextColor(100, 100, 100);
      doc.text(step.desc, 30, yPos + 5);
      yPos += 15;
    });
    
    // Fees section
    doc.setFontSize(14);
    doc.setTextColor(0, 100, 0);
    doc.text("FEES AND PAYMENT:", 20, yPos + 5);
    
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    yPos += 15;
    doc.text("For information about school fees and payment plans, please contact our admissions office:", 20, yPos);
    yPos += 7;
    doc.text("• Phone: +254 XXX XXX XXX", 25, yPos);
    yPos += 6;
    doc.text("• Email: admissions@alihsanschools.ac.ke", 25, yPos);
    yPos += 6;
    doc.text("• Visit: Our school campus in Garissa, Kenya", 25, yPos);
    
    // Office Use Only section
    yPos += 15;
    doc.setFontSize(14);
    doc.setTextColor(0, 100, 0);
    doc.text("OFFICE USE ONLY:", 20, yPos);
    
    yPos += 10;
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text("Application ID: _______________________", 20, yPos);
    yPos += 8;
    doc.text("Date Received: _______________________", 20, yPos);
    yPos += 8;
    doc.text("Reviewed By: _________________________", 20, yPos);
    yPos += 8;
    doc.text("Status: [ ] Pending  [ ] Approved  [ ] Waitlisted  [ ] Declined", 20, yPos);
    
    yPos += 12;
    doc.text("Notes:", 20, yPos);
    yPos += 6;
    doc.text("_____________________________________________", 20, yPos);
    yPos += 6;
    doc.text("_____________________________________________", 20, yPos);
    
    // Footer
    yPos = 270;
    doc.setFontSize(9);
    doc.setTextColor(150, 150, 150);
    doc.text("This form can be submitted in person at our school office or via email to admissions@alihsanschools.ac.ke", 105, yPos, { align: "center" });
    
    doc.setFontSize(8);
    doc.text("AL-IHSAN SCHOOLS - Nurturing Excellence in Academic and Islamic Education", 105, 285, { align: "center" });
    
    // Save the PDF
    doc.save(`AL-IHSAN-Admission-Form-${currentDate.replace(/\//g, '-')}.pdf`);
  };

  // Function to download sample admission offer letter as PDF
  const handleDownloadSampleLetter = () => {
    const doc = new jsPDF();
    const currentDate = new Date().toLocaleDateString();
    
    // School Header
    doc.setFontSize(22);
    doc.setTextColor(0, 100, 0);
    doc.text("AL-IHSAN SCHOOLS", 105, 20, { align: "center" });
    
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text("Garissa, Kenya", 105, 28, { align: "center" });
    
    doc.setFontSize(11);
    doc.setTextColor(255, 191, 0);
    doc.text('"The Harder We Work The Smarter We Get"', 105, 36, { align: "center" });
    
    // Line
    doc.setLineWidth(1);
    doc.line(20, 42, 190, 42);
    
    // Title
    doc.setFontSize(20);
    doc.setTextColor(0, 0, 0);
    doc.text("ADMISSION OFFER LETTER", 105, 55, { align: "center" });
    doc.text("(SAMPLE)", 105, 63, { align: "center" });
    
    // Line
    doc.line(20, 68, 190, 68);
    
    // Date
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Date: ${currentDate}`, 20, 78);
    
    // To
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text("To,", 20, 90);
    doc.text("[Parent/Guardian Name]", 20, 97);
    doc.text("[Address]", 20, 104);
    
    // Dear Parent
    doc.text("Dear Parent/Guardian,", 20, 118);
    
    // Subject
    doc.setFontSize(12);
    doc.setTextColor(0, 100, 0);
    doc.text("RE: ADMISSION OFFER FOR [STUDENT NAME]", 20, 130);
    
    // Body
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text("We are pleased to inform you that your child, [Student Name], has been offered admission", 20, 142);
    doc.text("to AL-IHSAN SCHOOLS for the academic year [Year] in [Grade/Class].", 20, 149);
    
    // Details
    doc.setFontSize(12);
    doc.setTextColor(0, 100, 0);
    doc.text("ADMISSION DETAILS:", 20, 165);
    
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text("• Student Name: ___________________", 25, 175);
    doc.text("• Grade/Class: ____________________", 25, 182);
    doc.text("• Academic Year: __________________", 25, 189);
    doc.text("• Admission Number: ________________", 25, 196);
    
    // Documents
    doc.setFontSize(12);
    doc.setTextColor(0, 100, 0);
    doc.text("REQUIRED DOCUMENTS:", 20, 213);
    
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    let yPos = 223;
    requirements.forEach((req) => {
      doc.text(`• ${req}`, 25, yPos);
      yPos += 7;
    });
    
    // Fees
    doc.setFontSize(12);
    doc.setTextColor(0, 100, 0);
    doc.text("FEES AND PAYMENT:", 20, yPos + 5);
    
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    yPos += 15;
    doc.text("• Registration Fee: KES _______", 25, yPos);
    yPos += 7;
    doc.text("• Tuition Fees: KES _______ per term", 25, yPos);
    yPos += 7;
    
    
    // Next Steps
    yPos += 15;
    doc.setFontSize(12);
    doc.setTextColor(0, 100, 0);
    doc.text("NEXT STEPS:", 20, yPos);
    
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    yPos += 10;
    doc.text("1. Accept this offer by [Date]", 25, yPos);
    yPos += 7;
    doc.text("2. Pay the registration fee", 25, yPos);
    yPos += 7;
    doc.text("3. Submit all required documents", 25, yPos);
    yPos += 7;
    doc.text("4. Attend orientation on [Date]", 25, yPos);
    
    // Signature
    yPos += 20;
    doc.text("We look forward to welcoming your child to AL-IHSAN SCHOOLS.", 20, yPos);
    
    yPos += 15;
    doc.text("Yours sincerely,", 20, yPos);
    
    yPos += 20;
    doc.text("_________________________", 20, yPos);
    yPos += 6;
    doc.text("Admissions Office", 20, yPos);
    doc.text("AL-IHSAN SCHOOLS", 20, yPos + 6);
    
    // Footer
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text("This is a sample letter. Actual admission offers will be provided upon successful application.", 105, 285, { align: "center" });
    
    // Save the PDF
    doc.save(`AL-IHSAN-Sample-Offer-${currentDate.replace(/\//g, '-')}.pdf`);
  };

  return (
    <div>
      <section className="green-gradient section-padding text-primary-foreground text-center">
        <div className="container mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Join the AL-IHSAN family. Start your child's journey towards excellence today.
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Admission Requirements</h2>
            <ul className="space-y-3">
              {requirements.map((req) => (
                <li key={req} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{req}</span>
                </li>
              ))}
            </ul>
            
            {/* Download buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button 
                onClick={handleDownloadPDF}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors group"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download PDF Form
              </button>
              
              
            </div>
            
            <p className="mt-4 text-sm text-muted-foreground">
              Click the buttons above to download PDF documents. You can fill them out digitally or print them.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Admission Process</h2>
            <div className="space-y-4">
              {steps.map((s) => (
                <div key={s.step} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full green-gradient flex items-center justify-center shrink-0 text-primary-foreground font-bold">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{s.title}</h4>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="font-heading text-2xl font-bold text-foreground">Online Application</h2>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Application Submitted!</h3>
                <p className="text-muted-foreground">We will review your application and contact you shortly.</p>
                <button
                  onClick={handleDownloadPDF}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg green-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  <Download className="w-5 h-5" />
                  Download PDF Form Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Student's Full Name</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Parent/Guardian Name</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      maxLength={255}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      maxLength={20}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Grade Applying For</label>
                  <select
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  >
                    <option value="">Select Grade</option>
                    <option>Kindergarten</option>
                    <option>Primary School (Grade 1-6)</option>
                    <option>Junior Secondary (Grade 7-9)</option>
                    <option>Secondary School</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Additional Message</label>
                  <textarea
                    rows={3}
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
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Need Help?</h2>
          <p className="text-muted-foreground mb-6">
            If you have any questions about the admission process or need assistance with your application, please contact our admissions office.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">Phone:</span>
              <span className="text-muted-foreground">+254 123 456 789</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">Email:</span>
              <span className="text-muted-foreground">admissions@alihsanschools.ac.ke</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">Hours:</span>
              <span className="text-muted-foreground">Mon-Fri, 8:00 AM - 4:00 PM</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;