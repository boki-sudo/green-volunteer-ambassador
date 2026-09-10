import React from 'react'

const VolunteerHeader = ({ volunteer }) => {
  const progressPercent = (volunteer.xp / volunteer.xpNextLevel) * 100

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 card-gradient">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Welcome & Personal Info */}
        <div className="md:col-span-1 space-y-4">
          <div className="text-5xl mb-4">{volunteer.avatar}</div>
          <h2 className="text-2xl font-bold text-emerald-700">أهلاً بك، سفير البيئة {volunteer.name}!</h2>
          <div className="flex gap-2 flex-wrap">
            <span className="badge-emerald">📍 {volunteer.wilaya}</span>
            <span className="badge-emerald">⭐ {volunteer.levelName}</span>
          </div>
        </div>

        {/* XP Progress */}
        <div className="md:col-span-1">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold text-gray-700 mb-2">تقدمك نحو المستوى التالي</h3>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div
                className="bg-gradient-emerald h-3 rounded-full transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 font-semibold">
              {volunteer.xp} / {volunteer.xpNextLevel} XP
            </p>
            <p className="text-xs text-gray-500 mt-2">🎯 قائد بيئي (المستوى التالي)</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="md:col-span-1 grid grid-cols-2 gap-3">
          <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-600">
            <p className="text-2xl font-bold text-emerald-700">{volunteer.greenPoints}</p>
            <p className="text-sm text-gray-600 font-semibold">النقاط الخضراء</p>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600">
            <p className="text-2xl font-bold text-teal-700">{volunteer.volunteerHours}</p>
            <p className="text-sm text-gray-600 font-semibold">ساعات التطوع</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <p className="text-2xl font-bold text-blue-700">{volunteer.completedMissions}</p>
            <p className="text-sm text-gray-600 font-semibold">مهام مكتملة</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
            <p className="text-2xl font-bold text-orange-700">#{volunteer.rank}</p>
            <p className="text-sm text-gray-600 font-semibold">ترتيبك الوطني</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VolunteerHeader
