import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  readTime: string
  image?: string
  content: MDXRemoteSerializeResult
}

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  readTime: string
  image?: string
}

const postsDirectory = path.join(process.cwd(), 'content/blog')

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const posts = fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)

        return {
          slug,
          title: data.title,
          description: data.description,
          date: data.date,
          author: data.author,
          category: data.category,
          readTime: data.readTime,
          image: data.image,
        }
      })

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch (error) {
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const mdxSource = await serialize(content, {
      scope: data,
    })

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author,
      category: data.category,
      readTime: data.readTime,
      image: data.image,
      content: mdxSource,
    }
  } catch (error) {
    return null
  }
}

export async function getPostsByCategory(category: string): Promise<BlogPostMeta[]> {
  const posts = await getAllPosts()
  return posts.filter((post) => post.category === category)
}
