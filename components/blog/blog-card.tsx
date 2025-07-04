"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/blog/posts";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
        featured ? 'md:flex md:flex-row' : ''
      }`}
    >
      <div className={`relative ${featured ? 'md:w-1/2' : 'aspect-video'}`}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        {post.featured && (
          <div className="absolute top-4 left-4">
            <Badge variant="destructive">精選</Badge>
          </div>
        )}
      </div>
      
      <div className={`p-6 ${featured ? 'md:w-1/2 md:flex md:flex-col md:justify-between' : ''}`}>
        <div>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
          </div>
          
          <Link href={`/blog/${post.slug}`}>
            <h3 className={`font-bold text-gray-900 hover:text-blue-600 transition-colors ${
              featured ? 'text-2xl mb-3' : 'text-lg mb-2'
            }`}>
              {post.title}
            </h3>
          </Link>
          
          <p className={`text-gray-600 mb-4 ${featured ? 'text-base' : 'text-sm'}`}>
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href={`/blog/category/${encodeURIComponent(post.category)}`}>
                <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">
                  {post.category}
                </Badge>
              </Link>
              {post.tags.slice(0, 2).map((tag) => (
                <Link key={tag} href={`/blog/tag/${encodeURIComponent(tag)}`}>
                  <Badge variant="outline" className="text-xs cursor-pointer hover:bg-gray-100">
                    #{tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <Link 
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            閱讀更多
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
