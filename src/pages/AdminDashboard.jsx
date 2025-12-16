import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, FileUp, LogOut, Gem, TrendingUp, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const KPICard = ({ title, value, icon: Icon, trend, color }) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      style={{
        background: 'white',
        borderRadius: '16px',
        padding: '1.5rem',
        boxShadow: '0 4px 12px rgba(0, 33, 71, 0.08)',
        border: '1px solid #f1f5f9'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.5rem' }}>{title}</p>
          <p style={{ fontSize: '2rem', fontWeight: 800, color: '#002147', marginBottom: '0.5rem' }}>{value}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <TrendingUp size={14} color="#22c55e" />
            <span style={{ color: '#22c55e', fontSize: '0.8rem', fontWeight: 600 }}>{trend}</span>
          </div>
        </div>
        <div style={{
          width: '48px',
          height: '48px',
          background: `rgba(${color === 'blue' ? '82, 197, 255' : '255, 199, 44'}, 0.15)`,
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Icon color={color === 'blue' ? '#52C5FF' : '#FFC72C'} size={24} />
        </div>
      </div>
    </motion.div>
  );
};

const MOCK_DATA = [
  { topic: 'Calculus', struggles: 85, color: '#ef4444' },
  { topic: 'Organic Chem', struggles: 72, color: '#f97316' },
  { topic: 'Physics', struggles: 65, color: '#f97316' },
  { topic: 'Statistics', struggles: 58, color: '#eab308' },
  { topic: 'CS Algorithms', struggles: 45, color: '#eab308' },
  { topic: 'History', struggles: 32, color: '#22c55e' },
  { topic: 'English', struggles: 25, color: '#22c55e' },
];

const StruggleHeatMap = ({ isMobile }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    style={{
      background: 'white',
      borderRadius: '16px',
      padding: isMobile ? '1.25rem' : '1.5rem',
      boxShadow: '0 4px 12px rgba(0, 33, 71, 0.08)',
      border: '1px solid #f1f5f9'
    }}
  >
    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#002147', marginBottom: '1.5rem' }}>
      Struggle Heat Map
    </h3>
    <div style={{ height: isMobile ? '250px' : '300px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={MOCK_DATA}
          layout="vertical"
          margin={{ top: 0, right: 20, left: isMobile ? 60 : 80, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={true} vertical={false} />
          <XAxis type="number" domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 11 }} axisLine={{ stroke: '#e2e8f0' }} />
          <YAxis dataKey="topic" type="category" tick={{ fill: '#002147', fontSize: 12, fontWeight: 500 }} axisLine={false} tickLine={false} width={isMobile ? 55 : 75} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
            formatter={(value) => [`${value}% struggling`, 'Students']}
          />
          <Bar dataKey="struggles" radius={[0, 8, 8, 0]} barSize={20}>
            {MOCK_DATA.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
      {[{ color: '#ef4444', label: 'High' }, { color: '#f97316', label: 'Medium' }, { color: '#22c55e', label: 'Low' }].map((item, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '4px', background: item.color }} />
          <span style={{ color: '#64748b', fontSize: '0.8rem' }}>{item.label}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const FLAGGED_CONTENT = [
  { content: 'Calculus Exam Solutions', reason: 'Copyright', status: 'pending', studentId: 1 },
  { content: 'CS101 Assignment 3', reason: 'Plagiarism', status: 'resolved', studentId: 2 },
  { content: 'Physics Lab Report', reason: 'Copyright', status: 'pending', studentId: 3 },
];

const FlaggedContentTable = ({ isMobile }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    style={{
      background: 'white',
      borderRadius: '16px',
      padding: isMobile ? '1.25rem' : '1.5rem',
      boxShadow: '0 4px 12px rgba(0, 33, 71, 0.08)',
      border: '1px solid #f1f5f9'
    }}
  >
    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#002147', marginBottom: '1.5rem' }}>
      Flagged Content
    </h3>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {FLAGGED_CONTENT.map((item, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: isMobile ? 'flex-start' : 'center',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '0.5rem' : '1rem',
            padding: '1rem',
            background: '#f8fafc',
            borderRadius: '10px'
          }}
        >
          <div style={{ flex: 1 }}>
            <p style={{ color: '#002147', fontWeight: 600, fontSize: '0.9rem' }}>{item.content}</p>
            <p style={{ color: '#64748b', fontSize: '0.8rem' }}>{item.reason}</p>
          </div>
          <Link to={`/admin/student/${item.studentId}`}>
            <button style={{ background: 'none', border: 'none', color: '#52C5FF', cursor: 'pointer', fontWeight: 600 }}>
              View Student
            </button>
          </Link>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            borderRadius: '20px',
            background: item.status === 'resolved' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(234, 179, 8, 0.1)'
          }}>
            {item.status === 'resolved' ? <CheckCircle size={14} color="#22c55e" /> : <Clock size={14} color="#eab308" />}
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: item.status === 'resolved' ? '#22c55e' : '#eab308',
              textTransform: 'capitalize'
            }}>
              {item.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function AdminDashboard() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
            {!isMobile && (
              <div>
                <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#002147' }}>Koin</h1>
                <p style={{ fontSize: '0.7rem', color: '#52C5FF', fontWeight: 600 }}>Admin Portal</p>
              </div>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginLeft: 'auto' }}>
            <Link to="/plans">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'linear-gradient(135deg, rgba(255, 199, 44, 0.15), rgba(255, 199, 44, 0.05))',
                  border: '1px solid rgba(255, 199, 44, 0.3)',
                  color: '#d97706',
                  padding: isMobile ? '8px 12px' : '8px 16px',
                  borderRadius: '10px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >
                <Gem size={16} />
                {!isMobile && 'Upgrade'}
              </motion.button>
            </Link>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: '2rem' }}
        >
          <h2 style={{ fontSize: isMobile ? '1.5rem' : '1.875rem', fontWeight: 700, color: '#002147', marginBottom: '0.25rem' }}>
            Admin Dashboard
          </h2>
          <p style={{ color: '#64748b', fontSize: '1rem' }}>Monitor platform analytics and moderate content</p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '1.25rem',
          marginBottom: '1.5rem'
        }}>
          <KPICard title="Total Students" value="2,847" icon={Users} trend="12% from last month" color="blue" />
          <KPICard title="Total Uploads" value="1,234" icon={FileUp} trend="8% from last week" color="gold" />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <Link to="/admin/students">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: '100%',
                padding: '1rem',
                background: 'white',
                border: '1px solid #f1f5f9',
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0, 33, 71, 0.08)',
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(82, 197, 255, 0.15)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Users color="#52C5FF" size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#002147' }}>Manage Students</h3>
                  <p style={{ color: '#64748b', fontSize: '0.875rem' }}>View, edit, and manage student accounts.</p>
                </div>
              </div>
              <ChevronRight size={20} color="#94a3b8" />
            </motion.button>
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '1.25rem'
        }}>
          <StruggleHeatMap isMobile={isMobile} />
          <FlaggedContentTable isMobile={isMobile} />
        </div>
      </main>
    </div>
  );
}