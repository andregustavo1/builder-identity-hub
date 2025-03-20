
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
      title: "Complexo de Escritórios Urbano",
      category: "Comercial",
      description: "Um edifício premium de 15 andares no distrito comercial do centro da cidade.",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
    },
    {
      title: "Projeto de Expansão de Rodovia",
      category: "Infraestrutura",
      description: "Expansão de rodovia principal adicionando 6 faixas ao longo de 24 quilômetros.",
      imageUrl: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?q=80&w=2065"
    },
    {
      title: "Residências à Beira-rio",
      category: "Residencial",
      description: "Complexo de condomínios de luxo com comodidades de última geração.",
      imageUrl: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070"
    },
    {
      title: "Fábrica de Energia Verde",
      category: "Industrial",
      description: "Instalação de manufatura sustentável projetada para impacto ambiental mínimo.",
      imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
    }
  ];

  return (
    <section id="projects" className="bg-construction-100 py-20" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Nossos Projetos</h2>
          <p className="section-subtitle mx-auto">
            Uma amostra de nossos melhores trabalhos e conquistas marcantes
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
                  Ver Detalhes do Projeto
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn-primary">
            Ver Todos os Projetos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
