import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/background.jpeg';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex flex-1 min-h-screen">
        {/* LEFT COLUMN */}
        <div className="relative flex flex-col justify-center w-full max-w-xl px-10 pt-12 pb-8 z-10">
          {/* Subtle Network Accent */}
          <svg className="absolute left-0 top-0 w-full h-full opacity-10 -z-10" viewBox="0 0 500 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="120" r="40" fill="#56C1E8" />
            <circle cx="200" cy="300" r="20" fill="#56C1E8" />
            <circle cx="120" cy="600" r="30" fill="#56C1E8" />
            <line x1="60" y1="120" x2="200" y2="300" stroke="#56C1E8" strokeWidth="2" />
            <line x1="200" y1="300" x2="120" y2="600" stroke="#56C1E8" strokeWidth="2" />
          </svg>
          {/* Logo Row */}
          <div className="flex items-center mb-12">
            <img src="/koin-logo.png" alt="Koin Logo" className="h-12 w-12 mr-3" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#002147] leading-tight">Koin</span>
              <span className="text-base text-[#002147] opacity-80 -mt-1">Academic Collaboration</span>
            </div>
          </div>
          {/* Headline, stacked lines */}
          <div className="mb-6">
            <div className="text-5xl md:text-6xl font-bold text-[#002147] leading-none">Welcome</div>
            <div className="text-5xl md:text-6xl font-bold text-[#002147] leading-none">to Your</div>
            <div className="text-6xl md:text-7xl font-extrabold text-[#002147] leading-tight">Academic Hub</div>
          </div>
          {/* Subheading */}
          <div className="mb-10">
            <div className="text-lg md:text-xl text-[#22292f] leading-relaxed">
              A Sanctioned Space<br />for Smarter Study
            </div>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-row gap-4 mb-3">
            <Link to="/login">
              <button
                className="bg-[#FFC72C] hover:bg-[#e6b800] text-[#002147] font-bold py-3 px-8 rounded-md text-lg shadow transition border-0 min-w-[260px]"
              >
                Login with University SSO
              </button>
            </Link>
            <button
              className="border border-[#002147] text-[#002147] font-bold py-3 px-8 rounded-md text-lg transition bg-transparent hover:bg-[#002147] hover:text-white min-w-[160px]"
            >
              Learn More
            </button>
          </div>
          {/* Footer */}
          <div className="mt-2">
            <p className="text-xs text-gray-400 font-medium">Powered Securely by Guildly</p>
          </div>
        </div>
        {/* RIGHT COLUMN */}
        <div className="relative flex-1 min-h-screen hidden md:block">
          {/* Hero Image with overlay */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={heroImage}
              alt="Students collaborating"
              className="object-cover w-full h-full brightness-95"
              draggable="false"
            />
            {/* Left-to-right overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/60 to-white/90" />
          </div>
          {/* Floating UI Overlay */}
          <div className="absolute top-16 right-16 w-[340px] rounded-2xl shadow-2xl bg-white p-6 z-10 flex flex-col items-center border border-gray-100">
            {/* Simulated dashboard UI card */}
            <div className="w-full h-8 bg-gray-200 rounded mb-4" />
            <div className="w-5/6 h-4 bg-gray-100 rounded mb-2" />
            <div className="w-5/6 h-4 bg-gray-100 rounded mb-2" />
            <div className="w-2/3 h-4 bg-gray-100 rounded mb-2" />
            <div className="flex gap-2 mt-4 w-full">
              <div className="flex-1 h-8 bg-gray-100 rounded" />
              <div className="flex-1 h-8 bg-gray-100 rounded" />
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE HERO IMAGE */}
      <div className="md:hidden w-full h-64 relative">
        <img
          src={heroImage}
          alt="Students collaborating"
          className="object-cover w-full h-full brightness-95"
          draggable="false"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/60 to-transparent" />
      </div>
    </div>
  );
};

export default LandingPage;