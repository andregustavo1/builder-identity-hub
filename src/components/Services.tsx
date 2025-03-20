
import { 
  Building2, 
  Truck, 
  HardHat, 
  PencilRuler, 
  Wrench, 
  Factory 
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Services = () => {
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

  const services: Service[] = [
    {
      title: "Commercial Construction",
      description: "High-quality office buildings, retail spaces, and commercial facilities built to exceed expectations.",
      icon: <Building2 className="w-10 h-10 text-construction-accent" />
    },
    {
      title: "Industrial Projects",
      description: "Specialized construction for manufacturing facilities, warehouses, and industrial complexes.",
      icon: <Factory className="w-10 h-10 text-construction-accent" />
    },
    {
      title: "Infrastructure Development",
      description: "Roads, bridges, and public works projects that connect communities and drive progress.",
      icon: <Truck className="w-10 h-10 text-construction-accent" />
    },
    {
      title: "Architectural Design",
      description: "Innovative design solutions that blend aesthetics, functionality, and sustainability.",
      icon: <PencilRuler className="w-10 h-10 text-construction-accent" />
    },
    {
      title: "Construction Management",
      description: "Expert oversight of projects from concept to completion, ensuring quality, timeline, and budget adherence.",
      icon: <HardHat className="w-10 h-10 text-construction-accent" />
    },
    {
      title: "Renovation & Retrofitting",
      description: "Modernization and upgrades of existing structures to enhance functionality and efficiency.",
      icon: <Wrench className="w-10 h-10 text-construction-accent" />
    }
  ];

  return (
    <section id="services" className="bg-white py-20" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive construction solutions tailored to your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`glass-card ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-construction-800">{service.title}</h3>
              <p className="text-construction-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
