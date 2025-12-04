import React, { useEffect, useMemo, useState } from 'react';
import { Job } from '../types';
import { JobCard } from '../components/JobCard';
import { MapPin, Search, Clock, CheckCircle2, Layers, SprayCan, Sparkles } from 'lucide-react';

const LACKIER_JOBS: Job[] = [
  {
    id: 'lack-1',
    title: 'Fahrzeuglackierer (m/w/d) Premium Autohaus',
    company: 'Autohaus Nord',
    location: 'Hamburg',
    type: 'Vollzeit',
    salary: '3.200 - 3.800 EUR',
    description: 'PKW-Vorbereitung, exakte Farbtonmessung und Lackierung in moderner Kabine mit Kurzzeit-Trocknung.',
    tags: ['PKW', 'Kabine', 'Farbtonmessung'],
    postedDate: 'Heute',
    isPromoted: true,
  },
  {
    id: 'lack-2',
    title: 'Karosserie- und Fahrzeugbaumechaniker Lack / Finish',
    company: 'Karosseriezentrum Mitte',
    location: 'Berlin',
    type: 'Vollzeit',
    salary: '3.000 - 3.500 EUR',
    description: 'Finish-Arbeiten, Spot-Repair und Smart-Repair mit klaren Taktzeiten in top ausgestatteter Werkstatt.',
    tags: ['Spot Repair', 'Smart Repair', 'Finish'],
    postedDate: 'Vor 1 Tag',
  },
  {
    id: 'lack-3',
    title: 'Industrielackierer (m/w/d) Pulverbeschichtung',
    company: 'Oberfläche GmbH',
    location: 'Leipzig',
    type: 'Vollzeit',
    salary: '2.900 - 3.300 EUR',
    description: 'Pulverbeschichtung von Serienbauteilen, Qualitätsprüfung und Dokumentation im 2-Schicht-Modell.',
    tags: ['Industrie', 'Pulverbeschichtung', 'Qualität'],
    postedDate: 'Vor 3 Tagen',
  },
  {
    id: 'lack-4',
    title: 'Lackierer (m/w/d) Nutzfahrzeuge',
    company: 'Truck & Paint',
    location: 'Köln',
    type: 'Vollzeit',
    salary: '3.100 - 3.700 EUR',
    description: 'Großflächen-Lackierung von LKW-Aufbauten, Untergrundvorbereitung und Versiegelung.',
    tags: ['LKW', 'Großfläche', 'Versiegelung'],
    postedDate: 'Vor 4 Tagen',
  },
  {
    id: 'lack-5',
    title: 'Ausbildung zum Fahrzeuglackierer (m/w/d)',
    company: 'Lackiererei Farbenreich',
    location: 'München',
    type: 'Ausbildung',
    salary: 'Tarif',
    description: 'Ausbildung mit modernen Trocknungsanlagen, erfahrenen Ausbildern und Übernahmechance.',
    tags: ['Ausbildung', 'PSA', 'Kabine'],
    postedDate: 'Vor 1 Woche',
  },
  {
    id: 'lack-6',
    title: 'Smart-Repair Spezialist (m/w/d)',
    company: 'City Smart Repair',
    location: 'Düsseldorf',
    type: 'Teilzeit',
    salary: '2.800 - 3.200 EUR',
    description: 'Kleinlackierungen, Dellen- und Kratzerbeseitigung mit mobilen Einsätzen und flexiblen Zeiten.',
    tags: ['Smart Repair', 'Mobil', 'Flexibel'],
    postedDate: 'Vor 5 Tagen',
  },
];

export const Lackierstellenangebote: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(LACKIER_JOBS[0]);

  const filteredJobs = useMemo(() => {
    const term = searchTerm.toLowerCase();
    const loc = locationTerm.toLowerCase();
    return LACKIER_JOBS.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(term) ||
        job.tags.some((tag) => tag.toLowerCase().includes(term));
      const matchesLocation = job.location.toLowerCase().includes(loc);
      return matchesSearch && matchesLocation;
    });
  }, [searchTerm, locationTerm]);

  useEffect(() => {
    if (filteredJobs.length === 0) return;
    if (!selectedJob || !filteredJobs.some((job) => job.id === selectedJob.id)) {
      setSelectedJob(filteredJobs[0]);
    }
  }, [filteredJobs, selectedJob]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <section className="relative overflow-hidden border-b border-gray-200 bg-gradient-to-r from-gray-900 via-gray-950 to-black text-white py-16">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3806268/pexels-photo-3806268.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1400&dpr=1"
            alt="Lackierer arbeitet am Fahrzeug"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_10%_10%,rgba(249,115,22,0.2),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),transparent_30%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse"></span>
              Lackierstellen bundesweit
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-black leading-tight">
              Lackierer-Jobs mit klaren Prozessen & moderner Ausstattung
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Werkstatt, Industrie oder Smart-Repair: Finde Stellen mit sauberer Kabine, fairer Bezahlung und schnellen Rückmeldungen.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  const el = document.getElementById('lackier-jobs');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-accent-primary text-white font-display font-bold uppercase tracking-wider rounded-lg shadow-lg hover:bg-accent-hover transition-colors"
              >
                Aktuelle Jobs ansehen
              </button>
              <button
                onClick={() => setSelectedJob(LACKIER_JOBS[0])}
                className="px-6 py-3 bg-white text-gray-900 font-display font-bold uppercase tracking-wider rounded-lg shadow-lg hover:bg-gray-100 transition-colors border border-white/30"
              >
                Top-Stelle hervorheben
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
                <SprayCan className="text-accent-primary" size={18} />
                <div>
                  <p className="font-semibold">Saubere Kabinen</p>
                  <p className="text-gray-300">Transparente Ausstattung</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
                <Layers className="text-accent-primary" size={18} />
                <div>
                  <p className="font-semibold">Klare Taktung</p>
                  <p className="text-gray-300">Realistische Durchlaufzeiten</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
                <Sparkles className="text-accent-primary" size={18} />
                <div>
                  <p className="font-semibold">Faire Deals</p>
                  <p className="text-gray-300">Gehalt & Überstunden geregelt</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-300 mb-3">Warum hier suchen?</p>
            <ul className="space-y-3 text-gray-100">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-accent-primary" size={18} /> Geprüfte Werkstätten und Betriebe</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-accent-primary" size={18} /> Rückmeldung oft unter 24 Stunden</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-accent-primary" size={18} /> Transparente Gehaltsbänder & PSA</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-accent-primary" size={18} /> Smart-Repair, Industrie, Nutzfahrzeuge</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-5 md:p-7">
          <div className="grid md:grid-cols-3 gap-4 items-end">
            <div className="md:col-span-2 flex flex-col gap-3">
              <label className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-primary" size={18} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Stichwort oder Technik (z. B. Smart-Repair, Kabine)"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg py-4 pl-12 pr-4 text-gray-900 focus:outline-none focus:border-accent-primary transition-all placeholder-gray-400 font-medium focus:bg-white"
                />
              </label>
              <label className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-primary" size={18} />
                <input
                  type="text"
                  value={locationTerm}
                  onChange={(e) => setLocationTerm(e.target.value)}
                  placeholder="Ort oder Region"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg py-4 pl-12 pr-4 text-gray-900 focus:outline-none focus:border-accent-primary transition-all placeholder-gray-400 font-medium focus:bg-white"
                />
              </label>
            </div>
            <button className="w-full bg-accent-primary text-white font-display font-bold uppercase tracking-widest py-4 px-6 rounded-lg hover:bg-accent-hover transition-colors shadow-lg">
              Filtern
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-3">Tipp: Suche nach „Ausbildung“ oder „Smart“ für spezielle Bereiche.</p>
        </div>
      </section>

      <section id="lackier-jobs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-accent-primary">Lackierstellen</p>
              <h2 className="text-2xl md:text-3xl font-display font-black text-gray-900">Aktuelle Jobs</h2>
            </div>
            <span className="text-sm text-gray-500 font-semibold">{filteredJobs.length} Angebote</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} onClick={() => setSelectedJob(job)} />
              ))
            ) : (
              <div className="col-span-full text-center py-16 bg-white rounded-lg border border-gray-200 border-dashed">
                <p className="text-gray-600 text-lg font-medium">Keine passenden Stellen gefunden.</p>
                <button
                  onClick={() => { setSearchTerm(''); setLocationTerm(''); }}
                  className="mt-3 text-accent-primary font-bold hover:underline"
                >
                  Filter zurücksetzen
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 sticky top-24">
            {selectedJob ? (
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-accent-primary font-bold">{selectedJob.type}</p>
                    <h3 className="text-2xl font-display font-black text-gray-900 leading-snug">{selectedJob.title}</h3>
                    <p className="text-gray-600 font-medium">{selectedJob.company} · {selectedJob.location}</p>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap">{selectedJob.postedDate}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedJob.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">{tag}</span>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">{selectedJob.description}</p>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-700"><Clock size={16} className="text-accent-primary" /> {selectedJob.type}</div>
                  <div className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-accent-primary" /> {selectedJob.location}</div>
                  <div className="flex items-center gap-2 text-gray-700 col-span-2"><CheckCircle2 size={16} className="text-accent-primary" /> Gehalt: {selectedJob.salary}</div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="flex-1 bg-accent-primary text-white font-display font-bold uppercase tracking-widest py-3 px-4 rounded-lg hover:bg-accent-hover transition-colors">
                    Direkt bewerben
                  </button>
                  <button className="flex-1 border border-gray-200 text-gray-900 font-display font-bold uppercase tracking-widest py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                    Job speichern
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500">Wähle eine Stelle aus der Liste.</div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-200 rounded-xl bg-gray-50">
            <p className="text-xs uppercase tracking-widest font-bold text-accent-primary mb-2">Für Bewerber</p>
            <h3 className="text-xl font-display font-black text-gray-900 mb-3">Saubere Prozesse</h3>
            <p className="text-gray-600">Nur geprüfte Werkstätten mit klaren Taktzeiten, moderner PSA und schneller Rückmeldung.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-xl bg-gray-50">
            <p className="text-xs uppercase tracking-widest font-bold text-accent-primary mb-2">Für Einsteiger</p>
            <h3 className="text-xl font-display font-black text-gray-900 mb-3">Ausbildung & Aufstieg</h3>
            <p className="text-gray-600">Ausbildungsplätze mit Übernahmechance sowie Chancen auf Meister- oder Teamleiterrolle.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-xl bg-gray-50">
            <p className="text-xs uppercase tracking-widest font-bold text-accent-primary mb-2">Für Betriebe</p>
            <h3 className="text-xl font-display font-black text-gray-900 mb-3">Passende Fachkräfte</h3>
            <p className="text-gray-600">Positionen werden klar beschrieben, damit nur passende Bewerber anklopfen.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

