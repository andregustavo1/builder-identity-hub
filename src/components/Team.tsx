
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface TeamMember {
  name: string;
  position: string;
  imageUrl: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const Team = () => {
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

  const teamMembers: TeamMember[] = [
    {
      name: "Robert Johnson",
      position: "Chief Executive Officer",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:robert@buildcorp.com"
      }
    },
    {
      name: "Sarah Chen",
      position: "Chief Operations Officer",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:sarah@buildcorp.com"
      }
    },
    {
      name: "Michael Torres",
      position: "Lead Architect",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:michael@buildcorp.com"
      }
    },
    {
      name: "Emily Wilson",
      position: "Project Manager",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:emily@buildcorp.com"
      }
    }
  ];

  return (
    <section id="team" className="bg-construction-100 py-20" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Leadership Team</h2>
          <p className="section-subtitle mx-auto">
            Meet the experts behind our successful projects and company vision
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden group h-64">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-construction-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex space-x-3 justify-center">
                    {member.socialLinks.linkedin && (
                      <a 
                        href={member.socialLinks.linkedin} 
                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-construction-800 hover:bg-construction-accent hover:text-white transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a 
                        href={member.socialLinks.twitter} 
                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-construction-800 hover:bg-construction-accent hover:text-white transition-colors"
                      >
                        <Twitter size={16} />
                      </a>
                    )}
                    {member.socialLinks.email && (
                      <a 
                        href={member.socialLinks.email}
                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-construction-800 hover:bg-construction-accent hover:text-white transition-colors"
                      >
                        <Mail size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-construction-800 mb-1">{member.name}</h3>
                <p className="text-construction-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
