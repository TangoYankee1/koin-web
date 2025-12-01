import React from 'react';
import { BookOpen, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Dummy Data for the Chart 
const data = [ 
  {name: 'Mon', pts: 10}, 
  {name: 'Tue', pts: 25}, 
  {name: 'Wed', pts: 15}, 
  {name: 'Thu', pts: 35}, 
  {name: 'Fri', pts: 50} 
];

function App() { 
  return ( 
    // min-h-screen ensures it covers the full viewport 
    <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center text-white p-4"> 
      
      {/* 1. Header with Lucide Icon */} 
      <div className="flex items-center gap-3 mb-8"> 
        <BookOpen size={48} className="text-brand-light" /> 
        <h1 className="text-5xl font-bold tracking-tight">Koin</h1> 
      </div> 

      <p className="mb-8 text-gray-300 font-light text-lg"> 
        System Status: <span className="text-ui-success font-bold">Operational</span> 
      </p> 

      {/* 2. Recharts Section */} 
      <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm mb-10 w-full max-w-md border border-white/5"> 
        <div className="flex items-center gap-2 mb-4 text-brand-light"> 
          <Activity size={20} /> 
          <span className="text-sm font-semibold uppercase tracking-wider">Live Activity</span> 
        </div> 
        
        {/* Important: Fixed height is required for Recharts to render */} 
        <div className="h-40 w-full"> 
          <ResponsiveContainer width="100%" height="100%"> 
            <LineChart data={data}> 
              <XAxis dataKey="name" stroke="#56C1E8" fontSize={10} tickLine={false} axisLine={false} /> 
              <Tooltip 
                contentStyle={{ backgroundColor: '#002147', border: '1px solid #56C1E8', borderRadius: '8px', color: '#fff' }} 
                itemStyle={{ color: '#FFC72C' }} 
              /> 
              <Line 
                type="monotone" 
                dataKey="pts" 
                stroke="#FFC72C" 
                strokeWidth={3} 
                dot={{ fill: '#FFC72C', strokeWidth: 2 }} 
                activeDot={{ r: 6 }} 
              /> 
            </LineChart> 
          </ResponsiveContainer> 
        </div> 
      </div> 
      
      {/* 3. Framer Motion Button */} 
      <motion.button 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }} 
        className="bg-accent-gold text-brand-dark font-bold py-3 px-8 rounded shadow-[0_0_15px_rgba(255,199,44,0.3)] hover:bg-accent-hover transition-colors" 
        onClick={() => alert("SSO Login Clicked - Logic to be connected")} 
      > 
        Login with University SSO 
      </motion.button> 

      <div className="mt-12 text-gray-500 text-xs"> 
        Phase 1-7 Complete • Client v1.0.0 
      </div> 
    </div> 
  ) 
}

export default App;