import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/cursor/CustomCursor";
import Badge from "@/components/ui/Badge";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { generateArticleSchema } from "@/lib/structured-data";
import { Calendar, Clock, User } from "lucide-react";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    date: post.date,
    author: post.author,
    url: `https://talecrafters.in/blog/${post.slug}`,
  });

  return (
    <>
      <CustomCursor />
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="custom-cursor bg-cream pt-32 pb-20">
        <article className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Hero Image */}
          {post.image && (
            <div className="mb-8 -mx-6 lg:-mx-8">
              <div className="relative w-full h-[400px] border-4 border-walnut shadow-brutal-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          <div className="mb-8">
            <Badge variant="accent2" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-black/70 mb-6">{post.description}</p>
            <div className="flex flex-wrap gap-6 text-sm text-black/60 pb-8 border-b-2 border-black">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-IN", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
            </div>
          </div>

          <div
            className="prose prose-lg prose-walnut max-w-none
            prose-headings:font-heading prose-headings:text-walnut
            prose-p:text-walnut prose-p:leading-relaxed
            prose-li:text-walnut
            prose-strong:text-walnut prose-strong:font-bold
            prose-code:text-walnut prose-code:bg-cream prose-code:px-2 prose-code:py-1 prose-code:rounded
            prose-a:text-primary prose-a:underline hover:prose-a:text-accent1
            prose-blockquote:border-l-primary prose-blockquote:text-mocha
          "
          >
            <MDXRemote source={post.content} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
