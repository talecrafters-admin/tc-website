# TaleCrafters Website - Quick Setup Checklist

## ✅ Completed (Ready to Use)
- [x] Full-service agency messaging
- [x] 15 comprehensive services
- [x] 8 diverse case studies
- [x] Industries section (6 verticals)
- [x] Blog with 13 posts + filters
- [x] Partner badges (6 partners)
- [x] WhatsApp floating button
- [x] Calendar booking integration
- [x] Contact form with email template
- [x] Founders & team sections
- [x] Client showcase (ready for logos)
- [x] Mobile responsive design
- [x] SEO optimized
- [x] Build successful (0 errors)

## 🔧 Action Required

### 1. WhatsApp Number (2 min)
**File:** `app/layout.tsx` (line ~13)
**Current:** `phoneNumber="919876543210"`
**Action:** Replace with your WhatsApp Business number

### 2. Email Service (10 min)
**File:** Create `.env.local`
**Action:**
```bash
cp .env.example .env.local
# Add your Resend or SendGrid API key
```
**Get API Key:**
- Resend: https://resend.com (recommended)
- SendGrid: https://sendgrid.com

### 3. Founder & Team Info (30 min)
**File:** `app/about/page.tsx`
**Action:**
- Add 2 founder names, roles, bios (line ~31-42)
- Add 6 team member names & roles (line ~44-73)
- Upload photos to `public/images/team/`
  - founder-1.jpg, founder-2.jpg
  - member-1.jpg through member-6.jpg

### 4. Client Logos (1 hour)
**Folder:** `public/clients/`
**Action:**
- Add 25+ client logos
- See `public/clients/README.md` for specs
- PNG format, 200x100px, <100KB each

### 5. Social Media Links (5 min)
**File:** `components/layout/Footer.tsx` (line ~24-29)
**Action:** Update from `#` to actual URLs
- Facebook page
- Instagram profile
- LinkedIn company page
- Twitter/X profile

### 6. Partner Logos (5 min)
**Folder:** `public/partners/`
**Action:** Add these 2 logos:
- interakt.png
- aisensy.png
(Others load from CDN)

### 7. Google Search Console (10 min)
**File:** `app/layout.tsx` (line ~70)
**Action:**
1. Add site to Google Search Console
2. Get verification code
3. Replace `'your-google-verification-code'`

## 📊 Optional Enhancements

### Add More Images (later)
- [ ] Case study screenshots
- [ ] Blog post hero images
- [ ] Service page illustrations

### Analytics & Tracking (later)
- [ ] Google Analytics
- [ ] Facebook Pixel
- [ ] LinkedIn Insight Tag

### Content Additions (ongoing)
- [ ] More blog posts
- [ ] More case studies
- [ ] Testimonial videos

## 🚀 Launch Steps

### Before Launch:
1. Complete all "Action Required" items above
2. Test contact form (submit test)
3. Test WhatsApp button (click to verify)
4. Test calendar bookings (try booking)
5. Check all pages on mobile
6. Run final build: `npm run build`

### Launch Day:
```bash
# 1. Final build
npm run build

# 2. Deploy to production
# (Vercel, Netlify, or your hosting)

# 3. Verify:
- Test contact form submission
- Check email delivery
- Test WhatsApp click
- Verify calendar booking works
- Check all social media links
```

## 📞 Quick Reference

**Email Recipient:** info@talecrafters.in
**Calendar URL:** https://calendar.app.google/GnvC7UCPUu48G6RcA
**Site URL:** https://talecrafters.in

## ⏱️ Time Estimate

- **Critical Setup:** 30-45 minutes
- **Content Addition:** 2-3 hours
- **Testing:** 30 minutes
- **Total:** 3-4 hours

## 🆘 Need Help?

See these files:
- `CONTENT_GUIDE.md` - Detailed instructions
- `IMPLEMENTATION_COMPLETE.md` - What's been done
- `README.md` - Technical documentation
- `.env.example` - Environment setup

---

**Status:** Production Ready (pending content)
**Build:** ✅ Successful
**Last Updated:** February 2, 2026
