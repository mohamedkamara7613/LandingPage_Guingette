import React from 'react';

const Reservation = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Réservez Votre Table
          </h2>
          
          <div className="w-24 h-1 bg-white/40 mx-auto rounded-full mb-8"></div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Vivez une expérience culinaire exceptionnelle au bord de l'eau. 
            Contactez-nous dès maintenant pour réserver votre table.
          </p>
          
          {/* Call to action */}
          <div className="space-y-6">
            <a
              href="tel:+33612345678"
              className="group inline-flex items-center justify-center gap-4 px-12 py-6 bg-white hover:bg-gray-100 text-gray-800 text-xl font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span>06 12 34 56 78</span>
            </a>
            
            <p className="text-white/70 text-sm">
              Appelez-nous directement pour une réservation rapide et personnalisée
            </p>
          </div>
          
          {/* Opening hours */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Horaires d'ouverture</h3>
            <div className="grid md:grid-cols-2 gap-6 text-white/90">
              <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-4">
                <h4 className="font-semibold mb-2">Lundi - Vendredi</h4>
                <p>18h00 - 23h00</p>
              </div>
              <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-4">
                <h4 className="font-semibold mb-2">Samedi - Dimanche</h4>
                <p>12h00 - 23h00</p>
              </div>
            </div>
          </div>
          
          {/* Location info */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex items-center justify-center gap-2 text-white/90">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Au bord de l'eau, Illfurth, Alsace</span>
            </div>
          </div>
        </div>
        
        {/* Floating decorations */}
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default Reservation;