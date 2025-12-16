import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { createPageUrl } from '../utils/createPageUrl';
import { GraduationCap, ShieldCheck, ArrowLeft, Eye, EyeOff } from 'lucide-react';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [studentButtonHover, setStudentButtonHover] = useState(false);
  const [adminButtonHover, setAdminButtonHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLogin = (role) => {
    localStorage.setItem('role', role);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('points', '0');

    if (role === 'student') {
      window.location.href = createPageUrl('StudentDashboard');
    } else {
      window.location.href = createPageUrl('AdminDashboard');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      width: '100%', 
      background: 'linear-gradient(135deg, #002147 0%, #003366 50%, #002147 100%)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <header style={{ 
        padding: isMobile ? '1rem' : '1.5rem 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        height: '60px',
        position: 'relative',
        width: '100%'
      }}>
        <Link to="/" style={{ position: 'absolute', left: '5%', top: '50%', transform: 'translateY(-50%)' }}>
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
      </header>

      <main style={{ 
        flex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: isMobile ? '1rem' : '2rem'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%', maxWidth: '420px' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ 
              fontSize: isMobile ? '1.75rem' : '2.25rem', 
              fontWeight: 800, 
              color: 'white',
              marginBottom: '0.5rem'
            }}>
              Welcome Back
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>
              Sign in to your academic hub
            </p>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.95)',
            borderRadius: '16px',
            padding: isMobile ? '1.5rem' : '2rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ 
                  display: 'block', 
                  color: '#002147', 
                  fontWeight: 600, 
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your.email@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '10px',
                    border: '2px solid #e2e8f0',
                    fontSize: '1rem',
                    transition: 'border-color 0.2s',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#52C5FF'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div>
                <label style={{ 
                  display: 'block', 
                  color: '#002147', 
                  fontWeight: 600, 
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}>
                  Password
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '14px 48px 14px 16px',
                      borderRadius: '10px',
                      border: '2px solid #e2e8f0',
                      fontSize: '1rem',
                      transition: 'border-color 0.2s',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#52C5FF'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '14px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#94a3b8'
                    }}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div style={{ paddingTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleLogin('student')}
                  onMouseEnter={() => setStudentButtonHover(true)}
                  onMouseLeave={() => setStudentButtonHover(false)}
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: studentButtonHover ? '#FFD966' : '#FFC72C',
                    color: '#002147',
                    fontWeight: 700,
                    borderRadius: '10px',
                    fontSize: '1rem',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'background 0.2s'
                  }}
                >
                  <GraduationCap size={20} />
                  Login as Student
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleLogin('admin')}
                  onMouseEnter={() => setAdminButtonHover(true)}
                  onMouseLeave={() => setAdminButtonHover(false)}
                  style={{
                    width: '100%',
                    padding: '14px',
                    border: '2px solid #002147',
                    color: adminButtonHover ? 'white' : '#002147',
                    fontWeight: 700,
                    borderRadius: '10px',
                    fontSize: '1rem',
                    background: adminButtonHover ? '#002147' : 'transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s'
                  }}
                >
                  <ShieldCheck size={20} />
                  Login as Admin
                </motion.button>
              </div>
            </div>
          </div>

          <p style={{ 
            textAlign: 'center', 
            color: 'rgba(255,255,255,0.6)', 
            fontSize: '0.875rem',
            marginTop: '1.5rem'
          }}>
            Powered Securely by Guildly
          </p>
        </motion.div>
      </main>
    </div>
  );
}