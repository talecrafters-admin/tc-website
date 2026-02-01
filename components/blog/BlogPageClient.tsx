'use client'

import Link from 'next/link'
import { useState } from 'react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { Calendar, Clock, User } from 'lucide-react'
import Image from 'next/image'

interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  readTime: string
  image?: string
}

interface BlogPageClientProps {
  posts: BlogPost[]
}

const allCategories = ['All', 'Marketing', 'SEO', 'Meta Ads', 'Creative Strategy', 'Performance Max', 'Lead Generation', 'Real Estate', 'D2C Marketing', 'Digital Marketing', 'Education']

export default function BlogPageClient({ posts }: BlogPageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory)

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className="transition-all"
          >
            <Badge 
              variant={selectedCategory === category ? 'accent2' : 'secondary'}
              className={selectedCategory === category ? 'scale-110' : 'hover:scale-105'}
            >
              {category}
            </Badge>
          </button>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-black/60">
            No posts found in this category. Check back soon!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card variant="default" className="h-full hover:scale-105 transition-transform cursor-pointer overflow-hidden p-0">
                {/* Hero Image */}
                <div className="relative w-full h-48 bg-gradient-to-br from-primary to-secondary border-b-4 border-black">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-20">📝</span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <Badge variant="accent2" className="mb-4">
                    {post.category}
                  </Badge>
                  <h2 className="font-heading text-2xl font-bold mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-black/70 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-black/60">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-IN', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
