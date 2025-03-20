
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-construction-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="#" className="text-white font-display font-bold text-2xl mb-6 inline-block">
              <span className="text-construction-accent">BUILD</span>CORP
            </a>
            <p className="text-gray-400 mb-6">
              Construindo excelência através de inovação, qualidade e integridade desde 1998.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-construction-800 flex items-center justify-center text-white hover:bg-construction-accent transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-construction-800 flex items-center justify-center text-white hover:bg-construction-accent transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-construction-800 flex items-center justify-center text-white hover:bg-construction-accent transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-construction-800 flex items-center justify-center text-white hover:bg-construction-accent transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projetos</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-white transition-colors">Nossa Equipe</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Construção Comercial</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Projetos Industriais</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Desenvolvimento de Infraestrutura</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Design Arquitetônico</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Gestão de Construção</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Renovação e Modernização</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contate-nos</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-3">Rua da Construção, 123</p>
              <p className="mb-3">Praça do Edifício, SP 01000-000</p>
              <p className="mb-3">
                <a href="tel:+551143215678" className="hover:text-white transition-colors">+55 (11) 4321-5678</a>
              </p>
              <p className="mb-3">
                <a href="mailto:contato@buildcorp.com" className="hover:text-white transition-colors">contato@buildcorp.com</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-construction-800 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} BuildCorp. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
            <a href="#" className="hover:text-white transition-colors">Carreiras</a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-construction-accent text-construction-900 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-colors z-10"
        aria-label="Rolar para o topo"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
