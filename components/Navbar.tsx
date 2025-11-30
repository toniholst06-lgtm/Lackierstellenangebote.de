import React from 'react';
import { UserType } from '../types';
import { SprayCan, Briefcase, Users, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: UserType;
  onNavigate: (page: UserType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { label: 'Startseite', page: UserType.HOME, icon: <SprayCan size={16} /> },
    { label: 'Jobs finden', page: UserType.SEEKER, icon: <Briefcase size={16} /> },
    { label: 'Arbeitgeber', page: UserType.EMPLOYER, icon: <Users size={16} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate(UserType.HOME)}
          >
            <div className="bg-accent-primary p-2 mr-3 rounded-md group-hover:bg-white transition-colors duration-300">
               <SprayCan className="text-white group-hover:text-black w-6 h-6 transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display font-black text-white uppercase leading-none tracking-tighter">
                Lackierer
              </span>
              <span className="text-xs font-bold text-accent-primary uppercase tracking-widest">
                Stellenangebote.de
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => onNavigate(item.page)}
                  className={`flex items-center text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:text-white group ${
                    currentPage === item.page
                      ? 'text-white'
                      : 'text-gray-500'
                  }`}
                >
                  <span className={`mr-2 transition-colors duration-300 ${currentPage === item.page ? 'text-accent-primary' : 'text-gray-600 group-hover:text-accent-primary'}`}>
                    {item.icon}
                  </span>
                  {item.label}
                  {currentPage === item.page && (
                    <span className="ml-2 w-2 h-2 bg-accent-primary rounded-full animate-pulse"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  onNavigate(item.page);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center w-full px-3 py-4 text-base font-bold uppercase tracking-wider rounded-md ${
                  currentPage === item.page
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="mr-3 text-accent-primary">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};