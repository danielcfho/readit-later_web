"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';
import { BlogPost } from "@/lib/blog/posts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogTOC } from "@/components/blog/blog-toc";
import { BlogFooter } from "@/components/blog/blog-footer";

interface BlogPostClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostClient({
  post,
  relatedPosts,
}: BlogPostClientProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Custom components for ReactMarkdown
  const components = {
    code({ className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : '';
      const isInline = !className;
      
      if (isInline) {
        return (
          <code 
            className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono"
            {...props}
          >
            {children}
          </code>
        );
      }

      return (
        <div className="relative p-2">
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs font-mono">
              {language || 'code'}
            </span>
          </div>
          <SyntaxHighlighter
            style={oneDark}
            language={language || 'text'}
            PreTag="div"
            className="rounded-lg !mt-0 !mb-0"
            customStyle={{
              margin: 0,
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              lineHeight: '1.5',
            }}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
      );
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Back Button */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="hover:bg-blue-50 hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              {/* Article Header Image */}
              <div className="relative aspect-video">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                {post.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                      ★ Featured
                    </Badge>
                  </div>
                )}
              </div>

              <div className="p-8">
                {/* Article Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <Link href={`/blog/category/${encodeURIComponent(post.category)}`}>
                    <Badge variant="secondary" className="hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors">
                      {post.category}
                    </Badge>
                  </Link>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <Link key={tag} href={`/blog/tag/${encodeURIComponent(tag)}`}>
                      <Badge variant="outline" className="hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700 transition-colors">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    </Link>
                  ))}
                </div>

                {/* Excerpt */}
                <blockquote className="text-ellipsis italic  text-gray-400 mb-8 leading-relaxed">
                  {post.excerpt}
                </blockquote>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={components}
                  >
                    {post.content?.replace(/^# .*\n/, '') || ''}
                  </ReactMarkdown>
                </div>
              </div>
            </motion.article>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">↗</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Related Articles</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <BlogCard key={relatedPost.slug} post={relatedPost} />
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar - Table of Contents */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-24"
            >
              <BlogTOC content={post.content || ""} />
            </motion.div>
          </div>
        </div>
      </div>
      
      <BlogFooter />
    </div>
  );
}
