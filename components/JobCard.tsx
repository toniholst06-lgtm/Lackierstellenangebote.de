import React from 'react';
import { Job } from '../types';
import { MapPin, Clock, Euro, ArrowRight } from 'lucide-react';

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative group bg-gray-surface rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-primary/10
        ${job.isPromoted 
          ? 'border-accent-primary/50 shadow-lg shadow-accent-primary/5' 
          : 'border-border-dark hover:border-gray-500'
        }`}
    >
      {job.isPromoted && (
          <div className="absolute top-0 right-0 bg-accent-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg z-10 shadow-md">
              Top Job
          </div>
      )}
      
      <div className="p-8">
        <div className="mb-6">
            <h3 className="text-xl font-display font-black text-white group-hover:text-accent-primary transition-colors uppercase leading-tight mb-2">
              {job.title}
            </h3>
            <p className="text-gray-400 font-medium">{job.company}</p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-gray-300">
            <MapPin size={16} className="text-accent-primary mr-3 flex-shrink-0" />
            <span className="truncate">{job.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-300">
            <Clock size={16} className="text-accent-primary mr-3 flex-shrink-0" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center text-sm text-white font-bold">
            <Euro size={16} className="text-accent-primary mr-3 flex-shrink-0" />
            <span>{job.salary}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {job.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-lighter text-[10px] text-gray-300 font-bold uppercase tracking-wide rounded border border-border-dark group-hover:border-gray-500 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-border-dark pt-4 mt-auto">
           <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">{job.postedDate}</span>
           <button className="flex items-center text-white font-bold text-xs uppercase tracking-widest group-hover:text-accent-primary transition-colors">
             Details <ArrowRight size={14} className="ml-2" />
           </button>
        </div>
      </div>
      
      {/* Decorative gradient line at bottom */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};