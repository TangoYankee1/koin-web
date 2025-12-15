import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/background.jpeg';

const LandingPage = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center min-h-[80vh]">
            <div className="text-left md:w-1/2">
              <h1 className="text-5xl font-bold" style={{ color: '#002147' }}>
                Welcome to Your Academic Hub
              </h1>
              <p className="mt-4 text-xl">
                A Sanctioned Space for Smarter Study
              </p>
              <div className="mt-8">
                <Link to="/login">
                  <button
                    className="text-white font-bold py-2 px-4 rounded"
                    style={{ backgroundColor: '#FFC72C' }}
                  >
                    Login with University SSO
                  </button>
                </Link>
                <button
                  className="ml-4 font-bold py-2 px-4 rounded border"
                  style={{ color: '#002147', borderColor: '#002147' }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-4">
        <div className="container mx-auto px-4 text-left">
          <p className="text-sm" style={{ color: '#002147' }}>
            Powered Securely by Guildly
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;