import React, { useState } from 'react'
import Header from './components/Header'
import VolunteerDashboard from './components/VolunteerDashboard'
import SupervisorDashboard from './components/SupervisorDashboard'

function App() {
  const [role, setRole] = useState('volunteer') // 'volunteer' or 'supervisor'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <Header role={role} setRole={setRole} />
      <main className="container mx-auto px-4 py-8">
        {role === 'volunteer' ? (
          <VolunteerDashboard />
        ) : (
          <SupervisorDashboard />
        )}
      </main>
    </div>
  )
}

export default App
