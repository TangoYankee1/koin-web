import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import koinLogo from '../assets/koin-logo.png';
import backgroundImage from '../assets/background.jpeg';
import { Shield, Landmark } from 'lucide-react';

const LandingPage = () => {
  const [loginHover, setLoginHover] = useState(false);
  const [learnMoreHover, setLearnMoreHover] = useState(false);

  return (
    <div style={{ minHeight: '100vh', width: '100vw', position: 'relative', overflow: 'hidden', background: '#002147' }}>
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Academic collaboration background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.5
        }}
        draggable="false"
      />
      {/* Overlay */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 33, 71, 0.1)', zIndex: 1 }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 8%' }}>
        <div style={{ maxWidth: '50%' }}>
          {/* Logo Row */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '48px' }}>
            <div style={{ background: '#002147', padding: '8px', borderRadius: '8px', marginRight: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={koinLogo} alt="Koin Logo" style={{ height: '32px', width: '32px' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', lineHeight: 1.1 }}>Koin</span>
              <span style={{ fontSize: '1rem', color: '#52C5FF', opacity: 0.9, marginTop: '-4px' }}>Academic Collaboration</span>
            </div>
          </div>

          {/* Headline */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '3.75rem', fontWeight: 'bold', color: 'white', lineHeight: 1.2 }}>Welcome</div>
            <div style={{ fontSize: '3.75rem', fontWeight: 'bold', color: 'white', lineHeight: 1.2 }}>to Your</div>
            <div style={{ fontSize: '4.5rem', fontWeight: 800, color: '#52C5FF', lineHeight: 1.2 }}>Academic Hub</div>
          </div>

          {/* Subheading */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{ fontSize: '1.25rem', color: 'white', lineHeight: 1.5, opacity: 0.9 }}>
              A Sanctioned Space
              <br />
              for Smarter Study
            </div>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', marginBottom: '48px' }}>
            <Link to="/login">
              <button
                onMouseEnter={() => setLoginHover(true)}
                onMouseLeave={() => setLoginHover(false)}
                style={{
                  background: loginHover ? '#FFD966' : '#FFC72C',
                  color: '#002147',
                  fontWeight: 'bold',
                  padding: '14px 36px',
                  borderRadius: '8px',
                  fontSize: '1.125rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
              >
                Login with University SSO
              </button>
            </Link>
            <button
              onMouseEnter={() => setLearnMoreHover(true)}
              onMouseLeave={() => setLearnMoreHover(false)}
              style={{
                border: '2px solid white',
                color: learnMoreHover ? '#002147' : 'white',
                fontWeight: 'bold',
                padding: '14px 36px',
                borderRadius: '8px',
                fontSize: '1.125rem',
                background: learnMoreHover ? 'white' : 'transparent',
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s'
              }}
            >
              Learn More
            </button>
          </div>

          {/* Footer Icons */}
          <div style={{ display: 'flex', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Shield color="white" size={20} style={{ opacity: 0.8 }} />
              <span style={{ color: 'white', fontSize: '0.875rem', fontWeight: 500, opacity: 0.8 }}>Secure & Private</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Landmark color="white" size={20} style={{ opacity: 0.8 }} />
              <span style={{ color: 'white', fontSize: '0.875rem', fontWeight: 500, opacity: 0.8 }}>University Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;