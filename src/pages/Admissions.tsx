import { useState, useEffect } from "react";
import { 
  CheckCircle, Download, FileText, Phone, Mail, Clock, 
  User, Calendar, MapPin, BookOpen, Users, Heart, 
  ArrowLeft, ArrowRight, Home, Globe, Award, UserPlus
} from "lucide-react";
import jsPDF from "jspdf";
import schoolLogo from "@/assets/logo.jpg"; // Import your logo

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
  const [currentPage, setCurrentPage] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [logoBase64, setLogoBase64] = useState<string | null>(null);
  
  // Student Information State
  const [studentInfo, setStudentInfo] = useState({
    // Personal Information
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    placeOfBirth: "",
    gender: "",
    nationality: "Kenyan",
    religion: "Muslim",
    homeAddress: "",
    city: "Garissa",
    postalCode: "",
    
    // Contact Information
    studentPhone: "",
    studentEmail: "",
    
    // Birth Certificate Info
    birthCertNumber: "",
    birthCertDate: "",
    birthCertPlace: "",
    
    // Previous School Information
    previousSchool: "",
    previousSchoolAddress: "",
    previousGrade: "",
    yearCompleted: "",
    transferReason: "",
    
    // Grade Applying For
    gradeApplying: "",
    programChoice: "Regular",
    
    // Languages
    homeLanguage: "Somali",
    otherLanguages: "",
    
    // Special Needs
    hasSpecialNeeds: false,
    specialNeedsDetails: "",
  });

  // Parent/Guardian Information State
  const [parentInfo, setParentInfo] = useState({
    // Father's Information
    fatherName: "",
    fatherOccupation: "",
    fatherEmployer: "",
    fatherPhone: "",
    fatherEmail: "",
    fatherID: "",
    fatherAddress: "",
    
    // Mother's Information
    motherName: "",
    motherOccupation: "",
    motherEmployer: "",
    motherPhone: "",
    motherEmail: "",
    motherID: "",
    motherAddress: "",
    
    // Marital Status
    parentsMaritalStatus: "Married",
    legalGuardian: "",
    
    // Emergency Contact
    emergencyName: "",
    emergencyRelation: "",
    emergencyPhone: "",
    emergencyEmail: "",
    emergencyAddress: "",
  });

  // Medical Information State
  const [medicalInfo, setMedicalInfo] = useState({
    // General Health
    bloodGroup: "",
    allergies: "",
    chronicConditions: "",
    medications: "",
    doctorName: "",
    doctorPhone: "",
    doctorAddress: "",
    hospitalPreference: "",
    healthInsurance: "",
    insuranceProvider: "",
    insuranceNumber: "",
    
    // Immunizations
    immunizations: [] as string[],
    lastCheckup: "",
    
    // Physical Limitations
    physicalLimitations: "",
    dietaryRestrictions: "",
    
    // Consent
    emergencyTreatment: false,
    medicationConsent: false,
  });

  // Documents State
  const [documents, setDocuments] = useState({
    birthCertificate: null as File | null,
    passportPhoto: null as File | null,
    previousReports: null as File | null,
    fatherID: null as File | null,
    motherID: null as File | null,
    immunizationRecords: null as File | null,
    otherDocuments: null as File | null,
  });

  // Convert logo to base64 on component mount
  useEffect(() => {
    const convertImageToBase64 = async () => {
      try {
        const response = await fetch(schoolLogo);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
          setLogoBase64(reader.result as string);
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error("Error converting logo to base64:", error);
      }
    };
    
    convertImageToBase64();
  }, []);

  // Handle Student Info Changes
  const handleStudentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setStudentInfo(prev => ({ ...prev, [name]: checked }));
    } else {
      setStudentInfo(prev => ({ ...prev, [name]: value }));
    }
  };

  // Handle Parent Info Changes
  const handleParentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setParentInfo(prev => ({ ...prev, [name]: value }));
  };

  // Handle Medical Info Changes
  const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setMedicalInfo(prev => ({ ...prev, [name]: checked }));
    } else {
      setMedicalInfo(prev => ({ ...prev, [name]: value }));
    }
  };

  // Handle File Changes
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setDocuments(prev => ({ ...prev, [name]: files[0] }));
    }
  };

  // Handle Immunizations
  const handleImmunizationChange = (immunization: string) => {
    setMedicalInfo(prev => ({
      ...prev,
      immunizations: prev.immunizations.includes(immunization)
        ? prev.immunizations.filter(i => i !== immunization)
        : [...prev.immunizations, immunization]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate required fields based on current page
    if (currentPage === 1) {
      if (!studentInfo.firstName || !studentInfo.lastName || !studentInfo.dateOfBirth || !studentInfo.gender || !studentInfo.gradeApplying) {
        alert("Please fill in all required student information fields");
        return;
      }
    } else if (currentPage === 2) {
      if (!parentInfo.fatherName || !parentInfo.fatherPhone || !parentInfo.motherName || !parentInfo.motherPhone || !parentInfo.emergencyName || !parentInfo.emergencyPhone) {
        alert("Please fill in all required parent/guardian information fields");
        return;
      }
    } else if (currentPage === 3) {
      // Medical info validation (optional)
    } else if (currentPage === 4) {
      // Documents validation
      if (!documents.birthCertificate || !documents.passportPhoto) {
        alert("Please upload birth certificate and passport photo");
        return;
      }
      // Submit the form
      console.log("Form submitted:", { studentInfo, parentInfo, medicalInfo, documents });
      setSubmitted(true);
    }
  };

  const nextPage = () => {
    // Validate current page before proceeding
    if (currentPage === 1) {
      if (!studentInfo.firstName || !studentInfo.lastName || !studentInfo.dateOfBirth || !studentInfo.gender || !studentInfo.gradeApplying) {
        alert("Please fill in all required student information fields");
        return;
      }
    } else if (currentPage === 2) {
      if (!parentInfo.fatherName || !parentInfo.fatherPhone || !parentInfo.motherName || !parentInfo.motherPhone || !parentInfo.emergencyName || !parentInfo.emergencyPhone) {
        alert("Please fill in all required parent/guardian information fields");
        return;
      }
    }
    setCurrentPage(prev => Math.min(prev + 1, 4));
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  // Function to generate application reference number
  const generateAppRef = () => {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `ALS-${year}-${random}`;
  };

  // Function to download comprehensive admission form as PDF with all details and logo
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const currentDate = new Date().toLocaleDateString();
    const appRef = generateAppRef();
    
    doc.setFont("helvetica");
    
    // Add watermark to all pages
    const addWatermark = () => {
      if (logoBase64) {
        // Save current graphics state
        doc.saveGraphicsState();
        
        // Set transparency for watermark (15% opacity)
        doc.setGState(new (doc as any).GState({ opacity: 0.15 }));
        
        // Add logo as watermark in the center of the page
        doc.addImage(logoBase64, 'JPEG', 70, 100, 70, 70);
        
        // Restore graphics state
        doc.restoreGraphicsState();
      }
    };

    // Add watermark to first page
    addWatermark();

    // Add logo to first page (top left corner)
    if (logoBase64) {
      try {
        // Add logo at the top left corner (normal opacity)
        doc.addImage(logoBase64, 'JPEG', 20, 10, 20, 20);
        
        // School Header with logo
        doc.setFontSize(22);
        doc.setTextColor(0, 100, 0);
        doc.text("AL-IHSAN SCHOOLS TOWNSHIP", 105, 22, { align: "center" });
        
        doc.setFontSize(12);
        doc.setTextColor(100, 100, 100);
        doc.text("Garissa, Kenya", 105, 30, { align: "center" });
        
        doc.setFontSize(11);
        doc.setTextColor(255, 191, 0);
        doc.text('"The Harder We Work The Smarter We Get"', 105, 38, { align: "center" });
        
        // Title and Reference - adjusted Y position
        doc.setFontSize(18);
        doc.setTextColor(0, 0, 0);
        doc.text("COMPREHENSIVE STUDENT APPLICATION FORM", 105, 52, { align: "center" });
        
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text(`Application Reference: ${appRef}`, 20, 62);
        doc.text(`Date Downloaded: ${currentDate}`, 150, 62);
        
        doc.setLineWidth(0.5);
        doc.line(20, 66, 190, 66);
        
      } catch (error) {
        console.error("Error adding logo to PDF:", error);
        // Fallback if logo fails to load
        doc.setFontSize(22);
        doc.setTextColor(0, 100, 0);
        doc.text("AL-IHSAN SCHOOLS TOWNSHIP", 105, 20, { align: "center" });
        
        doc.setFontSize(12);
        doc.setTextColor(100, 100, 100);
        doc.text("Garissa, Kenya", 105, 28, { align: "center" });
        
        doc.setFontSize(11);
        doc.setTextColor(255, 191, 0);
        doc.text('"The Harder We Work The Smarter We Get"', 105, 36, { align: "center" });
        
        doc.setFontSize(18);
        doc.setTextColor(0, 0, 0);
        doc.text("COMPREHENSIVE STUDENT APPLICATION FORM", 105, 48, { align: "center" });
        
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text(`Application Reference: ${appRef}`, 20, 58);
        doc.text(`Date Downloaded: ${currentDate}`, 150, 58);
        
        doc.setLineWidth(0.5);
        doc.line(20, 62, 190, 62);
      }
    } else {
      // No logo available
      doc.setFontSize(22);
      doc.setTextColor(0, 100, 0);
      doc.text("AL-IHSAN SCHOOLS TOWNSHIP", 105, 20, { align: "center" });
      
      doc.setFontSize(12);
      doc.setTextColor(100, 100, 100);
      doc.text("Garissa, Kenya", 105, 28, { align: "center" });
      
      doc.setFontSize(11);
      doc.setTextColor(255, 191, 0);
      doc.text('"The Harder We Work The Smarter We Get"', 105, 36, { align: "center" });
      
      doc.setFontSize(18);
      doc.setTextColor(0, 0, 0);
      doc.text("COMPREHENSIVE STUDENT APPLICATION FORM", 105, 48, { align: "center" });
      
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`Application Reference: ${appRef}`, 20, 58);
      doc.text(`Date Downloaded: ${currentDate}`, 150, 58);
      
      doc.setLineWidth(0.5);
      doc.line(20, 62, 190, 62);
    }
    
    let yPos = logoBase64 ? 76 : 72; // Adjust starting Y position based on whether logo was added
    const lineHeight = 6;
    const pageHeight = 280;
    
    // Helper function to check and add new page
    const checkPageBreak = (neededSpace: number) => {
      if (yPos + neededSpace > pageHeight) {
        doc.addPage();
        // Add watermark to new page
        addWatermark();
        
        // Add school header on new pages (without the top logo)
        doc.setFontSize(22);
        doc.setTextColor(0, 100, 0);
        doc.text("AL-IHSAN SCHOOLS TOWNSHIP", 105, 20, { align: "center" });
        
        doc.setFontSize(12);
        doc.setTextColor(100, 100, 100);
        doc.text("Garissa, Kenya", 105, 28, { align: "center" });
        
        doc.setFontSize(11);
        doc.setTextColor(255, 191, 0);
        doc.text('"The Harder We Work The Smarter We Get"', 105, 36, { align: "center" });
        
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text(`Application Reference: ${appRef} (Continued)`, 20, 46);
        doc.text(`Page ${doc.getNumberOfPages()}`, 150, 46);
        
        doc.setLineWidth(0.5);
        doc.line(20, 50, 190, 50);
        
        yPos = 60;
        return true;
      }
      return false;
    };

    // SECTION 1: STUDENT PERSONAL INFORMATION
    checkPageBreak(40);
    doc.setFontSize(14);
    doc.setTextColor(0, 100, 0);
    doc.text("SECTION 1: STUDENT PERSONAL INFORMATION", 20, yPos);
    yPos += 8;
    
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    
    // Personal Details
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text("Personal Details:", 20, yPos);
    yPos += 5;
    
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text(`Full Name: ${studentInfo.firstName || '________________'} ${studentInfo.middleName || ''} ${studentInfo.lastName || '________________'}`, 25, yPos);
    yPos += lineHeight;
    doc.text(`Date of Birth: ${studentInfo.dateOfBirth || '______________'} | Gender: ${studentInfo.gender || '______'}`, 25, yPos);
    yPos += lineHeight;
    doc.text(`Place of Birth: ${studentInfo.placeOfBirth || '________________'}`, 25, yPos);
    yPos += lineHeight;
    doc.text(`Nationality: ${studentInfo.nationality || '_________'} | Religion: ${studentInfo.religion || '______'}`, 25, yPos);
    yPos += lineHeight;
    doc.text(`Home Language: ${studentInfo.homeLanguage || '______'} | Other Languages: ${studentInfo.otherLanguages || 'None'}`, 25, yPos);
    yPos += lineHeight + 2;
    
    // Contact Information
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text("Contact Information:", 20, yPos);
    yPos += 5;
    
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text(`Address: ${studentInfo.homeAddress || '__________________'}, ${studentInfo.city || '_______'} ${studentInfo.postalCode || '_____'}`, 25, yPos);
    yPos += lineHeight;
    doc.text(`Phone: ${studentInfo.studentPhone || '______________'} | Email: ${studentInfo.studentEmail || '________________'}`, 25, yPos);
    yPos += lineHeight + 2;
    
    // Birth Certificate Information
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text("Birth Certificate Information:", 20, yPos);
    yPos += 5;
    
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text(`Certificate Number: ${studentInfo.birthCertNumber || '________________'}`, 25, yPos);
    yPos += lineHeight;
    doc.text(`Issue Date: ${studentInfo.birthCertDate || '______________'} | Place of Issue: ${studentInfo.birthCertPlace || '________________'}`, 25, yPos);
    yPos += lineHeight + 4;
    
    // SECTION 2: ACADEMIC INFORMATION
    checkPageBreak(40);
    doc.setFontSize(14);
    doc.setTextColor(0, 100, 0);
    doc.text("SECTION 2: ACADEMIC INFORMATION", 20, yPos);
    yPos += 8;
    
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text("Current Application:", 20, yPos);
    yPos += 5;
    
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text(`Grade Applying For: ${studentInfo.gradeApplying || '__________'} | Program: ${studentInfo.programChoice || 'Regular'}`, 25, yPos);
    yPos += lineHeight + 2;
    
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text("Previous School Information:", 20, yPos);
    yPos += 5;
    
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text(`School Name: ${studentInfo.previousSchool || '___________________'}`, 25, yPos);
    yPos += lineHeight;
    doc.text(`School Address: ${studentInfo.previousSchoolAddress || '_________________________'}`, 25, yPos);
    yPos += lineHeight;
    doc.text(`Last Grade Completed: ${studentInfo.previousGrade || '____________________'} | Year: ${studentInfo.yearCompleted || '_________________'}`, 25, yPos);
    yPos += lineHeight;
    
    if (studentInfo.transferReason) {
      doc.text(`Reason for Transfer: ${studentInfo.transferReason}`, 25, yPos);
      yPos += lineHeight;
    }
    yPos += 4;
    
    if (studentInfo.hasSpecialNeeds) {
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      doc.text("Special Needs Information:", 20, yPos);
      yPos += 5;
      doc.setFontSize(10);
      doc.setTextColor(80, 80, 80);
      doc.text(`${studentInfo.specialNeedsDetails || 'Details provided'}`, 25, yPos);
      yPos += lineHeight + 4;
    } else {
      yPos += 2;
    }
    
    // SECTION 3: PARENT/GUARDIAN INFORMATION
    checkPageBreak(60);
    doc.setFontSize(14);
    doc.setTextColor(0, 100, 0);
    doc.text("SECTION 3: PARENT/GUARDIAN INFORMATION", 20, yPos);
    yPos += 8;
    
    // Father's Information
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text("Father's Information:", 20, yPos);
    yPos += 5;
    
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text(`Name: ${parentInfo.fatherName || '___________________'}`, 25, yPos);
    yPos += lineHeight;
    doc.text(`Occupation: ${parentInfo.fatherOccupation || '________________'} | Employer: ${parentInfo.fatherEmployer || '________________'}`, 25, yPos);
    yPos += lineHeight;
    doc.text(`Phone: ${parentInfo.fatherPhone || '______________'} | Email: ${parentInfo.fatherEmail || '________________'}`, 25, yPos);
    yPos += lineHeight;
    doc.text(`ID/Passport: ${parentInfo.fatherID || '________________'}`, 25, yPos);
    yPos += lineHeight;
    doc.text(`Address: ${parentInfo.fatherAddress || '___________________'}`, 25, yPos);
    yPos += lineHeight + 2;
    
    // Mother's Information
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text("Mother's Information:", 20, yPos);
    yPos += 5;
    
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text(`Name: ${parentInfo.motherName || '___________________'}`, 25, yPos);
    yPos += lineHeight;
    doc.text(`Occupation: ${parentInfo.motherOccupation || '___________'} | Employer: ${parentInfo.motherEmployer || '___________'}`, 25, yPos);
    yPos += lineHeight;
    doc.text(`Phone: ${parentInfo.motherPhone || '______________'} | Email: ${parentInfo.motherEmail || '________________'}`, 25, yPos);
    yPos += lineHeight;
    doc.text(`ID/Passport: ${parentInfo.motherID || '________________'}`, 25, yPos);
    yPos += lineHeight;
    doc.text(`Address: ${parentInfo.motherAddress || '___________________'}`, 25, yPos);
    yPos += lineHeight + 2;
    
    // Emergency Contact
    checkPageBreak(30);
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text("Emergency Contact:", 20, yPos);
    yPos += 5;
    
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text(`Name: ${parentInfo.emergencyName || '___________________'} (${parentInfo.emergencyRelation || 'Relation'})`, 25, yPos);
    yPos += lineHeight;
    doc.text(`Phone: ${parentInfo.emergencyPhone || '______________'}`, 25, yPos);
    yPos += lineHeight;
    doc.text(`Email: ${parentInfo.emergencyEmail || '________________'}`, 25, yPos);
    yPos += lineHeight;
    doc.text(`Address: ${parentInfo.emergencyAddress || '___________________'}`, 25, yPos);
    yPos += lineHeight + 4;
    
    // SECTION 4: FEES AND PAYMENT
    checkPageBreak(30);
    doc.setFontSize(14);
    doc.setTextColor(0, 100, 0);
    doc.text("SECTION 4: FEES AND PAYMENT INFORMATION", 20, yPos);
    yPos += 8;
    
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text("For information about school fees and payment plans, please contact our admissions office:", 20, yPos);
    yPos += lineHeight;
    doc.text("• Phone: +254 721903982", 25, yPos);
    yPos += lineHeight;
    doc.text("• Email: Alihsanschools2022@gmail.com", 25, yPos);
    yPos += lineHeight;
    doc.text("• Visit: Our school campus in Garissa Township, Kenya", 25, yPos);
    yPos += lineHeight + 4;
    
    // DECLARATION
    checkPageBreak(30);
    doc.setFontSize(14);
    doc.setTextColor(0, 100, 0);
    doc.text("DECLARATION", 20, yPos);
    yPos += 8;
    
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text("I hereby certify that the information provided in this application is true and complete to the best of my knowledge.", 20, yPos);
    yPos += lineHeight;
    doc.text("I understand that any false or misleading information may result in rejection of this application or dismissal after admission.", 20, yPos);
    yPos += lineHeight + 4;
    
    // Signature Lines
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text("Student's Signature: ______________________________", 20, yPos);
    yPos += lineHeight * 2;
    doc.text("Date: ______________________________", 20, yPos);
    yPos += lineHeight * 2;
    
    // OFFICE USE ONLY
    checkPageBreak(30);
    doc.setFontSize(14);
    doc.setTextColor(0, 100, 0);
    doc.text("OFFICE USE ONLY", 20, yPos);
    yPos += 8;
    
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text(`Application ID: ${appRef}`, 20, yPos);
    yPos += lineHeight;
    doc.text("Date Received: _______________________", 20, yPos);
    yPos += lineHeight;
    doc.text("Reviewed By: _________________________", 20, yPos);
    yPos += lineHeight;
    doc.text("Status: [ ] Pending  [ ] Approved  [ ] Waitlisted  [ ] Declined", 20, yPos);
    yPos += lineHeight * 2;
    
    // Footer on last page
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text("This is an official AL-IHSAN SCHOOLS admission application form. Please submit along with required documents.", 105, 285, { align: "center" });
    
    // Save the PDF with student name in filename
    const studentName = studentInfo.firstName ? 
      `${studentInfo.firstName}_${studentInfo.lastName}`.replace(/\s+/g, '_') : 
      'Application';
    doc.save(`AL-IHSAN_Admission_${studentName}_${currentDate.replace(/\//g, '-')}.pdf`);
  };

  // Function to download summary PDF after submission
  const handleDownloadSummary = () => {
    handleDownloadPDF();
  };

  // Immunization options
  const immunizationOptions = [
    "BCG", "Polio", "DPT", "Measles", "Hepatitis B", "Hib", "COVID-19", "Other"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="green-gradient section-padding text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Join the AL-IHSAN family. Start your child's journey towards excellence today.
          </p>
        </div>
      </section>

      {/* Requirements & Process Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid md:grid-cols-2 gap-12">
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
              
              <div className="mt-8">
                <button 
                  onClick={handleDownloadPDF}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors group"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download Admission Form
                </button>
              </div>
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
        </div>
      </section>

      {/* Multi-page Application Form */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                <h2 className="font-heading text-2xl font-bold text-foreground">Student Application Form</h2>
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                Page {currentPage} of 4
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {[1, 2, 3, 4].map((page) => (
                  <div
                    key={page}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      page === currentPage
                        ? 'bg-primary text-primary-foreground'
                        : page < currentPage
                        ? 'bg-green-500 text-white'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {page < currentPage ? '✓' : page}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Student Details</span>
                <span>Family Info</span>
                <span>Medical Info</span>
                <span>Documents</span>
              </div>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Application Submitted Successfully!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for applying to AL-IHSAN SCHOOLS. We have received your application and will contact you within 3-5 business days.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-left max-w-md mx-auto">
                  <p className="font-semibold text-green-800 mb-2">Application Summary:</p>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Student: {studentInfo.firstName} {studentInfo.lastName}</li>
                    <li>• Grade: {studentInfo.gradeApplying}</li>
                    <li>• Application Reference: ALS-{new Date().getFullYear()}-{Math.floor(Math.random() * 1000)}</li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleDownloadSummary}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg green-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Download className="w-5 h-5" />
                    Download Application Summary
                  </button>
                  <button
                    onClick={handleDownloadPDF}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    Download Complete Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Page 1: Student Details */}
                {currentPage === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="border-b border-border pb-4">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <User className="w-5 h-5 text-primary" />
                        Personal Information
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={studentInfo.firstName}
                          onChange={handleStudentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="First name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Middle Name
                        </label>
                        <input
                          type="text"
                          name="middleName"
                          value={studentInfo.middleName}
                          onChange={handleStudentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="Middle name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={studentInfo.lastName}
                          onChange={handleStudentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="Last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          <Calendar className="w-4 h-4 inline mr-1" />
                          Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          required
                          value={studentInfo.dateOfBirth}
                          onChange={handleStudentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          <MapPin className="w-4 h-4 inline mr-1" />
                          Place of Birth
                        </label>
                        <input
                          type="text"
                          name="placeOfBirth"
                          value={studentInfo.placeOfBirth}
                          onChange={handleStudentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="City, Country"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Gender <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="gender"
                          required
                          value={studentInfo.gender}
                          onChange={handleStudentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Nationality
                        </label>
                        <input
                          type="text"
                          name="nationality"
                          value={studentInfo.nationality}
                          onChange={handleStudentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Religion
                        </label>
                        <input
                          type="text"
                          name="religion"
                          value={studentInfo.religion}
                          onChange={handleStudentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        <Home className="w-4 h-4 inline mr-1" />
                        Home Address
                      </label>
                      <input
                        type="text"
                        name="homeAddress"
                        value={studentInfo.homeAddress}
                        onChange={handleStudentChange}
                        className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                        placeholder="Street address"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={studentInfo.city}
                          onChange={handleStudentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          value={studentInfo.postalCode}
                          onChange={handleStudentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="Postal code"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          <Globe className="w-4 h-4 inline mr-1" />
                          Home Language
                        </label>
                        <input
                          type="text"
                          name="homeLanguage"
                          value={studentInfo.homeLanguage}
                          onChange={handleStudentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                        />
                      </div>
                    </div>
                                    
                    <div className="border-b border-border pb-4 mt-6">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        Birth Certificate Information
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Certificate Number
                        </label>
                        <input
                          type="text"
                          name="birthCertNumber"
                          value={studentInfo.birthCertNumber}
                          onChange={handleStudentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="Certificate number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Issue Date
                        </label>
                        <input
                          type="date"
                          name="birthCertDate"
                          value={studentInfo.birthCertDate}
                          onChange={handleStudentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Place of Issue
                        </label>
                        <input
                          type="text"
                          name="birthCertPlace"
                          value={studentInfo.birthCertPlace}
                          onChange={handleStudentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="Place of issue"
                        />
                      </div>
                    </div>

                    <div className="border-b border-border pb-4 mt-6">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        Previous School & Grade Application
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Previous School Name
                        </label>
                        <input
                          type="text"
                          name="previousSchool"
                          value={studentInfo.previousSchool}
                          onChange={handleStudentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="Name of previous school"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          School Address
                        </label>
                        <input
                          type="text"
                          name="previousSchoolAddress"
                          value={studentInfo.previousSchoolAddress}
                          onChange={handleStudentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="School address"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Last Grade Completed
                        </label>
                        <input
                          type="text"
                          name="previousGrade"
                          value={studentInfo.previousGrade}
                          onChange={handleStudentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="e.g., Grade 5"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Year Completed
                        </label>
                        <input
                          type="text"
                          name="yearCompleted"
                          value={studentInfo.yearCompleted}
                          onChange={handleStudentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="e.g., 2023"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Grade Applying For <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="gradeApplying"
                          required
                          value={studentInfo.gradeApplying}
                          onChange={handleStudentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select Grade</option>
                          <option value="Grade 1">Grade 1</option>
                          <option value="Grade 2">Grade 2</option>
                          <option value="Grade 3">Grade 3</option>
                          <option value="Grade 4">Grade 4</option>
                          <option value="Grade 5">Grade 5</option>
                          <option value="Grade 6">Grade 6</option>
                          <option value="Grade 7">Grade 7</option>
                          <option value="Grade 8">Grade 8</option>
                          <option value="Grade 9">Grade 9</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Reason for Transfer (if applicable)
                      </label>
                      <textarea
                        name="transferReason"
                        rows={3}
                        value={studentInfo.transferReason}
                        onChange={handleStudentChange}
                        className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring resize-none"
                        placeholder="Please explain why you are transferring to AL-IHSAN SCHOOLS"
                      />
                    </div>
                    
                    {/* Navigation Buttons */}
                    <div className="flex justify-end pt-4">
                      <button
                        type="button"
                        onClick={nextPage}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg green-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                      >
                        Next: Family Information
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Page 2: Family Information */}
                {currentPage === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="border-b border-border pb-4">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        Father's Information
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Father's Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fatherName"
                          required
                          value={parentInfo.fatherName}
                          onChange={handleParentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="Enter father's full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Occupation
                        </label>
                        <input
                          type="text"
                          name="fatherOccupation"
                          value={parentInfo.fatherOccupation}
                          onChange={handleParentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="Occupation"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Employer
                        </label>
                        <input
                          type="text"
                          name="fatherEmployer"
                          value={parentInfo.fatherEmployer}
                          onChange={handleParentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="Employer name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="fatherPhone"
                          required
                          value={parentInfo.fatherPhone}
                          onChange={handleParentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="fatherEmail"
                          value={parentInfo.fatherEmail}
                          onChange={handleParentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="Email address"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          ID/Passport Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fatherID"
                          required
                          value={parentInfo.fatherID}
                          onChange={handleParentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="ID or Passport number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Residential Address
                      </label>
                      <input
                        type="text"
                        name="fatherAddress"
                        value={parentInfo.fatherAddress}
                        onChange={handleParentChange}
                        className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                        placeholder="Address"
                      />
                    </div>

                    <div className="border-b border-border pb-4 mt-6">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        Mother's Information
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Mother's Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="motherName"
                          required
                          value={parentInfo.motherName}
                          onChange={handleParentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="Enter mother's full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Occupation
                        </label>
                        <input
                          type="text"
                          name="motherOccupation"
                          value={parentInfo.motherOccupation}
                          onChange={handleParentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="Occupation"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Employer
                        </label>
                        <input
                          type="text"
                          name="motherEmployer"
                          value={parentInfo.motherEmployer}
                          onChange={handleParentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="Employer name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="motherPhone"
                          required
                          value={parentInfo.motherPhone}
                          onChange={handleParentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="motherEmail"
                          value={parentInfo.motherEmail}
                          onChange={handleParentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="Email address"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          ID/Passport Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="motherID"
                          required
                          value={parentInfo.motherID}
                          onChange={handleParentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="ID or Passport number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Residential Address
                      </label>
                      <input
                        type="text"
                        name="motherAddress"
                        value={parentInfo.motherAddress}
                        onChange={handleParentChange}
                        className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                        placeholder="Address"
                      />
                    </div>

                    <div className="border-b border-border pb-4 mt-6">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <UserPlus className="w-5 h-5 text-primary" />
                        Emergency Contact
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Contact Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="emergencyName"
                          required
                          value={parentInfo.emergencyName}
                          onChange={handleParentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Relation to Student
                        </label>
                        <input
                          type="text"
                          name="emergencyRelation"
                          value={parentInfo.emergencyRelation}
                          onChange={handleParentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="e.g., Aunt, Uncle"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="emergencyPhone"
                          required
                          value={parentInfo.emergencyPhone}
                          onChange={handleParentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="Emergency contact number"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="emergencyEmail"
                          value={parentInfo.emergencyEmail}
                          onChange={handleParentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="Email address"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Address
                        </label>
                        <input
                          type="text"
                          name="emergencyAddress"
                          value={parentInfo.emergencyAddress}
                          onChange={handleParentChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="Address"
                        />
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={prevPage}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Previous
                      </button>
                      <button
                        type="button"
                        onClick={nextPage}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg green-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                      >
                        Next: Medical Information
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Page 3: Medical Information */}
                {currentPage === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="border-b border-border pb-4">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Heart className="w-5 h-5 text-primary" />
                        Medical Information
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Blood Group
                        </label>
                        <select
                          name="bloodGroup"
                          value={medicalInfo.bloodGroup}
                          onChange={handleMedicalChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select Blood Group</option>
                          <option value="A+">A+</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B-">B-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Allergies
                        </label>
                        <input
                          type="text"
                          name="allergies"
                          value={medicalInfo.allergies}
                          onChange={handleMedicalChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="e.g., Peanuts, Penicillin"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Chronic Conditions
                        </label>
                        <input
                          type="text"
                          name="chronicConditions"
                          value={medicalInfo.chronicConditions}
                          onChange={handleMedicalChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="e.g., Asthma, Diabetes"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Current Medications
                      </label>
                      <input
                        type="text"
                        name="medications"
                        value={medicalInfo.medications}
                        onChange={handleMedicalChange}
                        className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                        placeholder="List any current medications"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Doctor's Name
                        </label>
                        <input
                          type="text"
                          name="doctorName"
                          value={medicalInfo.doctorName}
                          onChange={handleMedicalChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="Family doctor's name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Doctor's Phone
                        </label>
                        <input
                          type="tel"
                          name="doctorPhone"
                          value={medicalInfo.doctorPhone}
                          onChange={handleMedicalChange}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                          placeholder="Doctor's phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Doctor's Address
                      </label>
                      <input
                        type="text"
                        name="doctorAddress"
                        value={medicalInfo.doctorAddress}
                        onChange={handleMedicalChange}
                        className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                        placeholder="Doctor's address"
                      />
                    </div>

                    <div className="border-b border-border pb-4 mt-6">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Heart className="w-5 h-5 text-primary" />
                        Immunizations
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {immunizationOptions.map((imm) => (
                        <label key={imm} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={medicalInfo.immunizations.includes(imm)}
                            onChange={() => handleImmunizationChange(imm)}
                            className="w-4 h-4 text-primary rounded border-input focus:ring-primary"
                          />
                          <span className="text-sm text-foreground">{imm}</span>
                        </label>
                      ))}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Last Checkup Date
                      </label>
                      <input
                        type="date"
                        name="lastCheckup"
                        value={medicalInfo.lastCheckup}
                        onChange={handleMedicalChange}
                        className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring"
                      />
                    </div>

                    <div className="border-b border-border pb-4 mt-6">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Heart className="w-5 h-5 text-primary" />
                        Physical Limitations & Dietary Restrictions
                      </h3>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Physical Limitations
                      </label>
                      <textarea
                        name="physicalLimitations"
                        rows={2}
                        value={medicalInfo.physicalLimitations}
                        onChange={handleMedicalChange}
                        className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring resize-none"
                        placeholder="Any physical limitations or disabilities"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Dietary Restrictions
                      </label>
                      <textarea
                        name="dietaryRestrictions"
                        rows={2}
                        value={medicalInfo.dietaryRestrictions}
                        onChange={handleMedicalChange}
                        className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring resize-none"
                        placeholder="Any dietary restrictions or special meal requirements"
                      />
                    </div>

                    <div className="border-b border-border pb-4 mt-6">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Heart className="w-5 h-5 text-primary" />
                        Consent
                      </h3>
                    </div>

                    <div className="space-y-3">
                      <label className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          name="emergencyTreatment"
                          checked={medicalInfo.emergencyTreatment}
                          onChange={handleMedicalChange}
                          className="w-4 h-4 text-primary rounded border-input focus:ring-primary mt-1"
                        />
                        <span className="text-sm text-foreground">
                          I consent to emergency medical treatment being administered to my child if necessary and if I cannot be reached.
                        </span>
                      </label>
                      <label className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          name="medicationConsent"
                          checked={medicalInfo.medicationConsent}
                          onChange={handleMedicalChange}
                          className="w-4 h-4 text-primary rounded border-input focus:ring-primary mt-1"
                        />
                        <span className="text-sm text-foreground">
                          I consent to school staff administering prescribed medications according to the provided instructions.
                        </span>
                      </label>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={prevPage}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Previous
                      </button>
                      <button
                        type="button"
                        onClick={nextPage}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg green-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                      >
                        Next: Documents
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Page 4: Documents */}
                {currentPage === 4 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="border-b border-border pb-4">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Download className="w-5 h-5 text-primary" />
                        Required Documents
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Birth Certificate <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="file"
                          name="birthCertificate"
                          onChange={handleFileChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:opacity-90"
                          required
                        />
                        <p className="text-xs text-muted-foreground mt-1">Accepted formats: PDF, JPG, PNG (Max 5MB)</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Passport Photo (2) <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="file"
                          name="passportPhoto"
                          onChange={handleFileChange}
                          accept=".jpg,.jpeg,.png"
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:opacity-90"
                          required
                        />
                        <p className="text-xs text-muted-foreground mt-1">Accepted formats: JPG, PNG (Max 2MB)</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Previous School Reports (for transfers)
                        </label>
                        <input
                          type="file"
                          name="previousReports"
                          onChange={handleFileChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:opacity-90"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Father's ID/Passport
                        </label>
                        <input
                          type="file"
                          name="fatherID"
                          onChange={handleFileChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:opacity-90"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Mother's ID/Passport
                        </label>
                        <input
                          type="file"
                          name="motherID"
                          onChange={handleFileChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:opacity-90"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Immunization Records
                        </label>
                        <input
                          type="file"
                          name="immunizationRecords"
                          onChange={handleFileChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:opacity-90"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Other Documents (Optional)
                        </label>
                        <input
                          type="file"
                          name="otherDocuments"
                          onChange={handleFileChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:opacity-90"
                          multiple
                        />
                      </div>
                    </div>

                    <div className="border-t border-border pt-6 mt-6">
                      <label className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          required
                          className="w-4 h-4 text-primary rounded border-input focus:ring-primary mt-1"
                        />
                        <span className="text-sm text-foreground">
                          I certify that the information provided in this application is true and complete. I understand that any false information may result in rejection of this application or dismissal after admission. <span className="text-red-500">*</span>
                        </span>
                      </label>
                    </div>

                    {/* Download Current Form Button */}
                    <div className="flex justify-center pt-2">
                      <button
                        type="button"
                        onClick={handleDownloadPDF}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary text-sm hover:bg-primary/5 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download Current Form as PDF
                      </button>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={prevPage}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Previous
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg green-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                      >
                        Submit Application
                        <CheckCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Need Help?</h2>
          <p className="text-muted-foreground mb-6">
            If you have any questions about the admission process or need assistance with your application, please contact our admissions office.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-semibold text-foreground">Phone:</span>
              <span className="text-muted-foreground">+254 721 903 982</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span className="font-semibold text-foreground">Email:</span>
              <span className="text-muted-foreground">Alihsanschools2022@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="font-semibold text-foreground">Hours:</span>
              <span className="text-muted-foreground">Mon-Fri, 8:00 AM - 4:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AdmissionsPage;