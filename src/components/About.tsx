
import { Clock, Trophy, Users, Building } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const About = () => {
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

  const stats: Stat[] = [
    {
      value: "25+",
      label: "Years Experience",
      icon: <Clock className="w-8 h-8 text-construction-accent" />
    },
    {
      value: "500+",
      label: "Projects Completed",
      icon: <Building className="w-8 h-8 text-construction-accent" />
    },
    {
      value: "150+",
      label: "Team Members",
      icon: <Users className="w-8 h-8 text-construction-accent" />
    },
    {
      value: "30+",
      label: "Industry Awards",
      icon: <Trophy className="w-8 h-8 text-construction-accent" />
    }
  ];

  return (
    <section id="about" className="bg-white py-20" ref={sectionRef}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 animate-slide-in' : 'opacity-0'
            }`}
          >
            <h2 className="section-title mb-6">About Our Company</h2>
            <p className="mb-6 text-construction-700">
              Founded in 1998, BuildCorp has established itself as a leader in the construction industry, 
              delivering excellence across commercial, residential, and infrastructure projects.
            </p>
            <p className="mb-6 text-construction-700">
              Our mission is to transform the built environment through innovation, quality craftsmanship, 
              and sustainable practices. We believe in building structures that stand the test of time 
              and create lasting value for our clients and communities.
            </p>
            <p className="mb-8 text-construction-700">
              With a team of highly skilled professionals and a commitment to utilizing cutting-edge 
              technology, we tackle projects of any scale with precision and expertise.
            </p>
            
            <div className="flex space-x-4">
              <a href="#team" className="btn-primary">
                Our Team
              </a>
              <a href="#contact" className="px-6 py-3 border border-construction-800 text-construction-800 rounded-md font-medium transition-all duration-300 hover:bg-construction-800 hover:text-white">
                Contact Us
              </a>
            </div>
          </div>
          
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="bg-construction-accent/10 rounded-lg p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                    style={{ animationDelay: `${index * 150 + 500}ms` }}
                  >
                    <div className="mb-3">{stat.icon}</div>
                    <div className="text-3xl font-bold text-construction-900 mb-1">{stat.value}</div>
                    <div className="text-construction-700">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -z-10 top-6 left-6 right-6 bottom-6 bg-construction-accent/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
