import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Restaurant Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">
              La Guinguette d'Illfurth
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Une expérience culinaire authentique au bord de l'eau, 
              où tradition alsacienne et convivialité se rencontrent.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Au bord de l'eau, Illfurth, Alsace</span>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-4">Contact</h4>
            <div className="space-y-4">
              <a
                href="tel:+33612345678"
                className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>06 12 34 56 78</span>
              </a>
              
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm">Lun-Ven: 18h-23h</div>
                  <div className="text-sm">Sam-Dim: 12h-23h</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM15.156 7.987c.483 0 .875.392.875.875s-.392.875-.875.875-.875-.392-.875-.875.392-.875.875-.875zM12.017 9.495c1.4 0 2.544 1.144 2.544 2.544 0 1.4-1.144 2.544-2.544 2.544s-2.544-1.144-2.544-2.544c0-1.4 1.144-2.544 2.544-2.544zM12.017 7.895c-2.294 0-4.144 1.85-4.144 4.144 0 2.294 1.85 4.144 4.144 4.144 2.294 0 4.144-1.85 4.144-4.144 0-2.294-1.85-4.144-4.144-4.144zM18.156 6.853c0 .229-.012.439-.039.646H18.156c1.4 0 2.544 1.144 2.544 2.544v5.604c0 1.4-1.144 2.544-2.544 2.544H5.878c-1.4 0-2.544-1.144-2.544-2.544V9.043c0-1.4 1.144-2.544 2.544-2.544h.04c-.027-.207-.04-.417-.04-.646 0-1.4 1.144-2.544 2.544-2.544h5.604c1.4 0 2.544 1.144 2.544 2.544h.586z"/>
                </svg>
              </a>
            </div>
            
            <p className="text-gray-400 text-sm">
              Découvrez nos dernières actualités et événements
            </p>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 La Guinguette d'Illfurth. Tous droits réservés.
            </div>
            
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-emerald-400 transition-colors duration-200">
                Mentions légales
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors duration-200">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;