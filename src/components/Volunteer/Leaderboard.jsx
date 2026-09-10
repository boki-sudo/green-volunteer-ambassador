import React, { useState } from 'react'
import { VOLUNTEER_USERS } from '../../data/mockData'

const Leaderboard = () => {
  const [scope, setScope] = useState('national')

  const getDisplayVolunteers = () => {
    // Sort by rank
    const sorted = [...VOLUNTEER_USERS].sort((a, b) => a.rank - b.rank)
    
    if (scope === 'center') {
      return sorted.filter((v) => v.wilaya === 'أدرار')
    } else if (scope === 'wilaya') {
      return sorted.filter((v) => v.wilaya === 'أدرار')
    }
    return sorted
  }

  const displayVolunteers = getDisplayVolunteers()
  const top3 = displayVolunteers.slice(0, 3)

  const trophies = ['🥇', '🥈', '🥉']
  const frameColors = ['border-yellow-400 bg-yellow-50', 'border-gray-400 bg-gray-50', 'border-orange-400 bg-orange-50']

  return (
    <div className="space-y-6">
      {/* Scope Filter */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="font-bold text-lg mb-4 text-gray-700">🎯 نطاق المقارنة</h3>
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => setScope('center')}
            className={`px-6 py-2 rounded-lg font-bold transition-smooth ${
              scope === 'center'
                ? 'bg-gradient-emerald text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🏢 على مستوى دار الشباب
          </button>
          <button
            onClick={() => setScope('wilaya')}
            className={`px-6 py-2 rounded-lg font-bold transition-smooth ${
              scope === 'wilaya'
                ? 'bg-gradient-emerald text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🌍 على مستوى الولاية (أدرار)
          </button>
          <button
            onClick={() => setScope('national')}
            className={`px-6 py-2 rounded-lg font-bold transition-smooth ${
              scope === 'national'
                ? 'bg-gradient-emerald text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🇩🇿 على مستوى الوطن
          </button>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {top3.map((volunteer, index) => (
          <div key={volunteer.id} className={`border-4 ${frameColors[index]} rounded-lg p-6 text-center shadow-lg`}>
            <div className="text-5xl mb-2">{trophies[index]}</div>
            <div className="text-6xl mb-3">{volunteer.avatar}</div>
            <h3 className="text-xl font-bold text-gray-800">{volunteer.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{volunteer.levelName}</p>
            <div className="bg-white p-3 rounded-lg">
              <p className="text-2xl font-bold text-emerald-600">{volunteer.greenPoints}</p>
              <p className="text-xs text-gray-500">نقاط خضراء</p>
            </div>
          </div>
        ))}
      </div>

      {/* Leaderboard Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gradient-emerald text-white">
            <tr>
              <th className="px-4 py-3 font-bold">الترتيب</th>
              <th className="px-4 py-3 font-bold">المتطوع</th>
              <th className="px-4 py-3 font-bold">الولاية</th>
              <th className="px-4 py-3 font-bold">المهام المكتملة</th>
              <th className="px-4 py-3 font-bold">النقاط الخضراء</th>
              <th className="px-4 py-3 font-bold">ساعات التطوع</th>
            </tr>
          </thead>
          <tbody>
            {displayVolunteers.map((volunteer, idx) => (
              <tr key={volunteer.id} className={`border-b ${idx % 2 === 0 ? 'bg-white' : 'bg-emerald-50'} hover:bg-emerald-100 transition-smooth`}>
                <td className="px-4 py-3 text-center">
                  <span className="font-bold text-lg text-emerald-700">#{volunteer.rank}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{volunteer.avatar}</span>
                    <span className="font-bold text-gray-800">{volunteer.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-600">{volunteer.wilaya}</td>
                <td className="px-4 py-3 text-center font-semibold">{volunteer.completedMissions}</td>
                <td className="px-4 py-3 text-center font-bold text-emerald-600">{volunteer.greenPoints}</td>
                <td className="px-4 py-3 text-center text-gray-600">{volunteer.volunteerHours}h</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Leaderboard
