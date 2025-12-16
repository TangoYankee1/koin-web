import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { createPageUrl } from '../utils/createPageUrl';
import { GraduationCap, ShieldCheck, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import api from '../api/axios';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [studentButtonHover, setStudentButtonHover] = useState(false);
  const [adminButtonHover, setAdminButtonHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const plan = params.get('plan');
    if (plan) {
      setSelectedPlan(decodeURIComponent(plan));
      setIsLogin(false); // Automatically switch to register mode if a plan is selected
    }
  }, [location.search]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLogin = async (role) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/login', { email, password });
      localStorage.setItem('role', role);
      localStorage.setItem('userEmail', email);
      localStorage.setItem('points', '0');

      if (role === 'student') {
        window.location.href = createPageUrl('StudentDashboard');
      } else {
        window.location.href = createPageUrl('AdminDashboard');
      }
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (role) => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.post(
        '/register',
        {
          name,
          email,
          password,
          password_confirmation: passwordConfirmation,
          role,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      console.log('REGISTER SUCCESS:', res.data);
      setIsLogin(true); // Switch to login view on success
    } catch (err) {
      console.error('REGISTER ERROR:', err.response?.data);

      setError(
        err.response?.data?.message ||
        JSON.stringify(err.response?.data?.errors) ||
        'Registration failed'
      );
    } finally {
      setLoading(false);
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
              {isLogin ? 'Welcome Back' : 'Create an Account'}
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>
              {isLogin ? 'Sign in to your academic hub' : 'Join the community'}
            </p>
            {selectedPlan && (
              <p style={{ color: '#FFC72C', fontSize: '1rem', marginTop: '1rem' }}>
                You have selected the <strong>{selectedPlan}</strong>.
              </p>
            )}
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.95)',
            borderRadius: '16px',
            padding: isMobile ? '1.5rem' : '2rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}>
            <form onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {!isLogin && (
                  <div>
                  <label style={{ 
                    display: 'block', 
                    color: '#002147', 
                    fontWeight: 600, 
                    marginBottom: '0.5rem',
                    fontSize: '0.9rem'
                  }}>
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
              )}
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

              {!isLogin && (
                <div>
                  <label style={{ 
                    display: 'block', 
                    color: '#002147', 
                    fontWeight: 600, 
                    marginBottom: '0.5rem',
                    fontSize: '0.9rem'
                  }}>
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
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
              )}

              {error && (
                <div style={{ color: 'red', textAlign: 'center', padding: '10px', background: 'rgba(255, 0, 0, 0.1)', borderRadius: '8px' }}>
                  {error}
                </div>
              )}

              <div style={{ paddingTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {!selectedPlan && (
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => isLogin ? handleLogin('student') : handleRegister('student')}
                    onMouseEnter={() => setStudentButtonHover(true)}
                    onMouseLeave={() => setStudentButtonHover(false)}
                    disabled={loading}
                    style={{
                      width: '100%',
                      padding: '14px',
                      background: studentButtonHover ? '#FFD966' : '#FFC72C',
                      color: '#002147',
                      fontWeight: 700,
                      borderRadius: '10px',
                      fontSize: '1rem',
                      border: 'none',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      opacity: loading ? 0.7 : 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'background 0.2s'
                    }}
                  >
                    <GraduationCap size={20} />
                    {loading ? (isLogin ? 'Logging in...' : 'Registering...') : (isLogin ? 'Login as Student' : 'Register as Student')}
                  </motion.button>
                )}

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => isLogin ? handleLogin('admin') : handleRegister('admin')}
                  onMouseEnter={() => setAdminButtonHover(true)}
                  onMouseLeave={() => setAdminButtonHover(false)}
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '14px',
                    border: '2px solid #002147',
                    color: adminButtonHover ? 'white' : '#002147',
                    fontWeight: 700,
                    borderRadius: '10px',
                    fontSize: '1rem',
                    background: adminButtonHover ? '#002147' : 'transparent',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.7 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s'
                  }}
                >
                  <ShieldCheck size={20} />
                  {loading ? (isLogin ? 'Logging in...' : 'Registering...') : (isLogin ? 'Login as Admin' : 'Register as Admin')}
                </motion.button>
              </div>
            </div>
            </form>
          </div>

          <p style={{ 
            textAlign: 'center', 
            color: 'rgba(255,255,255,0.6)', 
            fontSize: '0.875rem',
            marginTop: '1.5rem'
          }}>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button onClick={() => { setIsLogin(!isLogin); setSelectedPlan(null); }} style={{ color: '#52C5FF', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>

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