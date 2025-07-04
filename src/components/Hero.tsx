import React from 'react';
import { ArrowDown } from 'lucide-react';
import heroImage from '../assets/R8_FLUX_DEV_REALISM_00001_.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Natural Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-25 to-teal-50"></div>
      
      {/* Organic Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-teal-200/25 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto">
          {/* Natural Badge - Single line on all devices */}
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-green-200 rounded-full px-6 py-3 mb-12 shadow-lg">
            <span className="text-green-700 font-medium text-sm sm:text-base lg:text-lg whitespace-nowrap">
              Natürlich. Ganzheitlich. Nachhaltig.
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">Fitness.</span>{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Hospitality.</span>{' '}
            <span className="bg-gradient-to-r from-teal-600 to-green-700 bg-clip-text text-transparent">Longevity.</span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-10 font-light leading-relaxed">
            Gemeinsam gestalten wir die Zukunft.
          </p>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-500 mb-16 max-w-4xl mx-auto leading-relaxed">
            Michael Alois Wagner & Christine Schreiner auf der FIBO 2026/2027 – 
            <br className="hidden sm:block" />
            Wo Tradition auf Innovation trifft
          </p>
          
          {/* Hero Image - Clean without any overlay */}
          <div className="mb-16">
            <div className="w-full h-80 sm:h-96 lg:h-[32rem] xl:h-[40rem] rounded-3xl shadow-2xl mx-auto max-w-7xl border border-green-200/50 backdrop-blur-sm overflow-hidden">
              <img 
                src={heroImage} 
                alt="Das Fitness & Longevity Studio der Zukunft"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-green-500" />
      </div>
    </section>
  );
};

export default Hero;