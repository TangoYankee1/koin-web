import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Header from '../components/Header';

const AdminDashboard = () => {
  const data = [
    { name: 'PSY101', struggles: 4000 },
    { name: 'MATH201', struggles: 3000 },
    { name: 'HIST101', struggles: 2000 },
    { name: 'CHEM101', struggles: 2780 },
    { name: 'PHYS101', struggles: 1890 },
  ];

  const flaggedContent = [
    { id: 1, name: 'Resource A', reason: 'Copyright Infringement', status: 'Pending' },
    { id: 2, name: 'Resource B', reason: 'Inappropriate Content', status: 'Resolved' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold py-4">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded p-4">
            <h2 className="text-xl font-bold">Total Students</h2>
            <p className="text-4xl">1,234</p>
          </div>
          <div className="bg-white shadow-md rounded p-4">
            <h2 className="text-xl font-bold">Total Uploads</h2>
            <p className="text-4xl">5,678</p>
          </div>
        </div>
        <div className="mt-8 bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold">Struggle Heat Map</h2>
          <BarChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="struggles" fill="#002147" />
          </BarChart>
        </div>
        <div className="mt-8 bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold">Flagged Content</h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Resource Name</th>
                <th className="px-4 py-2">Reason</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {flaggedContent.map(item => (
                <tr key={item.id}>
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.reason}</td>
                  <td className="border px-4 py-2">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;