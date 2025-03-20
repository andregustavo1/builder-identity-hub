
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
              Building excellence through innovation, quality, and integrity since 1998.
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
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-white transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Commercial Construction</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Industrial Projects</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Infrastructure Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Architectural Design</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Construction Management</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Renovation & Retrofitting</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-3">123 Construction Way</p>
              <p className="mb-3">Building Plaza, CA 90210</p>
              <p className="mb-3">
                <a href="tel:+15551234567" className="hover:text-white transition-colors">+1 (555) 123-4567</a>
              </p>
              <p className="mb-3">
                <a href="mailto:info@buildcorp.com" className="hover:text-white transition-colors">info@buildcorp.com</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-construction-800 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} BuildCorp. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-construction-accent text-construction-900 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-colors z-10"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
