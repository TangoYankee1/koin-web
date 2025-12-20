import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import PlansPage from './pages/PlansPage';
import LearnMorePage from './pages/LearnMorePage';
import StudentManagementPage from './pages/StudentManagementPage';
import StudentProfilePage from './pages/StudentProfilePage';
import NewPlansPage from './pages/NewPlansPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/StudentDashboard" element={<StudentDashboard />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<StudentManagementPage />} />
        <Route path="/admin/student/:studentId" element={<StudentProfilePage />} />
        <Route path="/admin/new-plans" element={<NewPlansPage />} />
        <Route path="/plans" element={<NewPlansPage />} />
        <Route path="/admin/plans" element={<PlansPage />} />
        <Route path="/learn-more" element={<LearnMorePage />} />
      </Routes>
    </Router>
  );
}

export default App;