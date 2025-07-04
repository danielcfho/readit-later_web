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
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Categories */}
      <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md flex items-center justify-center">
              <Tag className="h-3 w-3 text-white" />
            </div>
            Categories
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
                <Badge variant="outline" className="w-full justify-start hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors">
                  {category}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md flex items-center justify-center">
              <TrendingUp className="h-3 w-3 text-white" />
            </div>
            Popular Tags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 12).map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${encodeURIComponent(tag)}`}
              >
                <Badge variant="secondary" className="hover:bg-purple-100 hover:text-purple-700 transition-colors">
                  #{tag}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-md flex items-center justify-center">
              <Calendar className="h-3 w-3 text-white" />
            </div>
            Recent Posts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.slice(0, 5).map((post) => (
              <div key={post.slug} className="group border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                <Link href={`/blog/${post.slug}`}>
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {formatDate(post.date)}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Posts */}
      {popularPosts.length > 0 && (
        <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-md flex items-center justify-center">
                <TrendingUp className="h-3 w-3 text-white" />
              </div>
              Popular Posts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {popularPosts.slice(0, 5).map((post) => (
                <div key={post.slug} className="group border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                  <Link href={`/blog/${post.slug}`}>
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {formatDate(post.date)}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Blog Statistics */}
      <Card className="border-gray-100 shadow-sm bg-gradient-to-br from-blue-50 to-purple-50">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {recentPosts.length}
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Total Articles
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
