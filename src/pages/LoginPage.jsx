import React, { useState } from 'react';
import { createPageUrl } from '../utils/createPageUrl';
import backgroundImage from '../assets/university-students.jpg';
import { GraduationCap, ShieldCheck } from 'lucide-react';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [studentButtonHover, setStudentButtonHover] = useState(false);
  const [adminButtonHover, setAdminButtonHover] = useState(false);

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

  const styles = {
    container: {
      minHeight: '100vh',
      width: '100vw',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 0,
      opacity: 0.5,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 33, 71, 0.1)',
      zIndex: 1,
    },
    content: {
      position: 'relative',
      zIndex: 2,
      width: '100%',
      maxWidth: '28rem',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      marginBottom: '3rem',
    },
    logoIconContainer: {
      width: '3.5rem',
      height: '3.5rem',
      backgroundColor: '#002147',
      borderRadius: '0.75rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      color: 'white',
      letterSpacing: '-0.025em',
    },
    subtitle: {
      fontSize: '0.75rem',
      color: '#52C5FF',
      fontWeight: '500',
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '1rem',
      boxShadow: '0 10px 15px -3px rgba(0, 33, 71, 0.1), 0 4px 6px -2px rgba(0, 33, 71, 0.1)',
      padding: '2rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#002147',
      textAlign: 'center',
      marginBottom: '0.5rem',
    },
    cardSubtitle: {
      color: '#002147',
      textAlign: 'center',
      marginBottom: '2rem',
    },
    inputLabel: {
      color: '#002147',
      fontWeight: '500',
    },
    input: {
      height: '3rem',
      border: '1px solid #e2e8f0',
      borderRadius: '0.5rem',
      width: '100%',
      padding: '0 0.75rem',
      backgroundColor: 'white',
    },
    studentButton: {
      width: '100%',
      height: '3rem',
      backgroundColor: studentButtonHover ? '#FFD966' : '#FFC72C',
      color: '#002147',
      fontWeight: 'bold',
      borderRadius: '8px',
      fontSize: '1.125rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'background 0.2s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    adminButton: {
      width: '100%',
      height: '3rem',
      border: '2px solid white',
      color: adminButtonHover ? '#002147' : 'white',
      fontWeight: 'bold',
      borderRadius: '8px',
      fontSize: '1.125rem',
      background: adminButtonHover ? 'white' : 'transparent',
      cursor: 'pointer',
      transition: 'background 0.2s, color 0.2s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    footerText: {
      textAlign: 'center',
      fontSize: '0.875rem',
      color: 'white',
      opacity: 0.8,
      marginTop: '2rem',
    },
  };

  return (
    <div style={styles.container}>
      <img
        src={backgroundImage}
        alt="Academic collaboration background"
        style={styles.backgroundImage}
        draggable="false"
      />
      <div style={styles.overlay} />

      <div style={styles.content}>
        <div style={styles.logoContainer}>
          <img src="/koin-logo.png" alt="Koin Logo" style={{ height: '56px', width: '56px' }} />
          <div>
            <h1 style={styles.title}>Koin</h1>
            <p style={styles.subtitle}>Academic Collaboration</p>
          </div>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Welcome Back</h2>
          <p style={styles.cardSubtitle}>Sign in to your academic hub</p>

          <div style={{display: 'flex', flexDirection: 'column', gap: '1.25rem'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              <label htmlFor="email" style={styles.inputLabel}>Email</label>
              <input
                id="email"
                type="email"
                placeholder="your.email@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
              />
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              <label htmlFor="password" style={styles.inputLabel}>Password</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
              />
            </div>

            <div style={{paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
              <button
                onClick={() => handleLogin('student')}
                style={styles.studentButton}
                onMouseEnter={() => setStudentButtonHover(true)}
                onMouseLeave={() => setStudentButtonHover(false)}
              >
                <GraduationCap style={{width: '1.25rem', height: '1.25rem', marginRight: '0.5rem'}} />
                Login as Student
              </button>

              <button
                onClick={() => handleLogin('admin')}
                style={styles.adminButton}
                onMouseEnter={() => setAdminButtonHover(true)}
                onMouseLeave={() => setAdminButtonHover(false)}
              >
                <ShieldCheck style={{width: '1.25rem', height: '1.25rem', marginRight: '0.5rem'}} />
                Login as Admin
              </button>
            </div>
          </div>
        </div>

        <p style={styles.footerText}>
          Powered Securely by Guildly
        </p>
      </div>
    </div>
  );
}