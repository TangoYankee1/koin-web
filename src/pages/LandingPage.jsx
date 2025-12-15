import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/background.jpeg';
import koinLogo from '../assets/koin-logo.png';
import backgroundImage from '../assets/background.jpeg';

const LandingPage = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'white' }}>
      <div style={{ display: 'flex', flex: 1, minHeight: '100vh' }}>
        {/* LEFT COLUMN */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', maxWidth: '640px', padding: '48px 40px 32px 40px', zIndex: 10 }}>
          {/* Subtle Network Accent */}
          <svg style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', opacity: 0.1, zIndex: -10 }} viewBox="0 0 500 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="120" r="40" fill="#56C1E8" />
            <circle cx="200" cy="300" r="20" fill="#56C1E8" />
            <circle cx="120" cy="600" r="30" fill="#56C1E8" />
            <line x1="60" y1="120" x2="200" y2="300" stroke="#56C1E8" strokeWidth="2" />
            <line x1="200" y1="300" x2="120" y2="600" stroke="#56C1E8" strokeWidth="2" />
          </svg>
          {/* Logo Row */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '48px' }}>
            <img src={koinLogo} alt="Koin Logo" style={{ height: '48px', width: '48px', marginRight: '12px' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#002147', lineHeight: 1.1 }}>Koin</span>
              <span style={{ fontSize: '1rem', color: '#002147', opacity: 0.8, marginTop: '-4px' }}>Academic Collaboration</span>
            </div>
          </div>
          {/* Headline, stacked lines */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#002147', lineHeight: 1 }}>Welcome</div>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#002147', lineHeight: 1 }}>to Your</div>
            <div style={{ fontSize: '3.5rem', fontWeight: 800, color: '#002147', lineHeight: 1.1 }}>Academic Hub</div>
          </div>
          {/* Subheading */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{ fontSize: '1.125rem', color: '#22292f', lineHeight: 1.5 }}>
              A Sanctioned Space<br />for Smarter Study
            </div>
          </div>
          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', marginBottom: '12px' }}>
            <Link to="/login">
              <button
                style={{ background: '#FFC72C', color: '#002147', fontWeight: 'bold', padding: '12px 32px', borderRadius: '8px', fontSize: '1.125rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: 'none', minWidth: '260px', transition: 'background 0.2s' }}
              >
                Login with University SSO
              </button>
            </Link>
            <button
              style={{ border: '2px solid #002147', color: '#002147', fontWeight: 'bold', padding: '12px 32px', borderRadius: '8px', fontSize: '1.125rem', background: 'transparent', minWidth: '160px', transition: 'background 0.2s, color 0.2s' }}
            >
              Learn More
            </button>
          </div>
          {/* Footer */}
          <div style={{ marginTop: '8px' }}>
            <p style={{ fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 500 }}>Powered Securely by Guildly</p>
          </div>
        </div>
        {/* RIGHT COLUMN */}
        <div style={{ position: 'relative', flex: 1, minHeight: '100vh', display: 'none' }} className="md:block">
          {/* Hero Image with overlay */}
          <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <img
              src={heroImage}
              alt="Students collaborating"
              style={{ objectFit: 'cover', width: '100%', height: '100%', filter: 'brightness(0.95)' }}
              draggable="false"
            />
            {/* Left-to-right overlay for text contrast */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, transparent, rgba(255,255,255,0.6), rgba(255,255,255,0.9))' }} />
          </div>
          {/* Floating UI Overlay */}
          <div style={{ position: 'absolute', top: '64px', right: '64px', width: '340px', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', background: 'white', padding: '24px', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #F3F4F6' }}>
            {/* Simulated dashboard UI card */}
            <div style={{ width: '100%', height: '32px', background: '#E5E7EB', borderRadius: '8px', marginBottom: '16px' }} />
            <div style={{ width: '83.3333%', height: '16px', background: '#F3F4F6', borderRadius: '8px', marginBottom: '8px' }} />
            <div style={{ width: '83.3333%', height: '16px', background: '#F3F4F6', borderRadius: '8px', marginBottom: '8px' }} />
            <div style={{ width: '66.6667%', height: '16px', background: '#F3F4F6', borderRadius: '8px', marginBottom: '8px' }} />
            <div style={{ display: 'flex', gap: '8px', marginTop: '16px', width: '100%' }}>
              <div style={{ flex: 1, height: '32px', background: '#F3F4F6', borderRadius: '8px' }} />
              <div style={{ flex: 1, height: '32px', background: '#F3F4F6', borderRadius: '8px' }} />
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE HERO IMAGE */}
      <div style={{ width: '100%', height: '256px', position: 'relative', display: 'block' }} className="md:hidden">
        <img
          src={heroImage}
          alt="Students collaborating"
          style={{ objectFit: 'cover', width: '100%', height: '100%', filter: 'brightness(0.95)' }}
          draggable="false"
        />
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img 
             src={backgroundImage} 
             alt="Academic collaboration background" 
             style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
           /> 
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.75), rgba(255,255,255,0.5), transparent)' }} /> 
        </div> 
      </div>
    </div>
  );
};

export default LandingPage;