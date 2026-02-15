import { Calendar, Bell, BookOpen, Moon, FileText, Clock, Sparkles, Star, ChevronRight, Award, Heart, Users, Gift, Upload, Image, Download, School, GraduationCap, BookCopy, Wallet, FileDown, Eye, ExternalLink } from "lucide-react";
import ramadanImage from "@/assets/ramadan.jpg";
import termDatesImage from "@/assets/term-dates.jpg"; // Add your term dates image
import feeStructureImage from "@/assets/fee-structure.jpg"; // Add your fee structure image
import academicRequirementsImage from "@/assets/academic-requirements.jpg"; // Add your academic requirements image
import jssRequirementsImage from "@/assets/jss-requirements.jpg"; // Add your JSS requirements image
import primaryRequirementsImage from "@/assets/primary-requirements.jpg"; // Add your primary requirements image
import { useState } from "react";

// PDF files - you'll need to add these PDFs to your public folder or assets
import termDatesPdf from "@/assets/pdfs/term-dates.pdf";
import feeStructurePdf from "@/assets/pdfs/fee-structure.pdf";
import academicRequirementsPdf from "@/assets/pdfs/academic-requirements.pdf";
import jssRequirementsPdf from "@/assets/pdfs/jss-requirements.pdf";
// import primaryRequirementsPdf from "@/assets/pdfs/primary-requirements.pdf";

const news = [
  // Latest News - Ramadan 2026 with Image
  {
    icon: Moon,
    date: "February 15, 2026",
    title: "Ramadan 1447 AH - School Hours Announcement",
    excerpt: "In observance of the holy month of Ramadan 2026 (beginning February 19th, 2026), school hours will be adjusted from 8:00 AM to 1:00 PM effective February 19th, 2026. Taraweeh prayers will be organized at the school mosque. Eid-ul-Fitr break 2026 will be observed from March 20th to March 22nd, 2026.",
    category: "Ramadan Announcement",
    isNew: true,
    isFeatured: true,
    image: ramadanImage,
    imageCaption: "Ramadan 2026 at AL-IHSAN SCHOOLS - Special prayers and activities",
    highlights: ["Early dismissal at 1:00 PM", "Daily Taraweeh prayers", "Community iftar every Friday"]
  },
  {
    icon: Calendar,
    date: "February 12, 2026",
    title: "Midterm Examinations Schedule Released",
    excerpt: "Midterm exams for Term 1, 2026 will commence from February 21st to February 25th, 2026. Download the complete examination timetable from the portal. All students must be present.",
    category: "Academic",
    isNew: true,
    isFeatured: false,
    highlights: ["Study groups available", "Past papers in library", "Teacher consultations"]
  },
  {
    icon: FileText,
    date: "February 10, 2026",
    title: "Second Batch Admissions Now Open for 2026",
    excerpt: "Due to high demand, AL-IHSAN SCHOOLS is opening a second batch of admissions for the 2026 academic year. Limited seats available in Grades 1, 4, and 7. School opens on January 5th, 2026. Apply before February 28th, 2026.",
    category: "Admissions",
    isNew: true,
    isFeatured: false,
    highlights: ["Limited seats available", "Scholarship opportunities", "Online application"]
  },
  {
    icon: Clock,
    date: "February 8, 2026",
    title: "Term 1 2026 Midterm Break - Important Dates",
    excerpt: "The midterm break for Term 1, 2026 (Week 8) will begin on February 25th, 2026. School will resume on March 1st, 2026. Parents are advised to collect progress reports on February 24th, 2026.",
    category: "Announcement",
    isNew: true,
    isFeatured: false,
  },
  {
    icon: Moon,
    date: "February 5, 2026",
    title: "Ramadan 2026 Quran Completion Program",
    excerpt: "Join our special Ramadan 2026 Quran completion program (Ramadan begins February 19th, 2026). Students will aim to complete the entire Quran during the holy month. Registration closes February 25th, 2026. Eid-ul-Fitr break 2026: March 20th-22nd, 2026.",
    category: "Ramadan Event",
    isNew: true,
    isFeatured: true,
    image: ramadanImage,
    imageCaption: "Quran recitation during Ramadan 2026",
    highlights: ["Complete Quran in 30 days", "Daily halaqas", "Certificate of completion"]
  },
  {
    icon: Bell,
    date: "February 1, 2026",
    title: "End of Term 1 2026 Dates Announced",
    excerpt: "Term 1, 2026 will conclude with Madarasa exams in Week 12, followed by End of Term exams in Week 13. The closing ceremony and awards day will be held after exams. Term 2, 2026 begins on a date to be announced.",
    category: "Announcement",
    isNew: true,
    isFeatured: false,
  },
  
  // Previous News (keeping for archive)
  {
    icon: BookOpen,
    date: "January 28, 2026",
    title: "Quran Memorization Competition 2026 Results",
    excerpt: "Congratulations to all participants in our annual Hifdh competition 2026. The winners demonstrated exceptional dedication.",
    category: "Islamic Event",
    isNew: false,
  },
  {
    icon: Calendar,
    date: "January 15, 2026",
    title: "School Opens for Term 1 2026",
    excerpt: "AL-IHSAN SCHOOLS officially opened for Term 1 on January 5th, 2026. We welcomed students back for another exciting academic year.",
    category: "Academic Event",
    isNew: false,
  },
  {
    icon: Bell,
    date: "December 20, 2025",
    title: "Admissions Open for 2026",
    excerpt: "Applications for the 2026 academic year are now open. School opens January 5th, 2026. Visit the admissions page to apply online or download the form.",
    category: "Announcement",
    isNew: false,
  },
];

// Document uploads data with PDF links
const documentUploads = [
  {
    id: 1,
    title: "Term Dates 2026",
    icon: Calendar,
    image: termDatesImage,
    pdfFile: termDatesPdf,
    description: "Complete academic calendar including term dates, holidays, and important events for the 2026 academic year.",
    category: "Academic Calendar",
    fileSize: "2.4 MB",
    pageCount: 12,
    lastUpdated: "January 5, 2026"
  },
  {
    id: 2,
    title: "Fee Structure 2026",
    icon: Wallet,
    image: feeStructureImage,
    pdfFile: feeStructurePdf,
    description: "Detailed fee breakdown for all classes including tuition, development, activity fees, and payment schedules.",
    category: "Finance",
    fileSize: "1.8 MB",
    pageCount: 8,
    lastUpdated: "January 10, 2026"
  },
  {
    id: 3,
    title: "Academic Requirements",
    icon: BookCopy,
    image: academicRequirementsImage,
    pdfFile: academicRequirementsPdf,
    description: "General academic requirements, subject combinations, graduation requirements, and grading system.",
    category: "Academics",
    fileSize: "3.1 MB",
    pageCount: 15,
    lastUpdated: "January 15, 2026"
  },
  {
    id: 4,
    title: "JSS Requirements",
    icon: School,
    image: jssRequirementsImage,
    pdfFile: jssRequirementsPdf,
    description: "Junior Secondary School (JSS) specific requirements including subjects, assessments, and promotion criteria.",
    category: "JSS",
    fileSize: "2.2 MB",
    pageCount: 10,
    lastUpdated: "January 15, 2026"
  },
  // {
  //   id: 5,
  //   title: "Primary Level Requirements",
  //   icon: GraduationCap,
  //   image: primaryRequirementsImage,
  //   pdfFile: primaryRequirementsPdf,
  //   description: "Primary school requirements including curriculum overview, assessment criteria, and learning outcomes.",
  //   category: "Primary",
  //   fileSize: "2.7 MB",
  //   pageCount: 14,
  //   lastUpdated: "January 15, 2026"
  // }
];

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [downloadProgress, setDownloadProgress] = useState({});
  
  // Get unique categories
  const categories = ["All", ...new Set(news.map(item => item.category))];
  
  // Get featured news
  const featuredNews = news.filter(item => item.isFeatured);
  
  // Filter news based on category and search
  const filteredNews = news.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get upcoming events
  const upcomingEvents = news.filter(item => item.isNew).slice(0, 3);

  // Handle download with progress simulation
  const handleDownload = (doc, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Simulate download progress
    setDownloadProgress(prev => ({ ...prev, [doc.id]: 0 }));
    
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        const currentProgress = prev[doc.id] || 0;
        if (currentProgress >= 100) {
          clearInterval(interval);
          
          // Trigger actual download
          const link = document.createElement('a');
          link.href = doc.pdfFile;
          link.download = `${doc.title.toLowerCase().replace(/\s+/g, '-')}-2026.pdf`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          return { ...prev, [doc.id]: null };
        }
        return { ...prev, [doc.id]: currentProgress + 10 };
      });
    }, 200);
  };

  // Handle preview
  const handlePreview = (doc) => {
    setSelectedDocument(doc);
  };

  // Handle direct download without progress
  const handleDirectDownload = (doc, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const link = document.createElement('a');
    link.href = doc.pdfFile;
    link.download = `${doc.title.toLowerCase().replace(/\s+/g, '-')}-2026.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative overflow-hidden green-gradient section-padding text-primary-foreground px-4 py-12 md:py-20">
        {/* Decorative Elements - Hidden on mobile for performance */}
        <div className="hidden md:block absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4 animate-bounce-slow">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-gold-light" />
              <span className="text-xs md:text-sm font-medium">Stay Connected with AL-IHSAN</span>
            </div>
            
            <h1 className="font-heading text-3xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-6 animate-fade-in-up">
              News & Events
              <span className="block text-gold-light text-xl md:text-3xl lg:text-4xl mt-1 md:mt-2">2026</span>
            </h1>
            
            <p className="text-primary-foreground/90 text-sm md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 md:mb-8 animate-fade-in-up animation-delay-200 px-2">
              Your gateway to the latest updates, announcements, and celebrations at AL-IHSAN SCHOOLS
            </p>
            
            {/* Search Bar - Mobile Optimized */}
            <div className="relative max-w-md mx-auto animate-fade-in-up animation-delay-400 px-2">
              <input
                type="text"
                placeholder="Search news & events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 md:px-6 md:py-3 text-sm md:text-base rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gold-light transition-all"
              />
              <Bell className="absolute right-3 md:right-4 top-2.5 md:top-3 w-4 h-4 md:w-5 md:h-5 text-white/60" />
            </div>
          </div>
        </div>
        
        {/* Wave Divider - Hidden on very small screens */}
        <div className="absolute bottom-0 left-0 right-0 hidden sm:block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Document Uploads Section - ENHANCED WITH DOWNLOADABLE PDFs */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-1 h-6 md:h-8 bg-primary rounded-full"></div>
              <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                <FileDown className="inline-block w-5 h-5 md:w-6 md:h-6 mr-2 text-primary" />
                Downloadable Documents 2026
              </h2>
            </div>
            <span className="text-[10px] md:text-sm bg-primary/10 text-primary px-2 py-1 md:px-3 md:py-1 rounded-full">
              {documentUploads.length} PDFs Available
            </span>
          </div>
          
          <p className="text-xs md:text-sm text-muted-foreground mb-6 max-w-3xl">
            Access and download important school documents in PDF format. Click the download button to save directly or preview to view online.
          </p>
          
          {/* Document Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {documentUploads.map((doc) => (
              <div
                key={doc.id}
                className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:-translate-y-1"
              >
                {/* Document Image */}
                <div className="relative h-40 md:h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                  {doc.image ? (
                    <img 
                      src={doc.image} 
                      alt={doc.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <doc.icon className="w-12 h-12 md:w-16 md:h-16 text-primary/30" />
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-[10px] md:text-xs font-medium">
                      {doc.category}
                    </span>
                  </div>
                  
                  {/* Preview Button */}
                  <button 
                    onClick={() => handlePreview(doc)}
                    className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-colors"
                    title="Preview Document"
                  >
                    <Eye className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                </div>
                
                {/* Document Info */}
                <div className="p-4 md:p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-heading text-sm md:text-base font-semibold text-foreground">
                      {doc.title}
                    </h3>
                    <doc.icon className="w-4 h-4 md:w-5 md:h-5 text-primary/60" />
                  </div>
                  
                  <p className="text-xs md:text-sm text-muted-foreground mb-3 line-clamp-2">
                    {doc.description}
                  </p>
                  
                  {/* File Info */}
                  <div className="flex items-center gap-2 mb-3 text-[10px] md:text-xs text-muted-foreground">
                    <span className="bg-primary/5 px-2 py-1 rounded-full">{doc.fileSize}</span>
                    <span className="bg-primary/5 px-2 py-1 rounded-full">{doc.pageCount} pages</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] md:text-xs text-muted-foreground">
                      Updated: {doc.lastUpdated}
                    </span>
                    
                    <div className="flex items-center gap-2">
                      {/* Preview Button */}
                      <button
                        onClick={() => handlePreview(doc)}
                        className="inline-flex items-center gap-1 text-xs md:text-sm text-primary/70 hover:text-primary font-medium transition-colors"
                        title="Preview"
                      >
                        <Eye className="w-3 h-3 md:w-4 md:h-4" />
                      </button>
                      
                      {/* Download Button with Progress */}
                      <div className="relative">
                        {downloadProgress[doc.id] ? (
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-primary/20 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary transition-all duration-200"
                                style={{ width: `${downloadProgress[doc.id]}%` }}
                              />
                            </div>
                            <span className="text-[10px] text-primary">{downloadProgress[doc.id]}%</span>
                          </div>
                        ) : (
                          <button
                            onClick={(e) => handleDownload(doc, e)}
                            className="inline-flex items-center gap-1 text-xs md:text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                            title="Download PDF"
                          >
                            <Download className="w-3 h-3 md:w-4 md:h-4" />
                            Download
                          </button>
                        )}
                      </div>
                      
                      {/* Quick Download Icon */}
                      <button
                        onClick={(e) => handleDirectDownload(doc, e)}
                        className="text-primary/50 hover:text-primary transition-colors"
                        title="Quick Download"
                      >
                        <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* PDF Instructions */}
          <div className="mt-8 p-4 md:p-6 bg-primary/5 rounded-xl border border-dashed border-primary/30">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <FileDown className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">How to Add Your PDF Files</h4>
                <p className="text-xs md:text-sm text-muted-foreground mb-2">
                  To make documents downloadable, add your PDF files to the <code className="bg-background px-1 py-0.5 rounded">src/assets/pdfs/</code> folder and update the imports:
                </p>
                <div className="bg-background p-3 rounded-lg font-mono text-[10px] md:text-xs text-muted-foreground overflow-x-auto">
                  <p>import termDatesPdf from "@/assets/pdfs/term-dates-2026.pdf";</p>
                  <p>import feeStructurePdf from "@/assets/pdfs/fee-structure-2026.pdf";</p>
                  <p>import academicRequirementsPdf from "@/assets/pdfs/academic-requirements-2026.pdf";</p>
                  <p>import jssRequirementsPdf from "@/assets/pdfs/jss-requirements-2026.pdf";</p>
                  <p>import primaryRequirementsPdf from "@/assets/pdfs/primary-requirements-2026.pdf";</p>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-full">✓ PDFs will be downloadable</span>
                  <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-1 rounded-full">✓ Preview with Eye icon</span>
                  <span className="text-[10px] bg-purple-100 text-purple-700 px-2 py-1 rounded-full">✓ Download progress bar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image/PDF Preview Modal */}
      {selectedDocument && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDocument(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-card rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div>
                <h3 className="font-heading text-base md:text-lg font-semibold text-foreground">
                  {selectedDocument.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {selectedDocument.fileSize} • {selectedDocument.pageCount} pages • Updated {selectedDocument.lastUpdated}
                </p>
              </div>
              <button 
                onClick={() => setSelectedDocument(null)}
                className="p-1 hover:bg-primary/10 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal Content - PDF Preview or Image */}
            <div className="p-4 max-h-[60vh] overflow-y-auto">
              {selectedDocument.image ? (
                <img 
                  src={selectedDocument.image} 
                  alt={selectedDocument.title}
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <div className="w-full h-64 bg-primary/5 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <FileText className="w-12 h-12 text-primary/30 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Preview not available</p>
                    <p className="text-xs text-muted-foreground mt-1">Download the PDF to view</p>
                  </div>
                </div>
              )}
              
              {/* Document Description */}
              <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                <h4 className="text-sm font-semibold text-foreground mb-2">About this document</h4>
                <p className="text-xs text-muted-foreground">{selectedDocument.description}</p>
              </div>
            </div>
            
            {/* Modal Footer with Download Options */}
            <div className="p-4 border-t border-border flex flex-wrap gap-3 justify-between items-center">
              <div className="flex gap-2">
                <a
                  href={selectedDocument.pdfFile}
                  download={`${selectedDocument.title.toLowerCase().replace(/\s+/g, '-')}-2026.pdf`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
                <button
                  onClick={() => window.open(selectedDocument.pdfFile, '_blank')}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in New Tab
                </button>
              </div>
              <span className="text-xs text-muted-foreground">
                File size: {selectedDocument.fileSize}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Quick Stats Bar */}
      <section className="bg-card border-y border-border py-3 md:py-4">
        <div className="container mx-auto max-w-5xl px-3 md:px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            <div className="text-center">
              <div className="text-lg md:text-2xl font-bold text-primary">{news.filter(n => n.isNew).length}</div>
              <div className="text-[10px] md:text-xs text-muted-foreground truncate">New Updates</div>
            </div>
            <div className="text-center">
              <div className="text-lg md:text-2xl font-bold text-gold-dark">{featuredNews.length}</div>
              <div className="text-[10px] md:text-xs text-muted-foreground truncate">Featured Events</div>
            </div>
            <div className="text-center">
              <div className="text-lg md:text-2xl font-bold text-primary">{categories.length - 1}</div>
              <div className="text-[10px] md:text-xs text-muted-foreground truncate">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-lg md:text-2xl font-bold text-gold-dark">2026</div>
              <div className="text-[10px] md:text-xs text-muted-foreground truncate">Academic Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      {featuredNews.length > 0 && (
        <section className="py-8 md:py-12 bg-gradient-to-b from-background to-background/50">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex items-center justify-between mb-4 md:mb-8">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-1 h-6 md:h-8 bg-gold-dark rounded-full"></div>
                <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground">✨ Featured Highlights</h2>
              </div>
              <span className="text-[10px] md:text-sm text-gold-dark bg-gold/10 px-2 py-1 md:px-3 md:py-1 rounded-full">Ramadan Special</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {featuredNews.map((item, i) => (
                <div
                  key={`featured-${i}`}
                  className="group relative bg-gradient-to-br from-card to-card/50 rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 animate-scale-in"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {item.image && (
                    <div className="relative h-48 md:h-64 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                      
                      {/* Floating Badges */}
                      <div className="absolute top-3 left-3 md:top-4 md:left-4 flex gap-1.5 md:gap-2">
                        <span className="bg-gold-dark text-foreground px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-medium flex items-center gap-0.5 md:gap-1">
                          <Star className="w-2.5 h-2.5 md:w-3 md:h-3" /> Featured
                        </span>
                        <span className="bg-primary/90 text-primary-foreground px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-medium">
                          {item.category}
                        </span>
                      </div>
                      
                      <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
                        <div className="flex items-center gap-1.5 md:gap-2 text-white/80 text-[10px] md:text-sm mb-1 md:mb-2">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                          <span>{item.date}</span>
                        </div>
                        <h3 className="font-heading text-base md:text-xl font-bold text-white mb-1 md:mb-2 line-clamp-2">{item.title}</h3>
                        <p className="text-white/90 text-xs md:text-sm line-clamp-2 hidden md:block">{item.excerpt}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Highlights */}
                  {item.highlights && (
                    <div className="p-3 md:p-6 border-t border-border">
                      <h4 className="text-xs md:text-sm font-semibold text-foreground mb-2 md:mb-3 flex items-center gap-1 md:gap-2">
                        <Award className="w-3 h-3 md:w-4 md:h-4 text-gold-dark" />
                        Key Highlights
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 md:gap-2">
                        {item.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-1 text-[10px] md:text-xs text-muted-foreground">
                            <div className="w-1 h-1 bg-gold-dark rounded-full shrink-0"></div>
                            <span className="truncate">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content Section */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Mobile Category Filter Button */}
          <div className="lg:hidden mb-4">
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="w-full flex items-center justify-between bg-card p-3 rounded-lg border border-border"
            >
              <span className="font-medium text-foreground">Category: {selectedCategory}</span>
              <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${showMobileMenu ? 'rotate-90' : ''}`} />
            </button>
            
            {/* Mobile Categories Dropdown */}
            {showMobileMenu && (
              <div className="mt-2 bg-card rounded-lg border border-border p-2 shadow-lg">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowMobileMenu(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-primary/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Left Sidebar - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block lg:w-80 space-y-6">
              {/* Categories */}
              <div className="bg-card rounded-xl p-6 shadow-md border border-border">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-between group ${
                        selectedCategory === category
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-primary/10 text-foreground'
                      }`}
                    >
                      <span className="text-sm">{category}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                        selectedCategory === category ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'
                      }`} />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Upcoming Events Card */}
              <div className="bg-gradient-to-br from-gold/10 to-amber-50 rounded-xl p-6 shadow-md border border-gold/20">
                <h3 className="font-heading text-lg font-bold text-gold-dark mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Coming Soon
                </h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                        <event.icon className="w-4 h-4 text-foreground" />
                      </div>
                      <div>
                        <p className="text-xs text-gold-dark font-medium">{event.date}</p>
                        <p className="text-sm font-semibold text-foreground line-clamp-2">{event.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gold/20">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Next event in</span>
                    <span className="text-gold-dark font-bold">Coming soon</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - News Grid */}
            <div className="flex-1">
              {/* Category Header */}
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h2 className="font-heading text-lg md:text-2xl font-bold text-foreground">
                  {selectedCategory === "All" ? "All Updates" : selectedCategory}
                </h2>
                <span className="text-xs md:text-sm text-muted-foreground">{filteredNews.length} items</span>
              </div>
              
              {/* News Grid */}
              <div className="space-y-3 md:space-y-4">
                {filteredNews.map((item, i) => (
                  <article
                    key={i}
                    className={`group bg-card rounded-lg md:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 animate-fade-in-up border-l-3 md:border-l-4 ${
                      item.category.includes('Ramadan') 
                        ? 'border-gold-dark hover:border-gold' 
                        : item.category === 'Admissions'
                        ? 'border-blue-500 hover:border-blue-600'
                        : 'border-primary hover:border-primary/80'
                    }`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="p-3 md:p-6">
                      <div className="flex items-start gap-2 md:gap-4">
                        {/* Icon */}
                        <div className={`w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                          item.category.includes('Ramadan') 
                            ? 'gold-gradient' 
                            : 'green-gradient'
                        }`}>
                          <item.icon className="w-4 h-4 md:w-6 md:h-6 text-primary-foreground" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          {/* Meta Info */}
                          <div className="flex flex-wrap items-center gap-1 md:gap-2 mb-1 md:mb-2">
                            <span className={`text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded-full font-medium ${
                              item.category.includes('Ramadan') 
                                ? 'bg-gold/20 text-gold-dark' 
                                : item.category === 'Admissions'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-primary/10 text-primary'
                            }`}>
                              {item.category}
                            </span>
                            <span className="text-[10px] md:text-xs text-muted-foreground flex items-center gap-0.5 md:gap-1">
                              <Calendar className="w-2.5 h-2.5 md:w-3 md:h-3" />
                              <span className="truncate">{item.date}</span>
                            </span>
                            {item.isNew && (
                              <span className="text-[10px] md:text-xs bg-primary text-primary-foreground px-1.5 md:px-2 py-0.5 rounded-full flex items-center gap-0.5 md:gap-1">
                                <Sparkles className="w-2.5 h-2.5 md:w-3 md:h-3" /> New
                              </span>
                            )}
                          </div>
                          
                          {/* Title */}
                          <h3 className="font-heading text-xs md:text-base lg:text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                          
                          {/* Excerpt - Hidden on very small screens */}
                          <p className="hidden sm:block text-xs md:text-sm text-muted-foreground mb-2 line-clamp-2">{item.excerpt}</p>
                          
                          {/* Highlights Tags */}
                          {item.highlights && (
                            <div className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-3">
                              {item.highlights.slice(0, 1).map((h, idx) => (
                                <span key={idx} className="text-[8px] md:text-xs bg-background px-1.5 md:px-2 py-0.5 md:py-1 rounded-full text-muted-foreground truncate max-w-[100px] md:max-w-none">
                                  {h}
                                </span>
                              ))}
                              {item.highlights.length > 1 && (
                                <span className="text-[8px] md:text-xs text-primary">+{item.highlights.length - 1} more</span>
                              )}
                            </div>
                          )}
                          
                          {/* Action Buttons */}
                          <div className="flex items-center gap-2 md:gap-3">
                            <button className="text-[10px] md:text-xs text-primary font-medium hover:underline flex items-center gap-0.5 md:gap-1">
                              Read More <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
                            </button>
                            <button className="text-[10px] md:text-xs text-muted-foreground hover:text-primary transition-colors">
                              Share
                            </button>
                          </div>
                        </div>
                        
                        {/* Thumbnail - Hidden on mobile */}
                        {item.image && (
                          <div className="hidden md:block w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden shrink-0">
                            <img 
                              src={item.image} 
                              alt=""
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Load More Button */}
              {filteredNews.length > 4 && (
                <div className="text-center mt-6 md:mt-8">
                  <button className="px-4 md:px-6 py-2 md:py-3 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium text-xs md:text-sm">
                    Load More Updates
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-4 md:mb-8">
            <h2 className="font-heading text-lg md:text-2xl font-bold text-foreground mb-1 md:mb-2">Quick Information 2026</h2>
            <p className="text-xs md:text-sm text-muted-foreground px-2">Important dates and updates at a glance</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-3 md:p-5 rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-amber-200 flex items-center justify-center mb-2 md:mb-3">
                <Moon className="w-4 h-4 md:w-5 md:h-5 text-amber-700" />
              </div>
              <h4 className="font-semibold text-amber-800 mb-1 md:mb-2 text-sm md:text-base">Ramadan 1447 AH</h4>
              <div className="space-y-0.5 md:space-y-1 text-[10px] md:text-xs text-amber-600">
                <p className="truncate">📅 Begins: Feb 19, 2026</p>
                <p className="truncate">⏰ School: 8:00 AM - 1:00 PM</p>
                <p className="truncate">🎉 Eid break: Mar 20-22 2026</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 md:p-5 rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-200 flex items-center justify-center mb-2 md:mb-3">
                <FileText className="w-4 h-4 md:w-5 md:h-5 text-blue-700" />
              </div>
              <h4 className="font-semibold text-blue-800 mb-1 md:mb-2 text-sm md:text-base">Academic Dates</h4>
              <div className="space-y-0.5 md:space-y-1 text-[10px] md:text-xs text-blue-600">
                <p className="truncate">📚 School opens: Jan 5, 2026</p>
                <p className="truncate">📝 Midterm exams: Feb 21-25 2026</p>
                <p className="truncate">🏖️ Break: Feb 25 - Mar 1 2026</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-3 md:p-5 rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-emerald-200 flex items-center justify-center mb-2 md:mb-3">
                <Calendar className="w-4 h-4 md:w-5 md:h-5 text-emerald-700" />
              </div>
              <h4 className="font-semibold text-emerald-800 mb-1 md:mb-2 text-sm md:text-base">Upcoming Exams</h4>
              <div className="space-y-0.5 md:space-y-1 text-[10px] md:text-xs text-emerald-600">
                <p className="truncate">📖 Week 12: Madarasa Exams</p>
                <p className="truncate">📋 Week 13: End of Term</p>
                <p className="truncate">🎓 Closing ceremony TBA</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-3 md:p-5 rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-purple-200 flex items-center justify-center mb-2 md:mb-3">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-purple-700" />
              </div>
              <h4 className="font-semibold text-purple-800 mb-1 md:mb-2 text-sm md:text-base">Admissions 2026</h4>
              <div className="space-y-0.5 md:space-y-1 text-[10px] md:text-xs text-purple-600">
                <p className="truncate">🎯 Second batch open</p>
                <p className="truncate">⏰ Deadline: Feb 28</p>
                <p className="truncate">📌 Grades: 1, 4, 7, 9</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-8 md:py-12 bg-primary/5 border-y border-border">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <Heart className="w-8 h-8 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
          <h2 className="font-heading text-lg md:text-2xl font-bold text-foreground mb-1 md:mb-2">Stay Updated</h2>
          <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6 px-4">Subscribe to receive the latest news and events directly in your inbox</p>
          
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 max-w-md mx-auto px-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 md:px-4 py-2 md:py-3 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
            <button className="px-4 md:px-6 py-2 md:py-3 green-gradient text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-all">
              Subscribe
            </button>
          </div>
          
          <p className="text-[10px] md:text-xs text-muted-foreground mt-3 md:mt-4">
            By subscribing, you agree to receive updates from AL-IHSAN SCHOOLS
          </p>
        </div>
      </section>

      {/* Animation Styles */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Mobile optimizations */
        @media (max-width: 640px) {
          .section-padding {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .container {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default NewsPage;