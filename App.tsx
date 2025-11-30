import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { JobSeeker } from './pages/JobSeeker';
import { Employer } from './pages/Employer';
import { UserType } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<UserType>(UserType.HOME);

  const renderPage = () => {
    switch (currentPage) {
      case UserType.HOME:
        return <Home onNavigate={setCurrentPage} />;
      case UserType.SEEKER:
        return <JobSeeker />;
      case UserType.EMPLOYER:
        return <Employer />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-deep-black min-h-screen text-white font-sans selection:bg-neon-pink selection:text-white flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;