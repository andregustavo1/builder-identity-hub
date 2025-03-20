
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
      title: "Construção Comercial",
      description: "Edifícios de escritórios, espaços comerciais e instalações de alta qualidade que superam expectativas.",
      icon: <Building2 className="w-10 h-10 text-construction-accent" />
    },
    {
      title: "Projetos Industriais",
      description: "Construção especializada para instalações de manufatura, armazéns e complexos industriais.",
      icon: <Factory className="w-10 h-10 text-construction-accent" />
    },
    {
      title: "Desenvolvimento de Infraestrutura",
      description: "Estradas, pontes e obras públicas que conectam comunidades e impulsionam o progresso.",
      icon: <Truck className="w-10 h-10 text-construction-accent" />
    },
    {
      title: "Design Arquitetônico",
      description: "Soluções de design inovadoras que combinam estética, funcionalidade e sustentabilidade.",
      icon: <PencilRuler className="w-10 h-10 text-construction-accent" />
    },
    {
      title: "Gestão de Construção",
      description: "Supervisão especializada de projetos do conceito à conclusão, garantindo qualidade, cronograma e orçamento.",
      icon: <HardHat className="w-10 h-10 text-construction-accent" />
    },
    {
      title: "Renovação e Modernização",
      description: "Modernização e atualizações de estruturas existentes para melhorar funcionalidade e eficiência.",
      icon: <Wrench className="w-10 h-10 text-construction-accent" />
    }
  ];

  return (
    <section id="services" className="bg-white py-20" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle mx-auto">
            Soluções completas de construção adaptadas às suas necessidades específicas
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
