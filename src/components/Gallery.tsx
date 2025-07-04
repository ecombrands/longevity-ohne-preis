import React, { useState } from 'react';
import { Camera, X, Leaf, TreePine } from 'lucide-react';

// Import the fitness space images (excluding team photo)
import fitnessSpace1 from '../assets/R8_FLUX_DEV_REALISM_00001_.jpg';
import fitnessSpace2 from '../assets/R8_FLUX_DEV_REALISM_00001_.webp';
import fitnessSpace3 from '../assets/R8_FLUX_DEV_REALISM_00003_.jpg';
import fitnessSpace4 from '../assets/R8_FLUX_DEV_REALISM_00003_.png';
import fitnessSpace5 from '../assets/R8_FLUX_DEV_REALISM_00003_+(1).jpg';
import fitnessSpace6 from '../assets/R8_FLUX_DEV_REALISM_00004_.jpg';
import fitnessSpace7 from '../assets/R8_FLUX_DEV_REALISM_00004_+(1).webp';
import fitnessSpace8 from '../assets/R8_FLUX_DEV_REALISM_00004_+(2).webp';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      src: fitnessSpace1,
      alt: 'Modernes Fitnessstudio mit natürlichen Mooswänden und Trainingsgeräten',
      title: 'Fitness & Natur vereint'
    },
    {
      id: 2,
      src: fitnessSpace2,
      alt: 'Wellness-Bereich mit Mooswänden und Cardio-Geräten',
      title: 'Natürliches Wellness-Design'
    },
    {
      id: 3,
      src: fitnessSpace3,
      alt: 'Fitnessstudio mit "WELLNESS" Schriftzug und grünen Mooswänden',
      title: 'Wellness-Philosophie'
    },
    {
      id: 4,
      src: fitnessSpace4,
      alt: 'Trainingsbereich mit Mooswänden und modernen Fitnessgeräten',
      title: 'Zukunft des Trainings'
    },
    {
      id: 5,
      src: fitnessSpace5,
      alt: 'Laufband-Bereich vor beeindruckender Mooswand',
      title: 'Cardio in der Natur'
    },
    {
      id: 6,
      src: fitnessSpace6,
      alt: 'Yoga- und Meditationsraum mit Mooswänden und natürlichem Licht',
      title: 'Meditation & Achtsamkeit'
    },
    {
      id: 7,
      src: fitnessSpace7,
      alt: 'Gruppenfitness-Bereich mit strukturierten Mooswänden',
      title: 'Gemeinschaftliches Training'
    },
    {
      id: 8,
      src: fitnessSpace8,
      alt: 'Yoga-Kurs vor natürlicher Mooswand mit Teilnehmern in Meditation',
      title: 'Ganzheitliches Wohlbefinden'
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-12 sm:py-20 bg-gradient-to-b from-green-25 to-white relative overflow-hidden">
      {/* Natural background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-16 w-56 h-56 bg-green-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-24 left-24 w-48 h-48 bg-emerald-100/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-teal-100/25 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-green-200 rounded-full px-6 py-3 mb-6 shadow-lg">
            <Camera size={20} className="text-green-600 mr-2" />
            <span className="text-green-700 font-medium">Visionäre Räume</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Das Fitness & Longevity Studio der Zukunft
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Erleben Sie unsere Vision für die Zukunft von Fitness, Wellness und Longevity – 
            wo Natur und Technologie in perfekter Harmonie verschmelzen
          </p>
        </div>

        {/* Elegant Gallery Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Hero Image - Clean without overlay */}
          <div className="mb-12">
            <div 
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-green-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => openModal(0)}
            >
              <div className="aspect-[4/3] lg:aspect-[21/9] overflow-hidden">
                <img 
                  src={images[0].src} 
                  alt={images[0].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Text content below image */}
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 flex items-center">
                  <Leaf size={24} className="text-green-600 mr-3" />
                  {images[0].title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">{images[0].alt}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Camera size={32} className="text-green-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Images - 3 medium images */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {images.slice(1, 4).map((image, index) => (
              <div 
                key={image.id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => openModal(index + 1)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                    <Leaf size={16} className="text-green-600 mr-2" />
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{image.alt}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Camera size={24} className="text-green-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tertiary Images - 2 larger images */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {images.slice(4, 6).map((image, index) => (
              <div 
                key={image.id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => openModal(index + 4)}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <Leaf size={18} className="text-green-600 mr-2" />
                    {image.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{image.alt}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Camera size={24} className="text-green-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Final Images - 2 smaller images */}
          <div className="grid md:grid-cols-2 gap-8">
            {images.slice(6, 8).map((image, index) => (
              <div 
                key={image.id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => openModal(index + 6)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                    <Leaf size={16} className="text-green-600 mr-2" />
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{image.alt}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Camera size={24} className="text-green-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto border border-green-100 shadow-xl relative overflow-hidden">
            {/* Organic background pattern */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-100/30 to-transparent rounded-full -translate-y-16 -translate-x-16"></div>
            <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-emerald-100/25 to-transparent rounded-full translate-y-14 translate-x-14"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <TreePine size={24} className="text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">
                  Unsere Vision für die FIBO 2026/2027
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Diese Räume verkörpern unsere Philosophie: Die Verbindung von natürlicher Schönheit mit 
                modernster Fitness-Technologie. Mooswände schaffen nicht nur eine beruhigende Atmosphäre, 
                sondern verbessern auch die Luftqualität und das Wohlbefinden der Trainierenden. 
                So entsteht ein ganzheitliches Erlebnis für Körper, Geist und Seele.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for enlarged images - Clean fullscreen view */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors z-10 text-white"
          >
            <X size={24} />
          </button>
          
          {/* Image */}
          <img 
            src={images[selectedImage].src} 
            alt={images[selectedImage].alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          {/* Navigation arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors text-white"
          >
            <span className="text-2xl">‹</span>
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors text-white"
          >
            <span className="text-2xl">›</span>
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;