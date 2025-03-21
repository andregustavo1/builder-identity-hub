
import { Building, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { FormEvent, useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    
    // Simulate a successful submission
    setFormStatus('success');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormStatus(null);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Building className="w-5 h-5 text-construction-accent" />,
      title: 'Nossa Sede',
      content: 'Morumbi, São Paulo - SP'
    },
    {
      icon: <Mail className="w-5 h-5 text-construction-accent" />,
      title: 'Email',
      content: 'enjoyconstrucoes@yahoo.com'
    },
    {
      icon: <Phone className="w-5 h-5 text-construction-accent" />,
      title: 'Telefone',
      content: '(11) 97475-2156'
    },
    {
      icon: <MapPin className="w-5 h-5 text-construction-accent" />,
      title: 'Horário de Funcionamento',
      content: 'Seg - Sex: 8:00 - 18:00'
    }
  ];

  return (
    <section id="contact" className="bg-white py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Contate-nos</h2>
          <p className="section-subtitle mx-auto">
            Entre em contato com nossa equipe para discutir seus projetos e necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 place-items-center">
          {/* <div className="bg-construction-100 rounded-lg p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-construction-800">Envie-nos uma Mensagem</h3>
            
            {formStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md animate-fade-in">
                Obrigado! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-md animate-fade-in">
                Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-construction-700 mb-1">Seu Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-construction-300 rounded-md focus:ring-2 focus:ring-construction-accent focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-construction-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-construction-300 rounded-md focus:ring-2 focus:ring-construction-accent focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-construction-700 mb-1">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-construction-300 rounded-md focus:ring-2 focus:ring-construction-accent focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-construction-700 mb-1">Assunto</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-construction-300 rounded-md focus:ring-2 focus:ring-construction-accent focus:border-transparent"
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="Construção">Construção ou Reforma</option>
                    <option value="Comércio">Equipamentos Pesados</option>
                    <option value="Projetos">Projetos e Aprovações</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-construction-700 mb-1">Sua Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-construction-300 rounded-md focus:ring-2 focus:ring-construction-accent focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full sm:w-auto flex items-center justify-center">
                Enviar Mensagem
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div> */}
          
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white shadow p-6 rounded-lg border border-construction-200 hover:border-construction-accent transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-construction-100 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-construction-800 mb-1">{item.title}</h4>
                      <p className="text-construction-700">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-construction-900 text-white p-8 rounded-lg animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">Pronto para Iniciar seu Projeto?</h3>
              <p className="mb-6">
                Nossa equipe de especialistas está pronta para ajudar a transformar sua visão em realidade. Contate-nos hoje para uma consulta.
              </p>
              <div className="flex space-x-4">
                <a href="tel:+5511974752156" className="btn-accent">
                  Ligue Agora
                </a>
                <a href="mailto:enjoyconstrucoes@yahoo.com" className="px-6 py-3 border border-white text-white rounded-md font-medium transition-all duration-300 hover:bg-white hover:text-construction-900">
                  Envie um Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
