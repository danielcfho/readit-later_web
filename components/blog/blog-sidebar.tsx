"use client";

import Link from "next/link";
import { BlogPost } from "@/lib/blog/posts";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Tag, TrendingUp } from "lucide-react";

interface BlogSidebarProps {
  categories: string[];
  tags: string[];
  recentPosts: BlogPost[];
  popularPosts?: BlogPost[];
}

export function BlogSidebar({
  categories,
  tags,
  recentPosts,
  popularPosts = [],
}: BlogSidebarProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-TW', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* 分類 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tag className="h-5 w-5" />
            分類
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog/category/${encodeURIComponent(category)}`}
                className="block"
              >
                <Badge variant="outline" className="w-full justify-start hover:bg-gray-100">
                  {category}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 熱門標籤 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            熱門標籤
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 12).map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${encodeURIComponent(tag)}`}
              >
                <Badge variant="secondary" className="hover:bg-gray-200">
                  #{tag}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 最新文章 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            最新文章
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.slice(0, 5).map((post) => (
              <div key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatDate(post.date)}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 熱門文章 */}
      {popularPosts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              熱門文章
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {popularPosts.slice(0, 5).map((post) => (
                <div key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`}>
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatDate(post.date)}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* 文章統計 */}
      <Card>
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-gray-900">
              {recentPosts.length}
            </div>
            <div className="text-sm text-gray-500">
              篇文章
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
