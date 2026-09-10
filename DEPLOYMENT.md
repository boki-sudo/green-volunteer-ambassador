# 🚀 Deployment Guide

## الدليل الكامل لنشر التطبيق

## ☁️ خيارات النشر

### 1. Vercel (الخيار الموصى به) ⭐

**الخطوات:**

```bash
# تثبيت Vercel CLI
npm install -g vercel

# تسجيل الدخول
vercel login

# نشر التطبيق
vercel
```

**المميزات:**
- نشر فوري من GitHub
- HTTPS افتراضي
- CDN عالمي
- سريع جداً للتطبيقات الثابتة

### 2. GitHub Pages

**في ملف `package.json`، أضف:**

```json
{
  "homepage": "https://boki-sudo.github.io/green-volunteer-ambassador",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "devDependencies": {
    "gh-pages": "^5.0.0"
  }
}
```

**الأوامر:**

```bash
npm install --save-dev gh-pages
npm run deploy
```

### 3. Netlify

**الخطوات:**

1. اذهب إلى [netlify.com](https://netlify.com)
2. انقر "Add new site" > "Import an existing project"
3. اختر GitHub repository الخاص بك
4. أكمل الخطوات

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `dist`

### 4. Firebase Hosting

**التثبيت والإعداد:**

```bash
# تثبيت Firebase CLI
npm install -g firebase-tools

# تسجيل الدخول
firebase login

# تهيئة المشروع
firebase init hosting

# بناء التطبيق
npm run build

# نشر
firebase deploy
```

### 5. AWS S3 + CloudFront

**الخطوات:**

1. أنشئ S3 bucket
2. فعّل Static Website Hosting
3. احمل ملفات `dist/` إلى S3
4. أنشئ CloudFront distribution

```bash
# باستخدام AWS CLI
aws s3 sync dist/ s3://your-bucket-name
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

## 🔧 إعدادات البناء للإنتاج

### تحسين Vite

في `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
        },
      },
    },
  },
})
```

### متغيرات البيئة

أنشئ ملف `.env.production`:

```env
VITE_API_URL=https://api.yourdomain.com
VITE_APP_NAME="سفير البيئة والمؤسسة"
```

في الكود:

```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## 📊 قائمة التحقق قبل النشر

- [ ] تشغيل جميع الاختبارات
- [ ] بناء الإنتاج بنجاح: `npm run build`
- [ ] لا توجد أخطاء في وحدة التحكم
- [ ] تحميل الصفحة سريع
- [ ] RTL يعمل بشكل صحيح
- [ ] جميع الصور محملة
- [ ] الروابط الداخلية تعمل
- [ ] الشهادة SSL صحيحة
- [ ] Mobile responsive يعمل
- [ ] Analytics مكونة

## 🔐 تحسينات الأمان

### Headers الأمان

في `vite.config.js` أو ملف الخادم:

```javascript
// Content-Security-Policy
'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com"

// X-Frame-Options
'X-Frame-Options': 'SAMEORIGIN'

// X-Content-Type-Options
'X-Content-Type-Options': 'nosniff'

// Referrer-Policy
'Referrer-Policy': 'strict-origin-when-cross-origin'
```

### HTTPS

- تأكد من تفعيل HTTPS على جميع المتصفحات
- استخدم شهادات Let's Encrypt المجانية
- فعّل HSTS (HTTP Strict Transport Security)

## 📈 مراقبة الأداء

### Google PageSpeed Insights

```bash
# قياس الأداء
# https://pagespeed.web.dev/
```

### Lighthouse

```bash
# في Chrome DevTools: Ctrl + Shift + I > Lighthouse
```

### أهداف الأداء

| المقياس | الهدف |
|---------|-------|
| First Contentful Paint (FCP) | < 1.8s |
| Largest Contentful Paint (LCP) | < 2.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Time to Interactive (TTI) | < 3.8s |

## 🔄 CI/CD Pipeline

### GitHub Actions

أنشئ `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v2
      
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - run: npm install
      
      - run: npm run build
      
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## 📦 حجم الملفات المثالية

**قبل الضغط:**
- HTML: < 50 KB
- JavaScript: < 200 KB
- CSS: < 50 KB
- الصور: < 500 KB

**بعد gzip:**
- إجمالي: < 150 KB

## 🌍 CDN Configuration

### Cloudflare

1. أضف النطاق إلى Cloudflare
2. فعّل:
   - Auto Minify (HTML, CSS, JS)
   - Brotli Compression
   - Caching
   - Security

### CloudFront

```bash
# تحديث الملفات المخزنة مؤقتاً
aws cloudfront create-invalidation \
  --distribution-id E127EXAMPLE51Z \
  --paths "/*"
```

## 📝 Monitoring & Logging

### Sentry (لتتبع الأخطاء)

```bash
npm install @sentry/react
```

```javascript
import * as Sentry from "@sentry/react"

Sentry.init({
  dsn: "your-sentry-dsn",
  environment: "production",
})
```

### Google Analytics

```html
<!-- في index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🆚 Post-Deployment Testing

### اختبارات التوافق

```bash
# اختبر على:
- Chrome (جميع الإصدارات)
- Firefox
- Safari
- Edge
- iOS Safari
- Chrome Mobile
```

### اختبارات الأداء

```bash
# WebPageTest
https://www.webpagetest.org/

# GTmetrix
https://gtmetrix.com/
```

## 🆘 استكشاف مشاكل النشر

### المشكلة: 404 بعد النشر

**الحل:**
```javascript
// في vite.config.js
base: './'
```

### المشكلة: CSS لا يحمل بشكل صحيح

**الحل:**
- تأكد من مسارات الملفات النسبية
- استخدم `import.meta.url`

### المشكلة: الصور لا تظهر

**الحل:**
```javascript
// استخدم:
<img src={new URL('../assets/image.png', import.meta.url).href} />
```

## 📞 Support & Documentation

- **GitHub Issues**: [تقرير الأخطاء](https://github.com/boki-sudo/green-volunteer-ambassador/issues)
- **Documentation**: راجع `README.md` و `SETUP.md`
- **Architecture**: راجع `ARCHITECTURE.md`

## ✅ قائمة التحقق النهائية قبل الإطلاق

### الاختبار الشامل
- [ ] اختبر جميع الميزات على الويب
- [ ] اختبر على الهاتف المحمول
- [ ] اختبر على الأجهزة اللوحية
- [ ] اختبر في متصفحات مختلفة
- [ ] اختبر السرعة في اتصالات بطيئة

### الإنتاجية
- [ ] قم ببناء الإنتاج نهائي: `npm run build`
- [ ] تحقق من حجم الملفات
- [ ] تحقق من معايير الأداء

### الأمان
- [ ] لا توجد بيانات سرية في الكود
- [ ] HTTPS مفعل
- [ ] Headers الأمان مُعدّة
- [ ] لا توجد ثغرات معروفة

### التوثيق
- [ ] README محدث
- [ ] SETUP.md محدث
- [ ] ARCHITECTURE.md محدث
- [ ] التعليقات واضحة

---

**🎉 مستعد للإطلاق!**

بعد إتمام هذه الخطوات، التطبيق جاهز للعرض على لجنة الحكام بثقة تامة.

**نُشر بـ ❤️ من الجزائر** 🇩🇿
