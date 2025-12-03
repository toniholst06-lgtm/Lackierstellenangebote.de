import React from 'react';
import { UserType } from '../types';
import { ArrowRight, Wrench, Layers, Star, PenTool } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: UserType) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white text-gray-900 font-sans w-full">
      
      {/* Light Hero Section - Split Layout - ANIMATIONS REMOVED FOR STABILITY */}
      <div className="relative bg-white pt-16 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Text Content */}
                <div className="z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-100 rounded-full text-accent-primary text-xs font-bold uppercase tracking-widest mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse"></span> Die Nr. 1 fÃ¼r Lackierer
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-900 mb-6 uppercase leading-none tracking-tight">
                        PrÃ¤zision <br />
                        <span className="text-accent-primary">trifft Job</span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 font-light max-w-lg leading-relaxed">
                        Die JobbÃ¶rse fÃ¼r Fahrzeuglackierer, Vorbereiter und Smart-Repair-Experten. Verbinde dich mit WerkstÃ¤tten, die dein Handwerk schÃ¤tzen.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => onNavigate(UserType.SEEKER)}
                            className="px-8 py-4 bg-accent-primary text-white font-display font-bold text-lg uppercase tracking-wider hover:bg-accent-hover transition-colors rounded-lg shadow-xl shadow-sky-100"
                        >
                            Jobs finden
                        </button>

                        <button
                            onClick={() => onNavigate(UserType.EMPLOYER)}
                            className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-100 font-display font-bold text-lg uppercase tracking-wider hover:border-gray-300 hover:bg-gray-50 transition-all rounded-lg"
                        >
                            Stelle schalten
                        </button>
                    </div>
                    
                    <div className="mt-12 flex items-center gap-8 text-sm font-bold text-gray-400 uppercase tracking-widest">
                        <span>500+ Jobs</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span>Top GehÃ¤lter</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span>Direktbewerbung</span>
                    </div>
                </div>

                {/* Image Content */}
                <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/20 to-transparent z-10 pointer-events-none"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=2000&q=85&v=999" 
                        alt="Malerin streicht eine Innenwand" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute bottom-8 left-8 z-20 bg-white/95 backdrop-blur shadow-lg p-4 rounded-lg max-w-xs border-l-4 border-accent-primary">
                        <p className="text-gray-900 font-bold text-sm">"Endlich ein Portal, das unser Handwerk versteht."</p>
                        <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider">- Michael S., Lackiermeister</p>
                    </div>
                </div>

            </div>
        </div>
      </div>

      {/* Intro Stats Section */}
      <div className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200">
                <div>
                    <span className="block text-4xl font-display font-black text-gray-900 mb-1">500+</span>
                    <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Offene Stellen</span>
                </div>
                <div>
                    <span className="block text-4xl font-display font-black text-gray-900 mb-1">1.2k</span>
                    <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Lackierereien</span>
                </div>
                <div>
                    <span className="block text-4xl font-display font-black text-gray-900 mb-1">Top</span>
                    <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">GehÃ¤lter</span>
                </div>
                <div>
                    <span className="block text-4xl font-display font-black text-gray-900 mb-1">24h</span>
                    <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Express Bewerbung</span>
                </div>
            </div>
        </div>
      </div>

      {/* Real Workshop Grid Section */}
      <div className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
            <span className="text-accent-primary font-bold uppercase tracking-widest mb-2 block">Einblicke</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 uppercase">
                Dein <span className="text-accent-primary">Handwerk</span> im Fokus
            </h2>
         </div>
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Item 1 - Werkstatt Situation / Polieren */}
                <div className="relative group overflow-hidden h-[300px] rounded-xl cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=2000&q=85&v=999" alt="Farbrolle auf frisch grundierter Wand" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                        <div>
                            <h3 className="text-xl font-display font-bold text-white uppercase mb-1">Finish & Polish</h3>
                        </div>
                    </div>
                </div>
                {/* Item 2 - Auto fertig lackiert / Glanz */}
                <div className="relative group overflow-hidden h-[300px] rounded-xl cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=85&v=999" alt="Pinsel mit frischer Wandfarbe" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                        <div>
                            <h3 className="text-xl font-display font-bold text-white uppercase mb-1">Karosserie</h3>
                        </div>
                    </div>
                </div>
                {/* Item 3 - Farbmischbank */}
                <div className="relative group overflow-hidden h-[300px] rounded-xl cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1486365227551-f3f90034a57c?auto=format&fit=crop&w=2000&q=85&v=999" alt="Farbfaecher und Farbeimer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                        <div>
                            <h3 className="text-xl font-display font-bold text-white uppercase mb-1">Coloristik</h3>
                        </div>
                    </div>
                </div>
                {/* Item 4 - Close Up Pistole */}
                <div className="relative group overflow-hidden h-[300px] rounded-xl cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=2000&q=85&v=999" alt="Farbroller Nahaufnahme" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                        <div>
                            <h3 className="text-xl font-display font-bold text-white uppercase mb-1">Applikation</h3>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </div>

      {/* Massive Content Section */}
      <div className="bg-gray-50 py-24 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-20">
            <span className="text-accent-primary font-bold uppercase tracking-widest mb-2 block">Karriere in der Werkstatt</span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-gray-900 mb-8 uppercase leading-tight">
              Echtes Handwerk <br />zÃ¤hlt wieder
            </h2>
            <div className="w-24 h-2 bg-accent-primary mb-12"></div>
            
            <article className="prose prose-lg max-w-none text-gray-600 font-light">
              <p className="lead text-xl text-gray-900 font-normal mb-10 border-l-4 border-accent-primary pl-6 py-2 bg-white rounded-r-lg shadow-sm">
                Vom Abkleben bis zum Klarlack: Deine Arbeit ist das Erste, was der Kunde sieht. Wir bringen dich mit Betrieben zusammen, die saubere Arbeit und ZuverlÃ¤ssigkeit honorieren.
              </p>

              <div className="mb-16 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                 <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">Der Arbeitsplatz Lackierkabine</h3>
                 <p className="mb-6 text-justify text-gray-600">
                    Als Fahrzeuglackierer bist du der letzte Schritt in der Reparaturkette. Egal ob Unfallinstandsetzung oder Veredelung â€“ dein Ergebnis muss stehen. Moderne Betriebe setzen heute auf Wasserbasislacke, digitale Farbtonmessung und energieeffiziente Trocknungssysteme. Wir suchen Profis, die mit Spritzpistole, Schleifklotz und Exzenter umgehen kÃ¶nnen wie kein anderer.
                 </p>
                 
                 {/* ZUSÃ„TZLICHES BILD: Mischraum / Farbe */}
                    <img 
                        src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=85&v=999" 
                        alt="Vorbereitung und Abkleben vor dem Streichen" 
                        className="w-full h-64 object-cover rounded-lg border border-gray-100 my-8 shadow-md transition-all"
                 />

                 <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-8 flex gap-4 items-start">
                    <div className="bg-white p-3 rounded-full text-accent-primary flex-shrink-0 shadow-sm border border-gray-100">
                        <Wrench size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 uppercase text-sm mb-1">Top Ausstattung</h4>
                        <p className="text-sm text-gray-500">Unsere Partnerbetriebe investieren in modernes Equipment. Gute Absaugung, top Licht und Markenwerkzeug sind Standard.</p>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
                 <div className="order-2 md:order-1">
                    {/* Bild: Vorbereitung / Abkleben */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary to-gray-200 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <img 
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=85&v=999" 
                        alt="Feinschliff und Vorbereitung im Innenraum" 
                        className="relative w-full rounded-lg shadow-xl mb-4 border border-gray-100"
                        />
                    </div>
                     <span className="text-xs text-gray-400 uppercase font-bold tracking-widest flex items-center justify-center gap-2"><Layers size={12}/> Vorbereitung & Finish</span>
                 </div>
                 <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">Industrie & Pulver</h3>
                    <p className="mb-4 text-justify text-gray-600">
                      Neben dem KFZ-Bereich bieten wir Stellen in der Industrielackierung. Hier geht es um Korrosionsschutz, Schichtdicken und GroÃŸserien. Pulverbeschichter sind extrem gefragt, besonders wenn Erfahrung mit Automatik-Anlagen oder Handbeschichtung vorliegt.
                    </p>
                    <p className="text-justify text-gray-600">
                      Auch Smart-Repair Techniker finden bei uns ihren Platz. Die schnelle Reparatur von KleinschÃ¤den an StoÃŸstangen oder Felgen ist ein Wachstumsmarkt mit hervorragenden VerdienstmÃ¶glichkeiten fÃ¼r SelbststÃ¤ndige oder Angestellte im Autohaus.
                    </p>
                 </div>
              </div>
            </article>
          </div>

        </div>
      </div>

       {/* NEW: Masonry Gallery Section for MORE IMAGES */}
       <div className="bg-white py-24 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
                 <span className="text-accent-primary font-bold uppercase tracking-widest mb-2 block">Einblicke</span>
                <h3 className="text-3xl md:text-5xl font-display font-black text-gray-900 uppercase">Impressionen aus der Werkstatt</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
                <div className="grid gap-6">
                    <img className="h-auto max-w-full rounded-lg object-cover hover:shadow-xl transition-all border border-gray-100" src="https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=800&q=85&v=999" alt="Farbrolle im Einsatz" />
                    <img className="h-auto max-w-full rounded-lg object-cover hover:shadow-xl transition-all border border-gray-100" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=85&v=999" alt="Innenraum fuer Anstrich vorbereitet" />
                </div>
                <div className="grid gap-6">
                    <img className="h-auto max-w-full rounded-lg object-cover hover:shadow-xl transition-all border border-gray-100" src="https://images.unsplash.com/photo-1486365227551-f3f90034a57c?auto=format&fit=crop&w=800&q=85&v=999" alt="Farbtoene und Materialien" />
                    <img className="h-auto max-w-full rounded-lg object-cover hover:shadow-xl transition-all border border-gray-100" src="https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=800&q=85&v=999" alt="Innenwand Abklebearbeiten" />
                    <img className="h-auto max-w-full rounded-lg object-cover hover:shadow-xl transition-all border border-gray-100" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=85&v=999" alt="Feinschliff am Untergrund" />
                </div>
                <div className="grid gap-6">
                    <img className="h-auto max-w-full rounded-lg object-cover hover:shadow-xl transition-all border border-gray-100" src="https://images.unsplash.com/photo-1486365227551-f3f90034a57c?auto=format&fit=crop&w=800&q=85&v=999" alt="Farbfaecher und Werkstatt" />
                    <img className="h-auto max-w-full rounded-lg object-cover hover:shadow-xl transition-all border border-gray-100" src="https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=800&q=85&v=999" alt="Detailaufnahme Farbrolle" />
                </div>
            </div>
       </div>

      {/* Visual Break / Quote - Background: Clean Workshop */}
      <div className="py-24 relative bg-fixed bg-center bg-cover border-y border-gray-200" style={{backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=85&v=999')"}}>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gray-900/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <Star size={64} className="text-white mx-auto mb-8 drop-shadow-lg" />
            <blockquote className="text-4xl md:text-5xl font-display font-black text-white uppercase leading-tight mb-8 drop-shadow-xl">
                "Lackieren ist keine Arbeit. Es ist eine Haltung."
            </blockquote>
            <button onClick={() => onNavigate(UserType.SEEKER)} className="bg-white text-gray-900 font-bold uppercase py-4 px-10 rounded hover:bg-gray-100 transition-colors shadow-2xl">
                Jetzt Karriere starten
            </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-24 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4">
             <div className="text-center mb-16">
                 <span className="text-accent-primary font-bold uppercase tracking-widest text-sm">Wissenswertes</span>
                 <h2 className="text-3xl md:text-4xl font-display font-black text-gray-900 mt-2 uppercase">HÃ¤ufige Fragen</h2>
             </div>
             
             <div className="space-y-4">
                <div className="group bg-white border border-gray-200 hover:border-gray-300 p-8 rounded-lg shadow-sm transition-all duration-300">
                    <h3 className="text-lg font-bold text-gray-900 uppercase mb-3 flex items-center group-hover:text-accent-primary transition-colors">
                        <PenTool size={18} className="mr-3"/> Was verdient ein Fahrzeuglackierer?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">Das Einstiegsgehalt liegt oft zwischen 2.400â‚¬ und 2.800â‚¬ brutto. Mit Erfahrung und Spezialisierung (z.B. Oldtimer, Industrie) sind GehÃ¤lter von 3.500â‚¬ bis Ã¼ber 4.500â‚¬ mÃ¶glich. Meister verdienen oft deutlich mehr.</p>
                </div>
                <div className="group bg-white border border-gray-200 hover:border-gray-300 p-8 rounded-lg shadow-sm transition-all duration-300">
                    <h3 className="text-lg font-bold text-gray-900 uppercase mb-3 flex items-center group-hover:text-accent-primary transition-colors">
                        <PenTool size={18} className="mr-3"/> Welche Voraussetzungen brauche ich?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">Eine abgeschlossene Ausbildung als Fahrzeuglackierer oder Verfahrensmechaniker fÃ¼r Beschichtungstechnik ist Standard. Wichtiger sind jedoch PrÃ¤zision, Farbsicherheit und keine Angst vor moderner Technik.</p>
                </div>
                <div className="group bg-white border border-gray-200 hover:border-gray-300 p-8 rounded-lg shadow-sm transition-all duration-300">
                    <h3 className="text-lg font-bold text-gray-900 uppercase mb-3 flex items-center group-hover:text-accent-primary transition-colors">
                        <PenTool size={18} className="mr-3"/> Vermittelt LackiererStellen.de auch Helfer?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">Unser Fokus liegt auf FachkrÃ¤ften. Jedoch bieten wir auch eine Rubrik fÃ¼r Lackierhelfer und Vorbereiter an, da diese fÃ¼r den Workflow in der Werkstatt unverzichtbar sind.</p>
                </div>
             </div>
        </div>
      </div>

    </div>
  );
};


