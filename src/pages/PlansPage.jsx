import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, X, ArrowLeft, Star, Zap, Crown } from 'lucide-react';

const PLANS = [
  {
    name: 'Koin Pilot Plan',
    subtitle: 'Free',
    price: 'Free',
    icon: Star,
    users: 'Up to 200 Students & 3 Faculty/Admin seats',
    courses: 'Up to 8-12 Course Hubs',
    features: [
      'Secure Resource Exchange',
      'Course Hub Creation',
      'Gamified "Points" System',
    ],
    limitations: [
      'No AI Tutor',
      'No Admin Analytics',
      'No LMS Integration',
    ],
    cta: 'Start Free',
    highlighted: false,
    color: '#52C5FF'
  },
  {
    name: 'The Synergy Plan',
    subtitle: 'For Growing Universities',
    price: 'Custom',
    icon: Zap,
    priceDetail: 'Annual subscription based on student enrollment',
    users: 'Up to 10,000 Students & Unlimited Faculty/Admin seats',
    features: [
      'Everything in Pilot, plus:',
      'Admin Analytics Dashboard (The "Heat Map")',
      'Full LMS Integration (Canvas, Blackboard, etc.)',
      'Full Moderation Tools',
      'Dedicated Onboarding & Support',
    ],
    cta: 'Contact Sales',
    highlighted: true,
    color: '#FFC72C'
  },
  {
    name: 'The Nexus Plan',
    subtitle: 'Enterprise',
    price: 'Enterprise',
    icon: Crown,
    priceDetail: 'Custom Enterprise Pricing',
    users: 'Unlimited',
    features: [
      'Everything in Synergy, plus:',
      'The "Safe AI" Tutor (The Killer Feature)',
      'Advanced AI Customization (Train on your private archives)',
      'Custom Data Reporting & API Access',
      'Dedicated Account Manager',
    ],
    cta: 'Contact Sales',
    highlighted: false,
    color: '#a855f7'
  },
];

export default function Plans() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src="/koin-logo.png" alt="Koin Logo" style={{ height: isMobile ? '2rem' : '2.5rem' }} />
          </Link>
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
      </header>

      <main style={{ paddingTop: '100px', paddingBottom: '60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 5%' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h1 style={{ fontSize: isMobile ? '2rem' : '2.75rem', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>
              Choose Your <span style={{ color: '#FFC72C' }}>Plan</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: isMobile ? '1rem' : '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Select the perfect plan for your university's academic collaboration needs
            </p>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
            gap: '1.5rem',
            alignItems: 'stretch'
          }}>
            {PLANS.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: plan.highlighted 
                    ? 'linear-gradient(135deg, rgba(255, 199, 44, 0.15), rgba(255, 199, 44, 0.05))'
                    : 'rgba(255,255,255,0.05)',
                  borderRadius: '20px',
                  padding: '2rem',
                  border: plan.highlighted 
                    ? '2px solid rgba(255, 199, 44, 0.5)'
                    : '1px solid rgba(255,255,255,0.1)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {plan.highlighted && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#FFC72C',
                    color: '#002147',
                    padding: '4px 16px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 700
                  }}>
                    Most Popular
                  </div>
                )}

                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    background: `rgba(${plan.color === '#52C5FF' ? '82, 197, 255' : plan.color === '#FFC72C' ? '255, 199, 44' : '168, 85, 247'}, 0.2)`,
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem'
                  }}>
                    <plan.icon color={plan.color} size={28} />
                  </div>
                  <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>{plan.name}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>{plan.subtitle}</p>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: plan.color }}>{plan.price}</div>
                  {plan.priceDetail && (
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginTop: '0.5rem' }}>{plan.priceDetail}</p>
                  )}
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', marginBottom: '0.75rem', fontWeight: 600 }}>INCLUDES:</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <Check color="#22c55e" size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {plan.limitations && (
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', marginBottom: '0.75rem', fontWeight: 600 }}>LIMITATIONS:</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {plan.limitations.map((limitation, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <X color="#ef4444" size={16} style={{ flexShrink: 0 }} />
                          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>{limitation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{ marginTop: 'auto' }}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: '100%',
                      padding: '14px',
                      background: plan.highlighted ? '#FFC72C' : 'rgba(255,255,255,0.1)',
                      color: plan.highlighted ? '#002147' : 'white',
                      fontWeight: 700,
                      borderRadius: '10px',
                      border: plan.highlighted ? 'none' : '1px solid rgba(255,255,255,0.2)',
                      cursor: 'pointer',
                      fontSize: '1rem'
                    }}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ textAlign: 'center', marginTop: '3rem' }}
          >
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
              Need help choosing?{' '}
              <a href="#" style={{ color: '#52C5FF', textDecoration: 'none', fontWeight: 600 }}>Contact our team</a>
            </p>
          </motion.div>
        </div>
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
}
