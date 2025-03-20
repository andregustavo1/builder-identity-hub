
import { ArrowDownCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-construction-900"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-construction-950/95 to-construction-900/90"></div>
        <div className="bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070')] bg-cover bg-center bg-no-repeat absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-8">
          <div className={`transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1 border border-construction-accent text-construction-accent rounded-full text-sm font-medium tracking-wide mb-6">
              EXCELÊNCIA EM CONSTRUÇÃO
            </span>
          </div>
          
          <h1 
            className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-1000 delay-300 ${
              loaded ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            Construindo a <span className="text-construction-accent">Infraestrutura</span> do Amanhã Hoje
          </h1>
          
          <p 
            className={`text-xl md:text-2xl text-gray-300 mt-6 max-w-2xl transition-all duration-1000 delay-500 ${
              loaded ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            Especializamos em soluções inovadoras de construção que transformam visões ambiciosas em realidades duradouras.
          </p>
          
          <div 
            className={`mt-10 flex flex-wrap gap-4 transition-all duration-1000 delay-700 ${
              loaded ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            <a href="#contact" className="btn-accent">
              Entre em Contato
            </a>
            <a href="#services" className="px-6 py-3 border border-white/30 hover:border-white text-white rounded-md font-medium transition-all duration-300 hover:bg-white/10">
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <a 
        href="#services" 
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center transition-all duration-1000 delay-1000 ${
          loaded ? 'opacity-70 hover:opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-sm mb-2">Rolar para Baixo</span>
        <ArrowDownCircle className="animate-bounce w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;
