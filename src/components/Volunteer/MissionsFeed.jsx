import React, { useState } from 'react'
import { MISSIONS, MISSION_CATEGORIES } from '../../data/mockData'
import MissionModal from './MissionModal'

const MissionsFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedMission, setSelectedMission] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const filteredMissions =
    selectedCategory === 'all'
      ? MISSIONS
      : MISSIONS.filter((m) => m.category === selectedCategory)

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="font-bold text-lg mb-4 text-gray-700">🏷️ تصفية حسب الفئة</h3>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg font-semibold transition-smooth ${
              selectedCategory === 'all'
                ? 'bg-gradient-emerald text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            📌 الكل
          </button>
          {MISSION_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2 rounded-lg font-semibold transition-smooth ${
                selectedCategory === cat.name
                  ? 'bg-gradient-emerald text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Missions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMissions.map((mission) => (
          <div key={mission.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-smooth p-6 border-t-4 border-emerald-600">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-emerald-700 line-clamp-2">{mission.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{mission.description}</p>

              {/* Info Badges */}
              <div className="space-y-2 py-3 border-y">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">📍 الموقع:</span>
                  <span className="font-semibold text-gray-800">{mission.wilaya}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">🏢 المركز:</span>
                  <span className="font-semibold text-gray-800 text-xs">{mission.center}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">⭐ المكافأة:</span>
                  <span className="font-bold text-emerald-600">{mission.xpReward} XP</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">👥 المتطوعون:</span>
                  <span className="font-semibold">{mission.volunteersEnrolled}/{mission.volunteersNeeded}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-emerald-500 h-2 rounded-full"
                  style={{ width: `${(mission.volunteersEnrolled / mission.volunteersNeeded) * 100}%` }}
                />
              </div>

              {/* Deadline */}
              <p className="text-xs text-gray-500 font-semibold">📅 آخر موعد: {new Date(mission.deadline).toLocaleDateString('ar-DZ')}</p>

              {/* Join Button */}
              <button
                onClick={() => {
                  setSelectedMission(mission)
                  setShowModal(true)
                }}
                className="w-full btn-primary mt-4"
              >
                ✅ المشاركة في المهمة
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mission Modal */}
      {showModal && (
        <MissionModal mission={selectedMission} onClose={() => setShowModal(false)} />
      )}
    </div>
  )
}

export default MissionsFeed
