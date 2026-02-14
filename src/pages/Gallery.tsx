import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const categories = ["All", "Campus", "Islamic Classes", "Events", "Activities"];

// School building photos - replace these URLs with your actual school images
const schoolBuildingPhotos = [
  {
    url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "School Main Building - Front View",
    description: "The iconic entrance of AL-IHSAN SCHOOLS welcoming students every morning"
  },
  {
    url: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "School Main Building - Aerial View",
    description: "A breathtaking aerial view of our campus showcasing the beautiful architecture"
  },
  {
    url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Administrative Block",
    description: "Where our dedicated staff work to ensure smooth school operations"
  }
];

// Islamic classes photos
const islamicClassesPhotos = [
  {
    url: "https://images.unsplash.com/photo-1599508709491-45fc4b822041?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Quran Recitation Class",
    description: "Students learning proper Quranic recitation with Tajweed"
  },
  {
    url: "https://images.unsplash.com/photo-1584470297333-af41e5cff293?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Tajweed Sessions",
    description: "Specialized instruction in the rules of Quranic pronunciation"
  },
  {
    url: "https://images.unsplash.com/photo-1609592786577-3a8d809a4b90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Islamic Studies",
    description: "Comprehensive Islamic education including Fiqh, Seerah, and Aqeedah"
  },
  {
    url: "https://images.unsplash.com/photo-1589825746036-2cd9f91d6d2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Hifdh Program",
    description: "Dedicated students memorizing the Holy Quran"
  }
];

// Campus photos
const campusPhotos = [
  {
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Science Laboratory",
    description: "Fully equipped modern science lab for hands-on learning"
  },
  {
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Library & Reading Room",
    description: "Quiet study space with an extensive collection of books"
  },
  {
    url: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Computer Lab",
    description: "Modern computer facilities for digital literacy"
  },
  {
    url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "School Playground",
    description: "Safe and spacious area for recreational activities"
  }
];

// Events photos
const eventsPhotos = [
  {
    url: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Annual Sports Day",
    description: "Students competing in various athletic events"
  },
  {
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Cultural Day Celebrations",
    description: "Students showcasing diverse cultural traditions"
  },
  {
    url: "https://images.unsplash.com/photo-1520857014576-2c222b2d4e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Graduation Ceremony",
    description: "Celebrating student achievements and milestones"
  },
  {
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Award Ceremony",
    description: "Recognizing excellence in academics and extracurricular activities"
  }
];

// Activities photos
const activitiesPhotos = [
  {
    url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Outdoor Activities",
    description: "Students enjoying outdoor educational activities"
  },
  {
    url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Classroom Learning",
    description: "Interactive classroom sessions with qualified teachers"
  },
  {
    url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Group Study",
    description: "Collaborative learning environment"
  },
  {
    url: "https://images.unsplash.com/photo-1503676260728-517c89092db0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Art Class",
    description: "Creative expression through various art forms"
  }
];

// Combine all photos with their categories
const galleryItems = [
  // School Building Photos (Campus category)
  ...schoolBuildingPhotos.map((photo, index) => ({
    title: photo.title,
    category: "Campus",
    color: "from-primary to-emerald-dark",
    image: photo.url,
    description: photo.description,
    id: `campus-building-${index}`
  })),
  
  // Islamic Classes Photos
  ...islamicClassesPhotos.map((photo, index) => ({
    title: photo.title,
    category: "Islamic Classes",
    color: "from-gold-dark to-gold",
    image: photo.url,
    description: photo.description,
    id: `islamic-${index}`
  })),
  
  // Campus Photos (other than building)
  ...campusPhotos.map((photo, index) => ({
    title: photo.title,
    category: "Campus",
    color: "from-primary to-emerald-dark",
    image: photo.url,
    description: photo.description,
    id: `campus-${index}`
  })),
  
  // Events Photos
  ...eventsPhotos.map((photo, index) => ({
    title: photo.title,
    category: "Events",
    color: "from-secondary to-gold",
    image: photo.url,
    description: photo.description,
    id: `event-${index}`
  })),
  
  // Activities Photos
  ...activitiesPhotos.map((photo, index) => ({
    title: photo.title,
    category: "Activities",
    color: "from-primary to-emerald-dark",
    image: photo.url,
    description: photo.description,
    id: `activity-${index}`
  }))
];

const GalleryPage = () => {
  const [active, setActive] = useState("All");
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryItems[0]>(null);
  
  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  const handleImageClick = (item: typeof galleryItems[0]) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
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
                key={item.id || i}
                onClick={() => handleImageClick(item)}
                className="aspect-[4/3] rounded-xl overflow-hidden relative group cursor-pointer animate-fade-in-up hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                
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
              <div className="relative h-[70vh]">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
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