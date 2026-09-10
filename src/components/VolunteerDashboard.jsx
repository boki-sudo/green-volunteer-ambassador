import React, { useState } from 'react'
import { VOLUNTEER_USERS } from '../data/mockData'
import VolunteerHeader from './Volunteer/VolunteerHeader'
import MissionsFeed from './Volunteer/MissionsFeed'
import Leaderboard from './Volunteer/Leaderboard'
import BadgesRewards from './Volunteer/BadgesRewards'

const VolunteerDashboard = () => {
  const [activeTab, setActiveTab] = useState('missions')
  const currentVolunteer = VOLUNTEER_USERS[0] // Yaseen - the first volunteer

  return (
    <div className="space-y-6">
      <VolunteerHeader volunteer={currentVolunteer} />

      {/* Tab Navigation */}
      <div className="flex gap-2 bg-white p-2 rounded-lg shadow-md flex-wrap">
        <button
          onClick={() => setActiveTab('missions')}
          className={`px-6 py-3 rounded-lg font-bold transition-smooth ${
            activeTab === 'missions'
              ? 'bg-gradient-emerald text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          📋 قائمة المهام الميدانية
        </button>
        <button
          onClick={() => setActiveTab('leaderboard')}
          className={`px-6 py-3 rounded-lg font-bold transition-smooth ${
            activeTab === 'leaderboard'
              ? 'bg-gradient-emerald text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          🏆 لوحة التنافس والصدارة
        </button>
        <button
          onClick={() => setActiveTab('badges')}
          className={`px-6 py-3 rounded-lg font-bold transition-smooth ${
            activeTab === 'badges'
              ? 'bg-gradient-emerald text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          🎖️ شارات التميز ومتجر الجوائز
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'missions' && <MissionsFeed />}
        {activeTab === 'leaderboard' && <Leaderboard />}
        {activeTab === 'badges' && <BadgesRewards />}
      </div>
    </div>
  )
}

export default VolunteerDashboard
