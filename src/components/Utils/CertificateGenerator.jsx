import React, { useState } from 'react'
import { X } from 'lucide-react'

const CertificateGenerator = ({ onClose }) => {
  const [loading, setLoading] = useState(false)
  const [generated, setGenerated] = useState(false)

  const volunteerData = {
    name: 'ياسين كريم',
    wilaya: 'أدرار',
    completedMissions: 12,
    volunteerHours: 42,
    totalPoints: 2450,
    level: 'المستوى 3: سفير أخضر برونزي',
    certificateDate: new Date().toLocaleDateString('ar-DZ'),
  }

  const handleGeneratePDF = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setGenerated(true)
      setTimeout(() => {
        alert('📥 تم تنزيل الشهادة بنجاح!')
        onClose()
      }, 1500)
    }, 1000)
  }

  if (generated) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-8 max-w-md text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-emerald-700 mb-2">تم إنشاء الشهادة</h2>
          <p className="text-gray-600">تم توليد شهادة التطوع الرسمية بنجاح وهي جاهزة للطباعة</p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-emerald-700">📜 شهادة تطوع رسمية</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={28} />
          </button>
        </div>

        {/* Certificate Preview */}
        <div className="bg-gradient-to-b from-emerald-50 to-teal-50 border-4 border-emerald-600 rounded-lg p-12 text-center space-y-6 mb-6">
          {/* Header Badge */}
          <div className="space-y-2">
            <p className="text-sm font-bold text-emerald-700">الجمهورية الجزائرية الديمقراطية الشعبية</p>
            <p className="text-lg font-bold text-emerald-800">وزارة الشباب والرياضة</p>
            <div className="border-t-2 border-emerald-600 pt-4">
              <p className="text-4xl font-bold text-emerald-700">🌍 سفير البيئة والمؤسسة</p>
            </div>
          </div>

          {/* Certificate Title */}
          <div>
            <p className="text-sm text-gray-600 mb-2">بكل افتخار تمنح هذه الشهادة</p>
            <p className="text-3xl font-bold text-emerald-800">{volunteerData.name}</p>
          </div>

          {/* Certificate Body */}
          <div className="bg-white p-6 rounded-lg space-y-3 text-right">
            <p className="font-semibold text-gray-800 leading-relaxed">
              تقديراً لمساهمتك الفعالة والملتزمة في برنامج التطوع البيئي والاجتماعي، ولإنجازك المتميز في:
            </p>
            <div className="space-y-2 text-gray-700 text-sm">
              <p>✓ إكمال <strong>{volunteerData.completedMissions}</strong> مهام بيئية بنجاح</p>
              <p>✓ تكريس <strong>{volunteerData.volunteerHours}</strong> ساعة من عملك التطوعي</p>
              <p>✓ تحقيق رتبة <strong>{volunteerData.level}</strong></p>
              <p>✓ جمع <strong>{volunteerData.totalPoints}</strong> نقطة خضراء</p>
            </div>
            <p className="font-semibold text-gray-800 leading-relaxed">
              وتقديراً لالتزامك بالحفاظ على بيئتنا الطبيعية والمساهمة في التنمية المستدامة.
            </p>
          </div>

          {/* Signatures Area */}
          <div className="border-t-2 border-gray-300 pt-4 space-y-2">
            <p className="text-sm font-bold text-gray-600">الجزائر العاصمة</p>
            <p className="text-sm font-bold text-gray-600">تاريخ الإصدار: {volunteerData.certificateDate}</p>
            <div className="flex justify-around mt-6 text-center">
              <div>
                <p className="text-sm font-bold text-gray-600">_______________</p>
                <p className="text-xs text-gray-600 mt-2">رئيس الجنة</p>
              </div>
              <div>
                <div className="text-2xl">🌳</div>
                <p className="text-xs text-gray-600 mt-2">ختم رسمي</p>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-600">_______________</p>
                <p className="text-xs text-gray-600 mt-2">وزير الشباب والرياضة</p>
              </div>
            </div>
          </div>

          {/* QR Code Placeholder */}
          <div className="flex justify-center pt-4">
            <div className="border-2 border-emerald-600 p-3 bg-white">
              <p className="text-xs text-gray-600 font-bold mb-2">QR Code</p>
              <div className="w-16 h-16 bg-emerald-100 rounded flex items-center justify-center">
                <p className="text-xs text-gray-500">▓▒░ ▓▒░</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleGeneratePDF}
            disabled={loading}
            className={`flex-1 py-3 px-4 rounded-lg font-bold text-white transition-smooth ${
              loading ? 'bg-gray-400' : 'btn-primary'
            }`}
          >
            {loading ? '⏳ جاري التحضير...' : '📥 تحميل الشهادة (PDF)'}
          </button>
          <button
            onClick={onClose}
            className="flex-1 btn-secondary"
          >
            إغلاق
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          💡 يمكنك طباعة الشهادة مباشرة من المتصفح باستخدام (Ctrl+P) أو حفظها كـ PDF
        </p>
      </div>
    </div>
  )
}

export default CertificateGenerator
