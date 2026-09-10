import React from 'react'
import { Globe } from 'lucide-react'

const Header = ({ role, setRole }) => {
  return (
    <header className="bg-gradient-emerald text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          {/* Left: Ministry Badge */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-600 font-bold">🇩🇿</div>
            <div className="hidden sm:block">
              <p className="text-xs opacity-90">الجمهورية الجزائرية الديمقراطية الشعبية</p>
              <p className="font-bold text-lg">وزارة الشباب والرياضة</p>
            </div>
          </div>

          {/* Center: Title */}
          <div className="text-center flex-1">
            <h1 className="text-3xl font-bold font-cairo">🌍 سفير البيئة والمؤسسة</h1>
            <p className="text-sm opacity-90 font-tajawal">منصة التطوع الأخضر المتقدمة</p>
          </div>

          {/* Right: Role Switcher */}
          <div className="flex gap-2">
            <button
              onClick={() => setRole('volunteer')}
              className={`px-4 py-2 rounded-lg font-bold transition-smooth ${
                role === 'volunteer'
                  ? 'bg-white text-emerald-600 shadow-lg'
                  : 'bg-emerald-700 text-white hover:bg-emerald-800'
              }`}
            >
              🎯 شاب متطوع
            </button>
            <button
              onClick={() => setRole('supervisor')}
              className={`px-4 py-2 rounded-lg font-bold transition-smooth ${
                role === 'supervisor'
                  ? 'bg-white text-emerald-600 shadow-lg'
                  : 'bg-emerald-700 text-white hover:bg-emerald-800'
              }`}
            >
              👨‍💼 مشرف مؤسسة
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
