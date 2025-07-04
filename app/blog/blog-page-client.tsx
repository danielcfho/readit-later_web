"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogFilters } from "@/components/blog/blog-filters";
import { BlogSidebar } from "@/components/blog/blog-sidebar";
import { BlogPost } from "@/lib/blog/posts";

interface BlogPageClientProps {
  posts: BlogPost[];
  categories: string[];
  tags: string[];
  featuredPosts: BlogPost[];
  initialCategory?: string;
  initialTag?: string;
  pageTitle?: string;
  pageDescription?: string;
}

export default function BlogPageClient({
  posts,
  categories,
  tags,
  featuredPosts,
  initialCategory,
  initialTag,
  pageTitle = "部落格",
  pageDescription = "探索我們的技術文章和見解",
}: BlogPageClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory || null);
  const [selectedTag, setSelectedTag] = useState<string | null>(initialTag || null);
  const [selectedDateRange, setSelectedDateRange] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = !searchQuery || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);
      
      // 日期篩選
      let matchesDate = true;
      if (selectedDateRange && selectedDateRange !== 'all') {
        const postDate = new Date(post.date);
        const now = new Date();
        
        switch (selectedDateRange) {
          case 'last-week':
            matchesDate = (now.getTime() - postDate.getTime()) <= 7 * 24 * 60 * 60 * 1000;
            break;
          case 'last-month':
            matchesDate = (now.getTime() - postDate.getTime()) <= 30 * 24 * 60 * 60 * 1000;
            break;
          case 'last-3-months':
            matchesDate = (now.getTime() - postDate.getTime()) <= 90 * 24 * 60 * 60 * 1000;
            break;
          case 'last-year':
            matchesDate = (now.getTime() - postDate.getTime()) <= 365 * 24 * 60 * 60 * 1000;
            break;
        }
      }

      return matchesSearch && matchesCategory && matchesTag && matchesDate;
    });
  }, [posts, searchQuery, selectedCategory, selectedTag, selectedDateRange]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {pageTitle}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {pageDescription}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 主要內容 */}
          <div className="lg:col-span-3">
            {/* 精選文章 */}
            {featuredPosts.length > 0 && !searchQuery && !selectedCategory && !selectedTag && (!selectedDateRange || selectedDateRange === 'all') && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">精選文章</h2>
                <div className="space-y-8">
                  {featuredPosts.slice(0, 2).map((post) => (
                    <BlogCard key={post.slug} post={post} featured />
                  ))}
                </div>
              </motion.section>
            )}

            {/* 篩選器 */}
            <BlogFilters
              categories={categories}
              tags={tags}
              onSearch={setSearchQuery}
              onCategoryFilter={setSelectedCategory}
              onTagFilter={setSelectedTag}
              onDateFilter={setSelectedDateRange}
              selectedCategory={selectedCategory}
              selectedTag={selectedTag}
              selectedDateRange={selectedDateRange}
            />

            {/* 文章列表 */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {filteredPosts.length > 0 
                    ? `找到 ${filteredPosts.length} 篇文章`
                    : "沒有找到相關文章"
                  }
                </h2>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <BlogCard post={post} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    沒有找到符合條件的文章
                  </p>
                  <p className="text-gray-400 mt-2">
                    嘗試調整搜尋條件或清除篩選器
                  </p>
                </div>
              )}
            </motion.section>
          </div>

          {/* 側邊欄 */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <BlogSidebar
                categories={categories}
                tags={tags}
                recentPosts={posts.slice(0, 5)}
                popularPosts={featuredPosts}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
