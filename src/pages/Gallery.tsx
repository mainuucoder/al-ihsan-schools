import { useState } from "react";
import { X, ZoomIn, Image as ImageIcon } from "lucide-react";

const categories = ["All", "Campus", "Islamic Classes", "Events", "Activities"];

// Use placeholder images from Unsplash that definitely exist
const placeholderImages = {
  campus: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  islamic: "https://images.unsplash.com/photo-1599508709491-45fc4b822041?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  events: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  activities: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
};

// Gallery items with placeholder images (replace URLs with your local images when available)
const galleryItems = [
  // School Building Photos (Campus category)
  { 
    id: "campus-building-1",
    title: "School Main Building - Front View", 
    category: "Campus", 
    color: "from-primary to-emerald-dark",
    image: placeholderImages.campus,
    description: "The iconic entrance of AL-IHSAN SCHOOLS welcoming students every morning"
  },
  { 
    id: "campus-building-2",
    title: "School Main Building - Aerial View", 
    category: "Campus", 
    color: "from-primary to-emerald-dark",
    image: placeholderImages.campus,
    description: "A breathtaking aerial view of our campus showcasing the beautiful architecture"
  },
  { 
    id: "campus-building-3",
    title: "Administrative Block", 
    category: "Campus", 
    color: "from-primary to-emerald-dark",
    image: placeholderImages.campus,
    description: "Where our dedicated staff work to ensure smooth school operations"
  },
  
  // Islamic Classes Photos
  { 
    id: "islamic-1",
    title: "Quran Recitation Class", 
    category: "Islamic Classes", 
    color: "from-gold-dark to-gold",
    image: placeholderImages.islamic,
    description: "Students learning proper Quranic recitation with Tajweed"
  },
  { 
    id: "islamic-2",
    title: "Tajweed Sessions", 
    category: "Islamic Classes", 
    color: "from-gold-dark to-gold",
    image: placeholderImages.islamic,
    description: "Specialized instruction in the rules of Quranic pronunciation"
  },
  { 
    id: "islamic-3",
    title: "Islamic Studies", 
    category: "Islamic Classes", 
    color: "from-gold-dark to-gold",
    image: placeholderImages.islamic,
    description: "Comprehensive Islamic education including Fiqh, Seerah, and Aqeedah"
  },
  { 
    id: "islamic-4",
    title: "Hifdh Program", 
    category: "Islamic Classes", 
    color: "from-gold-dark to-gold",
    image: placeholderImages.islamic,
    description: "Dedicated students memorizing the Holy Quran"
  },
  
  // Campus Photos (other than building)
  { 
    id: "campus-1",
    title: "Science Laboratory", 
    category: "Campus", 
    color: "from-primary to-emerald-dark",
    image: placeholderImages.campus,
    description: "Fully equipped modern science lab for hands-on learning"
  },
  { 
    id: "campus-2",
    title: "Library & Reading Room", 
    category: "Campus", 
    color: "from-primary to-emerald-dark",
    image: placeholderImages.campus,
    description: "Quiet study space with an extensive collection of books"
  },
  { 
    id: "campus-3",
    title: "Computer Lab", 
    category: "Campus", 
    color: "from-primary to-emerald-dark",
    image: placeholderImages.campus,
    description: "Modern computer facilities for digital literacy"
  },
  { 
    id: "campus-4",
    title: "School Playground", 
    category: "Campus", 
    color: "from-primary to-emerald-dark",
    image: placeholderImages.campus,
    description: "Safe and spacious area for recreational activities"
  },
  
  // Events Photos
  { 
    id: "event-1",
    title: "Annual Sports Day", 
    category: "Events", 
    color: "from-secondary to-gold",
    image: placeholderImages.events,
    description: "Students competing in various athletic events"
  },
  { 
    id: "event-2",
    title: "Cultural Day Celebrations", 
    category: "Events", 
    color: "from-secondary to-gold",
    image: placeholderImages.events,
    description: "Students showcasing diverse cultural traditions"
  },
  { 
    id: "event-3",
    title: "Graduation Ceremony", 
    category: "Events", 
    color: "from-secondary to-gold",
    image: placeholderImages.events,
    description: "Celebrating student achievements and milestones"
  },
  { 
    id: "event-4",
    title: "Award Ceremony", 
    category: "Events", 
    color: "from-secondary to-gold",
    image: placeholderImages.events,
    description: "Recognizing excellence in academics and extracurricular activities"
  },
  
  // Activities Photos
  { 
    id: "activity-1",
    title: "Outdoor Activities", 
    category: "Activities", 
    color: "from-primary to-emerald-dark",
    image: placeholderImages.activities,
    description: "Students enjoying outdoor educational activities"
  },
  { 
    id: "activity-2",
    title: "Classroom Learning", 
    category: "Activities", 
    color: "from-primary to-emerald-dark",
    image: placeholderImages.activities,
    description: "Interactive classroom sessions with qualified teachers"
  },
  { 
    id: "activity-3",
    title: "Group Study", 
    category: "Activities", 
    color: "from-primary to-emerald-dark",
    image: placeholderImages.activities,
    description: "Collaborative learning environment"
  },
  { 
    id: "activity-4",
    title: "Art Class", 
    category: "Activities", 
    color: "from-primary to-emerald-dark",
    image: placeholderImages.activities,
    description: "Creative expression through various art forms"
  }
];

const GalleryPage = () => {
  const [active, setActive] = useState("All");
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryItems[0]>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  
  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  const handleImageClick = (item: typeof galleryItems[0]) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div>
      <section className="green-gradient section-padding text-primary-foreground text-center">
        <div className="container mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            A glimpse into life at AL-IHSAN SCHOOLS.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                onClick={() => handleImageClick(item)}
                className="aspect-[4/3] rounded-xl overflow-hidden relative group cursor-pointer animate-fade-in-up hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {/* Image with error handling */}
                {!imageErrors[item.id] ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={() => handleImageError(item.id)}
                  />
                ) : (
                  // Fallback gradient if image fails to load
                  <div className={`w-full h-full bg-gradient-to-br ${item.color} flex flex-col items-center justify-center p-4`}>
                    <ImageIcon className="w-12 h-12 text-white/50 mb-2" />
                    <span className="text-white text-center text-sm">{item.title}</span>
                  </div>
                )}
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Zoom Icon */}
                <div className="absolute top-2 right-2 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
                
                {/* Content overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${item.color} text-white mb-2 inline-block`}>
                    {item.category}
                  </span>
                  <h3 className="text-white font-heading font-semibold text-lg">{item.title}</h3>
                  <p className="text-white/80 text-sm mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Upload Instructions */}
          <div className="mt-12 p-6 bg-muted rounded-lg border border-border">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-primary" />
              Add Your Own Images
            </h3>
            <p className="text-muted-foreground mb-4">
              To add your actual school photos, create a <code className="bg-background px-2 py-1 rounded">src/assets/gallery/</code> folder and add your images with these names:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div className="bg-background p-2 rounded">school-front.jpg</div>
              <div className="bg-background p-2 rounded">school-aerial.jpg</div>
              <div className="bg-background p-2 rounded">school-admin.jpg</div>
              <div className="bg-background p-2 rounded">quran-class.jpg</div>
              <div className="bg-background p-2 rounded">tajweed-session.jpg</div>
              <div className="bg-background p-2 rounded">islamic-studies.jpg</div>
              <div className="bg-background p-2 rounded">hifdh-program.jpg</div>
              <div className="bg-background p-2 rounded">science-lab.jpg</div>
              <div className="bg-background p-2 rounded">library.jpg</div>
              <div className="bg-background p-2 rounded">computer-lab.jpg</div>
              <div className="bg-background p-2 rounded">playground.jpg</div>
              <div className="bg-background p-2 rounded">sports-day.jpg</div>
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              Then update the import statements at the top of this file.
            </p>
          </div>

          <p className="text-center text-muted-foreground mt-10 text-sm">
            More photos coming soon. Contact us to schedule a campus visit!
          </p>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gold transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="bg-card rounded-xl overflow-hidden">
              <div className="relative h-[70vh] bg-black/90">
                {!imageErrors[selectedImage.id] ? (
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${selectedImage.color} flex flex-col items-center justify-center`}>
                    <ImageIcon className="w-24 h-24 text-white/30 mb-4" />
                    <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                    <p className="text-white/60">Image failed to load</p>
                  </div>
                )}
              </div>
              
              <div className="p-6 bg-card border-t border-border">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs px-3 py-1.5 rounded-full bg-gradient-to-r ${selectedImage.color} text-white font-medium`}>
                    {selectedImage.category}
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{selectedImage.title}</h3>
                <p className="text-muted-foreground text-lg">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animation styles */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
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
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;