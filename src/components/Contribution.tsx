import React from 'react';
import { Network, Globe, Mic, Smartphone, Lightbulb, Leaf } from 'lucide-react';

const Contribution: React.FC = () => {
  const contributions = [
    {
      icon: Network,
      title: "Exklusive Kontakte",
      description: "Exklusive Kontakte zur Fitnessindustrie sowie zu Key Playern der Gesundheits- und Longevity-Szene",
      color: "green",
      bgPattern: "from-green-50 to-emerald-50"
    },
    {
      icon: Globe,
      title: "Internationales Netzwerk",
      description: "Internationales Netzwerk im Bereich Prävention, Health Innovation und Hospitality",
      color: "emerald",
      bgPattern: "from-emerald-50 to-teal-50"
    },
    {
      icon: Mic,
      title: "Vorträge & Keynotes",
      description: "Vorträge & Keynotes rund um Fitness & Longevity – basierend auf dem Prinzip der Salutogenese",
      color: "teal",
      bgPattern: "from-teal-50 to-green-50"
    },
    {
      icon: Smartphone,
      title: "Social-Media-Kommunikation",
      description: "Gezielte Social-Media-Kommunikation: Strategisch abgestimmte Postings und Beiträge in enger Zusammenarbeit mit dem FIBO Social Media Team",
      color: "green",
      bgPattern: "from-green-50 to-emerald-50"
    },
    {
      icon: Lightbulb,
      title: "Visionäre Präsentation",
      description: "Entwicklung und Vorstellung eines 'Fitness & Longevity Studios der Zukunft' als erlebbare Innovation auf der Messe",
      color: "emerald",
      bgPattern: "from-emerald-50 to-teal-50"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      emerald: "from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700",
      teal: "from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-green-25 to-white relative overflow-hidden">
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
            <span className="text-green-700 font-medium">Organisch gewachsene Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Ihr Beitrag zur FIBO 2026/2027
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fünf Kernbereiche, in denen wir die FIBO 2026/2027 zu einem außergewöhnlichen Erfolg machen
          </p>
        </div>

        {/* Optimized 5-item layout: 2-2-1 */}
        <div className="max-w-7xl mx-auto">
          {/* First row: 2 items */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {contributions.slice(0, 2).map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index} 
                  className={`bg-gradient-to-br ${item.bgPattern} backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group relative overflow-hidden`}
                >
                  {/* Organic decorative elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/15 rounded-full translate-y-8 -translate-x-8 group-hover:scale-110 transition-transform duration-500"></div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(item.color)} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg relative z-10`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed relative z-10">
                    {item.description}
                  </p>

                  {/* Subtle floating leaf */}
                  <div className="absolute top-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <Leaf size={16} className="text-green-500" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Second row: 2 items */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {contributions.slice(2, 4).map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index + 2} 
                  className={`bg-gradient-to-br ${item.bgPattern} backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group relative overflow-hidden`}
                >
                  {/* Organic decorative elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/15 rounded-full translate-y-8 -translate-x-8 group-hover:scale-110 transition-transform duration-500"></div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(item.color)} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg relative z-10`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed relative z-10">
                    {item.description}
                  </p>

                  {/* Subtle floating leaf */}
                  <div className="absolute top-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <Leaf size={16} className="text-green-500" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Third row: 1 centered item */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              {contributions.slice(4, 5).map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index + 4} 
                    className={`bg-gradient-to-br ${item.bgPattern} backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group relative overflow-hidden`}
                  >
                    {/* Organic decorative elements */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/15 rounded-full translate-y-8 -translate-x-8 group-hover:scale-110 transition-transform duration-500"></div>
                    
                    <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(item.color)} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg relative z-10`}>
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 relative z-10">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed relative z-10">
                      {item.description}
                    </p>

                    {/* Subtle floating leaf */}
                    <div className="absolute top-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <Leaf size={16} className="text-green-500" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contribution;