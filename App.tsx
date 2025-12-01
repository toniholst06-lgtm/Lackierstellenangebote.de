import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { JobSeeker } from './pages/JobSeeker';
import { Employer } from './pages/Employer';
import { Lackierstellenangebote } from './pages/Lackierstellenangebote';
import { UserType } from './types';

const pathForPage: Record<UserType, string> = {
  [UserType.HOME]: '/',
  [UserType.SEEKER]: '/jobs',
  [UserType.EMPLOYER]: '/arbeitgeber',
  [UserType.LACKIERJOBS]: '/lackierstellenangebote',
};

const pageFromPath = (path: string): UserType => {
  const lowerPath = path.toLowerCase();
  if (lowerPath.includes('lackierstellen')) return UserType.LACKIERJOBS;
  if (lowerPath.includes('arbeitgeber')) return UserType.EMPLOYER;
  if (lowerPath.includes('job')) return UserType.SEEKER;
  return UserType.HOME;
};

function App() {
  const [currentPage, setCurrentPage] = useState<UserType>(() => pageFromPath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(pageFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const targetPath = pathForPage[currentPage] || '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case UserType.SEEKER:
        return <JobSeeker />;
      case UserType.EMPLOYER:
        return <Employer />;
      case UserType.LACKIERJOBS:
        return <Lackierstellenangebote />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-white min-h-screen w-full text-gray-900 font-sans selection:bg-accent-primary selection:text-white flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow flex flex-col w-full bg-white">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
