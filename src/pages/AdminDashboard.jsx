import React from 'react';
import { BookOpen, Users, FileUp, LogOut } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const KPICard = ({ title, value, icon: Icon, trend }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={{ ...styles.kpiCard, ...(isHovered ? styles.kpiCardHover : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.kpiIconWrapper}>
        <Icon style={styles.kpiIcon} />
      </div>
      <div>
        <p style={styles.kpiTitle}>{title}</p>
        <p style={styles.kpiValue}>{value}</p>
        <p style={{ ...styles.kpiTrend, color: '#22C55E' }}>{trend}</p>
      </div>
    </div>
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

const StruggleHeatMap = () => (
  <div style={styles.heatMapContainer}>
    <h3 style={styles.chartTitle}>Struggle Heat Map</h3>
    <div style={{ height: '20rem' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={MOCK_DATA}
          layout="vertical"
          margin={{ top: 0, right: 30, left: 80, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={true} vertical={false} />
          <XAxis
            type="number"
            domain={[0, 100]}
            tick={{ fill: '#64748b', fontSize: 12 }}
            axisLine={{ stroke: '#e2e8f0' }}
          />
          <YAxis
            dataKey="topic"
            type="category"
            tick={{ fill: '#002147', fontSize: 13, fontWeight: 500 }}
            axisLine={false}
            tickLine={false}
            width={75}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '8px',
              color: '#002147',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
            labelStyle={{ color: '#002147', fontWeight: 'bold' }}
            formatter={(value) => [`${value}% struggling`, 'Students']}
          />
          <Bar
            dataKey="struggles"
            radius={[0, 6, 6, 0]}
            barSize={24}
          >
            {MOCK_DATA.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    <div style={styles.legendContainer}>
      <div style={styles.legendItem}>
        <div style={{...styles.legendDot, backgroundColor: '#ef4444'}} />
        <span style={styles.legendLabel}>High</span>
      </div>
      <div style={styles.legendItem}>
        <div style={{...styles.legendDot, backgroundColor: '#f97316'}} />
        <span style={styles.legendLabel}>Medium</span>
      </div>
      <div style={styles.legendItem}>
        <div style={{...styles.legendDot, backgroundColor: '#22c55e'}} />
        <span style={styles.legendLabel}>Low</span>
      </div>
    </div>
  </div>
);

const FlaggedContentTable = () => (
  <div style={styles.chartContainer}>
    <h3 style={styles.chartTitle}>Flagged Content</h3>
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Content</th>
          <th style={styles.th}>Reason</th>
          <th style={styles.th}>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={styles.td}>Resource 1</td>
          <td style={styles.td}>Copyright</td>
          <td style={styles.td}>Pending</td>
        </tr>
        <tr>
          <td style={styles.td}>Resource 2</td>
          <td style={styles.td}>Plagiarism</td>
          <td style={styles.td}>Resolved</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function AdminDashboard() {
  const handleLogout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('userEmail');
    window.location.href = '/';
  };

  return (
    <div style={styles.screen}>
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={styles.logoContainer}>
            <div style={styles.logoIconContainer}>
              <BookOpen style={styles.logoIcon} />
            </div>
            <div>
              <h1 style={styles.logoTitle}>Koin</h1>
              <p style={styles.logoSubtitle}>Admin Portal</p>
            </div>
          </div>
          <button onClick={handleLogout} style={styles.logoutButton}>
            <LogOut style={styles.logoutIcon} />
          </button>
        </div>
      </header>

      <main style={styles.main}>
        <div style={styles.pageHeader}>
          <h2 style={styles.pageTitle}>Admin Dashboard</h2>
          <p style={styles.pageSubtitle}>Monitor platform analytics and moderate content</p>
        </div>

        <div style={styles.kpiGrid}>
          <KPICard title="Total Students" value="2,847" icon={Users} trend="12% from last month" />
          <KPICard title="Total Uploads" value="1,234" icon={FileUp} trend="8% from last week" />
        </div>

        <div style={styles.chartsGrid}>
          <StruggleHeatMap />
          <FlaggedContentTable />
        </div>
      </main>
    </div>
  );
}

const styles = {
  screen: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #F8FAFC, #FFFFFF, rgba(59, 130, 246, 0.05))',
  },
  header: {
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #F1F5F9',
    position: 'sticky',
    top: 0,
    zIndex: 50,
  },
  headerContainer: {
    maxWidth: '80rem',
    margin: '0 auto',
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
  logoIconContainer: {
    width: '2.5rem',
    height: '2.5rem',
    backgroundColor: '#002147',
    borderRadius: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoIcon: {
    width: '1.25rem',
    height: '1.25rem',
    color: '#56C1E8',
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
  logoutButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#94A3B8',
  },
  logoutIcon: {
    width: '1.25rem',
    height: '1.25rem',
  },
  main: {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '2rem 1.5rem',
  },
  pageHeader: {
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
  kpiGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  kpiCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
  },
  kpiCardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  kpiIconWrapper: {
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    borderRadius: '9999px',
    padding: '0.75rem',
  },
  kpiIcon: {
    width: '1.5rem',
    height: '1.5rem',
    color: '#3B82F6',
  },
  kpiTitle: {
    color: '#64748B',
    fontSize: '0.875rem',
  },
  kpiValue: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#002147',
  },
  kpiTrend: {
    color: '#64748B',
    fontSize: '0.75rem',
  },
  chartsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  chartContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  chartTitle: {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: '#002147',
    marginBottom: '1rem',
  },
  heatMapPlaceholder: {
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: '0.5rem',
    color: '#64748B',
  },
  heatMapContainer: {
    backgroundColor: '#fff',
    borderRadius: '0.75rem',
    border: '1px solid #f1f5f9',
    padding: '1.5rem',
  },
  legendContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    marginTop: '1rem',
    fontSize: '0.875rem',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  legendDot: {
    width: '0.75rem',
    height: '0.75rem',
    borderRadius: '0.25rem',
  },
  legendLabel: {
    color: '#475569',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    textAlign: 'left',
    padding: '0.75rem',
    borderBottom: '1px solid #E2E8F0',
    color: '#475569',
    fontSize: '0.875rem',
  },
  td: {
    padding: '0.75rem',
    borderBottom: '1px solid #F1F5F9',
    fontSize: '0.875rem',
  },
};