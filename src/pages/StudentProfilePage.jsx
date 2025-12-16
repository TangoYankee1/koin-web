import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Calendar, Upload, BarChart2, Edit, Lock, Trash2 } from 'lucide-react';

const MOCK_STUDENTS = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', registrationDate: '2023-01-15', uploads: 12, struggles: ['Calculus', 'Physics'] },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', registrationDate: '2023-02-20', uploads: 8, struggles: ['Organic Chem'] },
    { id: 3, name: 'Mike Johnson', email: 'mike.johnson@example.com', registrationDate: '2023-03-10', uploads: 5, struggles: ['Statistics'] },
    { id: 4, name: 'Emily Brown', email: 'emily.brown@example.com', registrationDate: '2023-04-05', uploads: 20, struggles: [] },
    { id: 5, name: 'Chris Lee', email: 'chris.lee@example.com', registrationDate: '2023-05-12', uploads: 3, struggles: ['CS Algorithms'] },
  ];

const StudentProfilePage = () => {
  const { studentId } = useParams();
  const student = MOCK_STUDENTS.find(s => s.id === parseInt(studentId));

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', padding: '2rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ maxWidth: '1024px', margin: '0 auto' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
          <img src={`https://i.pravatar.cc/150?u=${student.email}`} alt={student.name} style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '2rem' }} />
          <div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#002147' }}>{student.name}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b' }}><Mail size={16} /> {student.email}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b' }}><Calendar size={16} /> Joined {student.registrationDate}</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'flex-start' }}>
          <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 12px rgba(0, 33, 71, 0.08)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#002147', marginBottom: '1.5rem' }}>Details</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><Upload size={20} color="#52C5FF" /> <strong>Total Uploads:</strong> {student.uploads}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><BarChart2 size={20} color="#FFC72C" /> <strong>Top Struggles:</strong> {student.struggles.join(', ') || 'None'}</div>
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 12px rgba(0, 33, 71, 0.08)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#002147', marginBottom: '1.5rem' }}>Actions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1rem', background: '#f1f5f9', border: 'none', borderRadius: '8px', cursor: 'pointer' }}><Edit size={16} /> Edit Profile</button>
              <button style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1rem', background: '#f1f5f9', border: 'none', borderRadius: '8px', cursor: 'pointer' }}><Lock size={16} /> Reset Password</button>
              <button style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1rem', background: '#fef2f2', border: 'none', borderRadius: '8px', cursor: 'pointer', color: '#ef4444' }}><Trash2 size={16} /> Delete Account</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentProfilePage;