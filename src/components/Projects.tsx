
import { useEffect, useRef, useState } from 'react';

interface Project {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const projects: Project[] = [
    {
      title: "Urban Office Complex",
      category: "Commercial",
      description: "A 15-story premium office space in the downtown business district.",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
    },
    {
      title: "Highway Expansion Project",
      category: "Infrastructure",
      description: "Major highway expansion adding 6 lanes over 24 miles.",
      imageUrl: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?q=80&w=2065"
    },
    {
      title: "Riverfront Residences",
      category: "Residential",
      description: "Luxury condominium complex with state-of-the-art amenities.",
      imageUrl: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070"
    },
    {
      title: "Green Energy Manufacturing Plant",
      category: "Industrial",
      description: "Sustainable manufacturing facility designed for minimal environmental impact.",
      imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
    }
  ];

  return (
    <section id="projects" className="bg-construction-100 py-20" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle mx-auto">
            A showcase of our finest work and landmark achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group overflow-hidden rounded-lg shadow-lg bg-white transition-all duration-500 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-construction-accent text-construction-900 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-construction-800">{project.title}</h3>
                <p className="text-construction-700">{project.description}</p>
                <a 
                  href="#" 
                  className="inline-block mt-4 text-construction-accent font-medium hover:underline"
                >
                  View Project Details
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn-primary">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
