"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogFilters } from "@/components/blog/blog-filters";
import { BlogSidebar } from "@/components/blog/blog-sidebar";
import { BlogFooter } from "@/components/blog/blog-footer";
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
  pageTitle = "Blog",
  pageDescription = "Explore our latest insights and technical articles",
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3),transparent_70%)]" />
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 animate-pulse" />
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-20 animate-pulse delay-1000" />
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              {pageTitle}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {pageDescription}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Articles */}
            {featuredPosts.length > 0 && !searchQuery && !selectedCategory && !selectedTag && (!selectedDateRange || selectedDateRange === 'all') && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">★</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Articles</h2>
                </div>
                <div className="space-y-8">
                  {featuredPosts.slice(0, 2).map((post) => (
                    <BlogCard key={post.slug} post={post} featured />
                  ))}
                </div>
              </motion.section>
            )}

            {/* Filters */}
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

            {/* Article List */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">#</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    {filteredPosts.length > 0 
                      ? `${filteredPosts.length} Articles Found`
                      : "No Articles Found"
                    }
                  </h2>
                </div>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-gray-400 text-2xl">📝</span>
                  </div>
                  <p className="text-gray-500 text-lg font-medium mb-2">
                    No articles match your criteria
                  </p>
                  <p className="text-gray-400">
                    Try adjusting your search terms or clearing filters
                  </p>
                </div>
              )}
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="sticky top-8"
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
      
      <BlogFooter />
    </div>
  );
}
