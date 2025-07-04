import React from 'react';
import { Leaf, Heart, TreePine } from 'lucide-react';
import teamPhoto from '../assets/Screenshot 2025-07-02 at 17.45.53.png';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-green-25">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 rounded-full px-6 py-3 mb-6">
            <TreePine size={20} className="text-green-600 mr-2" />
            <span className="text-green-700 font-medium">Verwurzelt in der Natur</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Ihre FIBO 2026/2027 Experten
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Erfahrung, Vision und ein starkes Netzwerk für die Zukunft von Fitness und Gesundheit
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Combined Team Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
            {/* Organic background pattern */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-green-100/40 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-emerald-100/30 to-transparent rounded-full translate-y-18 -translate-x-18"></div>
            
            <div className="relative z-10">
              {/* Team Names */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center text-green-600 font-semibold mb-6">
                  <Heart size={20} className="mr-2" />
                  <span>Das Experten-Duo</span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
                  Michael Alois Wagner & Christine Schreiner
                </h3>

                {/* Team Photo - Clean without overlay */}
                <div className="mb-8 relative">
                  <img 
                    src={teamPhoto} 
                    alt="Michael Alois Wagner & Christine Schreiner - FIBO 2026/2027 Experten"
                    className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl"
                  />
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-300 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-emerald-300 rounded-full animate-pulse delay-500"></div>
                </div>
              </div>

              {/* Team Information */}
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <div className="bg-green-50/80 rounded-2xl p-6 border border-green-100">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                    <TreePine size={18} className="mr-2" />
                    Michael Alois Wagner
                  </h4>
                  <p className="text-gray-700">
                    Seit über 40 Jahren eine prägende Persönlichkeit in der Fitness- und Gesundheitsbranche. 
                    Mit seiner langjährigen Erfahrung, visionären Sichtweise und einem breiten, belastbaren 
                    Netzwerk trägt er maßgeblich zur Weiterentwicklung von Fitness, Gesundheit und Longevity bei.
                  </p>
                </div>
                
                <div className="bg-emerald-50/80 rounded-2xl p-6 border border-emerald-100">
                  <h4 className="font-semibold text-emerald-800 mb-2 flex items-center">
                    <Leaf size={18} className="mr-2" />
                    Christine Schreiner
                  </h4>
                  <p className="text-gray-700">
                    Unternehmerin und Netzwerkerin mit Fokus auf gesunde Lebensführung, ganzheitliches 
                    Wohlbefinden und Kommunikation. Bringt internationale Expertise und strategische 
                    Kommunikationsfähigkeiten in die Partnerschaft ein.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 flex items-center justify-center text-green-600">
                <Heart size={20} className="mr-2" />
                <span className="font-semibold">Gemeinsam für eine gesündere Zukunft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;