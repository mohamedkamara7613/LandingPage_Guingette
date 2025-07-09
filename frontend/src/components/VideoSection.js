import React, { useState } from 'react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vivez l'Expérience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez l'ambiance unique de nos soirées musicales au bord de l'eau
          </p>
        </div>
        
        <div className="relative">
          {/* Video container */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            {!isPlaying ? (
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg"
                  alt="Concert live à La Guinguette d'Illfurth"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button
                    onClick={handlePlayClick}
                    className="group relative w-24 h-24 md:w-32 md:h-32 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    
                    {/* Ripple effect */}
                    <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                  </button>
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Video info */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-4 border border-white/20">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Concert Live</h3>
                    <p className="text-sm md:text-base text-white/90">
                      Découvrez l'ambiance festive de nos soirées musicales
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative">
                <div className="w-full h-[400px] md:h-[500px] bg-gray-900 flex items-center justify-center rounded-3xl">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
                    <p className="text-lg">Chargement de la vidéo...</p>
                    <button
                      onClick={() => setIsPlaying(false)}
                      className="mt-4 px-6 py-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
                    >
                      Retour
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full blur-2xl opacity-30"></div>
          <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-20"></div>
        </div>
        
        {/* Features below video */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Concerts Live</h4>
            <p className="text-gray-300">Artistes locaux et groupes renommés</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Ambiance Unique</h4>
            <p className="text-gray-300">Soirées inoubliables au bord de l'eau</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Convivialité</h4>
            <p className="text-gray-300">Moments de partage et de joie</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;