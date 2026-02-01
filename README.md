# TaleCrafters Website

A high-performance, conversion-focused website for TaleCrafters - Hyderabad's performance marketing agency.

## 🚀 Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom neo-brutalism design system
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Content**: MDX for blog posts with gray-matter
- **Icons**: Lucide React

## 📦 Features

### Design
- ✅ Neo-brutalism aesthetic with bold colors and thick borders
- ✅ Custom animated cursor
- ✅ Responsive mobile-first design
- ✅ Smooth animations and transitions
- ✅ Dark shadows and playful geometric shapes

### Pages
- ✅ Landing page with 10 conversion-optimized sections
- ✅ Services page with detailed service descriptions
- ✅ Case studies with real results and metrics
- ✅ Process page explaining the 4-step approach
- ✅ About page with company story
- ✅ Contact page with multi-step form
- ✅ Blog with MDX support

### Components
- ✅ Reusable UI components (Button, Card, Input, Badge)
- ✅ Multi-step lead capture form with progress indicator
- ✅ Responsive header with mobile menu
- ✅ Footer with social links
- ✅ Custom cursor with hover states

### SEO & Performance
- ✅ Comprehensive metadata and OpenGraph tags
- ✅ Structured data (JSON-LD) for organization and articles
- ✅ Sitemap.xml and robots.txt
- ✅ Image optimization with Next.js Image
- ✅ Font optimization with next/font
- ✅ Static page generation where possible

## 🎯 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
talecrafters-website/
├── app/                    # Next.js app directory
│   ├── (pages)/           # Page routes
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── cursor/            # Custom cursor
│   ├── forms/             # Form components
│   ├── layout/            # Header, Footer
│   ├── sections/          # Landing page sections
│   └── ui/                # Reusable UI components
├── content/               # MDX blog posts
│   └── blog/
├── lib/                   # Utility functions
│   ├── mdx.ts             # MDX processing
│   ├── utils.ts           # Helper functions
│   ├── validation.ts      # Form validation schemas
│   └── structured-data.ts # SEO schemas
├── public/                # Static assets
├── styles/                # Global styles
│   └── neobrutalism.css
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: #FF6B9D (Hot Pink)
- **Secondary**: #FFC700 (Bright Yellow)
- **Accent 1**: #00F5D4 (Cyan/Mint)
- **Accent 2**: #9D4EDD (Purple)
- **Accent 3**: #FF6B35 (Coral)
- **Background**: #FFFEF7 (Cream)

### Typography
- **Headings**: Space Grotesk (bold)
- **Body**: Inter (clean, readable)
- **Monospace**: JetBrains Mono (for metrics/numbers)

### Neo-Brutalism Elements
- 4-6px thick black borders on all elements
- Hard offset shadows (6px 6px 0px #000000)
- Rotated elements for visual interest
- High contrast colors
- Playful geometric shapes

## 📝 Blog System

Blog posts are written in MDX and stored in `content/blog/`. Each post includes:
- Frontmatter with metadata (title, description, date, author, category)
- Full MDX support for custom components
- Automatic static page generation
- SEO-optimized with Article schema

## 🔍 SEO

- Meta tags optimized for each page
- OpenGraph and Twitter Cards
- Structured data (Organization, LocalBusiness, Article)
- XML sitemap auto-generated
- Robots.txt configured
- Hyderabad-focused local SEO

## 📊 Performance

- Server-side rendering where beneficial
- Static generation for blog posts
- Image optimization with WebP/AVIF
- Font optimization with variable fonts
- Minimal JavaScript bundle
- CSS purging with Tailwind

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Auto-deploys on every push

## 📖 Key Features

### Multi-Step Form
- 5-step lead capture process
- Progress indicator
- Form validation with Zod
- Smooth transitions between steps
- Mobile-optimized

### Landing Page Sections
1. Hero with hook and CTA
2. Social proof bar
3. Problem section (pain points)
4. Andromeda update callout
5. Services grid (bento layout)
6. Process timeline
7. Proof/case studies
8. PMAX expertise
9. Why us comparison
10. Final CTA

## 🎯 Conversion Optimization

The website uses proven psychological techniques:
- **Anchoring**: Show high spend managed first
- **Social proof**: Client count, reviews, specific numbers
- **Scarcity**: Limited slots messaging
- **Authority**: Expertise and certifications
- **Reciprocity**: Free audit creates obligation
- **Loss aversion**: "Stop wasting ad spend"
- **Specificity**: 7.8x ROAS (not "great results")

## 📱 Mobile-First

- All layouts designed for 375px width first
- Touch-friendly buttons (min 44px)
- Simplified mobile navigation
- Optimized forms for mobile keyboards
- Fast loading on mobile networks

## 🛠️ Development

### Key Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding Blog Posts
1. Create new `.mdx` file in `content/blog/`
2. Add frontmatter with metadata
3. Write content in MDX
4. Build generates static page automatically

## 📄 License

Private - TaleCrafters

## 🤝 Contributing

This is a private project for TaleCrafters. 

---

Built with ❤️ in Hyderabad
