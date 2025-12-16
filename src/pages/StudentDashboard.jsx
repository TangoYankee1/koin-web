import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, LogOut, Users, FileText, X, BookOpen, Trophy, TrendingUp } from 'lucide-react';

const PointsBadge = ({ points }) => (
  <div style={{
    background: 'linear-gradient(135deg, #FFC72C, #FFD966)',
    padding: '8px 16px',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  }}>
    <Trophy size={16} color="#002147" />
    <span style={{ color: '#002147', fontWeight: 700, fontSize: '0.9rem' }}>{points} pts</span>
  </div>
);

const CourseHubCard = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'white',
        borderRadius: '16px',
        padding: '1.5rem',
        boxShadow: isHovered 
          ? '0 20px 40px -12px rgba(0, 33, 71, 0.15)'
          : '0 4px 12px rgba(0, 33, 71, 0.08)',
        border: isHovered ? '2px solid #52C5FF' : '2px solid transparent',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ 
        width: '48px', 
        height: '48px', 
        background: 'linear-gradient(135deg, rgba(82, 197, 255, 0.15), rgba(82, 197, 255, 0.05))',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1rem'
      }}>
        <BookOpen color="#52C5FF" size={24} />
      </div>
      <h3 style={{ color: '#002147', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{course.name}</h3>
      <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1rem' }}>{course.code}</p>
      <div style={{ 
        display: 'flex', 
        gap: '1rem',
        padding: '0.75rem',
        background: isHovered ? 'linear-gradient(135deg, #52C5FF, #38bdf8)' : '#f8fafc',
        borderRadius: '10px',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Users size={14} color={isHovered ? 'white' : '#64748b'} />
          <span style={{ fontSize: '0.8rem', color: isHovered ? 'white' : '#64748b', fontWeight: 500 }}>{course.students}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <FileText size={14} color={isHovered ? 'white' : '#64748b'} />
          <span style={{ fontSize: '0.8rem', color: isHovered ? 'white' : '#64748b', fontWeight: 500 }}>{course.resources}</span>
        </div>
      </div>
    </motion.div>
  );
};

const UploadResourceModal = ({ open, onClose, courses, onSubmit }) => {
  const [course, setCourse] = useState(courses[0]?.id || '');
  const [file, setFile] = useState(null);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (course && file) {
      onSubmit({ course, file });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 33, 71, 0.8)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '1rem'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'white',
            borderRadius: '20px',
            padding: '2rem',
            width: '100%',
            maxWidth: '450px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#002147' }}>Upload Resource</h2>
            <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
              <X size={24} />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', color: '#002147', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>Course</label>
              <select 
                value={course} 
                onChange={(e) => setCourse(e.target.value)} 
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: '2px solid #e2e8f0',
                  fontSize: '1rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                {courses.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: '#002147', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>File</label>
              <div style={{
                border: '2px dashed #e2e8f0',
                borderRadius: '10px',
                padding: '2rem',
                textAlign: 'center',
                cursor: 'pointer',
                background: '#f8fafc'
              }}>
                <input 
                  type="file" 
                  onChange={(e) => setFile(e.target.files[0])} 
                  style={{ display: 'none' }}
                  id="file-upload"
                />
                <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
                  <Upload color="#94a3b8" size={32} style={{ marginBottom: '0.5rem' }} />
                  <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                    {file ? file.name : 'Click to upload or drag and drop'}
                  </p>
                </label>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                type="button" 
                onClick={onClose}
                style={{
                  flex: 1,
                  padding: '12px',
                  borderRadius: '10px',
                  border: '2px solid #e2e8f0',
                  background: 'white',
                  color: '#64748b',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button 
                type="submit"
                style={{
                  flex: 1,
                  padding: '12px',
                  borderRadius: '10px',
                  border: 'none',
                  background: '#FFC72C',
                  color: '#002147',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Upload
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const MOCK_COURSES = [
  { id: '1', name: 'Introduction to Computer Science', code: 'CS101', students: 234, resources: 45 },
  { id: '2', name: 'Calculus I', code: 'MATH201', students: 189, resources: 67 },
  { id: '3', name: 'English Composition', code: 'ENG102', students: 156, resources: 34 },
  { id: '4', name: 'Physics Fundamentals', code: 'PHY101', students: 198, resources: 52 },
  { id: '5', name: 'World History', code: 'HIST101', students: 145, resources: 28 },
  { id: '6', name: 'Organic Chemistry', code: 'CHEM201', students: 112, resources: 41 },
];

export default function StudentDashboard() {
  const [points, setPoints] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const savedPoints = localStorage.getItem('points');
    if (savedPoints) {
      setPoints(parseInt(savedPoints, 10));
    }
    
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleUploadResource = (data) => {
    console.log('POST /resources:', data);
    const newPoints = points + 10;
    setPoints(newPoints);
    localStorage.setItem('points', newPoints.toString());
    setIsModalOpen(false);
    alert('Resource uploaded successfully! +10 points earned');
  };

  const handleLogout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('userEmail');
    window.location.href = '/';
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}>
      <header style={{
        background: 'white',
        borderBottom: '1px solid #f1f5f9',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        height: '60px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: isMobile ? '0.875rem 1rem' : '1rem 2rem',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          width: '100%',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)' }}>
            <img src="/koin-logo.png" alt="Koin Logo" style={{ height: '12rem' }} />
            {!isMobile && <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#002147' }}>Student Dashboard</h1>}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: 'auto' }}>
            <PointsBadge points={points} />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#94a3b8',
                padding: '8px'
              }}
            >
              <LogOut size={20} />
            </motion.button>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '1.5rem 1rem' : '2rem' }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between', 
          alignItems: isMobile ? 'stretch' : 'center',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '1.875rem', fontWeight: 700, color: '#002147', marginBottom: '0.25rem' }}>
              Welcome Back!
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem' }}>Explore your course hubs and contribute resources</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsModalOpen(true)}
            style={{
              background: 'linear-gradient(135deg, #FFC72C, #FFD966)',
              color: '#002147',
              fontWeight: 700,
              padding: '12px 24px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '1rem',
              boxShadow: '0 4px 14px rgba(255, 199, 44, 0.4)'
            }}
          >
            <Upload size={18} />
            Upload Resource
          </motion.button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem'
        }}>
          {MOCK_COURSES.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <CourseHubCard course={course} />
            </motion.div>
          ))}
        </div>
      </main>

      <UploadResourceModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courses={MOCK_COURSES}
        onSubmit={handleUploadResource}
      />
    </div>
  );
}