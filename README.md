# سفير البيئة والمؤسسة - Gamified Green Volunteer Platform

> A comprehensive, production-ready interactive web application for the Algerian Ministry of Youth and Sports Innovation Hackathon.

![Algeria](https://img.shields.io/badge/🇩🇿-Made%20in%20Algeria-green)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.0-38B2AC)
![Arabic](https://img.shields.io/badge/Language-Arabic%20RTL-FF6B6B)

## 🌍 Overview

**سفير البيئة والمؤسسة** is a gamified environmental volunteer platform designed to engage Algerian youth in sustainable green initiatives. The platform features dual-role functionality supporting both individual volunteers and youth center supervisors, with a comprehensive gamification system including XP points, badges, leaderboards, and rewards.

## 🎯 Features

### 👨‍🎓 Volunteer Features
- **Personalized Dashboard**: Welcome banner, XP progress tracking, green points balance, and volunteer hours counter
- **Missions Feed**: Filterable environmental tasks by category with real-time volunteer enrollment tracking
- **Interactive Mission Modal**: Upload before/after photos, GPS location verification, and detailed reporting
- **Leaderboard System**: Multi-scope ranking (center, wilaya, national) with podium display for top 3 volunteers
- **Badges & Achievements**: Unlock gamified badges (🌳 غارس الأمل, 🧹 بطل النظافة, etc.)
- **Rewards Store**: Exchange green points for official certificates, workshop access, and ministry recognition
- **Certificate Generator**: Generate printable official volunteer certificates with QR codes

### 🧑‍💼 Supervisor Features
- **Statistics Dashboard**: Real-time metrics (active volunteers, pending submissions, trees planted, cleaned areas)
- **Verification Queue**: Review volunteer submissions with side-by-side photo comparison and GPS verification
- **Approval System**: One-click XP awarding and automated point allocation
- **Rejection System**: Structured rejection workflow with predefined reason categories
- **Mission Creator**: Publish new environmental tasks with location, volunteer count, and XP rewards

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Styling**: Tailwind CSS 3.3.0
- **Build Tool**: Vite 5.0.0
- **Icons**: Lucide React
- **PDF Generation**: jsPDF + html2canvas
- **Typography**: Google Fonts (Cairo, Tajawal - Arabic)
- **RTL Support**: Full right-to-left layout with HTML dir="rtl"

## 📦 Project Structure

```
green-volunteer-ambassador/
├── src/
│   ├── components/
│   │   ├── Header.jsx                 # Role switcher & ministry branding
│   │   ├── VolunteerDashboard.jsx     # Main volunteer interface
│   │   ├── SupervisorDashboard.jsx    # Supervisor control panel
│   │   ├── Volunteer/
│   │   │   ├── VolunteerHeader.jsx    # Welcome & stats card
│   │   │   ├── MissionsFeed.jsx       # Missions list & filtering
│   │   │   ├── MissionModal.jsx       # Mission submission form
│   │   │   ├── Leaderboard.jsx        # Ranking & podium display
│   │   │   └── BadgesRewards.jsx      # Badges & rewards store
│   │   └── Utils/
│   │       └── CertificateGenerator.jsx # PDF certificate creator
│   ├── data/
│   │   └── mockData.js                # Algerian context data
│   ├── App.jsx                        # Main app component
│   ├── main.jsx                       # React entry point
│   └── index.css                      # Global styles & RTL support
├── public/
├── index.html                         # HTML entry point
├── vite.config.js                     # Vite configuration
├── tailwind.config.js                 # Tailwind theming
├── postcss.config.js                  # PostCSS setup
└── package.json                       # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/boki-sudo/green-volunteer-ambassador.git
cd green-volunteer-ambassador

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Demo Roles

The platform includes a top header switcher for seamless role toggling:

1. **👨‍🎓 شاب متطوع (Youth Volunteer)**
   - Access mission feed, submit work reports, track progress
   - Compete on leaderboards, unlock badges, redeem rewards
   - Download official volunteer certificates

2. **🧑‍💼 مشرف مؤسسة / دار الشباب (Youth Center Supervisor)**
   - Review volunteer submissions with photo verification
   - Approve/reject work with detailed feedback
   - Create and publish new environmental missions
   - Monitor institutional statistics and volunteer activity

## 🎨 Design System

### Color Palette (Algerian Green Theme)
- **Primary**: Emerald 600 (`#16a34a`)
- **Secondary**: Teal 700 (`#0d9488`)
- **Accent**: Slate 900 (`#0f172a`)
- **Background**: Off-white (`#f8fafc`)

### Typography
- **Arabic Font**: Cairo (headers, titles) & Tajawal (body text)
- **Direction**: Right-to-Left (RTL) with full bidirectional support

## 📊 Mock Data (Algerian Context)

### Wilayas
أدرار, الجزائر, وهران, قسنطينة, ورقلة, تلمسان, البليدة, سيدي بلعباس

### Youth Centers
- دار الشباب الشهيد أحمد بومدين - أدرار
- المركب الرياضي الجواري
- دار الشباب حي الأمل - الجزائر
- نادي التطوع الأخضر - وهران
- مركز الرياضة والثقافة - قسنطينة

### Sample Users
- ياسين كريم (أدرار) - Level 3: سفير أخضر برونزي
- أمينة زروقي (الجزائر) - Level 5: قائد بيئي
- يوسف منصوري (وهران) - Level 2: سفير أخضر فضي
- فاطمة الزهراء (قسنطينة) - Level 4: سفير أخضر ذهبي

## 🎮 Gamification Elements

- **XP System**: Earn experience points by completing environmental missions
- **Leveling**: Progress through 5+ levels with increasingly impressive titles
- **Badges**: Unlock achievements for milestones (trees planted, cleanup hours, etc.)
- **Leaderboards**: Compete across multiple scopes (center, wilaya, national)
- **Rewards**: Convert points into official certificates, workshops, and ministry recognition
- **Points Balance**: Track total green points and volunteer hours

## 📋 Missions Categories

1. **🌳 التشجير والرعاية** (Planting & Care)
2. **🧹 تنظيف وصيانة المؤسسات** (Cleaning & Maintenance)
3. **♻️ إعادة التدوير** (Recycling)
4. **📢 التوعية البيئية** (Environmental Awareness)

## 🔐 Security & Validation

- GPS location verification for mission submissions
- Photo upload validation (drag-and-drop support)
- Supervisor approval workflow for all volunteer submissions
- Structured rejection reasons to maintain data quality

## 🌐 Responsive Design

- Mobile-first approach
- Fully responsive on smartphones, tablets, and desktops
- Touch-optimized interface for mobile volunteers
- Smooth animations and micro-interactions

## 📈 Performance

- Fast initial load with Vite's optimized bundling
- Lazy-loaded components for improved performance
- Optimized CSS with Tailwind purging
- Production-ready build configuration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - See LICENSE file for details

## 👥 Author

Build with 💚 for the Algerian Ministry of Youth and Sports Innovation Hackathon

---

**🌍 Join the Green Volunteer Movement - سفير البيئة والمؤسسة**
