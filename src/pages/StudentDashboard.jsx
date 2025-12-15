import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import Header from '../components/Header';

const StudentDashboard = () => {
  const [points, setPoints] = useState(0);
  const [courseHubs, setCourseHubs] = useState([]);

  useEffect(() => {
    // Mock data for course hubs
    setCourseHubs([
      { id: 1, name: 'Introduction to Psychology', code: 'PSY101' },
      { id: 2, name: 'Calculus I', code: 'MATH201' },
      { id: 3, name: 'World History', code: 'HIST101' },
    ]);
  }, []);

  const handleUpload = () => {
    // Mock upload
    axios.post('/resources', { title: 'New Resource', course_hub_id: 1 })
      .then(() => {
        setPoints(points + 10);
        // Show success toast
      });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-3xl font-bold">Student Dashboard</h1>
          <div className="font-bold py-2 px-4 rounded" style={{ backgroundColor: '#FFC72C', color: '#002147'}}>
            Points: {points}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {courseHubs.map(hub => (
            <div key={hub.id} className="bg-white shadow-md rounded p-4">
              <h2 className="text-xl font-bold">{hub.name}</h2>
              <p className="text-gray-600">{hub.code}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <button
            className="text-white font-bold py-2 px-4 rounded"
            style={{ backgroundColor: '#002147' }}
            onClick={handleUpload}
          >
            Upload Resource
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;