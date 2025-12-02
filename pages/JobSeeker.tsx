import React, { useState } from 'react';
import { MOCK_JOBS } from '../services/mockData';
import { JobCard } from '../components/JobCard';
import { Job } from '../types';
import { Search, MapPin, X, CheckSquare, Briefcase } from 'lucide-react';

export const JobSeeker = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Filter Logic
  const filteredJobs = MOCK_JOBS.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = job.location.toLowerCase().includes(locationTerm.toLowerCase());
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      
      {/* Header Image Background - Workshop / Garage */}
      <div className="relative py-24 px-4 overflow-hidden border-b border-gray-200 bg-gray-900">
        <div className="absolute inset-0">
            <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=85&v=20" 
                className="w-full h-full object-cover opacity-40" 
                alt="Lackierkabine Hintergrund" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-gray-900/90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 uppercase tracking-tight shadow-sm">
                Finde deinen <span className="text-accent-primary">Traumjob</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg font-light">
                Täglich neue Stellenangebote aus der Lackier- und Karosseriebranche.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto bg-white p-4 rounded-xl border border-gray-200 shadow-xl">
                <div className="flex-1 relative group">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent-primary">
                        <Search size={20} />
                    </div>
                    <input 
                    type="text" 
                    placeholder="Jobtitel, Begriff (z.B. Meister)" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-4 pl-12 pr-4 text-gray-900 focus:outline-none focus:border-accent-primary transition-all placeholder-gray-400 font-medium focus:bg-white"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex-1 relative group">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent-primary">
                        <MapPin size={20} />
                    </div>
                    <input 
                    type="text" 
                    placeholder="Stadt oder Region" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-4 pl-12 pr-4 text-gray-900 focus:outline-none focus:border-accent-primary transition-all placeholder-gray-400 font-medium focus:bg-white"
                    value={locationTerm}
                    onChange={(e) => setLocationTerm(e.target.value)}
                    />
                </div>
                <button className="bg-accent-primary text-white font-bold font-display uppercase tracking-widest py-4 px-10 rounded-lg hover:bg-accent-hover transition-colors shadow-lg">
                    Suchen
                </button>
            </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
            <span className="text-gray-500 font-medium flex items-center">
                <Briefcase size={16} className="mr-2" />
                {filteredJobs.length} Stellenangebote
            </span>
            <div className="flex gap-6 text-sm">
                <span className="font-bold uppercase tracking-wider text-accent-primary border-b-2 border-accent-primary cursor-pointer pb-1">Aktuellste</span>
                <span className="font-bold uppercase tracking-wider text-gray-500 hover:text-gray-900 cursor-pointer transition-colors pb-1">Gehalt</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <JobCard key={job.id} job={job} onClick={() => setSelectedJob(job)} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-white rounded-lg border border-gray-200 border-dashed">
              <p className="text-gray-500 text-xl font-medium">Keine passenden Stellen gefunden.</p>
              <button 
                onClick={() => {setSearchTerm(''); setLocationTerm('');}}
                className="mt-4 text-accent-primary font-bold hover:underline"
              >
                Filter zurücksetzen
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="relative bg-white p-8 border-b border-gray-100 flex-shrink-0">
              <button 
                onClick={() => setSelectedJob(null)}
                className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full text-gray-500 hover:text-black hover:bg-gray-200 transition-colors"
              >
                <X size={20} />
              </button>
              <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">{selectedJob.company}</span>
              <h3 className="text-3xl md:text-4xl font-display font-black text-gray-900 uppercase mb-4 leading-none">{selectedJob.title}</h3>
              <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-500">
                  <span className="flex items-center"><MapPin size={16} className="mr-2 text-accent-primary"/> {selectedJob.location}</span>
                  <span className="flex items-center"><CheckSquare size={16} className="mr-2 text-accent-primary"/> {selectedJob.type}</span>
                  <span className="flex items-center text-gray-900"><Briefcase size={16} className="mr-2 text-accent-primary"/> {selectedJob.salary}</span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 md:p-10 overflow-y-auto bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                 <div className="md:col-span-2 space-y-8">
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4 uppercase flex items-center">
                            <span className="w-1 h-6 bg-accent-primary mr-3 rounded-full"></span> 
                            Deine Aufgaben
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-base font-normal">{selectedJob.description}</p>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4 uppercase flex items-center">
                             <span className="w-1 h-6 bg-accent-primary mr-3 rounded-full"></span> 
                             Das bringst du mit
                        </h4>
                        <ul className="grid grid-cols-1 gap-3">
                            {selectedJob.tags.map(t => (
                                <li key={t} className="flex items-center text-gray-700 bg-gray-50 p-3 rounded border border-gray-100">
                                    <div className="w-2 h-2 bg-accent-primary rounded-full mr-3"></div>
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                 </div>
                 
                 <div className="md:col-span-1">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 sticky top-0 shadow-sm">
                        <h5 className="font-bold text-gray-900 uppercase mb-6 text-sm tracking-wider border-b border-gray-200 pb-2">Übersicht</h5>
                        
                        <div className="mb-6">
                            <span className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Gehaltsrahmen</span>
                            <span className="text-xl font-bold text-gray-900">{selectedJob.salary}</span>
                        </div>
                        
                        <div className="mb-8">
                            <span className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Startdatum</span>
                            <span className="text-gray-900 font-medium">Ab sofort möglich</span>
                        </div>

                        <button className="w-full bg-accent-primary text-white font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-accent-hover transition-colors mb-3 shadow-lg">
                        Jetzt Bewerben
                        </button>
                        <button 
                        onClick={() => setSelectedJob(null)}
                        className="w-full bg-transparent text-gray-500 font-bold uppercase tracking-widest py-3 hover:text-gray-900 transition-colors text-xs"
                        >
                        Später ansehen
                        </button>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
