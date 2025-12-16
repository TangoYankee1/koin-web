import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const MOCK_STUDENTS = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', registrationDate: '2023-01-15', uploads: 12, struggles: ['Calculus', 'Physics'] },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', registrationDate: '2023-02-20', uploads: 8, struggles: ['Organic Chem'] },
  { id: 3, name: 'Mike Johnson', email: 'mike.johnson@example.com', registrationDate: '2023-03-10', uploads: 5, struggles: ['Statistics'] },
  { id: 4, name: 'Emily Brown', email: 'emily.brown@example.com', registrationDate: '2023-04-05', uploads: 20, struggles: [] },
  { id: 5, name: 'Chris Lee', email: 'chris.lee@example.com', registrationDate: '2023-05-12', uploads: 3, struggles: ['CS Algorithms'] },
];

const StudentManagementPage = () => {
  const [students, setStudents] = useState(MOCK_STUDENTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

  const sortedStudents = React.useMemo(() => {
    let sortableStudents = [...students];
    if (sortConfig !== null) {
      sortableStudents.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableStudents;
  }, [students, sortConfig]);

  const filteredStudents = sortedStudents.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return null;
    }
    if (sortConfig.direction === 'ascending') {
      return <ChevronUp size={16} />;
    }
    return <ChevronDown size={16} />;
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', padding: '2rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ maxWidth: '1280px', margin: '0 auto' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#002147' }}>Student Management</h1>
            <p style={{ color: '#64748b' }}>Search, sort, and manage student accounts.</p>
          </div>
          <div style={{ position: 'relative' }}>
            <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: '0.75rem 1rem 0.75rem 3rem',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                width: '300px',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
            />
          </div>
        </div>

        <div style={{ background: 'white', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0, 33, 71, 0.08)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '1px solid #f1f5f9' }}>
                <th style={{ padding: '1rem', textAlign: 'left', cursor: 'pointer' }} onClick={() => requestSort('name')}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>Name {getSortIcon('name')}</div>
                </th>
                <th style={{ padding: '1rem', textAlign: 'left', cursor: 'pointer' }} onClick={() => requestSort('email')}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>Email {getSortIcon('email')}</div>
                </th>
                <th style={{ padding: '1rem', textAlign: 'left', cursor: 'pointer' }} onClick={() => requestSort('registrationDate')}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>Registration Date {getSortIcon('registrationDate')}</div>
                </th>
                <th style={{ padding: '1rem', textAlign: 'left', cursor: 'pointer' }} onClick={() => requestSort('uploads')}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>Uploads {getSortIcon('uploads')}</div>
                </th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <motion.tr
                  key={student.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  style={{ borderBottom: '1px solid #f1f5f9' }}
                >
                  <td style={{ padding: '1rem', fontWeight: 600, color: '#002147' }}>{student.name}</td>
                  <td style={{ padding: '1rem', color: '#64748b' }}>{student.email}</td>
                  <td style={{ padding: '1rem', color: '#64748b' }}>{student.registrationDate}</td>
                  <td style={{ padding: '1rem', color: '#64748b' }}>{student.uploads}</td>
                  <td style={{ padding: '1rem' }}>
                    <Link to={`/admin/student/${student.id}`}>
                      <button style={{ background: 'none', border: 'none', color: '#52C5FF', cursor: 'pointer', fontWeight: 600 }}>
                        View Details
                      </button>
                    </Link>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentManagementPage;