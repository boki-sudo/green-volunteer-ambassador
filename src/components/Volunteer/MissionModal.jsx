import React, { useState } from 'react'
import { X } from 'lucide-react'

const MissionModal = ({ mission, onClose }) => {
  const [beforePhoto, setBeforePhoto] = useState(null)
  const [afterPhoto, setAfterPhoto] = useState(null)
  const [report, setReport] = useState('')
  const [gpsVerified, setGpsVerified] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handlePhotoUpload = (e, type) => {
    if (type === 'before') {
      setBeforePhoto(URL.createObjectURL(e.target.files[0]))
    } else {
      setAfterPhoto(URL.createObjectURL(e.target.files[0]))
    }
  }

  const handleGPSVerify = () => {
    setGpsVerified(true)
  }

  const handleSubmit = () => {
    if (beforePhoto && afterPhoto && report && gpsVerified) {
      setSubmitted(true)
      setTimeout(() => {
        onClose()
      }, 2000)
    } else {
      alert('يرجى ملء جميع الحقول المطلوبة')
    }
  }

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-8 max-w-md text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-emerald-700 mb-2">تم الإرسال بنجاح!</h2>
          <p className="text-gray-600">شكراً لك على مساهمتك! سيتم مراجعة التوثيق قريباً</p>
          <p className="text-lg font-bold text-emerald-600 mt-4">+{mission.xpReward} XP ⭐</p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-emerald-700">{mission.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={28} />
          </button>
        </div>

        {/* Mission Details */}
        <div className="bg-emerald-50 p-4 rounded-lg mb-6 space-y-2">
          <p className="text-sm"><span className="font-bold">📋 المتطلبات:</span> {mission.description}</p>
          <p className="text-sm"><span className="font-bold">👥 عدد المتطوعين المطلوبين:</span> {mission.volunteersNeeded}</p>
          <p className="text-sm"><span className="font-bold">⭐ المكافأة:</span> {mission.xpReward} نقطة تجربة</p>
        </div>

        {/* Photo Upload Section */}
        <div className="space-y-6">
          {/* Before Photo */}
          <div>
            <label className="font-bold text-gray-700 mb-2 block">📸 صورة قبل (Before)</label>
            <div className="border-2 border-dashed border-emerald-300 rounded-lg p-6 text-center cursor-pointer hover:bg-emerald-50 transition-smooth">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handlePhotoUpload(e, 'before')}
                className="hidden"
                id="before-photo"
              />
              {beforePhoto ? (
                <div>
                  <img src={beforePhoto} alt="Before" className="w-full h-40 object-cover rounded-lg" />
                  <p className="text-sm text-emerald-600 font-bold mt-2">✅ تم تحميل الصورة</p>
                </div>
              ) : (
                <label htmlFor="before-photo" className="cursor-pointer">
                  <p className="text-gray-600">اسحب الصورة هنا أو انقر للاختيار</p>
                  <p className="text-xs text-gray-500 mt-2">JPG، PNG - بحد أقصى 5MB</p>
                </label>
              )}
            </div>
          </div>

          {/* After Photo */}
          <div>
            <label className="font-bold text-gray-700 mb-2 block">📸 صورة بعد (After)</label>
            <div className="border-2 border-dashed border-emerald-300 rounded-lg p-6 text-center cursor-pointer hover:bg-emerald-50 transition-smooth">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handlePhotoUpload(e, 'after')}
                className="hidden"
                id="after-photo"
              />
              {afterPhoto ? (
                <div>
                  <img src={afterPhoto} alt="After" className="w-full h-40 object-cover rounded-lg" />
                  <p className="text-sm text-emerald-600 font-bold mt-2">✅ تم تحميل الصورة</p>
                </div>
              ) : (
                <label htmlFor="after-photo" className="cursor-pointer">
                  <p className="text-gray-600">اسحب الصورة هنا أو انقر للاختيار</p>
                  <p className="text-xs text-gray-500 mt-2">JPG، PNG - بحد أقصى 5MB</p>
                </label>
              )}
            </div>
          </div>

          {/* GPS Verification */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <button
              onClick={handleGPSVerify}
              className={`w-full py-2 px-4 rounded-lg font-bold transition-smooth ${
                gpsVerified
                  ? 'bg-emerald-500 text-white'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {gpsVerified ? '✅ تم تأكيد الموقع الجغرافي 📍' : '📍 تأكيد الموقع الجغرافي'}
            </button>
          </div>

          {/* Report Text */}
          <div>
            <label className="font-bold text-gray-700 mb-2 block">📝 تقرير موجز عن الإنجاز</label>
            <textarea
              value={report}
              onChange={(e) => setReport(e.target.value)}
              placeholder="اكتب ملخصاً عما تم إنجازه في المهمة..."
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none resize-none"
              rows="4"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full btn-primary mt-8 text-lg py-3"
        >
          ✨ إرسال للتوثيق والحصول على النقاط
        </button>
      </div>
    </div>
  )
}

export default MissionModal
