import React from 'react';
import { SprayCan } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-20 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
            <div className="flex items-center mb-6">
                <div className="border border-white p-1.5 mr-3">
                    <SprayCan className="text-white w-5 h-5" />
                </div>
                <span className="text-lg font-display font-bold text-white uppercase tracking-widest">
                Lackierer<span className="text-gray-500">Stellen</span>
                </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-serif italic">
              Exzellenz in der Vermittlung von Fachkräften für Oberflächentechnik.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest mb-6 text-sm">Für Bewerber</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Alle Stellenangebote</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gehaltsvergleich</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ausbildung</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest mb-6 text-sm">Für Arbeitgeber</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Anzeige schalten</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preise & Pakete</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner werden</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest mb-6 text-sm">Rechtliches</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} LackiererStellen.de</span>
          <span className="mt-2 md:mt-0">Made in Germany</span>
        </div>
      </div>
    </footer>
  );
};