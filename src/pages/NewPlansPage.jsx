import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, X, ArrowLeft, Star, Zap, Crown, ArrowRight } from 'lucide-react';

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
    cta: <Link to="/">Start Free</Link>,
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
    cta: <Link to="/">Contact Sales</Link>,
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
    cta: <Link to="/">Contact Sales</Link>,
    highlighted: false,
    color: '#a855f7'
  },
];

export default function NewPlansPage() {
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
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        height: '60px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', width: '100%', position: 'relative' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', position: 'absolute', left: '5%', top: '50%', transform: 'translateY(-50%)' }}>
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

                <div style={{ flexGrow: 1, marginBottom: '2rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1rem' }}>
                    {plan.features.map((feature) => (
                      <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'rgba(255,255,255,0.9)' }}>
                        <Check size={16} style={{ color: '#34D399' }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.limitations && plan.limitations.length > 0 && (
                    <ul style={{ listStyle: 'none', padding: 0, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', marginTop: '1rem' }}>
                      {plan.limitations.map((limitation) => (
                        <li key={limitation} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>
                          <X size={16} style={{ color: '#F87171' }} />
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${plan.color}` }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: plan.highlighted ? plan.color : 'transparent',
                    color: plan.highlighted ? '#002147' : 'white',
                    border: `2px solid ${plan.color}`,
                    padding: '12px 24px',
                    borderRadius: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    width: '100%',
                    marginTop: 'auto'
                  }}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>


        </div>
      </main>
    </div>
  );
}