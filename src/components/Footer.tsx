import React from 'react';
import { Heart, Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12 relative overflow-hidden">
      {/* Natural background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Content Section */}
          <div className="mb-8">
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto text-lg">
              Fitness, Hospitality und Longevity – gemeinsam gestalten wir die Zukunft 
              der Gesundheitsbranche auf der FIBO 2026/2027 mit natürlicher Authentizität.
            </p>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex items-center justify-center text-gray-300">
              <span>© {currentYear} FIBO 2026/2027 Experten. Erstellt mit</span>
              <Heart size={16} className="mx-2 text-green-400" />
              <span>für eine gesündere, natürlichere Zukunft.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;