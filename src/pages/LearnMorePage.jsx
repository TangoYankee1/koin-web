import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Users, BarChart2, UploadCloud, Award, MessageSquare, Eye, FileText, Lock, ArrowRight, CheckCircle } from 'lucide-react';

const LearnMorePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const whyDifferent = [
    { icon: Shield, title: 'Official & Sanctioned', desc: 'University-approved collaboration instead of shadow platforms.' },
    { icon: Users, title: 'Built for Collaboration', desc: 'Structured course hubs, shared resources, and peer accountability.' },
    { icon: BarChart2, title: 'Designed for Insight', desc: 'Admins see trends and struggles early — before students fail.' },
  ];

  const studentFeatures = [
    { icon: UploadCloud, text: 'Upload and access verified study resources' },
    { icon: Award, text: 'Earn points by contributing high-quality materials' },
    { icon: MessageSquare, text: 'Collaborate safely within course hubs' },
  ];

  const universityFeatures = [
    { icon: Eye, text: 'Monitor academic engagement trends' },
    { icon: Lock, text: 'Moderate content and protect faculty IP' },
    { icon: FileText, text: 'Reduce TA and faculty workload' },
  ];

  const howItWorks = [
    { icon: Users, text: 'Universities create official course hubs' },
    { icon: UploadCloud, text: 'Students contribute and access study resources' },
    { icon: BarChart2, text: 'Activity generates insights for proactive support' },
  ];

  return (
    <div style={{ minHeight: '100vh', width: '100%', background: 'linear-gradient(135deg, #002147 0%, #003366 50%, #002147 100%)' }}>
      <header style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        padding: isMobile ? '0.75rem 1rem' : '1rem 5%',
        background: 'rgba(0, 33, 71, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        height: '60px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', width: '100%', position: 'relative' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', position: 'absolute', left: '5%', top: '50%', transform: 'translateY(-50%)' }}>
            <img src="/koin-logo.png" alt="Koin Logo" style={{ height: '12rem' }} />
          </Link>
          <div style={{marginLeft: 'auto'}}>
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                <ArrowLeft size={16} /> Back
              </motion.button>
            </Link>
          </div>
        </div>
      </header>

      <main style={{ paddingTop: '80px' }}>
        <section style={{ padding: isMobile ? '60px 1.25rem' : '80px 5%', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <h1 style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 800, color: 'white', marginBottom: '1.5rem' }}>
              What is <span style={{ color: '#52C5FF' }}>Koin</span>?
            </h1>
            <p style={{ fontSize: isMobile ? '1rem' : '1.25rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
              Koin is a secure, university-sanctioned platform designed to support student-to-student academic collaboration — without compromising academic integrity.
            </p>
          </motion.div>
        </section>

        <section style={{ padding: isMobile ? '60px 1.25rem' : '80px 5%', background: 'rgba(0,0,0,0.2)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 700, color: 'white', textAlign: 'center', marginBottom: '1rem' }}>
                The Problem Universities Face Today
              </h2>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1rem',
                maxWidth: '600px',
                margin: '2rem auto'
              }}>
                {[
                  'Students rely on unsanctioned platforms for academic help',
                  'Faculty intellectual property is shared without oversight',
                  'Universities lack visibility into where students struggle'
                ].map((item, index) => (
                  <div key={index} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem',
                    background: 'rgba(255,255,255,0.05)',
                    padding: '1rem 1.25rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', flexShrink: 0 }} />
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
              <p style={{ color: '#FFC72C', fontSize: '1.125rem', textAlign: 'center', fontWeight: 600 }}>
                The result? Support becomes reactive instead of proactive.
              </p>
            </motion.div>
          </div>
        </section>

        <section style={{ padding: isMobile ? '60px 1.25rem' : '80px 5%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 700, color: 'white', textAlign: 'center', marginBottom: '3rem' }}>
                Why Koin Is <span style={{ color: '#52C5FF' }}>Different</span>
              </h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
                gap: '1.5rem'
              }}>
                {whyDifferent.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '16px',
                      padding: '2rem',
                      textAlign: 'center',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'rgba(82, 197, 255, 0.2)',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem'
                    }}>
                      <item.icon color="#52C5FF" size={28} />
                    </div>
                    <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{item.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section style={{ padding: isMobile ? '60px 1.25rem' : '80px 5%', background: 'rgba(0,0,0,0.2)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 700, color: 'white', textAlign: 'center', marginBottom: '3rem' }}>
                What You Can Do With <span style={{ color: '#FFC72C' }}>Koin</span>
              </h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
                gap: '2rem'
              }}>
                <div style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  borderRadius: '16px', 
                  padding: isMobile ? '1.5rem' : '2rem',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <h3 style={{ color: '#52C5FF', fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>For Students</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {studentFeatures.map((item, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <item.icon color="#52C5FF" size={20} />
                        <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  borderRadius: '16px', 
                  padding: isMobile ? '1.5rem' : '2rem',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <h3 style={{ color: '#FFC72C', fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>For Universities</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {universityFeatures.map((item, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <item.icon color="#FFC72C" size={20} />
                        <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section style={{ padding: isMobile ? '60px 1.25rem' : '80px 5%' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 700, color: 'white', textAlign: 'center', marginBottom: '3rem' }}>
                How Koin Works
              </h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
                gap: '2rem'
              }}>
                {howItWorks.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    style={{ textAlign: 'center' }}
                  >
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, rgba(82, 197, 255, 0.2), rgba(255, 199, 44, 0.1))',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem',
                      border: '2px solid rgba(82, 197, 255, 0.3)'
                    }}>
                      <item.icon color="#52C5FF" size={32} />
                    </div>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      background: '#FFC72C',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '-2.5rem auto 1rem',
                      color: '#002147',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      position: 'relative',
                      zIndex: 1
                    }}>
                      {index + 1}
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: 1.6 }}>{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section style={{ padding: isMobile ? '60px 1.25rem' : '80px 5%', background: 'rgba(0,0,0,0.2)' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 700, color: 'white', marginBottom: '2rem' }}>
                Built for Academic Integrity
              </h2>
              <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'center', gap: '1.5rem' }}>
                {['University-sanctioned', 'Privacy-first design', 'No public scraping'].map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                    <CheckCircle color="#22c55e" size={18} />
                    <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section style={{ padding: isMobile ? '60px 1.25rem' : '80px 5%' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
                Ready to Get Started?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>
                Join the academic collaboration revolution
              </p>
              <Link to="/login">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: '#FFC72C',
                    color: '#002147',
                    fontWeight: 700,
                    padding: '16px 40px',
                    borderRadius: '10px',
                    fontSize: '1.125rem',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  Continue to Login <ArrowRight size={20} />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <footer style={{ padding: isMobile ? '1.5rem 1.25rem' : '2rem 5%', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
            © 2024 Koin. A sanctioned space for smarter study.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LearnMorePage;