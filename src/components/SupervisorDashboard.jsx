import React, { useState } from 'react'
import { PENDING_SUBMISSIONS } from '../../data/mockData'
import { X } from 'lucide-react'

const SupervisorDashboard = () => {
  const [submissions, setSubmissions] = useState(PENDING_SUBMISSIONS)
  const [selectedSubmission, setSelectedSubmission] = useState(null)
  const [showRejectionModal, setShowRejectionModal] = useState(false)
  const [rejectionReason, setRejectionReason] = useState('')

  const stats = {
    activeVolunteers: 127,
    pendingSubmissions: submissions.length,
    treesPlanted: 450,
    cleanedAreasSqm: 3500,
  }

  const handleApprove = (submissionId) => {
    setSubmissions((prev) => prev.filter((s) => s.id !== submissionId))
    setSelectedSubmission(null)
    alert('✅ تم قبول التوثيق ومنح النقاط للمتطوع!')
  }

  const handleReject = () => {
    if (!rejectionReason) {
      alert('يرجى تحديد سبب الرفض')
      return
    }
    setSubmissions((prev) => prev.filter((s) => s.id !== selectedSubmission.id))
    setSelectedSubmission(null)
    setShowRejectionModal(false)
    setRejectionReason('')
    alert('❌ تم رفض التوثيق وإرسال تنبيه للمتطوع')
  }

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-emerald text-white rounded-lg p-6 shadow-lg">
          <div className="text-4xl mb-2">👥</div>
          <p className="text-sm opacity-90">المتطوعون النشطون</p>
          <p className="text-3xl font-bold">{stats.activeVolunteers}</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-lg p-6 shadow-lg">
          <div className="text-4xl mb-2">⏳</div>
          <p className="text-sm opacity-90">التوثيقات المعلقة</p>
          <p className="text-3xl font-bold">{stats.pendingSubmissions}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-lg p-6 shadow-lg">
          <div className="text-4xl mb-2">🌳</div>
          <p className="text-sm opacity-90">الأشجار المزروعة</p>
          <p className="text-3xl font-bold">{stats.treesPlanted}</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-lg p-6 shadow-lg">
          <div className="text-4xl mb-2">🧹</div>
          <p className="text-sm opacity-90">المساحات المنظفة (م²)</p>
          <p className="text-3xl font-bold">{stats.cleanedAreasSqm}</p>
        </div>
      </div>

      {/* Verification Queue */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-emerald-700 mb-6">📋 قائمة التوثيق والمصادقة</h2>

        {submissions.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-lg text-gray-600">✅ لا توجد توثيقات معلقة - كل شيء محدث!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <div
                key={submission.id}
                className="border-2 border-gray-200 rounded-lg p-4 hover:border-emerald-500 transition-smooth"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      {submission.volunteerName} - {submission.missionTitle}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">📝 {submission.reportText}</p>
                  </div>
                  {submission.gpsVerified && (
                    <span className="badge-emerald">✓ GPS مؤكد</span>
                  )}
                </div>

                {/* Photos Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={submission.beforePhoto}
                      alt="Before"
                      className="w-full h-40 object-cover"
                    />
                    <p className="text-center py-2 bg-gray-200 font-bold text-sm">📸 قبل</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={submission.afterPhoto}
                      alt="After"
                      className="w-full h-40 object-cover"
                    />
                    <p className="text-center py-2 bg-gray-200 font-bold text-sm">📸 بعد</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handleApprove(submission.id)}
                    className="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-emerald-700 transition-smooth"
                  >
                    ✅ قبول التوثيق ومسطرة النقاط
                  </button>
                  <button
                    onClick={() => {
                      setSelectedSubmission(submission)
                      setShowRejectionModal(true)
                    }}
                    className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition-smooth"
                  >
                    ❌ رفض التوثيق
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Create Mission Form */}
      <CreateMissionForm />

      {/* Rejection Modal */}
      {showRejectionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-red-600">❌ رفض التوثيق</h2>
              <button onClick={() => setShowRejectionModal(false)} className="text-gray-500">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <label className="block">
                <p className="font-bold text-gray-700 mb-2">سبب الرفض</p>
                <select
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                >
                  <option value="">-- اختر السبب --</option>
                  <option value="الصور غير واضحة">الصور غير واضحة أو لا تعكس المهمة</option>
                  <option value="بيانات غير دقيقة">البيانات الموفرة غير دقيقة</option>
                  <option value="موقع غير صحيح">الموقع الجغرافي لا يطابق المهمة</option>
                  <option value="تقرير غير كافي">التقرير المكتوب غير مفصل كافياً</option>
                  <option value="مهمة غير مكتملة">المهمة لم تكتمل بالكامل</option>
                </select>
              </label>
              <div className="flex gap-3">
                <button
                  onClick={handleReject}
                  className="flex-1 btn-primary bg-red-600 hover:bg-red-700"
                >
                  تأكيد الرفض
                </button>
                <button
                  onClick={() => setShowRejectionModal(false)}
                  className="flex-1 btn-secondary"
                >
                  إلغاء
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const CreateMissionForm = () => {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    volunteersNeeded: '',
    xpReward: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('✅ تم إنشاء المهمة بنجاح!')
    setFormData({ title: '', description: '', location: '', volunteersNeeded: '', xpReward: '' })
    setShowForm(false)
  }

  if (!showForm) {
    return (
      <button
        onClick={() => setShowForm(true)}
        className="w-full bg-gradient-emerald text-white px-6 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-smooth"
      >
        ➕ إضافة مهمة جديدة
      </button>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-emerald-700">✏️ إضافة مهمة جديدة</h2>
        <button
          onClick={() => setShowForm(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-bold text-gray-700 mb-2">عنوان المهمة</label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="مثال: حملة تشجير الحديقة العمومية"
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block font-bold text-gray-700 mb-2">الوصف التفصيلي</label>
          <textarea
            required
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="اكتب تفاصيل المهمة والمتطلبات..."
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none resize-none"
            rows="3"
          />
        </div>

        <div>
          <label className="block font-bold text-gray-700 mb-2">الموقع والمركز</label>
          <input
            type="text"
            required
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder="مثال: دار الشباب حي الأمل - الجزائر"
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-bold text-gray-700 mb-2">عدد المتطوعين المطلوب</label>
            <input
              type="number"
              required
              value={formData.volunteersNeeded}
              onChange={(e) => setFormData({ ...formData, volunteersNeeded: e.target.value })}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 mb-2">مكافأة XP</label>
            <input
              type="number"
              required
              value={formData.xpReward}
              onChange={(e) => setFormData({ ...formData, xpReward: e.target.value })}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <button type="submit" className="flex-1 btn-primary">
            ✅ إنشاء المهمة
          </button>
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="flex-1 btn-secondary"
          >
            إلغاء
          </button>
        </div>
      </form>
    </div>
  )
}

export default SupervisorDashboard
