import React from 'react';
import { Leaf } from 'lucide-react';

const Role: React.FC = () => {
  return (
    <section id="role" className="py-12 sm:py-20 bg-gradient-to-b from-green-25 to-white relative overflow-hidden">
      {/* Natural background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-green-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-emerald-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-teal-100/25 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-green-200 rounded-full px-6 py-3 mb-6 shadow-lg">
            <Leaf size={20} className="text-green-600 mr-2" />
            <span className="text-green-700 font-medium">Expertise & Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            Michael Alois Wagner & Christine Schreiner auf der FIBO 2026/2027
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-green-100 relative overflow-hidden">
            {/* Organic background pattern */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-green-100/40 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-emerald-100/30 to-transparent rounded-full translate-y-18 -translate-x-18"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-6">
                  Fitness. Hospitality. Longevity.
                  <br />
                  Gemeinsam gestalten wir die Zukunft.
                </h3>
              </div>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Seit über 40 Jahren ist Michael Alois Wagner eine prägende Persönlichkeit in der Fitness- und Gesundheitsbranche. Mit seiner langjährigen Erfahrung, seiner visionären Sichtweise und einem breiten, belastbaren Netzwerk trägt er maßgeblich zur Weiterentwicklung von Fitness, Gesundheit und Longevity bei – immer im Sinne einer salutogenen Lebensweise.
                </p>
                
                <p>
                  Gemeinsam mit Christine Schreiner, Unternehmerin und Netzwerkerin mit Fokus auf gesunde Lebensführung, ganzheitliches Wohlbefinden und Kommunikation, bringt das Duo wertvollen Mehrwert für die neue Ausrichtung der FIBO 2026/2027:
                </p>
              </div>

              {/* Floating leaf decoration */}
              <div className="absolute top-8 left-8 opacity-20">
                <Leaf size={24} className="text-green-500" />
              </div>
              <div className="absolute bottom-8 right-8 opacity-20">
                <Leaf size={20} className="text-emerald-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Role;