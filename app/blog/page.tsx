import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/cursor/CustomCursor'
import { getAllPosts } from '@/lib/mdx'
import BlogPageClient from '@/components/blog/BlogPageClient'

export const metadata: Metadata = {
  title: 'Blog - Marketing Insights & Strategies',
  description: 'Learn about digital marketing, social media, SEO, performance marketing, and creative strategy from TaleCrafters\' experts.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <>
      <CustomCursor />
      <Header />
      <main className="custom-cursor bg-cream pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              Marketing Insights
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10">That Actually Work</span>
                <span className="absolute -inset-2 bg-accent1 -z-10 rotate-1 border-4 border-black shadow-brutal" />
              </span>
            </h1>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              No fluff. No theory. Just practical strategies and real results.
            </p>
          </div>

          <BlogPageClient posts={posts} />
        </div>
      </main>
      <Footer />
    </>
  )
}
