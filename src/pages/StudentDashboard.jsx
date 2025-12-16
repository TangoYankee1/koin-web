import React, { useState, useEffect } from 'react';
import { BookOpen, Upload, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const PointsBadge = ({ points }) => (
  <div style={styles.pointsBadge}>
    <span style={styles.pointsText}>Points: {points}</span>
  </div>
);

const CourseHubCard = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{ ...styles.card, ...(isHovered ? styles.cardHover : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 style={{ ...styles.cardTitle, ...(isHovered && { color: '#3B82F6' }) }}>{course.name}</h3>
      <p style={{ ...styles.cardCode, ...(isHovered && { color: '#3B82F6' }) }}>{course.code}</p>
      <div style={{ ...styles.cardStats, ...(isHovered ? styles.cardStatsHover : {}) }}>
        <p>Students: {course.students}</p>
        <p>Resources: {course.resources}</p>
      </div>
    </div>
  );
};

const UploadResourceModal = ({ open, onClose, courses, onSubmit }) => {
  if (!open) return null;

  const [course, setCourse] = useState(courses[0]?.id || '');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (course && file) {
      onSubmit({ course, file });
    }
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modal}>
        <h2 style={styles.modalTitle}>Upload Resource</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="course-select">Course</label>
            <select id="course-select" value={course} onChange={(e) => setCourse(e.target.value)} style={styles.select}>
              {courses.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="file-upload">File</label>
            <input id="file-upload" type="file" onChange={(e) => setFile(e.target.files[0])} style={styles.inputFile} />
          </div>
          <div style={styles.modalActions}>
            <button type="button" onClick={onClose} style={styles.buttonSecondary}>Cancel</button>
            <button type="submit" style={styles.button}>Upload</button>
          </div>
        </form>
      </div>
    </div>
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
  const [logoutHover, setLogoutHover] = useState(false);
  const [uploadHover, setUploadHover] = useState(false);


  useEffect(() => {
    const savedPoints = localStorage.getItem('points');
    if (savedPoints) {
      setPoints(parseInt(savedPoints, 10));
    }
  }, []);


  const handleUploadResource = (data) => {
    // Simulate POST to /resources
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
    // Assuming createPageUrl is not available, redirect manually
    window.location.href = '/';
  };


  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={styles.logoContainer}>
            <img src="/koin-logo.png" alt="Koin Logo" style={styles.logoImage} />
            <h1 style={styles.logoTitle}>Student Dashboard</h1>
          </div>

          <div style={styles.headerRight}>
            <PointsBadge points={points} />
            <button
              style={{ ...styles.iconButton, ...(logoutHover ? styles.iconButtonHover : {}) }}
              onMouseEnter={() => setLogoutHover(true)}
              onMouseLeave={() => setLogoutHover(false)}
              onClick={handleLogout}
            >
              <LogOut style={styles.logoutIcon} />
            </button>
          </div>
        </div>
      </header>


      {/* Main Content */}
      <main style={styles.main}>
        {/* Page Header */}
        <div style={styles.pageHeader}>
          <div>
            <h2 style={styles.pageTitle}>Student Dashboard</h2>
            <p style={styles.pageSubtitle}>Explore your course hubs and contribute resources</p>
          </div>
          
          <button
            onClick={() => setIsModalOpen(true)}
            style={{ ...styles.button, ...(uploadHover ? styles.buttonHover : {}) }}
            onMouseEnter={() => setUploadHover(true)}
            onMouseLeave={() => setUploadHover(false)}
          >
            <Upload style={styles.buttonIcon} />
            Upload Resource
          </button>
        </div>


        {/* Course Hubs Grid */}
        <div style={styles.grid}>
          {MOCK_COURSES.map(course => (
            <CourseHubCard key={course.id} course={course} />
          ))}
        </div>
      </main>


      {/* Upload Modal */}
      <UploadResourceModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courses={MOCK_COURSES}
        onSubmit={handleUploadResource}
      />
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #F8FAFC, #FFFFFF, rgba(239, 246, 255, 0.3))',
  },
  header: {
    backgroundColor: '#fff',
    borderBottom: '1px solid #F1F5F9',
    position: 'sticky',
    top: 0,
    zIndex: 50,
  },
  headerContainer: {
    maxWidth: '80rem',
    margin: 'auto',
    padding: '1rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logoImage: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '0.75rem',
  },
  logoTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#002147',
  },
  logoSubtitle: {
    fontSize: '0.75rem',
    color: '#56C1E8',
    fontWeight: '500',
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  iconButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#94A3B8',
  },
  iconButtonHover: {
    color: '#002147',
  },
  logoutIcon: {
    width: '1.25rem',
    height: '1.25rem',
  },
  main: {
    maxWidth: '80rem',
    margin: 'auto',
    padding: '2rem 1.5rem',
  },
  pageHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
    marginBottom: '2rem',
  },
  pageTitle: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#002147',
  },
  pageSubtitle: {
    color: '#64748B',
    marginTop: '0.25rem',
  },
  button: {
    backgroundColor: '#FFC72C',
    color: '#002147',
    fontWeight: '600',
    boxShadow: '0 10px 15px -3px rgba(255, 199, 44, 0.3), 0 4px 6px -2px rgba(255, 199, 44, 0.3)',
    transition: 'all 0.3s ease',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  buttonHover: {
    backgroundColor: '#FFD54F',
    boxShadow: '0 10px 20px -3px rgba(255, 199, 44, 0.4), 0 4px 6px -2px rgba(255, 199, 44, 0.4)',
  },
  buttonIcon: {
    width: '1rem',
    height: '1rem',
    marginRight: '0.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '1.5rem',
  },
  pointsBadge: {
    padding: '0.5rem 1rem',
    backgroundColor: '#E0E7FF',
    borderRadius: '9999px',
  },
  pointsText: {
    color: '#4F46E5',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
  },
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    borderColor: '#3B82F6',
    borderWidth: '1px',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: '1.125rem',
    color: '#002147',
    transition: 'color 0.2s ease-in-out',
  },
  cardCode: {
    color: '#64748B',
    fontSize: '0.875rem',
    marginBottom: '1rem',
    transition: 'color 0.2s ease-in-out',
  },
  cardStats: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#334155',
    transition: 'all 0.2s ease-in-out',
    padding: '0.75rem',
    borderRadius: '0.5rem',
  },
  cardStatsHover: {
    backgroundColor: '#3B82F6',
    color: 'white',
    fontWeight: '500',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  modal: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '0.75rem',
    width: '90%',
    maxWidth: '500px',
  },
  modalTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  select: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '0.375rem',
    border: '1px solid #D1D5DB',
  },
  inputFile: {
    width: '100%',
  },
  modalActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '1rem',
    marginTop: '2rem',
  },
  buttonSecondary: {
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    border: '1px solid #D1D5DB',
    backgroundColor: 'white',
    cursor: 'pointer',
  }
};