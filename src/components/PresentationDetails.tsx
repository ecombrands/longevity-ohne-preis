import React from 'react';
import { CheckCircle, Leaf, TreePine } from 'lucide-react';

const PresentationDetails: React.FC = () => {
  const services = [
    "Monatliche Strategie-Calls",
    "Teilnahme an wichtigen Meetings", 
    "Social-Media-Impulse und Strategien",
    "Netzwerkaktivierung",
    "Akquise von Hotels für FIBO (Stand oder Kooperation)",
    "Regelmäßige redaktionelle Beiträge",
    "Keynote-Vorbereitung",
    "Planung & Umsetzung des 'Fitness & Longevity Studio der Zukunft'",
    "Intensive Messebegleitung"
  ];

  const uniqueSellingPoints = [
    "Über 40 Jahre Erfahrung von Michael Alois Wagner sind ein USP – besonders im B2B-Bereich mit Entscheidungsträgern.",
    "Christine Schreiner bringt Strahlkraft, Kommunikationsexpertise & internationales Netzwerk ein.",
    "Sichtbarkeit & Vertrauenswürdigkeit in der Zielgruppe (Fitness, Hospitality, Longevity).",
    "Beitrag zur Positionierung der FIBO als Plattform für Zukunftsthemen."
  ];

  return (
    <section id="details" className="py-12 sm:py-20 bg-gradient-to-b from-white to-green-25 relative overflow-hidden">
      {/* Natural background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-48 h-48 bg-green-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-64 h-64 bg-emerald-100/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-green-200 rounded-full px-6 py-3 mb-6 shadow-lg">
            <TreePine size={20} className="text-green-600 mr-2" />
            <span className="text-green-700 font-medium">Professionelle Partnerschaft</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Zusammenarbeit & Konditionen
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          {/* Single Package */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-green-200 relative overflow-hidden">
            {/* Organic background pattern */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-green-100/50 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-emerald-100/40 to-transparent rounded-full translate-y-18 -translate-x-18"></div>
            
            <div className="text-center mb-8 relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                FIBO 2026/2027 Partnerschaft
              </h3>

              <div className="mb-8">
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">3.000€</span>
                  <span className="text-xl text-gray-600 ml-3">/ Monat</span>
                </div>
                <p className="text-lg text-gray-600">Monatliches Beraterhonorar</p>
              </div>
            </div>

            <div className="relative z-10">
              <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center flex items-center justify-center">
                <Leaf size={20} className="mr-2 text-green-600" />
                Leistungsumfang
              </h4>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <CheckCircle size={12} className="text-white" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{service}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <p className="text-gray-700 leading-relaxed text-center">
                  <strong>Zusätzlich:</strong> Strategische Mitentwicklung des FIBO-Konzepts 2026/2027, 
                  Speaker-Akquise, PR- & Kommunikationsarbeit, Medienauftritte und optional Co-Moderation auf der Messe
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Unique Selling Points */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-green-100 relative overflow-hidden">
            {/* Organic background pattern */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-green-100/40 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-emerald-100/30 to-transparent rounded-full translate-y-18 -translate-x-18"></div>
            
            <div className="text-center mb-8 relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
                <CheckCircle size={28} className="text-green-600 mr-3" />
                Unsere Stärken
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              {uniqueSellingPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            {/* Floating leaf decorations */}
            <div className="absolute top-8 left-8 opacity-20">
              <Leaf size={24} className="text-green-500" />
            </div>
            <div className="absolute bottom-8 right-8 opacity-20">
              <Leaf size={20} className="text-emerald-500" />
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-green-100/80 to-emerald-100/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-4xl mx-auto border border-white/50 relative overflow-hidden">
            {/* Organic background pattern */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 -translate-x-16"></div>
            <div className="absolute bottom-0 right-0 w-28 h-28 bg-white/15 rounded-full translate-y-14 translate-x-14"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <TreePine size={24} className="text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">
                  Transformation leben, Zukunft gestalten
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Michael Alois Wagner und Christine Schreiner stehen für gelebte Transformation und verbinden Tradition mit Innovation – für eine gesündere, bewusstere Zukunft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationDetails;