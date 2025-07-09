import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    {
      src: "https://images.unsplash.com/photo-1738877649930-86820910fab3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwdGVycmFjZSUyMHJpdmVyfGVufDB8fHx8MTc1MjEwMTA3Nnww&ixlib=rb-4.1.0&q=85",
      alt: "Vue sur la rivière depuis la terrasse",
      title: "Terrasse au bord de l'eau"
    },
    {
      src: "https://images.unsplash.com/photo-1621327017866-6fb07e6c96ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBmb29kJTIwZGluaW5nfGVufDB8fHx8MTc1MjEwMTA4MXww&ixlib=rb-4.1.0&q=85",
      alt: "Plat gastronomique français",
      title: "Cuisine raffinée"
    },
    {
      src: "https://images.pexels.com/photos/32924919/pexels-photo-32924919.jpeg",
      alt: "Boissons et mets français",
      title: "Saveurs authentiques"
    },
    {
      src: "https://images.unsplash.com/photo-1629321406535-a3d20c6bffed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxndWluZ3VldHRlJTIwZnJhbmNlfGVufDB8fHx8MTc1MjEwMTA3MHww&ixlib=rb-4.1.0&q=85",
      alt: "Ambiance conviviale à la guinguette",
      title: "Moments de convivialité"
    },
    {
      src: "https://images.unsplash.com/photo-1643312108386-54be21c5ea78?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxsaXZlJTIwbXVzaWMlMjByZXN0YXVyYW50JTIwZXZlbmluZ3xlbnwwfHx8fDE3NTIxMDEwODd8MA&ixlib=rb-4.1.0&q=85",
      alt: "Soirée musicale au restaurant",
      title: "Ambiance nocturne"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Découvrez Notre Univers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Plongez dans l'atmosphère unique de La Guinguette d'Illfurth à travers ces images
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.alt}</p>
                </div>
                
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 backdrop-blur-sm bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-4 shadow-2xl">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto rounded-2xl"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                  <p className="text-white/80">{selectedImage.alt}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;