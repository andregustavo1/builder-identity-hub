
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-white font-display font-bold text-2xl">
              <span className="text-construction-accent">Enjoy</span> Construções
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks className="text-sm font-medium" />
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-construction-900"
            >
              <span className="sr-only">Abrir menu principal</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden ${
          mobileMenuOpen ? 'block' : 'hidden'
        } bg-white shadow-xl animate-fade-in`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLinks className="block px-3 py-2 text-base font-medium" mobile onClick={() => setMobileMenuOpen(false)} />
        </div>
      </div>
    </nav>
  );
};

interface NavLinksProps {
  className?: string;
  mobile?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ className = "", mobile = false, onClick }: NavLinksProps) => {
  const links = [
    { name: 'Início', href: '#hero' },
    { name: 'Serviços', href: '#services' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Sobre', href: '#about' },
    { name: 'Equipe', href: '#team' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={onClick}
          className={`${className} ${
            mobile 
              ? 'text-construction-900 hover:bg-construction-100 hover:text-construction-900 rounded-md' 
              : 'text-construction-900 hover:text-construction-accent transition-colors'
          }`}
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Navbar;
