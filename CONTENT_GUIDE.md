# Content Addition Guide

This guide helps you add your actual content to replace placeholders.

---

## 1. Team Photos

### Founders Photos
**Location:** `public/images/team/`

**Required:**
- `founder-1.jpg` - First founder portrait
- `founder-2.jpg` - Second founder portrait

**Specs:**
- Size: 800x800px (square)
- Format: JPG or PNG
- File size: < 500KB each
- High quality for retina displays

**Update Info:**
File: `app/about/page.tsx`
- Line ~31-42: Update founder names, roles, and bios

### Team Member Photos
**Location:** `public/images/team/`

**Required:**
- `member-1.jpg` through `member-6.jpg`

**Specs:**
- Size: 600x600px (square)
- Format: JPG or PNG
- File size: < 300KB each

**Update Info:**
File: `app/about/page.tsx`
- Line ~44-73: Update team member names and roles

---

## 2. Client Logos

**Location:** `public/clients/`

**Required:** 25+ client logos

**Instructions:** See `public/clients/README.md`

**Quick Specs:**
- Format: PNG (transparent background preferred)
- Size: 200x100px (width x height)
- Max file size: 100KB per logo
- Naming: lowercase-with-hyphens.png

**Update Component:**
File: `components/sections/ClientsSection.tsx`
- Replace placeholder div with Image component
- Add actual client names and logo paths

---

## 3. Partner Logos (2 needed)

**Location:** `public/partners/`

**Required:**
- `interakt.png` - Interakt logo
- `aisensy.png` - AI Sensy logo

(Others load from CDN)

**Specs:**
- Format: PNG or SVG
- Size: 200x80px recommended
- Transparent background

---

## 4. WhatsApp Number

**Location:** `app/layout.tsx`

**Current:** `phoneNumber="919876543210"` (Line ~13)

**Update to:** Your actual WhatsApp Business number
- Format: Country code + number (no spaces or dashes)
- Example: 919876543210 for India

---

## 5. Email Service API Key

**Location:** Create `.env.local` file

**Steps:**
1. Copy `.env.example` to `.env.local`
2. Choose email service (Resend or SendGrid)
3. Get API key from service
4. Add to `.env.local`:

```bash
RESEND_API_KEY=your_actual_key_here
```

**Services:**
- Resend: https://resend.com (Recommended, 100 free emails/day)
- SendGrid: https://sendgrid.com (100 free emails/day)

---

## 6. Social Media Links

**Location:** `components/layout/Footer.tsx`

**Current:** All set to `#`

**Update:** Lines ~24-29
- Facebook page URL
- Instagram profile URL
- LinkedIn company page URL
- Twitter/X profile URL

---

## 7. Case Study Images (Optional)

**Location:** Add to `public/images/case-studies/`

**Current:** Using Unsplash placeholders

**Recommended:**
- client-1-before.jpg / client-1-after.jpg
- campaign-screenshots/
- social-media-posts/
- results-graphs/

**Update:** `app/case-studies/page.tsx`
- Replace Unsplash URLs with local images

---

## 8. Blog Post Images (Optional)

**Current:** Using gradient placeholders

**To Add:**
1. Add images to `public/images/blog/`
2. Update MDX frontmatter:

```yaml
---
title: "Post Title"
description: "Description"
date: "2024-08-24"
author: "Author Name"
category: "Category"
readTime: "8 min read"
image: "/images/blog/post-image.jpg"  # Add this line
---
```

---

## 9. Google Analytics (Optional)

**Location:** `app/layout.tsx`

Add Google Analytics script:

```tsx
<head>
  <StructuredDataScript />
  {/* Add GA script here */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `
  }} />
</head>
```

---

## 10. SEO - Google Search Console

**Location:** `app/layout.tsx`

**Current:** `google: 'your-google-verification-code'` (Line ~70)

**Steps:**
1. Go to Google Search Console
2. Add property: talecrafters.in
3. Get verification code
4. Replace placeholder in metadata

---

## Priority Order

**High Priority (Do First):**
1. WhatsApp number
2. Email API key
3. Social media links
4. Google verification code

**Medium Priority (Do Soon):**
5. Founder photos & info
6. Team photos & info
7. Client logos

**Low Priority (Optional):**
8. Case study images
9. Blog images
10. Google Analytics

---

## Quick Start Checklist

- [ ] Update WhatsApp number in `app/layout.tsx`
- [ ] Create `.env.local` with email API key
- [ ] Update social media URLs in footer
- [ ] Add founder photos and update info
- [ ] Add team member photos and update info
- [ ] Add 25+ client logos
- [ ] Add Interakt & AI Sensy logos
- [ ] Verify Google Search Console
- [ ] Test contact form submission
- [ ] Test WhatsApp button

---

## Testing After Updates

```bash
# 1. Start dev server
npm run dev

# 2. Test these features:
- WhatsApp button (click to verify number)
- Contact form (check console for email log)
- Calendar booking links
- Social media links in footer
- Team photos display correctly
- Client logos display correctly

# 3. Build for production
npm run build

# 4. Check for errors
npm start
```

---

## Support Files

- **Implementation Summary:** `IMPLEMENTATION_COMPLETE.md`
- **Client Logo Instructions:** `public/clients/README.md`
- **Environment Example:** `.env.example`
- **Build Instructions:** `README.md`

---

## Questions?

Check these files for more info:
- General setup: `README.md`
- Implementation details: `IMPLEMENTATION_COMPLETE.md`
- Email setup: `.env.example`
- Client logos: `public/clients/README.md`

---

**Last Updated:** February 2, 2026
