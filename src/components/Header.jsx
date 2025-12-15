import React from 'react';

const Header = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto px-4 flex items-center">
        <img src="/koin-logo.png" alt="Koin Logo" className="h-10" />
        <span className="ml-2 text-lg font-semibold" style={{ color: '#002147' }}>
          Academic Collaboration
        </span>
      </div>
    </header>
  );
};

export default Header;