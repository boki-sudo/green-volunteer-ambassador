import React, { useState } from 'react'
import { BADGES, REWARDS_STORE } from '../../data/mockData'
import CertificateGenerator from '../Utils/CertificateGenerator'

const BadgesRewards = () => {
  const [showCertificateModal, setShowCertificateModal] = useState(false)

  return (
    <div className="space-y-8">
      {/* Badges Section */}
      <div>
        <h2 className="text-2xl font-bold text-emerald-700 mb-6">🎖️ شارات التميز</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {BADGES.map((badge) => (
            <div
              key={badge.id}
              className={`rounded-lg p-4 text-center transition-smooth ${
                badge.unlocked
                  ? 'bg-gradient-to-br from-yellow-100 to-emerald-100 border-2 border-yellow-400 shadow-lg'
                  : 'bg-gray-100 border-2 border-gray-300 opacity-60'
              }`}
            >
              <div className="text-5xl mb-2">{badge.emoji}</div>
              <h3 className="font-bold text-gray-800 mb-1">{badge.name}</h3>
              <p className="text-xs text-gray-600">{badge.description}</p>
              {badge.unlocked && (
                <p className="text-xs text-emerald-600 font-bold mt-2">✅ {new Date(badge.unlockedDate).toLocaleDateString('ar-DZ')}</p>
              )}
              {!badge.unlocked && <p className="text-xs text-gray-500 mt-2">🔒 مقفول</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Rewards Store Section */}
      <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-emerald-700 mb-4">🎁 متجر الجوائز</h2>
        <p className="text-gray-700 mb-6 font-semibold">استبدل نقاطك الخضراء بجوائز رسمية من وزارة الشباب والرياضة</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REWARDS_STORE.map((reward) => (
            <div key={reward.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-smooth">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-emerald-700">{reward.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">{reward.description}</p>
                </div>
                <div className="text-4xl">{reward.emoji}</div>
              </div>
              <div className="bg-emerald-50 p-3 rounded-lg text-center mb-4">
                <p className="font-bold text-emerald-700 text-lg">{reward.pointsCost} نقطة خضراء</p>
              </div>
              <button className="w-full btn-primary">
                استبدل الآن
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Generator Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-emerald-600">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold text-emerald-700 mb-2">📜 شهادة التطوع الرسمية</h3>
            <p className="text-gray-600">احصل على شهادة موقعة رسمياً من وزارة الشباب والرياضة تعترف بمساهمتك</p>
          </div>
          <div className="text-6xl">📜</div>
        </div>
        <button
          onClick={() => setShowCertificateModal(true)}
          className="btn-primary mt-6"
        >
          ✨ استخراج شهادة تطوع رسمية
        </button>
      </div>

      {/* Certificate Modal */}
      {showCertificateModal && (
        <CertificateGenerator onClose={() => setShowCertificateModal(false)} />
      )}
    </div>
  )
}

export default BadgesRewards
