import React, { useState } from 'react';
import { generateJobDescription } from '../services/geminiService';
import { Sparkles, Save, AlertCircle, Loader2, PenTool, Check, ChevronRight } from 'lucide-react';
import { AIGeneratedJobContent } from '../types';

export const Employer = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    keywords: '',
    email: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<AIGeneratedJobContent | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!formData.jobTitle || !formData.companyName) {
      setError('Bitte füllen Sie alle Pflichtfelder aus.');
      return;
    }

    setIsGenerating(true);
    setError(null);

    if (!process.env.API_KEY && !generatedContent) {
        setTimeout(() => {
            setGeneratedContent({
                title: formData.jobTitle,
                description: `Für unseren renommierten Fachbetrieb ${formData.companyName} suchen wir Verstärkung. Wir stehen für Qualität und Langlebigkeit in der Oberflächentechnik. Wenn Sie Leidenschaft für Lack und Farbe mitbringen, sind Sie bei uns richtig.`,
                requirements: ['Abgeschlossene Berufsausbildung', 'Sorgfältige Arbeitsweise', 'Teamfähigkeit', ...formData.keywords.split(',').map((k) => k.trim()).filter(Boolean)],
                benefits: ['Faire Bezahlung', 'Modernes Equipment', 'Weiterbildungsmöglichkeiten']
            });
            setIsGenerating(false);
            setStep(2);
        }, 1500);
        return;
    }

    const content = await generateJobDescription(formData.jobTitle, formData.keywords, formData.companyName);
    
    setIsGenerating(false);
    if (content) {
      setGeneratedContent(content);
      setStep(2);
    } else {
      setError('Der KI-Service ist derzeit nicht erreichbar.');
    }
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Vielen Dank! Ihre Anzeige wurde zur Prüfung eingereicht.');
    setStep(1);
    setFormData({ companyName: '', jobTitle: '', keywords: '', email: '' });
    setGeneratedContent(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
        <div className="relative border-b border-gray-200 py-24 px-4 text-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black">
             <div className="absolute inset-0 z-0">
                <img src="https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1400&dpr=1" className="w-full h-full object-cover opacity-30" alt="Werkstatt Background" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
             </div>
             
             <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white">
                  <Sparkles size={14} className="text-accent-primary" /> Anzeige in Minuten
                </div>
                <h1 className="text-3xl md:text-5xl font-display font-black text-white uppercase mb-2 shadow-sm">
                    Mitarbeiter <span className="text-accent-primary">finden</span>
                </h1>
                <p className="text-gray-200 max-w-xl mx-auto text-lg font-light">
                    Erstellen Sie in wenigen Minuten eine professionelle Stellenanzeige mit Hilfe unserer KI – optimiert für Lackierer, Vorbereiter und Smart-Repair.
                </p>
             </div>
        </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-4">
                <div className="bg-white rounded-xl border border-gray-200 p-8 sticky top-32 shadow-xl">
                    <div className="flex items-center mb-8">
                        <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center mr-4 text-accent-primary">
                            <Sparkles size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 uppercase leading-none">Smart Recruiting</h2>
                            <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Powered by AI</span>
                        </div>
                    </div>
                    
                    <div className="space-y-6 mb-8">
                        <div className="flex">
                            <div className="mr-4 mt-1 bg-gray-100 p-1 rounded-full h-fit">
                                <Check size={12} className="text-gray-900" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Automatische Texte</h4>
                                <p className="text-xs text-gray-500 mt-1">Sparen Sie Zeit. Unsere KI formuliert ansprechende Texte für Sie.</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-4 mt-1 bg-gray-100 p-1 rounded-full h-fit">
                                <Check size={12} className="text-gray-900" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Zielgenaue Reichweite</h4>
                                <p className="text-xs text-gray-500 mt-1">Ihre Anzeige erreicht direkt Fachkräfte aus der Lackierbranche.</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-gray-100">
                        <div className="flex items-end justify-between mb-2">
                             <span className="text-gray-500 text-sm">Einzelanzeige</span>
                             <span className="text-2xl font-black text-gray-900">49 EUR</span>
                        </div>
                        <p className="text-xs text-gray-400 text-right mb-6">zzgl. gesetzl. MwSt. / 30 Tage Laufzeit</p>
                        <button className="w-full py-3 bg-gray-900 text-white font-bold text-sm uppercase rounded hover:bg-gray-800 transition-colors">
                            Preise & Pakete ansehen
                        </button>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-8">
                <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                    <div className="h-2 w-full bg-gray-100 flex">
                        <div className={`h-full bg-accent-primary transition-all duration-500 ${step === 1 ? 'w-1/2' : 'w-full'}`}></div>
                    </div>
                
                <div className="p-8 md:p-12 text-gray-900">
                    {step === 1 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex justify-between items-center mb-10">
                                <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-gray-900">Anzeige erstellen</h3>
                                <span className="text-xs font-bold bg-gray-100 px-3 py-1 rounded text-gray-500 uppercase tracking-widest">Schritt 1/2</span>
                            </div>
                            
                            <div className="space-y-8">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Unternehmen</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-900 font-medium focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/10 outline-none transition-all placeholder-gray-400"
                                        placeholder="Name Ihrer Lackiererei / Werkstatt"
                                        value={formData.companyName}
                                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Stellentitel</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-900 font-medium focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/10 outline-none transition-all placeholder-gray-400"
                                        placeholder="z.B. Fahrzeuglackierer (m/w/d)"
                                        value={formData.jobTitle}
                                        onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Stichworte & Anforderungen</label>
                                    <textarea 
                                        className="w-full min-h-[150px] bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-900 font-medium focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/10 outline-none transition-all resize-none placeholder-gray-400"
                                        placeholder="Was ist Ihnen wichtig? (z.B. Erfahrung mit Wasserlack, Teamfähigkeit, Meisterbrief, Spot-Repair...)"
                                        value={formData.keywords}
                                        onChange={(e) => setFormData({...formData, keywords: e.target.value})}
                                    />
                                    <p className="text-xs text-gray-400 mt-2 flex items-center">
                                        <Sparkles size={12} className="mr-1 text-accent-primary"/> Unsere KI generiert daraus einen vollständigen Text.
                                    </p>
                                </div>
                            </div>

                            {error && (
                                <div className="mt-8 flex items-center text-red-600 bg-red-50 p-4 rounded-lg border border-red-100">
                                    <AlertCircle size={20} className="mr-3 flex-shrink-0" />
                                    <span className="font-medium text-sm">{error}</span>
                                </div>
                            )}

                            <div className="mt-12 flex justify-end">
                                <button 
                                    onClick={handleGenerate}
                                    disabled={isGenerating}
                                    className="bg-gray-900 text-white font-bold font-display uppercase tracking-widest py-4 px-8 rounded-lg hover:bg-black transition-all flex items-center gap-3 disabled:opacity-70 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    {isGenerating ? (
                                        <>
                                            <Loader2 className="animate-spin" size={18} />
                                            <span>Generiere...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Entwurf erstellen</span>
                                            <ChevronRight size={18} />
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 2 && generatedContent && (
                        <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                            <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-100">
                                <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-gray-900">Vorschau & Abschluss</h3>
                                <button onClick={() => setStep(1)} className="text-xs font-bold text-gray-400 hover:text-gray-900 uppercase tracking-widest flex items-center transition-colors">
                                    <PenTool size={12} className="mr-2" /> Bearbeiten
                                </button>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 mb-10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-gray-200 text-gray-500 text-[10px] font-bold uppercase px-2 py-1 rounded-bl">Vorschau</div>
                                
                                <h4 className="text-2xl font-display font-black text-gray-900 mb-6 uppercase">{generatedContent.title}</h4>
                                <p className="text-gray-700 mb-8 leading-relaxed font-sans">{generatedContent.description}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h5 className="font-bold text-gray-900 uppercase mb-4 text-xs tracking-widest border-b-2 border-accent-primary w-fit pb-1">Ihr Profil</h5>
                                        <ul className="space-y-3">
                                            {generatedContent.requirements.map((req, i) => (
                                                <li key={i} className="flex items-start text-gray-700 text-sm font-medium">
                                                    <Check size={14} className="text-accent-primary mt-1 mr-3 flex-shrink-0" />
                                                    {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-gray-900 uppercase mb-4 text-xs tracking-widest border-b-2 border-accent-primary w-fit pb-1">Wir bieten</h5>
                                        <ul className="space-y-3">
                                            {generatedContent.benefits.map((ben, i) => (
                                                <li key={i} className="flex items-start text-gray-700 text-sm font-medium">
                                                    <Check size={14} className="text-accent-primary mt-1 mr-3 flex-shrink-0" />
                                                    {ben}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-orange-50 border border-orange-100 rounded-lg p-6 mb-8">
                                <label className="block text-xs font-bold text-orange-800 uppercase tracking-widest mb-3">E-Mail für Bewerbungen</label>
                                <input 
                                    type="email" 
                                    required
                                    className="w-full bg-white border border-orange-200 rounded p-4 text-gray-900 focus:border-orange-500 outline-none transition-colors"
                                    placeholder="bewerbung@ihrefirma.de"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                                <p className="text-xs text-orange-700 mt-2">An diese Adresse werden Bewerbungen weitergeleitet. Sie ist für Bewerber nicht öffentlich sichtbar.</p>
                            </div>

                            <button 
                                onClick={handlePublish}
                                className="w-full bg-accent-primary text-white font-bold font-display uppercase tracking-widest py-5 rounded-lg hover:bg-accent-hover transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
                            >
                                <Save size={20} /> 
                                <span>Kostenpflichtig veröffentlichen</span>
                            </button>
                        </div>
                    )}
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

