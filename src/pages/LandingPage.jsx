import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Landmark, BookOpen, Users, Zap, ArrowRight, Menu, X } from 'lucide-react';

const LandingPage = () => {
  const [loginHover, setLoginHover] = useState(false);
  const [learnMoreHover, setLearnMoreHover] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const features = [
    { icon: BookOpen, title: 'Smart Study Resources', desc: 'Access curated materials from top students' },
    { icon: Users, title: 'Collaborative Learning', desc: 'Connect with peers in your courses' },
    { icon: Zap, title: 'AI-Powered Insights', desc: 'Get personalized study recommendations' },
  ];

  const stats = [
    { value: '10K+', label: 'Active Students' },
    { value: '500+', label: 'Courses Covered' },
    { value: '98%', label: 'Satisfaction Rate' },
  ];

  return (
    <div style={{ minHeight: '100vh', width: '100%', background: 'linear-gradient(135deg, #002147 0%, #003366 50%, #002147 100%)', overflowX: 'hidden' }}>
      <header style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        zIndex: 50, 
        padding: isMobile ? '0.75rem 1rem' : '1rem 5%', 
        background: 'rgba(0, 33, 71, 0.95)', 
        backdropFilter: 'blur(10px)', 
        borderBottom: '1px solid rgba(255,255,255,0.1)' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', position: 'relative', height: '60px' }}>
          <img src="/koin-logo.png" alt="Koin Logo" style={{ height: '12rem', position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }} />
          
          <div style={{ marginLeft: 'auto' }}>
          {isMobile ? (
            <>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '8px' }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'rgba(0, 33, 71, 0.98)',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    borderBottom: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <Link to="/learn-more" style={{ color: 'white', padding: '0.75rem', fontSize: '1rem' }} onClick={() => setMobileMenuOpen(false)}>About</Link>
                  <Link to="/plans" style={{ color: 'white', padding: '0.75rem', fontSize: '1rem' }} onClick={() => setMobileMenuOpen(false)}>Plans</Link>
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                    <button style={{ width: '100%', background: '#FFC72C', color: '#002147', fontWeight: 600, padding: '12px 24px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                      Sign In
                    </button>
                  </Link>
                </motion.div>
              )}
            </>
          ) : (
            <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <Link to="/learn-more" style={{ color: 'white', textDecoration: 'none', fontSize: '0.95rem', opacity: 0.9 }}>About</Link>
              <Link to="/plans" style={{ color: 'white', textDecoration: 'none', fontSize: '0.95rem', opacity: 0.9 }}>Plans</Link>
              <Link to="/login">
                <button style={{ background: '#FFC72C', color: '#002147', fontWeight: 600, padding: '10px 24px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.95rem' }}>
                  Sign In
                </button>
              </Link>
            </nav>
          )}
          </div>
        </div>
      </header>

      <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        padding: isMobile ? '100px 1.25rem 60px' : '120px 5% 80px' 
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
          gap: isMobile ? '2.5rem' : '4rem', 
          alignItems: 'center', 
          width: '100%' 
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'inline-block', background: 'rgba(82, 197, 255, 0.15)', borderRadius: '50px', padding: '8px 20px', marginBottom: '1.25rem' }}>
              <span style={{ color: '#52C5FF', fontSize: '0.875rem', fontWeight: 600 }}>Version 2.0 is here</span>
            </div>
            
            <h1 style={{ 
              fontSize: isMobile ? '2.25rem' : '3.5rem', 
              fontWeight: 800, 
              color: 'white', 
              lineHeight: 1.1, 
              marginBottom: '1.25rem' 
            }}>
              Your <span style={{ color: '#52C5FF' }}>Academic Hub</span> for Smarter Study
            </h1>
            
            <p style={{ 
              fontSize: isMobile ? '1rem' : '1.25rem', 
              color: 'white', 
              opacity: 0.8, 
              lineHeight: 1.6, 
              marginBottom: '1.75rem', 
              maxWidth: '500px' 
            }}>
              A sanctioned space where students collaborate, share knowledge, and excel together. University verified. Always secure.
            </p>

            <div style={{ 
              display: 'flex', 
              flexDirection: isMobile ? 'column' : 'row', 
              gap: '1rem', 
              marginBottom: '2rem' 
            }}>
              <Link to="/login" style={{ width: isMobile ? '100%' : 'auto' }}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setLoginHover(true)}
                  onMouseLeave={() => setLoginHover(false)}
                  style={{
                    width: isMobile ? '100%' : 'auto',
                    background: loginHover ? '#FFD966' : '#FFC72C',
                    color: '#002147',
                    fontWeight: 700,
                    padding: isMobile ? '14px 24px' : '16px 32px',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'background 0.2s'
                  }}
                >
                  Get Started Free <ArrowRight size={18} />
                </motion.button>
              </Link>
              <Link to="/learn-more" style={{ width: isMobile ? '100%' : 'auto' }}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setLearnMoreHover(true)}
                  onMouseLeave={() => setLearnMoreHover(false)}
                  style={{
                    width: isMobile ? '100%' : 'auto',
                    border: '2px solid rgba(255,255,255,0.3)',
                    color: learnMoreHover ? '#002147' : 'white',
                    fontWeight: 600,
                    padding: isMobile ? '14px 24px' : '16px 32px',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    background: learnMoreHover ? 'white' : 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  Learn More
                </motion.button>
              </Link>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? '1rem' : '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Shield color="#52C5FF" size={18} />
                <span style={{ color: 'white', fontSize: '0.875rem', opacity: 0.8 }}>Secure & Private</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Landmark color="#52C5FF" size={18} />
                <span style={{ color: 'white', fontSize: '0.875rem', opacity: 0.8 }}>University Verified</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ 
              background: 'linear-gradient(145deg, rgba(82, 197, 255, 0.1), rgba(255, 199, 44, 0.05))',
              borderRadius: '20px',
              padding: isMobile ? '1.5rem' : '2.5rem',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)', 
              width: '100%',
              maxWidth: '450px'
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'white', fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Why Students Love Koin</h3>
                <p style={{ color: 'white', opacity: 0.7, fontSize: '0.9rem' }}>Join thousands already studying smarter</p>
              </div>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  style={{ 
                    display: 'flex', 
                    gap: '1rem', 
                    padding: isMobile ? '0.875rem' : '1rem',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '12px',
                    marginBottom: '0.75rem'
                  }}
                >
                  <div style={{ 
                    width: isMobile ? '40px' : '44px', 
                    height: isMobile ? '40px' : '44px', 
                    background: 'rgba(82, 197, 255, 0.2)', 
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <feature.icon color="#52C5FF" size={isMobile ? 20 : 22} />
                  </div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: isMobile ? '0.9rem' : '1rem', fontWeight: 600, marginBottom: '4px' }}>{feature.title}</h4>
                    <p style={{ color: 'white', opacity: 0.7, fontSize: isMobile ? '0.8rem' : '0.875rem' }}>{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: isMobile ? '60px 1.25rem' : '80px 5%', background: 'rgba(0,0,0,0.2)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
              gap: isMobile ? '1.5rem' : '2rem' 
            }}
          >
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center', padding: isMobile ? '1.5rem' : '2rem' }}>
                <div style={{ fontSize: isMobile ? '2.25rem' : '3rem', fontWeight: 800, color: '#FFC72C', marginBottom: '0.5rem' }}>{stat.value}</div>
                <div style={{ color: 'white', opacity: 0.8, fontSize: '1rem' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section style={{ padding: isMobile ? '60px 1.25rem' : '80px 5%' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: isMobile ? '1.75rem' : '2.5rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
              Ready to Study <span style={{ color: '#52C5FF' }}>Smarter</span>?
            </h2>
            <p style={{ color: 'white', opacity: 0.8, fontSize: isMobile ? '1rem' : '1.125rem', marginBottom: '2rem' }}>
              Join your university peers and start collaborating today.
            </p>
            <Link to="/login">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: '#FFC72C',
                  color: '#002147',
                  fontWeight: 700,
                  padding: isMobile ? '16px 36px' : '18px 48px',
                  borderRadius: '8px',
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                Get Started Free <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <footer style={{ padding: isMobile ? '1.5rem 1.25rem' : '2rem 5%', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: isMobile ? '1rem' : '0',
          textAlign: isMobile ? 'center' : 'left'
        }}>
          <img src="/koin-logo.png" alt="Koin Logo" style={{ height: '2.5rem', opacity: 0.8 }} />
          <p style={{ color: 'white', opacity: 0.6, fontSize: '0.875rem' }}>© 2024 Koin. A sanctioned space for smarter study.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;