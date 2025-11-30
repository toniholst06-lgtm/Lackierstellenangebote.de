import React from 'react';
import { UserType } from '../types';
import { ArrowRight, Check, Search, Briefcase, Star, PenTool, Shield, TrendingUp, Users, SprayCan, Layers, Wrench, Droplets } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: UserType) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="relative bg-deep-black text-gray-300 font-sans w-full">
      
      {/* Hero Section */}
      <div className="relative h-[85vh] w-full overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-deep-black via-deep-black/80 to-transparent"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-deep-black via-transparent to-transparent"></div>
        {/* Bild: Echter Lackierer in der Kabine mit Vollschutz und Pistole */}
        <img 
          src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=2000&auto=format&fit=crop" 
          alt="Professioneller Fahrzeuglackierer in Kabine" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
               <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse"></span> Die Nr. 1 für Lackierer
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white mb-6 uppercase leading-none tracking-tight">
              Präzision <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-red-600">trifft Leidenschaft</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-300 font-light max-w-2xl leading-relaxed">
              Jobbörse für Fahrzeuglackierer, Vorbereiter und Smart-Repair-Experten. Finde Arbeitgeber, die dein Handwerk schätzen.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate(UserType.SEEKER)}
                className="px-8 py-4 bg-accent-primary text-white font-display font-bold text-lg uppercase tracking-wider hover:bg-accent-hover transition-colors rounded-lg shadow-lg shadow-accent-primary/20"
              >
                Jobs finden
              </button>

              <button
                onClick={() => onNavigate(UserType.EMPLOYER)}
                className="px-8 py-4 bg-gray-800/50 border border-gray-600 backdrop-blur-sm text-white font-display font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-all rounded-lg"
              >
                Stelle schalten
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Stats Section */}
      <div className="bg-gray-surface border-y border-border-dark relative z-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-border-dark">
                <div>
                    <span className="block text-4xl font-display font-black text-white mb-1">500+</span>
                    <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Offene Stellen</span>
                </div>
                <div>
                    <span className="block text-4xl font-display font-black text-white mb-1">1.2k</span>
                    <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Lackierereien</span>
                </div>
                <div>
                    <span className="block text-4xl font-display font-black text-white mb-1">Top</span>
                    <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Gehälter</span>
                </div>
                <div>
                    <span className="block text-4xl font-display font-black text-white mb-1">24h</span>
                    <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Express Bewerbung</span>
                </div>
            </div>
        </div>
      </div>

      {/* Real Workshop Grid Section */}
      <div className="py-24 bg-deep-black">
         <div className="max-w-7xl mx-auto px-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase text-center">
                Dein <span className="text-accent-primary">Handwerk</span> im Fokus
            </h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-auto md:h-[500px] w-full border-t border-b border-border-dark">
            {/* Item 1 - Werkstatt Situation / Polieren */}
            <div className="relative group overflow-hidden h-[300px] md:h-full cursor-pointer border-r border-border-dark bg-gray-surface">
            <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2000&auto=format&fit=crop" alt="Fahrzeugaufbereitung Polieren" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-100 flex items-end p-8">
                <div>
                    <h3 className="text-2xl font-display font-bold text-white uppercase mb-1 drop-shadow-md">Finish & Finish</h3>
                    <p className="text-gray-300 text-sm font-medium">Perfekte Oberflächen durch Politur</p>
                </div>
            </div>
            </div>
            {/* Item 2 - Auto fertig lackiert / Glanz */}
            <div className="relative group overflow-hidden h-[300px] md:h-full cursor-pointer border-r border-border-dark bg-gray-surface">
            <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2000&auto=format&fit=crop" alt="Fertig lackierter Sportwagen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-100 flex items-end p-8">
                <div>
                    <h3 className="text-2xl font-display font-bold text-white uppercase mb-1 drop-shadow-md">Karosserie</h3>
                    <p className="text-gray-300 text-sm font-medium">Hochglanz und Speziallacke</p>
                </div>
            </div>
            </div>
            {/* Item 3 - Farbmischbank */}
            <div className="relative group overflow-hidden h-[300px] md:h-full cursor-pointer border-r border-border-dark bg-gray-surface">
            <img src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2000&auto=format&fit=crop" alt="Farbmischbank Lackdosen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-100 flex items-end p-8">
                <div>
                    <h3 className="text-2xl font-display font-bold text-white uppercase mb-1 drop-shadow-md">Coloristik</h3>
                    <p className="text-gray-300 text-sm font-medium">Präzises Anmischen der Töne</p>
                </div>
            </div>
            </div>
            {/* Item 4 - Close Up Pistole */}
            <div className="relative group overflow-hidden h-[300px] md:h-full cursor-pointer bg-gray-surface">
            <img src="https://images.unsplash.com/photo-1575024357670-2b5164f470c3?q=80&w=2000&auto=format&fit=crop" alt="Lackierpistole Nahaufnahme" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-100 flex items-end p-8">
                <div>
                    <h3 className="text-2xl font-display font-bold text-white uppercase mb-1 drop-shadow-md">Applikation</h3>
                    <p className="text-gray-300 text-sm font-medium">SATA, Devilbiss & Co.</p>
                </div>
            </div>
            </div>
        </div>
      </div>

      {/* Massive Content Section */}
      <div className="bg-gray-surface py-24 border-t border-border-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-20">
            <span className="text-accent-primary font-bold uppercase tracking-widest mb-2 block">Karriere in der Werkstatt</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-8 uppercase leading-tight">
              Echtes Handwerk <br />zählt wieder
            </h2>
            <div className="w-24 h-2 bg-accent-primary mb-12"></div>
            
            <article className="prose prose-invert prose-lg max-w-none text-gray-300 font-light">
              <p className="lead text-2xl text-white font-normal mb-10 border-l-4 border-accent-primary pl-6 py-2">
                Vom Abkleben bis zum Klarlack: Deine Arbeit ist das Erste, was der Kunde sieht. Wir bringen dich mit Betrieben zusammen, die saubere Arbeit und Zuverlässigkeit honorieren.
              </p>

              <div className="mb-16 bg-deep-black p-8 rounded-2xl border border-border-dark shadow-xl">
                 <h3 className="text-2xl font-display font-bold text-white mb-6">Der Arbeitsplatz Lackierkabine</h3>
                 <p className="mb-6 text-justify text-gray-400">
                    Als Fahrzeuglackierer bist du der letzte Schritt in der Reparaturkette. Egal ob Unfallinstandsetzung oder Veredelung – dein Ergebnis muss stehen. Moderne Betriebe setzen heute auf Wasserbasislacke, digitale Farbtonmessung und energieeffiziente Trocknungssysteme. Wir suchen Profis, die mit Spritzpistole, Schleifklotz und Exzenter umgehen können wie kein anderer.
                 </p>
                 
                 {/* ZUSÄTZLICHES BILD: Mischraum / Farbe */}
                 <img 
                    src="https://images.unsplash.com/photo-1506469717960-4335a422028b?q=80&w=2000&auto=format&fit=crop" 
                    alt="Mischbank Farben" 
                    className="w-full h-64 object-cover rounded-lg border border-border-dark my-8 shadow-2xl brightness-90 hover:brightness-100 transition-all"
                 />

                 <div className="bg-gray-lighter p-6 rounded-lg border border-border-dark my-8 flex gap-4 items-start shadow-inner">
                    <div className="bg-accent-primary/20 p-3 rounded-full text-accent-primary flex-shrink-0">
                        <Wrench size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-white uppercase text-sm mb-1">Top Ausstattung</h4>
                        <p className="text-sm text-gray-400">Unsere Partnerbetriebe investieren in modernes Equipment. Gute Absaugung, top Licht und Markenwerkzeug sind Standard.</p>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
                 <div className="order-2 md:order-1">
                    {/* Bild: Vorbereitung / Abkleben */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary to-gray-700 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <img 
                        src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2000&auto=format&fit=crop" 
                        alt="Fahrzeugvorbereitung und Pflege" 
                        className="relative w-full rounded-lg shadow-2xl mb-4 border border-gray-700"
                        />
                    </div>
                     <span className="text-xs text-gray-500 uppercase font-bold tracking-widest flex items-center justify-center gap-2"><Layers size={12}/> Vorbereitung & Finish</span>
                 </div>
                 <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-display font-bold text-white mb-6">Industrie & Pulver</h3>
                    <p className="mb-4 text-justify text-gray-400">
                      Neben dem KFZ-Bereich bieten wir Stellen in der Industrielackierung. Hier geht es um Korrosionsschutz, Schichtdicken und Großserien. Pulverbeschichter sind extrem gefragt, besonders wenn Erfahrung mit Automatik-Anlagen oder Handbeschichtung vorliegt.
                    </p>
                    <p className="text-justify text-gray-400">
                      Auch Smart-Repair Techniker finden bei uns ihren Platz. Die schnelle Reparatur von Kleinschäden an Stoßstangen oder Felgen ist ein Wachstumsmarkt mit hervorragenden Verdienstmöglichkeiten für Selbstständige oder Angestellte im Autohaus.
                    </p>
                 </div>
              </div>
            </article>
          </div>

        </div>
      </div>

       {/* NEW: Masonry Gallery Section for MORE IMAGES */}
       <div className="bg-deep-black py-24 border-t border-border-dark">
            <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
                 <span className="text-accent-primary font-bold uppercase tracking-widest mb-2 block">Einblicke</span>
                <h3 className="text-3xl md:text-5xl font-display font-black text-white uppercase">Impressionen aus der Werkstatt</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
                <div className="grid gap-6">
                    <img className="h-auto max-w-full rounded-lg object-cover hover:opacity-90 transition-opacity border border-border-dark" src="https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?q=80&w=800&auto=format&fit=crop" alt="Spritzpistole Action" />
                    <img className="h-auto max-w-full rounded-lg object-cover hover:opacity-90 transition-opacity border border-border-dark" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop" alt="Roter Lack Sportwagen" />
                </div>
                <div className="grid gap-6">
                    <img className="h-auto max-w-full rounded-lg object-cover hover:opacity-90 transition-opacity border border-border-dark" src="https://images.unsplash.com/photo-1562259926-4b31a297e68c?q=80&w=800&auto=format&fit=crop" alt="Lackdosen Regal" />
                    <img className="h-auto max-w-full rounded-lg object-cover hover:opacity-90 transition-opacity border border-border-dark" src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=800&auto=format&fit=crop" alt="Maler in Kabine" />
                    <img className="h-auto max-w-full rounded-lg object-cover hover:opacity-90 transition-opacity border border-border-dark" src="https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=800&auto=format&fit=crop" alt="Schleifen Handarbeit" />
                </div>
                <div className="grid gap-6">
                    <img className="h-auto max-w-full rounded-lg object-cover hover:opacity-90 transition-opacity border border-border-dark" src="https://images.unsplash.com/photo-1613214149922-f1809c99e35f?q=80&w=800&auto=format&fit=crop" alt="Detailing Finish" />
                    <img className="h-auto max-w-full rounded-lg object-cover hover:opacity-90 transition-opacity border border-border-dark" src="https://images.unsplash.com/photo-1575024357670-2b5164f470c3?q=80&w=800&auto=format&fit=crop" alt="Lackierpistole Nahaufnahme" />
                </div>
            </div>
       </div>

      {/* Visual Break / Quote - Background: Clean Workshop */}
      <div className="py-24 relative bg-fixed bg-center bg-cover border-y border-border-dark" style={{backgroundImage: "url('https://images.unsplash.com/photo-1486262715619-01b80258e0a5?q=80&w=2000&auto=format&fit=crop')"}}>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <Star size={64} className="text-accent-primary mx-auto mb-8" />
            <blockquote className="text-4xl md:text-5xl font-display font-black text-white uppercase leading-tight mb-8 drop-shadow-lg">
                "Lackieren ist keine Arbeit. Es ist eine Haltung."
            </blockquote>
            <button onClick={() => onNavigate(UserType.SEEKER)} className="bg-white text-black font-bold uppercase py-3 px-8 rounded hover:bg-gray-200 transition-colors shadow-lg">
                Jetzt Karriere starten
            </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-surface py-24 border-t border-border-dark">
        <div className="max-w-3xl mx-auto px-4">
             <div className="text-center mb-16">
                 <span className="text-accent-primary font-bold uppercase tracking-widest text-sm">Wissenswertes</span>
                 <h2 className="text-3xl md:text-4xl font-display font-black text-white mt-2 uppercase">Häufige Fragen</h2>
             </div>
             
             <div className="space-y-4">
                <div className="group border border-border-dark hover:border-gray-500 p-8 rounded-lg bg-deep-black transition-all duration-300">
                    <h3 className="text-lg font-bold text-white uppercase mb-3 flex items-center group-hover:text-accent-primary transition-colors">
                        <PenTool size={18} className="mr-3"/> Was verdient ein Fahrzeuglackierer?
                    </h3>
                    <p className="text-gray-400 leading-relaxed">Das Einstiegsgehalt liegt oft zwischen 2.400€ und 2.800€ brutto. Mit Erfahrung und Spezialisierung (z.B. Oldtimer, Industrie) sind Gehälter von 3.500€ bis über 4.500€ möglich. Meister verdienen oft deutlich mehr.</p>
                </div>
                <div className="group border border-border-dark hover:border-gray-500 p-8 rounded-lg bg-deep-black transition-all duration-300">
                    <h3 className="text-lg font-bold text-white uppercase mb-3 flex items-center group-hover:text-accent-primary transition-colors">
                        <PenTool size={18} className="mr-3"/> Welche Voraussetzungen brauche ich?
                    </h3>
                    <p className="text-gray-400 leading-relaxed">Eine abgeschlossene Ausbildung als Fahrzeuglackierer oder Verfahrensmechaniker für Beschichtungstechnik ist Standard. Wichtiger sind jedoch Präzision, Farbsicherheit und keine Angst vor moderner Technik.</p>
                </div>
                <div className="group border border-border-dark hover:border-gray-500 p-8 rounded-lg bg-deep-black transition-all duration-300">
                    <h3 className="text-lg font-bold text-white uppercase mb-3 flex items-center group-hover:text-accent-primary transition-colors">
                        <PenTool size={18} className="mr-3"/> Vermittelt LackiererStellen.de auch Helfer?
                    </h3>
                    <p className="text-gray-400 leading-relaxed">Unser Fokus liegt auf Fachkräften. Jedoch bieten wir auch eine Rubrik für Lackierhelfer und Vorbereiter an, da diese für den Workflow in der Werkstatt unverzichtbar sind.</p>
                </div>
             </div>
        </div>
      </div>

    </div>
  );
};