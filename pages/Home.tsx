import React from 'react';
import { UserType } from '../types';
import { ArrowRight, Wrench, Layers, Star, PenTool, ShieldCheck, Sparkles } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: UserType) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white text-gray-900 font-sans w-full">
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_10%_20%,rgba(249,115,22,0.18),transparent_25%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-12 gap-10 relative z-10">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse"></span>
              Nr. 1 für Fahrzeuglackierer
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black leading-tight">
              Präzision im Lackierhandwerk.
              <span className="block text-accent-primary">Jobs, die glänzen.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
              Lackierstellenangebote.de bringt Lackierer, Vorbereiter und Smart-Repair-Profis mit Betrieben zusammen, die moderne Kabinen, klare Prozesse und faire Bezahlung bieten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate(UserType.SEEKER)}
                className="px-8 py-4 bg-accent-primary text-white font-display font-bold text-lg uppercase tracking-wider hover:bg-accent-hover transition-colors rounded-lg shadow-2xl shadow-accent-primary/30"
              >
                Jobs finden
              </button>
              <button
                onClick={() => onNavigate(UserType.EMPLOYER)}
                className="px-8 py-4 bg-white/10 text-white border border-white/30 font-display font-bold text-lg uppercase tracking-wider hover:bg-white/20 transition-colors rounded-lg"
              >
                Stelle schalten
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-sm text-gray-300">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-2xl font-display font-black text-white">500+</p>
                <p className="uppercase tracking-widest text-xs">Offene Stellen</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-2xl font-display font-black text-white">24h</p>
                <p className="uppercase tracking-widest text-xs">Antwort im Schnitt</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-2xl font-display font-black text-white">Top</p>
                <p className="uppercase tracking-widest text-xs">Gehalt & PSA</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-2xl font-display font-black text-white">DE/AT</p>
                <p className="uppercase tracking-widest text-xs">Bundesweit</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1400&dpr=1"
                alt="Fahrzeug wird in der Kabine lackiert"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 text-gray-900 rounded-2xl p-5 shadow-xl border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-accent-primary font-bold">Kabine ready</p>
                    <p className="text-lg font-display font-black">Premium Finish</p>
                    <p className="text-sm text-gray-600">Staubfrei, klarer Prozess, hochwertige PSA.</p>
                  </div>
                  <div className="bg-accent-primary/10 text-accent-primary px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-widest">
                    Smart Repair
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-4 gap-6">
          {[
            { title: 'Moderne Kabinen', text: 'Werkstätten mit sauberer Luftführung und Lichtkonzepten.' },
            { title: 'Klare Abläufe', text: 'Realistische Taktzeiten, kein Chaos zwischen Vorbereitung und Finish.' },
            { title: 'Faire Konditionen', text: 'Transparente Gehaltsbänder, Überstundenregelungen, PSA gestellt.' },
            { title: 'Direkter Draht', text: 'Bewerben ohne Umwege – Rückmeldung oft unter 24 Stunden.' },
          ].map((item) => (
            <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-accent-primary font-bold mb-2">{item.title}</p>
              <p className="text-gray-700 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-accent-primary font-bold uppercase tracking-[0.2em]">Werkstatt-Realität</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-gray-900 leading-tight">
              Lackieren, Vorbereiten, Smart-Repair. Alles an einem Ort.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Ob PKW, Nutzfahrzeug oder Industrie – wir zeigen dir Betriebe mit ordentlicher Ausstattung, klaren Rollen und echten Entwicklungspfaden.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-800">
                <ShieldCheck className="text-accent-primary" size={18} />
                PSA, Absaugung und Licht werden gestellt und geprüft.
              </div>
              <div className="flex items-center gap-3 text-gray-800">
                <Layers className="text-accent-primary" size={18} />
                Klare Übergaben zwischen Vorbereitung, Lack und Finish.
              </div>
              <div className="flex items-center gap-3 text-gray-800">
                <Sparkles className="text-accent-primary" size={18} />
                Weiterbildung zu Farbtonmessung, Wasserbasis- und 2K-Systemen.
              </div>
            </div>
            <button
              onClick={() => onNavigate(UserType.LACKIERJOBS)}
              className="mt-6 inline-flex items-center gap-3 text-accent-primary font-bold uppercase tracking-widest hover:text-accent-hover"
            >
              Lackierer-Stellen ansehen <ArrowRight size={16} />
            </button>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            <div className="relative group overflow-hidden h-[360px] rounded-2xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1400&dpr=1"
                alt="Vorbereitung und Schleifen eines Stoßfängers"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-accent-primary font-bold mb-1">Vorbereitung</p>
                <p className="text-lg font-display font-black">Saubere Untergründe</p>
              </div>
            </div>

            <div className="relative group overflow-hidden h-[360px] rounded-2xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/3806268/pexels-photo-3806268.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1400&dpr=1"
                alt="Lackierer poliert ein Fahrzeug"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-accent-primary font-bold mb-1">Finish</p>
                <p className="text-lg font-display font-black">Glanz ohne Staub</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-accent-primary font-bold uppercase tracking-[0.2em]">Karriere im Lack</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-gray-900">Sauberes Finish, faire Bedingungen</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Vom ersten Schliff bis zum Klarlack: wir kuratieren Stellen, die dein Handwerk respektieren – egal ob du in der Kabine, im Mischraum oder im Smart-Repair unterwegs bist.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/10 via-transparent to-transparent" />
              <img
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=85"
                alt="Farbmischung und Farbtonmessung"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-black text-gray-900">Industrie, PKW, Nutzfahrzeuge</h3>
              <p className="text-gray-600 leading-relaxed">
                Pulverbeschichtung, Großflächen-Lackierung oder Spot-Repair: Mit klaren Aufgabenprofilen weißt du vorab, welche Materialien, Trocknungszeiten und Taktungen dich erwarten.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <Wrench className="text-accent-primary" size={18} />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Ausstattung</p>
                    <p className="text-gray-600 text-sm">Marken-PSA, Absaugung, Licht.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <Layers className="text-accent-primary" size={18} />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Prozesse</p>
                    <p className="text-gray-600 text-sm">Klare Übergabe zwischen Teams.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
          <span className="text-accent-primary font-bold uppercase tracking-[0.2em] mb-2 block">Impressionen</span>
          <h3 className="text-3xl md:text-4xl font-display font-black text-gray-900">Lackierkabine, Mischraum & Smart-Repair</h3>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { src: 'https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&dpr=1', alt: 'Spritzpistole im Einsatz an einem Fahrzeug' },
            { src: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&dpr=1', alt: 'Vorbereitung eines Stoßfängers' },
            { src: 'https://images.pexels.com/photos/3806268/pexels-photo-3806268.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&dpr=1', alt: 'Politur nach dem Lackieren' },
            { src: 'https://images.unsplash.com/photo-1486365227551-f3f90034a57c?auto=format&fit=crop&w=1200&q=85', alt: 'Farbmischung für den Lackauftrag' },
            { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85', alt: 'Abgeklebte Karosserie in der Werkstatt' },
            { src: 'https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1200&q=85', alt: 'Lackierer bereitet Bauteil vor' },
          ].map((img) => (
            <div key={img.src} className="relative overflow-hidden rounded-2xl shadow-md border border-gray-100 group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      <section
        className="py-20 relative bg-center bg-cover border-y border-gray-200"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=85')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white space-y-6">
          <Star size={64} className="mx-auto text-accent-primary drop-shadow-lg" />
          <blockquote className="text-3xl md:text-4xl font-display font-black leading-tight">
            „Lackieren ist die Visitenkarte jeder Reparatur. Wir bringen dich zu Betrieben, die das verstanden haben.“
          </blockquote>
          <button
            onClick={() => onNavigate(UserType.SEEKER)}
            className="bg-accent-primary text-white font-display font-bold uppercase tracking-widest py-4 px-10 rounded-lg hover:bg-accent-hover transition-colors shadow-2xl"
          >
            Jetzt Karriere starten
          </button>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent-primary font-bold uppercase tracking-[0.2em] text-sm">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-gray-900 mt-2">Häufige Fragen</h2>
          </div>
          
          <div className="space-y-4">
            <div className="group bg-gray-50 border border-gray-200 hover:border-accent-primary/40 p-6 rounded-xl shadow-sm transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 uppercase mb-3 flex items-center gap-3 group-hover:text-accent-primary">
                <PenTool size={18} className="text-accent-primary" /> Was verdient ein Fahrzeuglackierer?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Einsteiger starten meist zwischen 2.400 und 2.800 EUR brutto. Mit Erfahrung in Farbtonmessung, Oldtimer oder Industrie liegen Gehälter oft bei 3.500–4.500 EUR. Meister und Teamleiter verdienen darüber.
              </p>
            </div>
            <div className="group bg-gray-50 border border-gray-200 hover:border-accent-primary/40 p-6 rounded-xl shadow-sm transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 uppercase mb-3 flex items-center gap-3 group-hover:text-accent-primary">
                <PenTool size={18} className="text-accent-primary" /> Welche Voraussetzungen brauche ich?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Eine Ausbildung als Fahrzeuglackierer oder Verfahrensmechaniker für Beschichtungstechnik ist ideal. Wichtig sind saubere Vorbereitung, Farbgefühl, Erfahrung mit Wasserbasislacken und Spaß an moderner Technik.
              </p>
            </div>
            <div className="group bg-gray-50 border border-gray-200 hover:border-accent-primary/40 p-6 rounded-xl shadow-sm transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 uppercase mb-3 flex items-center gap-3 group-hover:text-accent-primary">
                <PenTool size={18} className="text-accent-primary" /> Vermittelt Lackierstellenangebote.de auch Helfer?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ja. Neben Fachkräften listen wir auch Stellen für Vorbereiter und Helfer, weil sie für den sauberen Workflow in der Lackierung unverzichtbar sind.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

